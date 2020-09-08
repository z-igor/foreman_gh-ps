import React from "react";
// import {useSelector, shallowEqual} from 'react-redux';
import { NavLink } from "react-router-dom";

import mcss from "./Band.module.css";
// import avatarTeam from '../../../image/avatarTeam.jpg';

const Band = ({ imageUrl, ...props }) => {
    let people = props.profileTeam.reduce((sum, currentElm) => {
        return sum + currentElm.numb.length;
    }, 0);
    return (
        <NavLink to={"band/" + props.id}>
            <div className={`${mcss.tRow} ${mcss.tContent}`}>
                <div className={mcss.titleCell}>
                    <div>
                        {imageUrl ? (
                            <span className={mcss.avatar}>
                                <img src={imageUrl} alt="" />
                            </span>
                        ) : (
                            <span className={mcss.avatarLetter}>
                                <p>{props.lable[0]}</p>
                            </span>
                        )}
                        <p>{props.lable}</p>
                    </div>
                </div>
                <div className={mcss.peopleCell}>
                    <p>{people}</p>
                </div>
                <div className={mcss.ratingCell}>
                    <p>{props.rating}</p>
                </div>
                <div className={mcss.locationCell}>
                    <p>{props.location}</p>
                </div>
                <div className={mcss.feedbackCell}>
                    <p>
                        {props.feedback.length === 1
                            ? props.feedback[0].text
                            : props.feedback.length}
                    </p>
                </div>
                <div className={mcss.docsCell}>
                    <p>{props.docs}</p>
                </div>
            </div>
        </NavLink>
    );
};
export default Band;
