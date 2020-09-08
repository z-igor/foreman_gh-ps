import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';

import './App.css';

import HeaderContainer from './Components/Header/HeaderContainer';
import AboutContainer from './Components/About/About';
import ListTeam from './Components/ListTeam/ListTeam';
import TeamContainer from './Components/Team/TeamContainer';
import CreateUser from './Components/CreateUser/CreateUser';
import { UI } from './Components/UI';
import CreateMasterContainer from './Components/CreateUser/CreateMaster/CreateMasterContainer';
import CreateLeadMasterContainer from './Components/CreateUser/CreateLeadMaster/CreateLeadMasterContainer';
import CreateCustomerContainer from './Components/CreateUser/CreateCustomer/CreateCustomerContainer';
import SignInContainer from './Components/SignIn/SignInContainer';
import page404 from './Components/pageXXX/404/404';
import PersonalPageContainer from './Components/PersonalPage/PersonalPage';

function App(props) {
  return (
    <HashRouter>
      <div className="app">
        <HeaderContainer />
        <Route exact path="/" render={() => (
            <ListTeam />
        )}/>
        <Route path="/band/:id" component={TeamContainer} />
        <Route path="/signin" component={SignInContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route exact path="/registration" component={CreateUser} />
        <Route path="/personal-page" component={PersonalPageContainer} />
        <Route path="/registration/master" component={CreateMasterContainer} />
        <Route path="/registration/leadmaster" component={CreateLeadMasterContainer} />
        <Route path="/registration/customer" component={CreateCustomerContainer} />
        <Route path="/ui_components"
          render={() => <UI
              state={props.state}
              dispatch={props.dispatch}
            />}
        />
        <Route path="/404" component={page404} />
      </div>
    </HashRouter>
  );
}

export default App;
