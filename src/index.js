import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import SocialProfiles from './SocialProfiles';

const history = createBrowserHistory();

ReactDOM.render(
<Router history ={history}>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/social' component={SocialProfiles}/>
    </Switch>
</Router>, 
document.getElementById('root'));