import React from "react";

import mcss from "./TeamFeedback.module.css";

const TeamFeedback = ({ ...props }) => {

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.content}>
                    <i>Чтобы посмореть или добавить отзыв оформляйте самую дорогую подписку <b>Super VIP+</b> :)</i>
                    {/* <a href="#ABOUT">О бригаде</a>
                    <a href="#TEAM">Команда</a>
                    <a href="#PORTFOLIO">Портфолио</a>
                    <a href="#DOCS">Перечень документов</a>
                    <a href="#FEEDBACK">Отзывы</a> */}
                </div>
            </div>
        </div>
    )
}

export default TeamFeedback;