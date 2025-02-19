import React, { useState, useRef } from 'react';
import { Button, Modal, Input, Row, Col, Divider, notification  } from 'antd';
import Signup from './Signup';
import axios from 'axios'

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  
  const emailRef=useRef(null);
  const pwd=useRef(null);

  const customNotification=(msg, dec)=>{
    notification.open({
        message: msg,
        description:dec,
        onClick: () => {
        console.log('Notification Clicked!');
        },
    });
  }
  const userLogin=()=>{
    const emailPass={email:emailRef.current.value, password:pwd.current.value}
    if(emailPass.email && emailPass.password==null){
        return customNotification("ERROR", "Email and Password Required!")
    }
    axios.post("http://localhost:3005/api/v1/login", emailPass).then(v=>{
            if(v.data.error){
                return customNotification('ERROR', v.data.message);
            }
            sessionStorage.setItem('token', v.data.token);
            return customNotification('SUCCESS', v.data.message);            
      });
  }
  if(!isLogin){
      return(
        <Signup/>
      )
  }
  
  return (
    <Row>
      <Col span={12} offset={6}>
        <div className='Login'>
            <Divider plain><h3>Login!!</h3></Divider>
            Email:<input placeholder='Enter Your Email' ref={emailRef} className='inputLogin'/>
            Password:<input   placeholder='Enter Your Password' ref={pwd} type='password' className='inputLogin' />
            <Row>
                <Col span={12} offset={6}>
                    <Button type="primary"  className='inputLogin button' size='large' onClick={()=>userLogin()}> Login  </Button>
                    <Button type="default"  className='inputLogin button' size='large' onClick={()=>setIsLogin(!isLogin)}> Sign-up  </Button>
                </Col>
            </Row>
        </div>
      </Col>
    </Row>
    
  );
};
export default Login;
