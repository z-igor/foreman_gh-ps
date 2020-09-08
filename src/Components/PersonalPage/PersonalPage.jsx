import React, { useEffect } from 'react';
import Anchors from './Anchors/Anchors';
import PpPortfolio from './PpPortfolio/PpPortfolio';
import AllDocuments from './AllDocuments/AllDocuments';
import Feedback from './Feedback/Feedback';

import avatarUser from '../../image/avatarUser.jpg';
import mcss from './PersonalPage.module.css';
import { useSelector } from 'react-redux';
import { Button } from '../UI';

export default function PersonalPage({ match, ...props }) {
    const teamData = useSelector((state) => state.teamReducer.teamData);

    useEffect(() => {
        console.log('match', match);
        console.log('teamData', teamData);
        console.log('props', props);
    }, [teamData]);

    return (
        <main>
            <div className={mcss.container}>
                <div className={mcss.body}>
                    <div className={mcss.headerFilter}>
                        <h3>{'masterData name'}</h3>
                    </div>
                    <div className={mcss.overview}>
                        <div className={mcss.user}>
                            <img
                                src={avatarUser}
                                alt=""
                                className={mcss.avatarUser}
                            />
                            <span>
                                <p className={mcss.name}>{'name'}</p>
                                <p className={mcss.profession}>
                                    {'profession'}
                                </p>
                                <p className={mcss.location}>{'location'}</p>
                            </span>
                        </div>

                        <div className={mcss.targetTeam}>
                            <img
                                src={avatarUser}
                                alt=""
                                className={mcss.avatarTeam}
                            />
                            <span>
                                <p className={mcss.name}>{'team.lable'}</p>
                                <p className={mcss.location}>{'location'}</p>
                            </span>
                        </div>
                        <div className={mcss.interaction}>
                            <Button view="primary" value="Нанять на работу" />
                            <Button value="Написать сообщение" />
                        </div>
                        <div className={mcss.statisticPeople}>
                            <div>
                                <p>
                                    Рейтинг{' '}
                                    <span className={mcss.numbers}>
                                        {'rating'}
                                    </span>
                                </p>
                                <p>
                                    Человек{' '}
                                    <span className={mcss.numbers}>
                                        {'people'}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Работают{' '}
                                    <span className={mcss.numbers}>
                                        {'employment'}
                                    </span>
                                </p>
                                <p>
                                    Свободны{' '}
                                    <span className={mcss.numbers}>
                                        {'waiting'}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Больничный{' '}
                                    <span className={mcss.numbers}>
                                        {'sick'}
                                    </span>
                                </p>
                                <p>
                                    Отсутствуют{' '}
                                    <span className={mcss.numbers}>
                                        {'absent'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="about">
                            О мастере
                        </h6>
                        <p>{'about'}</p>
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="docs">
                            Перечень документов
                        </h6>
                        <AllDocuments type={['doc', 'pdf', 'pdf', 'doc']} />
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="portfolio">
                            Портфолио
                        </h6>
                        <PpPortfolio />
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="experience">
                            Опыт работы
                        </h6>
                        <p>
                            В каких команиях работал, сколько работал и т.д. [Не
                            разработано]
                        </p>
                        {/* <Experince /> */}
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="charts">
                            Графики
                        </h6>
                        <p>Графики посещений, график качеств и т.д.</p>
                        {/* <Statistics /> */}
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="feedback">
                            Отзывы
                        </h6>
                        <Feedback />
                    </div>
                </div>
            </div>
            <Anchors />
        </main>
    );
}
