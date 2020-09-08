import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addDataTeam, updateTextTeam } from './redux/state';

export const rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App teamData={state.teamData}
                updateNameTeam={state.updateNameTeam}
                addBand={addDataTeam}
                updateTextTeam={updateTextTeam}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}