import { Alert, Collapse } from "antd";
import { useSelector } from "react-redux"
import { RootState } from '../../../../reducers/rootReducer';
import { PanelEquipInfo } from "./PanelEquipInfo";

const EquipmentInformation = () => {
    const  {checkEquip,msg,error} = useSelector( (state:RootState) => state.equipments);
    const infoText='Busca un equipo por tag , marca , magnitud recuerda que si no coincide debes escribirlo tal cual como lo guardaste'
    if((!checkEquip.length)){
        return <Alert type="success" message={infoText} className="custom-alert" />
    }
    

    if((!checkEquip.length) && error){
        return <Alert type="error" message={msg} className="custom-alert" />
    }
    
    return (
        <>           
              <PanelEquipInfo
                checkEquip={checkEquip}
              />
        </>
    )
}

export default EquipmentInformation
