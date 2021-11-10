
export interface formEquipmentType{
    tag:string;
    descripcion:string;
    ubicacion:string;
    marca:string;
    modelo:string;
    magnitud:string;
    crv:string;
    urv:string;
    densidad:string;
    altura:string;
    observaciones:string;
}


export const CHEKING_SUCCESS ="CHEKING_SUCCESS"
export const CHEKING_FAIL ="CHEKING_FAIL"

interface CheckingSuccess{
    readonly type:  'CHEKING_SUCCESS',
    payload:formEquipmentType[] 
}
interface CheckingFail{
    readonly type: 'CHEKING_FAIL',
    payload:string
}
interface CheckingClean{
    readonly type: 'CHEKING_CLEAN',    
}

export type EquipAction = 
            | CheckingSuccess 
            | CheckingFail
            | CheckingClean