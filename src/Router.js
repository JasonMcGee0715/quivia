import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/app/App';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Contributors from './components/contributors/Contributors';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <App {...props}  key={Date.now()} />}/>
            <Route path="/leaders" render={(props) => <LeaderBoard />} />
            <Route path="/contributors" render={(props)=><Contributors />}/>
        </Switch>
    )
}

// Start Router function here //
export default Router
