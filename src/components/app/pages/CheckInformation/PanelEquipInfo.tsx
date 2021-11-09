
import { formEquipmentType } from '../../../../types/equipmentTypes';
import { Collapse } from 'antd';
const {Panel} = Collapse
interface props{
    checkEquip:formEquipmentType[]
}

export const PanelEquipInfo = ({checkEquip}:props) => {
    
    return (
        
        <Collapse accordion>
                  {
                      checkEquip.map((e)=>(
                        <Panel 
                            header={`Tag: ${e.tag} Nombre: ${e.descripcion} Marca: ${e.marca}`} 
                            key={e.tag}                  
                        >
                            <p>{e.descripcion}</p>
                        </Panel>
                      ))
                  }                
               </Collapse>
            
        
    )
}
