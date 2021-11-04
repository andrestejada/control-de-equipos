import { PageHeader } from "antd"
import { LoginForm } from "./LoginForm";
import './Login.scss'
import { Footer } from "antd/lib/layout/layout";
import { useDispatch } from 'react-redux';


const Login = () => {
   
    return (
      <>
       <PageHeader
          className="site-page-header"          
          title="App Control de Equipos"       
          ghost={true}                      
      />  
        <LoginForm/>
        <Footer style={{ textAlign: 'center',}}>G-met ©2021 Created by Andrés Tejada</Footer>

      </>
    )
}

export default Login
