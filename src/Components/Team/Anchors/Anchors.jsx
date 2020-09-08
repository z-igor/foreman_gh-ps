import React from "react";

import mcss from "./Anchors.module.css";

const Anchors = ({ ...props }) => {

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.headerFilter}>
                    <h3>Ссылки</h3>
                </div>
                <div className={mcss.anchor}>
                    <a href="#ABOUT">О бригаде</a>
                    <a href="#TEAM">Команда</a>
                    <a href="#PROJECTS" className={mcss.disable}>Объекты/Проекты</a>
                    <a href="#DOCS">Перечень документов</a>
                    <a href="#PORTFOLIO">Портфолио</a>
                    <a href="#FEEDBACK" className={mcss.disable}>Отзывы</a>
                </div>
            </div>
        </div>
    )
}

export default Anchors;