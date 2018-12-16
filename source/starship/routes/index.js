// Core
import { hot } from 'react-hot-loader';

import React, { Component } from 'react';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';

// Components
import { Nav, ConnectedBridge, Panel, ConnectedProfile, Starship } from '../components';
import { book } from './book';

@hot(module)
export class Routes extends Component {
    render() {
        return (
            <>
                <Route
                    component = { Nav }
                    path = '/'
                />
                <Switch>
                    <Route
                        exact
                        component = { ConnectedBridge }
                        path = { book.root }
                    />
                    <Route
                        exact
                        component = { Panel }
                        path = { book.panel }
                    />
                    <Route
                        exact
                        component = { ConnectedProfile }
                        path = { book.profile }
                    />
                    <Route
                        exact
                        render = {props => <Starship {...props} />}
                        path = { book.starship }
                    />
                    <Redirect to = { book.root } />
                </Switch>
            </>
        );
    }
}
