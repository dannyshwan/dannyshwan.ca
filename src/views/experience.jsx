import React from 'react';
import '../styles/experience.scss';
import { Modal, Row, Col } from 'antd';

export class Experience extends React.Component{

   render(){
      return(
         <section style={{ flexDirection: "column" }}>
            <h1 id="experience_header">Click on a box to learn more!</h1>
            <div>
               <Row style={{background: "red", width: "50vw"}}>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
               </Row>
            </div>
         </section>
      );
   }
}