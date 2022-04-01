import React  from "react";
import { Card } from 'react-bootstrap'
import { BsSuitHeartFill } from 'react-icons/bs'
import { Button, Row, Col, } from "react-bootstrap";
import {BiCommentDetail} from 'react-icons/bi'
import './comment.css'
function Comment(props){
    return (
        <React.Fragment>
            <Card className="mt-3" body >
                <Row  className="align-items-center">
                    <Col md={11}>
                    { props.comentario.counterLikes }
                    <BsSuitHeartFill 
                        onClick={props.CambiarColor} 
                        className={`Icon Icon-check mr-2 ml-1 ${props.comentario.like && 'Icon-check--active  mr-2 ml-1'}`}
                    />
                    {props.comentario.text}
                    </Col>
                    <Col md={1}>
                        <Button 
                            variant="success"
                            onClick={props.responder}
                            >
                                <BiCommentDetail/> Responder
                        </Button>{' '}
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )
}

export { Comment }