import React from 'react';
import { NavLink } from 'react-router-dom';

import mcss from './TableRows.module.css';

export function TableRows(props) {
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
