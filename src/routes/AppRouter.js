import  { useEffect ,useState } from 'react'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase-config';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route    
  } from 'react-router-dom';

import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import Login from '../components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from '../components/app/MainPage';
import SpinnerScreen from '../components/layout/SpinnerScreen/SpinnerScreen';
import { signInSucess } from '../actions/authActions';




const AppRouter = () => {
    const dispatch = useDispatch();
    const {isAuth,loading} = useSelector(state => state.auth)
    
    const [IsLoading, setIsloading] = useState(true)    
    useEffect(() => {
       setIsloading(loading)
    }, [loading])
    useEffect(() => {        
        // check if the user sesion is active
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //the sesion is active
                dispatch(signInSucess(user))
              console.log(user)
            } else {
                console.log(user)
            }
          });
    }, [dispatch])

    if(IsLoading )return <SpinnerScreen/>
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
