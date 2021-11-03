import { Alert, Input, Space } from 'antd';
import { useState } from 'react';
import Spinner from '../../../layout/Spinner/Spinner';
const { Search } = Input;

const CheckInformation = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [msg, setMsg] = useState<String>('');
    const [error,setError]=useState<boolean>(false)
    const onSearch = (value:string) => {
        setIsLoading(true)
        if(value.trim() === ""){
            setMsg('Debes ingresar un termino de busqueda');
            setIsLoading(false);
            setError(true)
            return
        }
        setError(false)
        setIsLoading(false)
    }

    return (
        <div>
            <Search
                placeholder="input search text"
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
        </div>
    )
}

export default CheckInformation
