import { Alert, Input } from 'antd';
import { useState } from 'react';
import Spinner from '../../../layout/Spinner/Spinner';
import EquipmentInformation from './EquipmentInformation';
import { searchEquipments } from '../../../../actions/equipmentActions';
import { useDispatch } from 'react-redux';

const { Search } = Input;

const CheckInformation = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [msg, setMsg] = useState<String>('');
    const [error,setError]=useState<boolean>(false)
   
    const onSearch = async(value:string) => {
        setIsLoading(true)
        if(value.trim() === ""){
            setMsg('Debes ingresar un termino de busqueda');
            setIsLoading(false);
            setError(true)
            return
        }
        await dispatch( searchEquipments(value))
        setError(false)
        setIsLoading(false)

    }
    return (
        <div>
            <Search
                placeholder="busca por tag , marca , descripcion, magnitud"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            
            {
                isLoading
                ? <Spinner />
                :null
            }
            {
                error
                ?              
                <Alert className='custom-alert' message={msg} type="error" showIcon />
                
                :null

            }
            <EquipmentInformation/>
            
        </div>
    )
}

export default CheckInformation
