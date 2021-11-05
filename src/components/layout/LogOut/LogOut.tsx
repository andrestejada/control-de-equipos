import { PoweroffOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { logOutSesion } from '../../../actions/authActions';
const LogOut = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const dispatch = useDispatch();
    const logOut =async()=>{
        setIsLoading(true)
        await dispatch(logOutSesion())
        setIsLoading(false)
    }
    return (
        <>
            <Button
                className='btn-float'
                type="primary"
                icon={<PoweroffOutlined />}
                loading={isLoading}
                size='large'
                htmlType='button'
                danger
                shape='circle'
                onClick={logOut}
            />
        </>
    )
}

export default LogOut
