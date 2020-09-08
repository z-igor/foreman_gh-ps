import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import mcss from "./PreviewMaster.module.css";
import avatarUser from "../../image/avatarUser.jpg";
import { ModalWindow } from "../UI";

import { removeMasterAC } from "../../redux/teams-reducer";

const Master = ({ teamID, masterID, profileID, ...props }) => {
    const Dispatch = useDispatch();

    const isLead = useSelector(
        (state) => state.authReducer.label,
        shallowEqual
    );
    let [isRemoveUser, setRemoveUser] = useState(false);

    let showRemoveUser = (e) => {
        setRemoveUser(true);
    };

    let hideRemoveUser = (e) => {
        setRemoveUser(false);
    };

    let removeUser = (e) => {
        Dispatch(removeMasterAC({ teamID, masterID, profileID }));
    };

    return (
        <div className={mcss.user}>
            {isRemoveUser && (
                <ModalWindow
                    success={removeUser}
                    unsuccess={hideRemoveUser}
                    title="Исключить мастера"
                >
                    Действительно исключить/уволить <b>{props.name}</b> из
                    команды?
                </ModalWindow>
            )}
            {isLead === "Бригадир" && (
                <span onClick={showRemoveUser} className={mcss.removeUser}>
                    X
                </span>
            )}
            <img src={avatarUser} alt="" className={mcss.avatarUser} />
            <p className={mcss.name}>{props.name}</p>
        </div>
    );
};

function SpecialtyBox({ isBoxShow, boxIndex, masters, specialty, ...props }) {
    const [isShow, setIsShow] = useState(isBoxShow);

    let onShowList = (e) => {
        props.setBoxShow((prevState) => {
            prevState[boxIndex] = !prevState[boxIndex];
            setIsShow(prevState[boxIndex]);
            return prevState;
        });
    };

    let hideSpecialtyBox = `${isShow ? "" : mcss.hide}`;

    return (
        <div>
            {masters.length ? (
                <p className={mcss.showElement} onClick={onShowList}>
                    {specialty} <span>{masters.length}</span>
                </p>
            ) : (
                ""
            )}
            <div className={`${mcss.content} ${hideSpecialtyBox}`}>
                {masters.map((m, i) => (
                    <Master
                        key={specialty + i}
                        name={m.name}
                        teamID={props.teamID}
                        masterID={m.id}
                        profileID={props.profileID}
                    />
                ))}
            </div>
        </div>
    );
}

export default function PreviewMasters({ profileTeam, ...props }) {
    let [isBoxShow, setBoxShow] = useState(
        [...Array(profileTeam.length)].map((e, i) => {
            if (i === 0) return true;
            return false;
        })
    );

    return (
        <div className={mcss.container}>
            {profileTeam.map((b, i) => (
                <SpecialtyBox
                    key={b.specialty + b.numb}
                    masters={b.numb}
                    specialty={b.specialty}
                    profileID={b.id}
                    teamID={props.teamID}
                    boxIndex={i}
                    isBoxShow={isBoxShow[i]}
                    setBoxShow={setBoxShow}
                />
            ))}
        </div>
    );
}
