import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { messagesReducer } from './messagesReducer';
const rootReducer = combineReducers({
   auth:authReducer,
   messages:messagesReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;