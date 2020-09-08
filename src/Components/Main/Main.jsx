import React, { useState, useEffect } from 'react';
import { SimpleTable } from './../UI';

import mcss from './Main.module.css';

const Main = ({ teamData, ...props }) => {
    let [teamCount, setTeamCount] = useState(0);

 /*    useEffect((...effect) => {
        setTeamCount((prevState) => {
            console.log('useEffect: prevState =', prevState);
            return prevState;
        });
    }); */

    let columnTitles = [
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

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.headerTeams}>
                    <h3>Бригады</h3>
                    <p>Бригад {teamCount || 0}</p>
                </div>
                <SimpleTable
                    setCount={setTeamCount}
                    columnTitles={columnTitles}
                    data={teamData}
                />
            </div>
        </div>
    );
};

export default Main;
