import  React  from "react";
import { Modal, Button, FloatingLabel,Form } from "react-bootstrap";
import { Context } from "../context";
import { BsXCircleFill } from 'react-icons/bs'
import { Respuestas } from '../respuestas'
function OpenModal(props){
    const {
        respuesta,
        setRespuesta,
        comentarios,
        setComentarios,
        key
    } = React.useContext(Context)


    function onChangeValue(event){
        setRespuesta(event.target.value);   
    } 
    

    function saveRespuesta(){
        if(respuesta != ""){
            setRespuesta('')
            const stateAux = [...comentarios];
            stateAux[key].respuestas = [...stateAux[key].respuestas, respuesta]
            setComentarios(stateAux);
            props.handleClose() 
        }
    }

    return(
        <React.Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header>
                    <Modal.Title>Responder comentarios</Modal.Title>
                    <Button variant="white" onClick={props.handleClose}><BsXCircleFill/></Button>
                </Modal.Header>
                <Modal.Body>  
                    <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                        as="textarea"
                        placeholder="Ingrese un comentario"
                        style={{ height: '100px' }}
                        value={respuesta}
                        onChange={onChangeValue}
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer className="space-between">
                    <Button variant="danger" onClick={props.handleClose}>
                        Cancelar
                    </Button>
                
                    <Button variant="success"  onClick={saveRespuesta}>
                        Responder
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export {OpenModal}