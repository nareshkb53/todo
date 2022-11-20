import {  Col, Row, Card } from 'antd';
import { AiOutlineDelete,AiTwotoneEdit } from "react-icons/ai";

const Project=(props)=>{
    const todos=[1,2,3,4];
    return(
        <Row>
            <Col span={16}>
                <Row>
                    <Col span={11} className='colProject'>
                        <Card title="Project ABC" size="small" extra={<><AiTwotoneEdit/> <AiOutlineDelete/></>}>
                            <p><b>To Do</b></p>
                            {
                               todos.map(v=>(
                                   <p>
                                        <input type="checkbox"/>todo {v}
                                   </p>
                               )) 
                            }
                            <p><b>Done</b></p>
                            {
                               todos.map(v=>(
                                   <p>
                                   <input type="checkbox" checked/>todo {v}
                                   </p>
                               )) 
                            }
                            <hr/>
                            <input type='text' placeholder="Task"/> <button>Add</button>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col span={7} className='colProject '>
                <Card title="Create a New Project" className='createProject' size="small">
                    <input placeholder='Project name' className='inputDesign'/>
                    <button className='buttonDesign'>Create Project</button>
                </Card>
            </Col>
        </Row>
    )
}
export default Project;