import React from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import DropList from '../UI/DropList/DropList';

import mcss from './Header.module.css';
import notificationIcon from '../../image/notification.svg';
import { useSelector } from 'react-redux';

/** Уведомления, колокольчик */
function Notifications({ indiacator = false, ...props }) {
    let onClick = (e) => {
        console.log('Notifications');
    };

    let showIndicatorImg = {
        transform: indiacator ? 'rotate(30deg)' : '',
    };

    return (
        <div className={mcss.notifications} onClick={onClick}>
            <img src={notificationIcon} alt="Note" style={showIndicatorImg} />
            {indiacator && <span className={mcss.indiacator}></span>}
        </div>
    );
}

/** Для не зарегистрированного пользователя */
function DefaultNav({ ...props }) {
    return (
        <span className={mcss.rightside}>
            <DropList title="Войти как:">
                <p>Бригадир</p>
                <p>Мастер</p>
                <p>Заказчик</p>
            </DropList>
            <div className={`${mcss.link} ${mcss.registration}`}>
                <NavLink to="/registration">
                    <Button view="primary" value="Регистрация" />
                </NavLink>
            </div>
            <div className={mcss.link}>
                <NavLink to="/signin" activeStyle={{ color: 'red' }}>
                    Войти
                </NavLink>
            </div>
        </span>
    );
}

/** Для заказчика */
function CustomerNav({ ...props }) {
    return (
        <span className={mcss.rightside}>
            <Notifications />
            <div className={mcss.link}>
                {props.isAuth ? (
                    <DropList title={props.label}>
                        <NavLink to="/personal-page">Личный кабинет</NavLink>
                        <hr />
                        <p>Бригадир</p>
                        <p>Мастер</p>
                        <hr />
                        <p>Выйти</p>
                    </DropList>
                ) : (
                    <NavLink to="/signin" activeStyle={{ color: 'red' }}>
                        Войти
                    </NavLink>
                )}
            </div>
        </span>
    );
}

/** Для мастера */
function MasterNav({ ...props }) {
    return (
        <span className={mcss.rightside}>
            <Notifications />
            <div className={mcss.link}>
                {props.isAuth ? (
                    <DropList title={props.label}>
                        <NavLink to="/personal-page">Личный кабинет</NavLink>
                        <hr />
                        <p>Бригадир</p>
                        <p>Заказчик</p>
                        <hr />
                        <p>Выйти</p>
                    </DropList>
                ) : (
                    <NavLink to="/signin" activeStyle={{ color: 'red' }}>
                        Войти
                    </NavLink>
                )}
            </div>
        </span>
    );
}

/** Для бригадира */
function OwnerNav({ ...props }) {
    return (
        <span className={mcss.rightside}>
            <div className={mcss.link + ' ' + mcss.link_inactive}>
                <NavLink to="/masters" activeStyle={{ color: 'red' }}>
                    Мастера
                </NavLink>
            </div>
            <Notifications />
            <div className={mcss.link}>
                {props.isAuth ? (
                    <DropList title={props.label}>
                        <NavLink to="/personal-page/">Личный кабинет</NavLink>
                        <hr />
                        <p>Мастер</p>
                        <p>Заказчик</p>
                        <hr />
                        <p>Выйти</p>
                    </DropList>
                ) : (
                    <NavLink to="/signin" activeStyle={{ color: 'red' }}>
                        Войти
                    </NavLink>
                )}
            </div>
        </span>
    );
}

function RightsideMenu({ ...props }) {
    switch (props.label.toLowerCase()) {
        case 'заказчик': {
            return <CustomerNav {...props} />;
        }
        case 'бригадир': {
            return <OwnerNav {...props} />;
        }
        case 'мастер': {
            return <MasterNav {...props} />;
        }
        default: {
            return <DefaultNav />;
        }
    }
}

const Header = ({ ...props }) => {
    let authInfo = useSelector(state => state.authReducer);

    return (
        <div className={mcss.container}>
            <div className={mcss.body}>
                <span className={mcss.leftside}>
                    <div className={`${mcss.link} ${mcss.locations}`}>
                        <a href="&">Москва</a>
                    </div>
                    <div className={mcss.link}>
                        <NavLink
                            to="/ui_components"
                            activeStyle={{ color: 'red' }}
                        >
                            UI компоненты
                        </NavLink>
                    </div>
                    <div className={mcss.link}>
                        <NavLink to="/about" activeStyle={{ color: 'red' }}>
                            О сервисе
                        </NavLink>
                    </div>
                </span>
                <div className={`${mcss.link} ${mcss.logo}`}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <RightsideMenu {...props} {...authInfo} />
            </div>
        </div>
    );
};

export default Header;
