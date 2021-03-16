import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Creation from './pages/Creation'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/creation" component={Creation} />
        </Switch>
    </Router >
)

export default Routes