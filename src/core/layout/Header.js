import { Layout, Col, Row, Dropdown, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineLogout } from "react-icons/ai";
import App from '../../App';


const { Header} = Layout;
const Headers=()=>{
    const [token, setToken]=useState(sessionStorage.getItem('token'));
    const style={
        background:'#efefef',
        border:'1px solid #efefef'
    }
    const logout=()=>{
        sessionStorage.removeItem('token')
        setToken('');
        return(<App/>)
    }
    const menu = (
        <Menu>
          <Menu.Item onClick={()=>logout()}>Logout</Menu.Item>
        </Menu>
      );
    return(
        <Layout >
            <Header style={style}>
            <Row>
                <Col span={21}><b>Naresh Todo List</b></Col>
                <Col span={3}>
                    <Dropdown overlay={menu}>
                        <a>Naresh <AiOutlineDown/></a>
                    </Dropdown>
                </Col>
            </Row>
            </Header>
        </Layout>
    )
}
export default Headers