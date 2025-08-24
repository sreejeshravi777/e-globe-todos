import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Login: React.FC = () => {
    return (
        <div style={{backgroundColor:'#e8e8e8        '}}>
            <Container>
                <Row>

                    <Col xs={4}>
                        <div className="todoCard">
                            <div className="todoIcon my-2">
                                <img src="https://img.freepik.com/free-photo/3d-illustration-pen-putting-blue-ticks-paper_107791-15675.jpg?semt=ais_hybrid&w=740&q=80"/>
                            </div>
                            <div>
                                <div className="todoTitle my-2">
Wake up
                                </div>
                                <div className="todoDetails mt-3">
                                    <span className="createdBy">sree</span>
                                    <span className="createdTime">12-2-1222</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;