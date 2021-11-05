import { signInWithEmailAndPassword ,signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import {  SING_IN_SUCCESS } from '../types';
import { authMessages } from './messagesActions';
import { START_LODING, START_SING_OUT } from '../types/index';



export const signIn =(email:string,password:string)=>{

    return async(dispatch:any)=>{
        try {
            dispatch(startLoading(true))
            const user = (await signInWithEmailAndPassword(auth,email,password)).user
            dispatch(signInSucess(user))
        } catch (error:any) {                        
            dispatch(authMessages(error.code))
        }
    }
}

export const signInSucess=(data:any)=>({
    type:SING_IN_SUCCESS,
    payload:data
})


export const startLoading=(state:boolean)=>({
    type:START_LODING,
    payload:state
})

export const logOutSesion =()=>{

    return async(dispatch:any)=>{
        try {
           await signOut(auth)
           dispatch(startsignOut())
        } catch (error:any) { 
            console.log(error)                       
        }
    }
}

export const startsignOut=()=>({
    type:START_SING_OUT,
})