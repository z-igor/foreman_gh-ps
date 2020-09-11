import React from 'react';

import mcss from './Button.module.css';

/*<Button view="primary" value="Text" />*/
export default function Button(props) {
    let buttonClass = '';

    let onClick = (e) => {
        if (props.onClick) {
            props.onClick();
        }
    };

    switch (props.view) {
        case 'primary': {
            buttonClass = mcss.buttonPrimary;
            break;
        }
        case 'disable': {
            buttonClass = mcss.buttonDisable;
            break;
        }
        default: {
            buttonClass = mcss.buttonSecondary;
        }
    }

    return (
        <div className={mcss.button}>
            <button className={buttonClass} onClick={onClick} {...props}>
                {props.value}
            </button>
        </div>
    );
}
