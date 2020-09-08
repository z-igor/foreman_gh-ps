import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Anchors from './Anchors/Anchors';
import PreviewMasters from '../PreviewMaster/PreviewMaster';
import TeamPortfolio from './TeamPortfolio/TeamPortfolio';
import AllTeamDocuments from './AllTeamDocuments/AllTeamDocuments';
import TeamFeedback from './TeamFeedback/TeamFeedback';
import { Details } from './Details/Details';

import mcss from './Team.module.css';
import avatarUser from '../../image/avatarUser.jpg';
import avatarTeam from '../../image/avatarTeam.png';

const Team = ({ match, teamData, ...props }) => {
    let { params } = match;
    let targetTeam = teamData[params.id];
    let { lable, owner, location, about, profileTeam } = targetTeam;
    let people = null;

    if (profileTeam) {
        people = profileTeam.reduce((total, currentElm) => {
            return total + currentElm.numb.length;
        }, 0);
    } else {
        people = 1;
    }

    let avatarTeamUrl = useSelector(
        (state) => state.teamReducer.teamData[params.id].imageUrl,
        shallowEqual,
    );

    return (
        <main>
            <div className={mcss.container}>
                <div className={mcss.body}>
                    <div className={mcss.headerFilter}>
                        <h3>{lable}</h3>
                    </div>
                    <div className={mcss.overview}>
                        <div className={mcss.targetTeam}>
                            <img
                                src={avatarTeamUrl ? avatarTeamUrl : avatarTeam}
                                alt=""
                                className={mcss.avatarTeam}
                            />
                        </div>
                        <div className={mcss.user}>
                            <img
                                src={avatarUser}
                                alt=""
                                className={mcss.avatarUser}
                            />
                            <span>
                                <p className={mcss.name}>{owner.name}</p>
                                <p className={mcss.profession}>
                                    {owner.profession}
                                </p>
                                <p className={mcss.location}>{location}</p>
                            </span>
                        </div>
                        <Details
                            level={props.level}
                            people={people}
                            {...targetTeam}
                        />
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="ABOUT">
                            О бригаде
                        </h6>
                        <p>{about}</p>
                    </div>
                    {Array.isArray(profileTeam) && (
                        <div className={mcss.profilePeople}>
                            <h6 className={mcss.h6} id="TEAM">
                                Команда
                            </h6>

                            <PreviewMasters
                                profileTeam={profileTeam}
                                teamID={params.id}
                            />
                        </div>
                    )}
                    <div>
                        <h6 className={mcss.h6} id="DOCS">
                            Перечень документов
                        </h6>
                        <AllTeamDocuments type={['pdf', 'doc']} />
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="PORTFOLIO">
                            Портфолио
                        </h6>
                        <TeamPortfolio />
                    </div>
                    <div>
                        <h6 className={mcss.h6} id="FEEDBACK">
                            Отзывы
                        </h6>
                        <TeamFeedback />
                    </div>
                </div>
            </div>
            <Anchors />
        </main>
    );
};

export default Team;
