import React from "react";

import mcss from "./TeamPortfolio.module.css";

const TeamPortfolio = ({ ...props }) => {

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.content}>
                    <div className={mcss.cover}>
                        <img src="https://z32.d.sdska.ru/2-z32-1796e014-d75b-4fa7-9f2c-783e382e2e05.jpg?_640_427_c." alt="" />
                    </div>
                    <div className={mcss.cover}>
                        <img src="https://z32.d.sdska.ru/2-z32-1796e014-d75b-4fa7-9f2c-783e382e2e05.jpg?_640_427_c." alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPortfolio;