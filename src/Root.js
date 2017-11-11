// import store, maybe component 
import React from 'react'
import { Provider } from 'react-redux'
import {Router} from 'react-router'
import {Switch, Route } from 'react-router-dom'
import Game from './components/Game.jsx'
import history from './history'
import store, { getMemoryBoard } from './redux/reducer'

//TODO: read more about browserRouter
//TODO: change the import to be * 

const testOne = () => (<h1>RooteOne</h1>)
const testTwo = () => (<h1>RooteTwo</h1>)

const Root = (
    <Provider store={store}>
        <Router history={history}>
        <Switch>
        <Route exact path="/xo" component={Game} />
            <Route exact path="/hello" component={testOne} />                
            <Route exact path="/home" component={testTwo} />
            <Route component={Game} />

        </Switch>
        </Router>
     </Provider>
)

export default Root

