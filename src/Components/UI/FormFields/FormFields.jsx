import React from 'react';

import mcss from './FormFields.module.css';

export function Input({ headerText, input, meta, ...props }) {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    /* let [demoValue, setDemoValue] = useState(createRef());
    useEffect(() => {
        if (demo) {
            if (input.name === "email") {
                demoValue.current.focus();
                demoValue.current.value = "test@test.ru";
            }
            if (input.name === "password") {
                demoValue.current.value = "123456789";
            }
        }
    }); */

    return (
        <div
            className={
                mcss.fieldInput + ' ' + (hasError ? mcss.fieldInputError : '')
            }>
            <p>{!headerText ? props.placeholder + '*' : headerText}</p>
            <input {...props} {...input} />
            {errorElement}
        </div>
    );
}

export function InputNumber({ text, input, meta, ...props }) {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    let fieldInputError = hasError ? mcss.fieldInputError : null;

    return (
        <div
            className={`${mcss.fieldInputNumber} ${
                fieldInputError ? fieldInputError : ''
            }`}>
            <span>{text}</span>
            <input {...props} {...input} />
            {errorElement}
        </div>
    );
}

export function Checkbox({ text, input, meta, ...props }) {
    let hasError = meta.touched && meta.error;

    let errorElement = hasError && (
        <span className={mcss.error}>{meta.error}</span>
    );

    return (
        <label
            className={
                mcss.checkbox + ' ' + (hasError ? mcss.checkboxError : '')
            }>
            <input {...props} {...input} />
            <span>{text}</span>
            {errorElement}
        </label>
    );
}

export function Radiobox({ input, meta, ...props }) {
    let hasError = meta.touched && meta.error;

    let errorClass = hasError && mcss.errorRadiobox;

    return (
        <label className={mcss.radiobox + ' ' + errorClass}>
            <input {...props} {...input} />
            <span>{input.value}</span>
        </label>
    );
}
