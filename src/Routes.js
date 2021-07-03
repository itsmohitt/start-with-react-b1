import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

class Routes extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        return <React.Fragment>
            <Switch>
                <Route exact path="/:username" render={() => <UserDetails/>}/>
                <Route exact path="/" render={() => <Home/>}/>
            </Switch>
        </React.Fragment>
    }
}

export default Routes;