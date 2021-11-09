import { MessageAction } from '../types/messageTypes';

interface Messages{
    message:string,
    errorMsg:boolean
}
const initialState:Messages={
    message:'',
    errorMsg:false
}

export const messagesReducer =(state:Messages=initialState,action:MessageAction)=>{
    switch(action.type){
        case 'auth/user-not-found':
            return{
                ...state,
                message:'El email no se encuentra registrado',
                errorMsg:true
            }
        case 'auth/wrong-password':
            return{
                ...state,
                message:'La contraseña es invalida',
                errorMsg:true
            }
        
        default :
        return state
    }
}