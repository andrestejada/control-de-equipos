import { Action, AnyAction } from 'redux'
import { SING_IN_SUCCESS, START_LODING } from '../types/index';

const initialState={
    isAuth:false,
    loading:false,
    user:{}
}

export const authReducer =(state=initialState,action:AnyAction)=>{
    switch(action.type){
        case SING_IN_SUCCESS:
            return{
                ...state,
                isAuth:true,
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
        default :
        return initialState
    }
}