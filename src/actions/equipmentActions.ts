import { db } from "../firebase/firebase-config";
import {  doc, setDoc ,where,query, collection, getDocs, DocumentData } from "firebase/firestore";
import { formEquipmentType, EquipAction } from '../types/equipmentTypes';
import Swal from "sweetalert2";
import {  Dispatch } from "redux";



export const saveNewEquipment =(data:formEquipmentType)=>{
    const {tag,descripcion}= data
    return async (dispatch:any)=>{
        try {
            await setDoc(doc(db,`equipos`,tag),data)
            Swal.fire({
                title: 'Equipo Guardado con exito',
                text: `el equipos ${tag} ${descripcion} se ha guardado correctamente`,
                icon: 'success',                
              })
              
        } catch (error) {
            console.log(error)
        }
        
    }
}
export const searchEquipments =(term:string)=>{
    return async (dispatch:Dispatch<EquipAction>)=>{
        try {
            const searchTerm:string[] = ['marca','tag']
            let searchResults:any[] = []
            for (let i = 0; i < searchTerm.length; i++) {
                const q = query(collection(db, "equipos"), where(`${searchTerm[i]}`, "==", term));
                const querySnapshot = await getDocs(q);
                    if(querySnapshot.size){
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            searchResults.push( doc.data());
                        });
                    }                                
            }
            if(searchResults.length){
                dispatch(searchEquipmentsSucess(searchResults))                 
            }else{
                dispatch(searchEquipmentsFail(`No se encontraron coicidencias del termino "${term}" `))                
            }
        } catch (error) {
            console.log(error)
        }
        
    }
}

const searchEquipmentsSucess=(data:formEquipmentType[]):EquipAction=>({
    type:'CHEKING_SUCCESS',
    payload:data
})
const searchEquipmentsFail=(msg:string):EquipAction=>({
    type:'CHEKING_FAIL',
    payload:msg
})
