import { teampageReducer } from './teamspage-reducer';

export const store = {
    _rerenderTree: function () {},
    _subscriber: function (observer) {
        this._rerenderTree = observer;
    },
    _state: {
        nameNewTeam: '',
        teamData: [{
                id: 21,
                title: 'Сан-саныч',
                people: 5,
                rating: 65,
                location: 'Москва, Санкт-Петербург',
                feedback: 'Да',
                docs: '57%',
            },
            {
                id: 1,
                title: 'Стоун Групп',
                people: 22,
                rating: 75,
                location: 'Москва',
                feedback: 9,
                docs: '85%',
            },
            {
                id: 2,
                title: 'Петрович',
                people: 5,
                rating: 50,
                location: 'Москва, Орел',
                feedback: 'Мы доволны, были задержки...',
                docs: '40%',
            },
            {
                id: 3,
                title: 'Стоун Групп',
                people: 22,
                rating: 75,
                location: 'Москва',
                feedback: 9,
                docs: '85%',
            }
        ],
    },
    subscribe: function (observer) {
        this._subscriber(observer);
    },
    getState: function () {
        return this._state;
    },
    _updateTextTeam: (newText) => {
        this._state.nameNewTeam = newText;
        this._rerenderTree(store);
    },
    _addDataTeam: () => {
        let state = this.getState();

        state.teamData[state.teamData.length] = {
            id: state.teamData.length,
            title: state.nameNewTeam,
            people: Math.floor(Math.random() * 100),
            rating: Math.floor(Math.random() * 100),
            location: 'Москва',
            feedback: Math.floor(Math.random() * 100),
            docs: Math.floor(Math.random() * 100) + '%',
        };

        state.nameNewTeam = '';

        this._rerenderTree(store);
    },
    dispatch: function (action) {

        this._state.teamData = teampageReducer(this._state, action);

        this._rerenderTree(store);
    },
};
