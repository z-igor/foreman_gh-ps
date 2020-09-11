import React from 'react';
import Button from '../Button/Button';

import mcss from './Modal.module.css';

export default function ModalWindow({
    content = 'Modal Content',
    title = 'Modal title',
    ...props
}) {
    let successAnswer = (e) => {
        props.success();
    };

    let unsuccessAnswer = (e) => {
        props.unsuccess();
    };

    let onBackgroundClick = (e) => {
        if (e.target.className === mcss.modalWrapper) {
            props.unsuccess();
        }
    };

    return (
        <div className={mcss.modalWrapper} onClick={onBackgroundClick}>
            <div className={mcss.modalWindow}>
                <span className={mcss.closeModal} onClick={unsuccessAnswer}>
                    x
                </span>
                <p className={mcss.modalTitle}>{title}</p>
                <div className={mcss.modalContent}>
                    {props.children ? props.children : content}
                </div>
                <div className={mcss.modalResult}>
                    <Button
                        view="secondary"
                        value="Нет"
                        onClick={unsuccessAnswer}
                    />
                    <Button view="primary" value="Да" onClick={successAnswer} />
                </div>
            </div>
        </div>
    );
}
