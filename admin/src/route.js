import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

const Routes  = () =>{
    const TOKEN = localStorage.getItem('TOKEN');
    return(
        <>
        <BrowserRouter>
            <Switch>
            
                <Route exact path="/home" component={TOKEN ? Home : Login}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>  
        </>
    )
}
export default Routes