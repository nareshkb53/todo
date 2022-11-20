import React, { useState, useRef } from 'react';
import { Button, Modal, Input, Row, Col, Divider, notification  } from 'antd';
import App from '../../App';
import axios from 'axios';

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const nameRef=useRef(null);
  const emailRef=useRef(null);
  const password=useRef(null);
  const rpassword=useRef(null);

  if(!isSignUp){
      return(
          <App/>
      )
  }
  const customNotification=(msg, dec)=>{
    notification.open({
        message: msg,
        description:dec,
        onClick: () => {
        console.log('Notification Clicked!');
        },
    });
  }
  const createUser=()=>{
      const userInfo={name:nameRef.current.value, email:emailRef.current.value, "password":password.current.value, rpwd:rpassword.current.value}
      if(!userInfo.name && !userInfo.email ){
            return customNotification("ERROR!", "All Field Required")
            
      }
      if(userInfo.password!=userInfo.rpwd){
             return customNotification("Password!", "Password and confrim password didn't match")
      }
      delete userInfo.rpwd;
      axios.post("http://localhost:3005/api/v1/register", userInfo).then(v=>{
            if(v.data.errno){
                return customNotification('ERROR', v.data.message);
            }
            setIsSignUp(!isSignUp);
            return customNotification('SUCCESS', v.data.message);            
      });

  }
  
  return (
    <Row>
      <Col span={12} offset={6}>
        <div className='Login'>
            <Divider plain><h3>Sign-up</h3></Divider>
            Name:<input placeholder='Enter Your Email' ref={nameRef} className='inputLogin' />
            Email:<input placeholder='Enter Your Email' ref={emailRef} className='inputLogin' />
            Password:<input   placeholder='Enter Your Password' ref={password} type='password' className='inputLogin' />
            Confrim-Password:<input   placeholder='Enter Your Password' ref={rpassword} type='password' className='inputLogin' />
            <Row>
                <Col span={12} offset={6}>
                    <Button type="primary"  className='inputLogin button' size='large' onClick={()=>createUser()} > Sign-up  </Button>
                    <Button type="default"  className='inputLogin button' size='large' onClick={()=>setIsSignUp(!isSignUp)}> Login  </Button>
                    
                </Col>
            </Row>
        </div>
      </Col>
    </Row>
    
  );
};
export default Signup;