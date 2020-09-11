import React from 'react';
import { NavLink } from 'react-router-dom';

import mcss from './CreateUser.module.css';

export default function CreateUser(props) {
    return (
        <main>
            <div className={mcss.body}>
                <h1>Вы</h1>
                <div className={mcss.content}>
                    <div className={mcss.UIbutton}>
                        <NavLink to="/registration/master">
                            <button className={mcss.UIbuttonDefault}>
                                Мастер
                            </button>
                        </NavLink>
                    </div>
                    <span className={mcss.divider}>или</span>
                    <div className={mcss.UIbutton}>
                        <NavLink to="/registration/customer">
                            <button className={mcss.UIbuttonDefault}>
                                Клиент
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
}
