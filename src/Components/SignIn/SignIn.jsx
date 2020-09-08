import React from "react";
// import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from "redux-form";
import { maxLength30, minLength8, required } from "../../tools/validators";
import { Input } from "../UI";
import mcss from "./SignIn.module.css";
// import { useState } from "react";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/* <div className={mcss.testHint} onClick={onClick}>
                <Field
                    name="testSignIn"
                    component={Radiobox}
                    type="radio"
                    value="Бригадир"
                    validate={[requiredRadioBtn]}
                />
                <Field
                    name="testSignIn"
                    component={Radiobox}
                    type="radio"
                    value="Мастер"
                    validate={[requiredRadioBtn]}
                />
                <Field
                    name="testSignIn"
                    component={Radiobox}
                    type="radio"
                    value="Заказчик"
                    validate={[requiredRadioBtn]}
                />
            </div> */}
            <Field
                headerText="Почта*"
                placeholder="Пример: email@email.com"
                name="email"
                type="email"
                component={Input}
                validate={[required, maxLength30]}
                autoFocus={true}
            />
            <Field
                placeholder="Пароль"
                name="password"
                type="password"
                component={Input}
                validate={[required, minLength8]}
            />
            <div className={mcss.UIbutton}>
                <div>
                    <a href="#?">Вы забыли пароль?</a>
                </div>
                <button className={mcss.UIbuttonPrimary}>Войти</button>
            </div>
        </form>
    );
};

LoginForm = reduxForm({
    form: "signin",
})(LoginForm);

const SignIn = (props) => {
    let onSubmit = (data) => {
        data.label = data.testSignIn;
        props.logOn(data);
    };

    return (
        <main>
            <div className={mcss.body}>
                <h1>Войти</h1>
                <LoginForm onSubmit={onSubmit} />
            </div>
        </main>
    );
};

export default SignIn;
