const UPDATE_TEXT_TEAM = "UPDATE_TEXT_TEAM";
const ADD_DATA_TEAM = "ADD_DATA_TEAM";
const REMOVE_MASTER = "REMOVE_MASTER";
const APPLY_FILTER = "APPLY_FILTER";
const RESET_FILTER = "RESET_FILTER";

let initState = {
    filter: false,
    resetFilter: false,
    teamData: [{
            id: 0,
            lable: 'Сан-саныч',
            imageUrl: 'https://www.quoniam.com/fileadmin/templates/images/icon_home.svg',
            rating: 65,
            owner: {
                id: 0,
                name: 'Mark',
                specialty: 'Электрик',
                image: {
                    small: '',
                    large: '',
                }
            },
            profileTeam: [{
                    id: 0,
                    specialty: 'Рабочий',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, {
                        id: 4,
                        name: 'Fname Lname4',
                    }, {
                        id: 5,
                        name: 'Fname Lname5',
                    }, ],
                },
                {
                    id: 1,
                    specialty: 'Электрик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, {
                        id: 4,
                        name: 'Fname Lname4',
                    }, ],
                },
                {
                    id: 2,
                    specialty: 'Каменщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, ],
                },
                {
                    id: 3,
                    specialty: 'Монолитчик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 4,
                    specialty: 'Сварщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 5,
                    specialty: 'Сантехник',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
            ],
            location: 'Москва, Санкт-Петербург',
            feedback: [{
                id: 123,
                text: 'Мы довольны. Единственный отзыв у команды отобразился строкой. Спасибо команде!',
            }],
            docs: '57%',
            image: {
                small: '',
                large: '',
            },
            about: 'Мы бригада рабочих. Выполняем все задачи в срок и качественно.Работа строительство, производство. Выполнение всех вспомогательных и строительных работ.',
            inProcess: 14,
            waiting: 5,
            sick: 1,
            absent: 1,
        },
        {
            id: 1,
            lable: 'Стоун Групп',
            imageUrl: '',
            owner: {
                id: 0,
                name: 'Макс',
                specialty: 'Электрик',
                image: {
                    small: '',
                    large: '',
                }
            },
            profileTeam: [{
                    id: 0,
                    specialty: 'Рабочий',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }],
                },
                {
                    id: 1,
                    specialty: 'Электрик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }],
                },
                {
                    id: 2,
                    specialty: 'Каменщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }],
                },
                {
                    id: 3,
                    specialty: 'Монолитчик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 4,
                    specialty: 'Сварщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 5,
                    specialty: 'Сантехник',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
            ],
            rating: 75,
            location: 'Москва',
            feedback: [{
                id: 125,
                text: 'Да',
            }, {}, {}, {}, {}, {}, {}],
            docs: '85%',
            image: {
                small: 'Yes',
                large: '',
            },
            about: 'Мы специалисты. Любая задача.',
            inProcess: 4,
            sick: 1,
            absent: 1,
            waiting: 0,
        },
        {
            id: 2,
            lable: 'Петрович',
            rating: 50,
            imageUrl: '',
            owner: {
                id: 2,
                name: 'Andrey',
                specialty: 'Монтажник',
                image: {
                    small: '',
                    large: '',
                }
            },
            profileTeam: [{
                    id: 0,
                    specialty: 'Рабочий',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, {
                        id: 4,
                        name: 'Fname Lname4',
                    }, {
                        id: 5,
                        name: 'Fname Lname5',
                    }, {
                        id: 6,
                        name: 'Fname Lname5',
                    }, {
                        id: 7,
                        name: 'Fname Lname5',
                    }, ],
                },
                {
                    id: 1,
                    specialty: 'Электрик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, {
                        id: 4,
                        name: 'Fname Lname4',
                    }, ],
                },
                {
                    id: 2,
                    specialty: 'Каменщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, ],
                },
                {
                    id: 3,
                    specialty: 'Монолитчик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 4,
                    specialty: 'Сварщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 5,
                    specialty: 'Сантехник',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
            ],
            location: 'Москва, Краснодар',
            feedback: [{
                id: 124,
                text: 'Мы доволны, были задержки...',
            }, {}, {}, {}, {}, {}, {}, {}, {}, {}],
            docs: '40%',
            image: {
                small: '',
                large: '',
            },
            about: 'Мы бригада рабочих. Выполняем все задачи в срок и качественно.Работа строительство, производство. Выполнение всех вспомогательных и строительных работ.',
            inProcess: 4,
            waiting: 0,
            sick: 1,
            absent: 1,
        },
        {
            id: 3,
            lable: 'Сто Групп',
            imageUrl: '',
            owner: {
                id: 3,
                name: 'Vova',
                specialty: 'Каменщик',
            },
            profileTeam: [{
                    id: 0,
                    specialty: 'Рабочий',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }],
                },
                {
                    id: 1,
                    specialty: 'Электрик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, {
                        id: 2,
                        name: 'Fname Lname2',
                    }, {
                        id: 3,
                        name: 'Fname Lname3',
                    }, {
                        id: 4,
                        name: 'Fname Lname4',
                    }, ],
                },
                {
                    id: 2,
                    specialty: 'Каменщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }],
                },
                {
                    id: 3,
                    specialty: 'Монолитчик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 4,
                    specialty: 'Сварщик',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
                {
                    id: 5,
                    specialty: 'Сантехник',
                    numb: [{
                        id: 0,
                        name: 'Fname Lname0',
                    }, {
                        id: 1,
                        name: 'Fname Lname1',
                    }, ],
                },
            ],
            rating: 75,
            location: 'Москва, Орел',
            feedback: [{
                id: 124,
                text: 'Мы доволны, были задержки...',
            }, {}, {}, {}, {}, {}, {}],
            docs: '85%',
            image: {
                small: 'Yes',
                large: '',
            },
            about: 'Мы бригада рабочих. Выполняем все задачи в срок и качественно.Работа строительство, производство. Выполнение всех вспомогательных и строительных работ.',
            inProcess: 4,
            sick: 1,
            absent: 1,
            waiting: 0,
        }
    ],
}

export const teamReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_TEAM: {
            return {
                ...state,
                nameNewTeam: action.newText,
            };
        }
        case ADD_DATA_TEAM: {
            let {
                name,
                specialty,
                masterId,
                location,
                teamName
            } = action.data;

            let newTeam = {
                location,
                id: state.teamData.length,
                lable: teamName,
                about: '-',
                rating: Math.floor(Math.random() * 40),
                feedback: action.people ? action.people : '-',
                docs: action.docs ? action.docs : '-',
                image: {
                    small: 'url',
                    large: '',
                },
                owner: {
                    name,
                    specialty,
                    id: Math.floor(Math.random() * 50 - state.teamData.length),
                    image: {
                        small: '',
                        large: '',
                    }
                },
            };

            return {
                ...state,
                teamData: [...state.teamData, newTeam],
                nameNewTeam: '',
            };
        }
        case REMOVE_MASTER: {
            let cState = JSON.parse(JSON.stringify(state));

            cState
                .teamData[action.data.teamID]
                .profileTeam[action.data.profileID]
                .numb = [...cState.teamData[action.data.teamID]
                    .profileTeam[action.data.profileID]
                    .numb.filter(m => m.id !== action.data.masterID)
                ]

            return cState;
        }
        case APPLY_FILTER: {
            return {
                ...state,
                filter: action.data.filter,
                resetFilter: action.data.reset,
            }
        }
        case RESET_FILTER: {
            return {
                ...state,
                resetFilter: action.reset,
            }
        }
        default:
            return state;
    }
}

export const updateTextTeamAC = (newText) => {
    return {
        type: UPDATE_TEXT_TEAM,
        newText,
    }
};

export const addDataTeamAC = (data) => {
    return {
        type: ADD_DATA_TEAM,
        data
    }
};

export const removeMasterAC = (data) => {
    return {
        type: REMOVE_MASTER,
        data
    }
}