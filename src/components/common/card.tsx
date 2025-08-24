import React from "react";
import { Col } from "react-bootstrap";
import { Todo } from "../../types/type";

function CardView ({cardData}: { cardData: Todo }) {
    return (
                    <Col  className="centerAlign">
                         
                        <div className="todoCard">
                        <div className="todoDetails ">
                                    <span className="createdBy">Created By:- {cardData?.userId}</span>
                                    <span className="createdTime">{cardData?.completed}</span>
                                </div>
                            <div className="todoIcon my-1">
                                <img src="https://img.freepik.com/free-photo/3d-illustration-pen-putting-blue-ticks-paper_107791-15675.jpg?semt=ais_hybrid&w=740&q=80"/>
                            </div>
                            <div>
                                <div className="todoTitle my-2">
                                    {cardData?.todo}
                                </div>
                               
                            </div>
                        </div>
                    </Col>
     
    );
};

export default CardView;