import { Form, Input, Button,  Row, Col, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import  {UseForm}  from '../../hooks/useForm';
import { FormEvent, useEffect, useState } from 'react';
import { ValidateEmptyInputs } from '../../helpers/ValidateEmptyInput';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../actions/authActions';
import { RootState } from '../../reducers/rootReducer';

export interface FormLogin{
  email:string;
  password:string;
}
export const LoginForm = () => {
  const dispatch = useDispatch();
  const {message,errorMsg} = useSelector((state:RootState) => state.messages)
  const initialState ={
    email:'',
    password:'',    
  }
  useEffect(() => {
    setError(errorMsg)
    setMsg(message)
  }, [message,errorMsg])
  //get the form values
  const [values,handleOnChange] = UseForm<FormLogin>(initialState)
  const {email,password} = values;
  //validation messages
  const [msg, setMsg] = useState<String>('')
  const [error, setError] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)
  console.log(msg,error);

  const handleOnSubmit=(e:FormEvent)=>{
    e.preventDefault();
    setLoading(true)

    //validate empty fields
    const isEmptyFields = ValidateEmptyInputs(values)
    if(isEmptyFields){
      setMsg('Todos los campos son obligatorios')
      setError(true)
      setLoading(false)
      return
    }
   
 
    //sing In
    setError(false)
    setLoading(false)
    dispatch( signIn(email,password) )
    

  }
  return (
    <>
    <Row justify="center" align='middle' style={{height:'78vh'}} >
      <Col xs={{span:22}} sm={{span:14}} md={{span:10}} >
      <div className='form-login-container' >
      <h2>Inicio de sesión</h2>
      <form  
        onSubmit={handleOnSubmit} 
      >
        <Form.Item       
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
            type='text'
            name='email'
            value={email}
            onChange={handleOnChange}
            
          />
        </Form.Item>
        <Form.Item                     
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleOnChange}
            value={password}                       
          />
        </Form.Item>
        
        <Form.Item>
          <Button          
            type='primary'
            htmlType='submit'
            className='login-form-button'
            block
          >
            Iniciar Sesión
          </Button>
        
        </Form.Item>
      </form>
      {
        error 
        ?
        <Alert
          message="Error"
          description={msg}
          type="error"
          showIcon
        />
        : null
      }
      {
        loading
        ?
        <Row justify='center' align='middle' >
          <Col>
            <Spin size="large" tip="Cargando..." />
          </Col>
        </Row> 
        :null
      }
      </div>
      </Col>
    </Row>
    
    </>
  )
}
