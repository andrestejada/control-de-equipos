import { formEquipmentType } from '../../../../types/equipmentTypes';
import { Collapse } from 'antd';
import { FormEquipments } from './FormEquipments';
const {Panel} = Collapse
interface props{
    checkEquip:formEquipmentType[]
}

export const PanelEquipInfo = ({checkEquip}:props) => {
    
    return (
        
        <Collapse accordion style={{margin:'1rem 0'}}>
                  {
                      checkEquip.map((e)=>(
                        <Panel 
                            header={`Tag: ${e.tag} Nombre: ${e.descripcion} Marca: ${e.marca}`} 
                            key={e.tag}                  
                        >
                            <FormEquipments
                                equipment={e}
                            />
                        </Panel>
                      ))
                  }                
        </Collapse>
      
            
        
    )
}
