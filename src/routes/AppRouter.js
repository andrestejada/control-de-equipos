import React, { useEffect ,useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route    
  } from 'react-router-dom';

import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import Login from '../components/login/Login';
import { useSelector } from 'react-redux';
import MainPage from '../components/app/MainPage';
import SpinnerScreen from '../components/layout/SpinnerScreen/SpinnerScreen';




const AppRouter = () => {
    // const dispatch = useDispatch();
    const {isAuth,loading} = useSelector(state => state.auth)
    

    if(loading )return <SpinnerScreen/>
    return (
        <Router>
        <div>
            <Switch>
                <PublicRoute 
                    path="/login"
                    component={ Login }
                    isAuthenticated={ isAuth }
                />
                
                <PrivateRoute 
                    isAuthenticated={ isAuth }
                    path="/"
                    component={ MainPage} 
                />

            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter
