import { Alert, Collapse } from "antd";
import { useSelector } from "react-redux"
import { RootState } from '../../../../reducers/rootReducer';
import { PanelEquipInfo } from "./PanelEquipInfo";
const {Panel} = Collapse

const EquipmentInformation = () => {
    const  {checkEquip,msg,error} = useSelector( (state:RootState) => state.equipments);
    if((!checkEquip.length) && error){
        return <Alert type="error" message={msg} className="custom-alert" />
    }
    return (
        <div>           
              <PanelEquipInfo
                checkEquip={checkEquip}
              />
        </div>
    )
}

export default EquipmentInformation
