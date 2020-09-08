const LOG_ON = "LOG_ON";
const LOG_OFF = "LOG_OFF";
const IS_AUTH = "IS_AUTH";
const DEMO_AUTH = "DEMO_AUTH";

let initState = {
    auth: false,
    label: '',
    level: 0,
    name: '',
    email: '',
    password: '',
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case IS_AUTH: {
            return {
                ...state,
                auth: true,
                email: action.data.email,
                label: action.data.label || 'Заказчик',
                level: action.data.level || 3,
                password: action.data.password,
            }
        }
        case LOG_ON: {
            return {
                ...state,
                auth: true,
                email: action.data.email,
                label: action.data.label || 'Заказчик',
                level: action.data.level || 3,
                password: action.data.password,
            };
        }
        case LOG_OFF: {
            return {
                ...state,
                auth: false,
                label: '',
                email: '',
                password: '',
            };
        }
        case DEMO_AUTH: {
            return {
                ...state,
                auth: true,
                label: action.data.label,
                level: action.data.level,
                email: 'test@test.com',
                password: '123456789',
            }
        }
        default:
            return state;
    }
}