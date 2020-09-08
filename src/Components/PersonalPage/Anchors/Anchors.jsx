import React from "react";

import mcss from "./Anchors.module.css";

export default function Anchors({ ...props }) {
    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.headerFilter}>
                    <h3>Ссылки</h3>
                </div>
                <div className={mcss.anchor}>
                    <a href="#about">О мастере</a>
                    <a href="#docs">Документы</a>
                    <a href="#portfolio">Портфолио</a>
                    <a href="#experience" className={mcss.disable}>Опыт</a>
                    <a href="#charts">Графики</a>
                    <a href="#feedback" className={mcss.disable}>Отзывы</a>
                </div>
            </div>
        </div>
    )
}