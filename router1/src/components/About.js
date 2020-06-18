import React from "react";
import User from "./User";
import { Switch, Route, useRouteMatch } from "react-router-dom"


export default function About() {

    let match = useRouteMatch();
    return (
        <>
            <h1>About</h1>
            <Switch>
                <Route exact path={`${match.url}/frank`}>
                    <User name="Frank" />
                </Route>
                <Route exact path={`${match.url}/ute`}>
                    <User name="Ute" />
                </Route>
            </Switch>
        </>
    );

}