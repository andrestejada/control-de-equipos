import { EquipAction, formEquipmentType } from "../types/equipmentTypes";

interface Equipments{
    checkEquip:formEquipmentType[],
    msg:string,
    error:boolean
}
const initialState:Equipments={
    checkEquip:[],
    msg:'',
    error:false
}

export const equipmentsReducer=(state: Equipments = initialState, action: EquipAction)=> {
    switch (action.type) {
        case 'CHEKING_SUCCESS':
            return {
                ...state,
                checkEquip: action.payload,
                msg:'',
                erro:false
            };
        case 'CHEKING_FAIL':
            return {
                ...state,
                checkEquip:[],
                msg: action.payload,
                error: true,
            };
        case 'CHEKING_CLEAN':
            return initialState
        default:
            return state;
    }
}