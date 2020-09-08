import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import { demoAuth, logOff } from '../redux/actions';

import mcss from './UI.module.css';
import triangle from '../image/triangle.svg';

export const Input = ({ headerText, input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    /* let [demoValue, setDemoValue] = useState(createRef());
    useEffect(() => {
        if (demo) {
            if (input.name === "email") {
                demoValue.current.focus();
                demoValue.current.value = "test@test.ru";
            }
            if (input.name === "password") {
                demoValue.current.value = "123456789";
            }
        }
    }); */

    return (
        <div
            className={
                mcss.fieldInput + ' ' + (hasError ? mcss.fieldInputError : '')
            }>
            <p>{!headerText ? props.placeholder + '*' : headerText}</p>
            <input {...props} {...input} />
            {errorElement}
        </div>
    );
};

export const InputNumber = ({ text, input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    let fieldInputError = hasError ? mcss.fieldInputError : null;

    return (
        <div className={`${mcss.fieldInputNumber} ${fieldInputError ? fieldInputError : ''}`}>
            <span>{text}</span>
            <input {...props} {...input} />
            {errorElement}
        </div>
    );
};

export const Checkbox = ({ text, input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    return (
        <label
            className={
                mcss.checkbox + ' ' + (hasError ? mcss.checkboxError : '')
            }>
            <input {...props} {...input} />
            <span>{text}</span>
            {errorElement}
        </label>
    );
};

export const Radiobox = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;

    let errorClass = hasError && mcss.errorRadiobox;

    return (
        <label className={mcss.radiobox + ' ' + errorClass}>
            <input {...props} {...input} />
            <span>{input.value}</span>
        </label>
    );
};

/**
 * start
 * DropList
 */

export const DropList = ({ title = 'Drop list', ...props }) => {
    let [dropList, setDropList] = useState(false);
    let dropListOpen = dropList ? mcss.dropListTitleImgOpen : '';

    let timer;
    let Dispatch = useDispatch();

    let onShowDropListMouseEnter = (e) => {
        setDropList(true);
    };
    let onShowDropListClick = (e) => {
        setDropList(!dropList);
    };

    let onMouseLeave = (e) => {
        if (e.currentTarget) {
            timer = setTimeout(() => {
                setDropList(false);
                clearTimeout(timer);
            }, 0.5e3);
        }
    };

    let onMouseEnter = (e) => {
        if (e.currentTarget) {
            clearTimeout(timer);
        }
    };

    let dispatchDemoAuth = (label, level) => {
        Dispatch(demoAuth({ label, level }));
    };

    let onContentClick = (e) => {
        let t = e.target;
        let tText = t.textContent;

        if (tText === 'Заказчик') {
            dispatchDemoAuth(tText, 3);
        } else if (tText === 'Мастер') {
            dispatchDemoAuth(tText, 2);
        } else if (tText === 'Бригадир') {
            dispatchDemoAuth(tText, 1);
        } else if (tText === 'Выйти') {
            Dispatch(logOff());
        }
    };

    return (
        <div
            className={mcss.dropList}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}>
            <p
                className={mcss.dropListTitle}
                onClick={onShowDropListClick}
                onMouseEnter={onShowDropListMouseEnter}>
                {title}
                <img
                    src={triangle}
                    alt="^"
                    className={`${mcss.dropListTitleImg} ${dropListOpen}`}
                />
            </p>
            {dropList && (
                <div className={mcss.dropListContent} onClick={onContentClick}>
                    {props.children}
                </div>
            )}
        </div>
    );
};

/**
 * end
 * DropList
 */

/*<Button view="primary" value="Text" />*/
export const Button = (props) => {
    let buttonClass = '';

    let onClick = (e) => {
        if (props.onClick) {
            props.onClick();
        }
    };

    switch (props.view) {
        case 'primary': {
            buttonClass = mcss.buttonPrimary;
            break;
        }
        case 'disable': {
            buttonClass = mcss.buttonDisable;
            break;
        }
        default: {
            buttonClass = mcss.buttonSecondary;
        }
    }

    return (
        <div className={mcss.button}>
            <button className={buttonClass} onClick={onClick} {...props}>
                {props.value}
            </button>
        </div>
    );
};

/**
 * start
 * Modal Win
 */

export const ModalWindow = ({
    content = 'Modal Content',
    title = 'Modal title',
    ...props
}) => {
    let successAnswer = (e) => {
        props.success();
    };

    let unsuccessAnswer = (e) => {
        props.unsuccess();
    };

    let onBackgroundClick = (e) => {
        if (e.target.className === mcss.modalWrapper) {
            props.unsuccess();
        }
    };

    return (
        <div className={mcss.modalWrapper} onClick={onBackgroundClick}>
            <div className={mcss.modalWindow}>
                <span className={mcss.closeModal} onClick={unsuccessAnswer}>
                    x
                </span>
                <p className={mcss.modalTitle}>{title}</p>
                <div className={mcss.modalContent}>
                    {props.children ? props.children : content}
                </div>
                <div className={mcss.modalResult}>
                    <Button
                        view="secondary"
                        value="Нет"
                        onClick={unsuccessAnswer}
                    />
                    <Button view="primary" value="Да" onClick={successAnswer} />
                </div>
            </div>
        </div>
    );
};

/**
 * end
 * Modal Win
 */

/**
 * start
 * SIMPLE TABLE
 */

function SimpleTableRows(props) {
    let {
        id,
        lable,
        rating,
        location,
        feedback,
        docs,
        imageUrl,
        people,
    } = props;

    return (
        <NavLink to={'band/' + id}>
            <div className={`${mcss.tRow} ${mcss.tContent}`}>
                <div className={mcss.titleCell}>
                    <div>
                        {imageUrl ? (
                            <span className={mcss.avatar}>
                                <img src={imageUrl} alt="" />
                            </span>
                        ) : (
                            <span className={mcss.avatarLetter}>
                                <p>{lable[0]}</p>
                            </span>
                        )}
                        <p>{lable}</p>
                    </div>
                </div>
                <div className={mcss.peopleCell}>
                    <p>{people}</p>
                </div>
                <div className={mcss.ratingCell}>
                    <p>{rating}</p>
                </div>
                <div className={mcss.locationCell}>
                    <p>{location}</p>
                </div>
                <div className={mcss.feedbackCell}>
                    <p>
                        {feedback.length === 1
                            ? feedback[0].text
                            : feedback.length}
                    </p>
                </div>
                <div className={mcss.docsCell}>
                    <p>{docs}</p>
                </div>
            </div>
        </NavLink>
    );
}

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

    // let _data = useRef(data.map((m) => ({ ...m })));
    let _data = data.map((m) => ({ ...m }));
    _data = _data.map((d) => {
        if (d.profileTeam) {
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
        setCount(_data.length);

        if (filter) {
            _data = filterOut(_data, filterVals);
        }
        if (resetFilter) {
            _data = data.map((m) => ({ ...m }));
        }
    }, [filterVals, _data]);

    if (!_data.length) {
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
            {_data.map((t, i) => (
                <SimpleTableRows {...t} key={i} />
            ))}
        </div>
    );
}

/**
 * SIMPLE TABLE
 * end
 */

export const UI = (props) => {
    let [isOpenModal, setOpenModal] = useState(false);
    let showModalWindow = () => {
        setOpenModal(true);
    };

    let hideModalWindow = () => {
        setOpenModal(false);
    };

    return (
        <main className={mcss.body}>
            <h1>Компоненты</h1>
            <div className={mcss.content}>
                <Button view="primary" value="Primary" />
                <Button view="secondary" value="Secondary" />
                <Button view="disable" value="Disable" />
                <hr />
                <Button
                    view="preview"
                    value="Открыть окно"
                    onClick={showModalWindow}
                />
                {isOpenModal && (
                    <ModalWindow
                        success={showModalWindow}
                        unsuccess={hideModalWindow}
                    />
                )}
                <hr />
                <DropList>
                    <p>UI текст</p>
                    <p>UI не ссылка</p>
                    <p>I'м дроплист</p>
                </DropList>
                <hr />
                <SimpleTable />
            </div>
        </main>
    );
};

/* 
export { DocsCheck, FindLocation, NumberPeople, MasterCheck };

const EmailField = (props) => {
    return (
        <div className={mcss.findTeam}>
            <p>Почта/email</p>
            <input
                placeholder="Почта/email"
                name="inputEmail"
                component="input"
                type="email"
                validate={[required]}
            />
        </div>
    );


const SpecialtyField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Специальность</p>
            <input
                type="text"
                placeholder="Специальность"
                onChange={onChangeValue}
            />
        </div>
    );
};

const LabelTeamField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Название бригады</p>
            <input
                type="text"
                placeholder="Название бригады"
                onChange={onChangeValue}
            />
        </div>
    );
};

const PhoneField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Телефон</p>
            <input type="text" placeholder="Телефон" onChange={onChangeValue} />
        </div>
    );
};

start-Регистрация

export const NameMasterField = (props) => {
    let onChangeValue = (e) => {
        props.onChange.name = e.target.value;
    };

    return (
        <div className={mcss.findTeam}>
            <p>Ник</p>
            <input
                placeholder="Ник"
                name="inputName"
                component="input"
                type="email"
                onChange={onChangeValue}
            />
        </div>
    );
};

export const PasswordField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target.name);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Пароль</p>
            <input
                placeholder="Пароль"
                name="inputPassword"
                component="input"
                type="password"
                onChange={onChangeValue}
                validate={[required]}
            />
        </div>
    );
};
end-Регистрация

OLD 
let findTeamValue = React.createRef();

let mapStateToProps = (state) => {
    return {
        nameNewTeam: state.teamReducer.nameNewTeam,
    };
};

const FindTeam = (props) => {
    let onChangeValueTeam = (e) => {
        props.updateTextTeamAC(findTeamValue.current.value);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Поиск</p>
            <input
                type="text"
                placeholder="Поиск по названию бригады"
                value={props.nameNewTeam}
                onChange={onChangeValueTeam}
                ref={findTeamValue}
            />
        </div>
    );
};

export const FindTeamContainer = connect(mapStateToProps, { updateTextTeamAC })(
    FindTeam
);

export const FindLocationContainer = (props) => {
    return <FindLocation />;
};

const FindLocation = (props) => {
    return (
        <div className={mcss.findLocation}>
            <p>Город</p>
            <input type="text" placeholder="Поиск по городу" />
        </div>
    );
};

const DocsCheck = (props) => {
    return (
        <div className={mcss.docsCheck}>
            <label>
                <input type="checkbox" />
                документы, выше 50%
            </label>
        </div>
    );
};

const MasterCheck = (props) => {
    return (
        <div className={mcss.masterCheck}>
            <label>
                <input type="checkbox" />
                проверенные мастера
            </label>
        </div>
    );
};

const NumberPeople = (props) => {
    return (
        <div className={mcss.numberPeople}>
            <label>
                Количество человек, до
                <input type="number" placeholder="10" min="0" />
            </label>
        </div>
    );
};

}; */
