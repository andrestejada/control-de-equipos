import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { equipmentsReducer } from "./equipmentsReducer";
import { messagesReducer } from './messagesReducer';
const rootReducer = combineReducers({
   auth:authReducer,
   messages:messagesReducer,
   equipments:equipmentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;