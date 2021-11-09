import {  AnyAction } from 'redux';
import { SING_IN_SUCCESS, START_LODING, START_SING_OUT, SIGN_IN_FAIL } from '../types/index';

interface Auth{
    isAuth:boolean,
    loading:boolean,
    user:object
}

const initialState:Auth={
    isAuth:false,
    loading:false,
    user:{}
}

export const authReducer =(state:Auth=initialState,action:AnyAction)=>{
    switch(action.type){
        case SING_IN_SUCCESS:
            return{
                ...state,
                isAuth:true ,
                loading:false,
                user:{
                    uid:action.payload.uid
                }
            }
            case START_LODING:
                return{
                    ...state,
                    loading:action.payload
                }
            case SIGN_IN_FAIL:
                return{
                    ...state,
                    isAuth:false,
                    loading:false,
                }
            case START_SING_OUT:
                return initialState
        default :
        return state
    }
}