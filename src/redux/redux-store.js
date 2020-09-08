import { createStore, combineReducers } from 'redux';
import { teamReducer } from './teams-reducer';
import { masterReducer } from './masters-reducer';
import { authReducer } from './auth-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    teamReducer,
    masterReducer,
    authReducer,
    form: formReducer,
});

const store = createStore(reducers);

window.storee = () => {
    return store.getState();
};

export default store;