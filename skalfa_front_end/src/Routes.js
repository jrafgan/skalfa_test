import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import UserList from "./containers/UsersList";
import Register from "./containers/Register";
import Login from "./containers/Login";

const ProtectedRoute = ({isAllowed, ...props}) => {
    return isAllowed ? <Route {...props} /> : <Redirect to="/login"/>
};

const Routes = ({user}) => {
    return (
        <Switch>
            <ProtectedRoute
                isAllowed={user}
                path="/users_list"
                exact
                component={UserList}
            />
            <Route path="/" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    );
};

export default Routes;