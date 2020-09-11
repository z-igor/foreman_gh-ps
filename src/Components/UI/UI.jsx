import React, { useState } from 'react';
import ModalWindow from './Modal/Modal';
import Button from './Button/Button';
import DropList from './DropList/DropList';
import { SimpleTable } from './SimpleTable/SimpleTable';

import mcss from './UI.module.css';

export function UI(props) {
    let [isOpenModal, setOpenModal] = useState(false);
    let showModalWindow = () => {
        setOpenModal(true);
    };

    let hideModalWindow = () => {
        setOpenModal(false);
    };

    return (
        <main className={mcss.body}>
            <h1>Компоненты</h1>
            <div className={mcss.content}>
                <Button view="primary" value="Primary" />
                <Button view="secondary" value="Secondary" />
                <Button view="disable" value="Disable" />
                <hr />
                <Button
                    view="preview"
                    value="Открыть окно"
                    onClick={showModalWindow}
                />
                {isOpenModal && (
                    <ModalWindow
                        success={showModalWindow}
                        unsuccess={hideModalWindow}
                    />
                )}
                <hr />
                <DropList>
                    <p>UI текст</p>
                    <p>UI не ссылка</p>
                    <p>I'м дроплист</p>
                </DropList>
                <hr />
                <SimpleTable />
            </div>
        </main>
    );
}

/* 
export { DocsCheck, FindLocation, NumberPeople, MasterCheck };

const EmailField = (props) => {
    return (
        <div className={mcss.findTeam}>
            <p>Почта/email</p>
            <input
                placeholder="Почта/email"
                name="inputEmail"
                component="input"
                type="email"
                validate={[required]}
            />
        </div>
    );


const SpecialtyField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Специальность</p>
            <input
                type="text"
                placeholder="Специальность"
                onChange={onChangeValue}
            />
        </div>
    );
};

const LabelTeamField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Название бригады</p>
            <input
                type="text"
                placeholder="Название бригады"
                onChange={onChangeValue}
            />
        </div>
    );
};

const PhoneField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Телефон</p>
            <input type="text" placeholder="Телефон" onChange={onChangeValue} />
        </div>
    );
};

start-Регистрация

export const NameMasterField = (props) => {
    let onChangeValue = (e) => {
        props.onChange.name = e.target.value;
    };

    return (
        <div className={mcss.findTeam}>
            <p>Ник</p>
            <input
                placeholder="Ник"
                name="inputName"
                component="input"
                type="email"
                onChange={onChangeValue}
            />
        </div>
    );
};

export const PasswordField = (props) => {
    let onChangeValue = (e) => {
        console.log(e.target.name);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Пароль</p>
            <input
                placeholder="Пароль"
                name="inputPassword"
                component="input"
                type="password"
                onChange={onChangeValue}
                validate={[required]}
            />
        </div>
    );
};
end-Регистрация

OLD 
let findTeamValue = React.createRef();

let mapStateToProps = (state) => {
    return {
        nameNewTeam: state.teamReducer.nameNewTeam,
    };
};

const FindTeam = (props) => {
    let onChangeValueTeam = (e) => {
        props.updateTextTeamAC(findTeamValue.current.value);
    };

    return (
        <div className={mcss.findTeam}>
            <p>Поиск</p>
            <input
                type="text"
                placeholder="Поиск по названию бригады"
                value={props.nameNewTeam}
                onChange={onChangeValueTeam}
                ref={findTeamValue}
            />
        </div>
    );
};

export const FindTeamContainer = connect(mapStateToProps, { updateTextTeamAC })(
    FindTeam
);

export const FindLocationContainer = (props) => {
    return <FindLocation />;
};

const FindLocation = (props) => {
    return (
        <div className={mcss.findLocation}>
            <p>Город</p>
            <input type="text" placeholder="Поиск по городу" />
        </div>
    );
};

const DocsCheck = (props) => {
    return (
        <div className={mcss.docsCheck}>
            <label>
                <input type="checkbox" />
                документы, выше 50%
            </label>
        </div>
    );
};

const MasterCheck = (props) => {
    return (
        <div className={mcss.masterCheck}>
            <label>
                <input type="checkbox" />
                проверенные мастера
            </label>
        </div>
    );
};

const NumberPeople = (props) => {
    return (
        <div className={mcss.numberPeople}>
            <label>
                Количество человек, до
                <input type="number" placeholder="10" min="0" />
            </label>
        </div>
    );
};

}; */
