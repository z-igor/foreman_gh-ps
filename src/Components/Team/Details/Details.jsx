import React from "react";
import { Button } from "../../UI";

import mcss from "./Details.module.css";

export function Details(props) {
    let { level, inProcess, waiting, sick, absent, rating, people } = props;
    let content;

    switch (level) {
        case 1:
            content = (
                <>
                    <div className={!props.level ? mcss.detailsDef : null}>
                        <p>
                            Рейтинг{" "}
                            <span className={mcss.numbers}>{rating}</span>
                        </p>
                        <p>
                            Человек{" "}
                            <span className={mcss.numbers}>{people}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Работают{" "}
                            <span className={mcss.numbers}>{inProcess}</span>
                        </p>
                        <p>
                            Свободны{" "}
                            <span className={mcss.numbers}>{waiting}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Больничный{" "}
                            <span className={mcss.numbers}>{sick}</span>
                        </p>
                        <p>
                            Отсутствуют{" "}
                            <span className={mcss.numbers}>{absent}</span>
                        </p>
                    </div>
                </>
            );
            break;
        case 2:
            content = (
                <>
                    <div className={!props.level ? mcss.detailsDef : ""}>
                        <p>
                            Рейтинг{" "}
                            <span className={mcss.numbers}>{rating}</span>
                        </p>
                        <p>
                            Человек{" "}
                            <span className={mcss.numbers}>{people}</span>
                        </p>
                        <p>
                            Работают{" "}
                            <span className={mcss.numbers}>{inProcess}</span>
                        </p>
                    </div>
                    <div className={mcss.interaction}>
                        <Button view="primary" value="Работать с командой" />
                        <Button value="Написать сообщение" />
                    </div>
                </>
            );
            break;
        case 3:
            content = (
                <>
                    <div className={!props.level ? mcss.detailsDef : ""}>
                        <p>
                            Рейтинг{" "}
                            <span className={mcss.numbers}>{rating}</span>
                        </p>
                        <p>
                            Человек{" "}
                            <span className={mcss.numbers}>{people}</span>
                        </p>
                    </div>
                    <div className={mcss.interaction}>
                        <Button view="primary" value="Нанять на работу" />
                        <Button value="Написать сообщение" />
                    </div>
                </>
            );
            break;
        default:
            content = (
                <div className={!props.level ? mcss.detailsDef : ""}>
                    <p>
                        Рейтинг <span className={mcss.numbers}>{rating}</span>
                    </p>
                    <p>
                        Человек <span className={mcss.numbers}>{people}</span>
                    </p>
                </div>
            );
            break;
    }

    return <div className={mcss.details}>{content}</div>;
}
