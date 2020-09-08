import React from 'react';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength30, minLength8 } from '../../../tools/validators';

import {
    Input,
    Button,
} from '../../UI';

import mcss from './CreateMaster.module.css';

let CreateMasterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} 
            onKeyPress={(e) => { props.onKeyPress(e); }}>
            <div className={mcss.content}>
                <Field
                    placeholder="Ник"
                    name="name"
                    component={Input}
                    type="text"
                    validate={[required, maxLength30]}
                    headerText="Ник*"
                />
                <Field
                    placeholder="Почта/email"
                    name="email"
                    component={Input}
                    type="email"
                    validate={[required, maxLength30]}
                    headerText="Почта*"
                />
                <Field
                    placeholder="Пароль"
                    name="password"
                    component={Input}
                    type="password"
                    validate={[required, minLength8]}
                />
                <Field
                    placeholder="Специальность"
                    name="specialty"
                    component={Input}
                    type="text"
                    validate={[required, maxLength30]}
                    headerText="Специальность*"
                />
                <Field
                    placeholder="Город"
                    name="location"
                    component={Input}
                    type="text"
                    validate={[required, maxLength30]}
                    headerText="Город*"
                />
            </div>
            <div className={mcss.UIButton}>
                <NavLink to='/registration/leadmaster'>
                    <Button view='secondary' value='Создать бригаду' />
                </NavLink>
                <Button view='primary' value='Регистрация' />
                {/* <NavLink to='/band/0'> */}
                {/* </NavLink> */}
            </div>
        </form>
    )
}

CreateMasterForm = reduxForm({ form: 'createMaster' })(CreateMasterForm);

const CreateMaster = (props) => {
    let onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }

    let onSubmit = (data) => {
        props.createNewMaster(data);
        data.label = 'Мастер';
        props.onAuth(data);
    }
    return (<main>
        <div className={mcss.body}>
            <h1>Мастер</h1>
            <CreateMasterForm onSubmit={onSubmit} onKeyPress={onKeyEnter} />
        </div>
    </main>
    )
}

export default CreateMaster;