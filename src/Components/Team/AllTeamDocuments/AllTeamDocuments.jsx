import React from "react";

import mcss from "./AllTeamDocuments.module.css";

const AllTeamDocuments = ({ type, ...props }) => {

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.content}>
                    {type.map((t, i) => (
                        <div className={mcss.cover} key={i}>
                            <span>{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllTeamDocuments;