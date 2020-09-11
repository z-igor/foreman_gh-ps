import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { demoAuth, logOff } from '../../../redux/actions';

import mcss from './DropList.module.css';
import triangle from '../../../image/triangle.svg';

export default function DropList({ title = 'Drop list', ...props }) {
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
}
