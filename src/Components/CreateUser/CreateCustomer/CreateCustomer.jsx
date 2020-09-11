import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength30, minLength8, minLength10, maxLength12, number } from '../../../tools/validators';

import { Input } from '../../UI/FormFields/FormFields';
import Button from '../../UI/Button/Button';

import mcss from './CreateCustomer.module.css';

let CreateCustomerForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
                    placeholder="9 999 999 99 99"
                    name="phone"
                    component={Input}
                    type="text"
                    validate={[required, number, minLength10, maxLength12]}
                    headerText="Телефон*"
                />
            </div>
            <div className={mcss.UIButton}>
                {/* <NavLink to='/band/0'> */}
                    <Button view='primary' value='Регистрация' />
                {/* </NavLink> */}
            </div>
        </form>
    )
}

CreateCustomerForm = reduxForm({ form: 'createMaster' })(CreateCustomerForm);

const CreateCustomer = (props) => {
    let onSubmit = (data) => {
        data.label = 'Заказчик';
        props.onAuth(data);
    }

    return (<main>
        <div className={mcss.body}>
            <h1>Клиент</h1>
            <CreateCustomerForm onSubmit={onSubmit}/>
        </div>
    </main>
    )
}

export default CreateCustomer;