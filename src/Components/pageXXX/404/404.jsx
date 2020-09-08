import React from 'react';
import { NavLink } from 'react-router-dom';

import mcss from './page404.module.css';

const page404 = (props) => {
    return (
        <div className={mcss.errorPage}>
            <h1>
                4<span>0</span>4
            </h1>
            <p>Упс. Ничего не найдено. Вернуться на <NavLink to="/">главную страницу</NavLink></p>
        </div>
    );
};

export default page404;
