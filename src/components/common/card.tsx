import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Todo } from "../../types/type";

function CardView ({cardData}: { cardData: Todo }) {
    return (
   
                    <Col xs={4}>
                        <div className="todoCard">
                            <div className="todoIcon my-2">
                                <img src="https://img.freepik.com/free-photo/3d-illustration-pen-putting-blue-ticks-paper_107791-15675.jpg?semt=ais_hybrid&w=740&q=80"/>
                            </div>
                            <div>
                                <div className="todoTitle my-2">
                                    {cardData?.todo}
                                </div>
                                <div className="todoDetails mt-3">
                                    <span className="createdBy">{cardData?.userId}</span>
                                    <span className="createdTime">{cardData?.completed}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
            //         {/* <Col xs={6}>2 of 3 (wider)</Col>
            //     </Row>
            // </Container> */}
        //</div>
    );
};

export default CardView;