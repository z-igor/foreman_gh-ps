const UPDATE_DATA_MASTER = "UPDATE_NAME_MASTER";
const ADD_MASTER = "ADD_MASTER";

let initState = {
    masters: [{
        id: 0,
        name: 'Mark',
        email: 'fdfs@fds.f',
        password: '12345678',
        specialty: 'Электрик',
        location: 'Москва, Владивосток',
        team: null,
        image: {
            small: '',
            large: '',
        }
    },
    {
        id: 1,
        name: 'Semen',
        email: 'mail@gmail.com',
        password: '12345678',
        specialty: 'Сантехник',
        location: 'Москва, Самара',
        team: null,
        image: {
            small: '',
            large: '',
        }
    },
    {
        id: 2,
        name: 'Andrey',
        email: 'andrey@mail.ru',
        password: '12345678',
        specialty: 'Монтажник',
        location: 'Москва, Краснодар',
        team: null,
        image: {
            small: '',
            large: '',
        }
    },
    {
        id: 3,
        name: 'Vova',
        email: 'vova@mail.ru',
        password: '12345678',
        specialty: 'Каменщик',
        location: 'Москва, Орел',
        team: null,
        image: {
            small: '',
            large: '',
        }
    },],
}

export const masterReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MASTER: {
            let {
                name,
                email,
                password,
                specialty,
                location,
                teamName,
            } = action.data;

            let newMaster = {
                id: state.masters.length,
                team: teamName,
                name,
                email,
                password,
                specialty,
                location,
                image: {
                    small: '',
                    large: '',
                },
            };

            return {
                ...state,
                masters: [...state.masters, newMaster],
            };
        }
        case UPDATE_DATA_MASTER: {
            return {
                ...state,
                masters: state.masters.map(m => {
                    if (m.id === action.data.masterId) {
                        m.team = action.data.nameTeam;
                        return m;
                    }
                    return m;
                }),
            };
        }
        default:
            return state;
    }
}

export const createNewMaster = (data) => {
    return {
        type: ADD_MASTER,
        data
    }
};

export const updateMastersData = (data) => {
    return {
        type: UPDATE_DATA_MASTER,
        data,
    }
};