import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Button from "../UI/Button/Button";
import { Checkbox, Input, InputNumber } from "../UI/FormFields/FormFields";
import { applyFilter, resetFilter } from "../../redux/actions";

import mcss from "./Filter.module.css";

let FilterForm = (props) => {
    let onReset = (e) => {
        props.reset();
        props.onReset();
    };
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="lable"
                placeholder="Поиск по названию бригады"
                component={Input}
                type="text"
                headerText="Название"
            />
            <Field
                name="location"
                placeholder="Поиск по названию города"
                component={Input}
                type="text"
                headerText="Город"
            />
            <Field
                name="rating"
                placeholder="10"
                min="1"
                component={InputNumber}
                type="number"
                text="Рейтинг, от"
            />
            <Field
                name="people"
                placeholder="10"
                min="1"
                component={InputNumber}
                type="number"
                text="Человек, от"
            />
            <Field
                name="checkDocs"
                component={Checkbox}
                type="checkbox"
                text="документы, выше 50%"
            />
            <div className={mcss.acceptBtn}>
                <Button value="Применить" type="submit" />
                <Button value="Сброс" type="button" onClick={onReset} />
            </div>
        </form>
    );
};

FilterForm = reduxForm({ form: "filter" })(FilterForm);

const Filter = (props) => {
    let Dispatch = useDispatch();

    let onSubmit = (data) => {
        if (Object.keys(data).length !== 0) {
            Dispatch(applyFilter({ filter: true, reset: false }));
            setTimeout(() => {
                Dispatch(applyFilter({ filter: false, reset: false }));
            }, 0);
        }
    };

    let onReset = (e) => {
        Dispatch(resetFilter(true));
        setTimeout(() => {
            Dispatch(resetFilter(false));
        }, 0);
    };

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <div className={mcss.headerFilter}>
                    <h3>Фильтр</h3>
                </div>
                <FilterForm onSubmit={onSubmit} onReset={onReset} />
            </div>
        </div>
    );
};

export default Filter;
