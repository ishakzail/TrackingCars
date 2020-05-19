import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'

const Routes  = () =>{
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>  
        </>
    )
}
export default Routes