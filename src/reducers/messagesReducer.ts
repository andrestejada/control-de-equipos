import { AnyAction } from 'redux'
interface Messages{
    message:string,
    errorMsg:boolean
}
const initialState={
    message:'',
    errorMsg:false
}

export const messagesReducer =(state=initialState,action:AnyAction)=>{
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
        return initialState
    }
}