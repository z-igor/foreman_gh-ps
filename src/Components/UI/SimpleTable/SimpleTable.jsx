import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { TableRows } from './TableRows/TableRows';

import mcss from './SimpleTable.module.css';

export function SimpleTable({ setCount, columnTitles, data, ...props }) {
    if (!data) {
        data = [
            {
                id: 'demo1',
                profileTeam: 20,
                lable: 'Lable',
                rating: 60,
                location: 'Ростов-на-Дону',
                feedback: [
                    {
                        id: 123,
                        text: 'Спасибо команде!',
                    },
                ],
                docs: '50%',
            },
            {
                id: 'demo2',
                profileTeam: 32,
                lable: 'Last-Lable',
                rating: 28,
                location: 'Владивосток',
                feedback: [
                    {
                        id: 1,
                        text: 'Спасибо команде!',
                    },
                    {
                        id: 2,
                        text: 'Спасибо команде!',
                    },
                ],
                docs: '100%',
            },
        ];
    }

    if (!columnTitles) {
        columnTitles = [
            {
                title: 'Название',
                class: mcss.titleCell,
            },
            {
                title: 'Человек',
                class: mcss.peopleCell,
            },
            {
                title: 'Рейтинг',
                class: mcss.ratingCell,
            },
            {
                title: 'Город',
                class: mcss.locationCell,
            },
            {
                title: 'Отзыв',
                class: mcss.feedbackCell,
            },
            {
                title: 'Документы',
                class: mcss.docsCell,
            },
        ];
    }

    if (!setCount) {
        setCount = () => {};
    }

    let { filter } = useSelector((state) => state.teamReducer);
    let { resetFilter } = useSelector((state) => state.teamReducer);
    let _data = useRef(data.map((m) => ({ ...m })));

    _data.current = _data.current.map((d) => {
        if (Array.isArray(d.profileTeam)) {
            d.people = d.profileTeam.reduce((sum, currentElm) => {
                return sum + currentElm.numb.length;
            }, 0);
        } else {
            d.people = d.profileTeam;
        }

        return d;
    });

    const FilterSelector = formValueSelector('filter');
    const FilterArr = ['lable', 'location', 'checkDocs', 'rating', 'people'];
    let filterVals = useSelector((state) =>
        FilterSelector(state, ...FilterArr),
    );

    let filterOut = (mainArr, secondArr) => {
        for (let i in secondArr) {
            if (i === 'lable' || i === 'location') {
                mainArr = mainArr.filter((f) => {
                    let newRE = new RegExp(secondArr[i], 'gi');
                    let resRE = f[i].match(newRE);
                    if (resRE) {
                        return resRE.length > 0;
                    } else {
                        return false;
                    }
                });
            }

            if (i === 'rating' || i === 'people') {
                mainArr = mainArr.filter((f) => f[i] >= secondArr[i]);
            }

            if (i === 'checkDocs' && secondArr[i]) {
                mainArr = mainArr.filter((f) => f.docs.match(/\d+/g)[0] >= 50);
            }
        }

        return mainArr;
    };

    /* let compare = (a, b) => {
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
    }; */

    useEffect(() => {
        setCount(_data.current.length);

        if (filter) {
            _data.current = filterOut(_data.current, filterVals);
        }
        if (resetFilter) {
            _data.current = data.map((m) => ({ ...m }));
        }
    }, [filterVals, _data]);

    if (!_data.current.length) {
        return (
            <div className={mcss.emptyListTeam}>
                <h3>Бригад нет</h3>
            </div>
        );
    }

    return (
        <div className={mcss.table}>
            <div className={`${mcss.tRow} ${mcss.tHeader}`}>
                {columnTitles.map((c, i) => (
                    <div className={c.class} key={i}>
                        <p>{c.title}</p>
                    </div>
                ))}
            </div>
            {_data.current.map((t, i) => (
                <TableRows {...t} key={i} />
            ))}
        </div>
    );
}
