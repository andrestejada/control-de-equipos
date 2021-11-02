import { db } from "../firebase/firebase-config";
import {  doc, setDoc } from "firebase/firestore";
import { formEquipmentType } from '../types/equipmentTypes';
import Swal from "sweetalert2";



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