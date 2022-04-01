import React from "react";
import { InputGroup, FormControl, Container, Button } from "react-bootstrap";
import {Context} from "../context";
function AddComment(){
    const{
        individual,
        setIndividual,
        setComentarios,
        comentarios,
    } = React.useContext(Context)
    



    const individualT = {...individual}
    function onChangeInput(event){
        individualT.text = event.target.value
        setIndividual(individualT)
    }

    function AddComentarios(){
        if (individualT.text != "") {
            const aux = [...comentarios]
            aux.push({...individual})
            setComentarios(aux)
            individualT.text = ""
            setIndividual(individualT)
        }
    }

    return (
        <Container >
            <InputGroup className="mt-3">
                <FormControl
                    value={individualT.text}
                    onChange={onChangeInput}
                    placeholder="Ingrese un comentario"
                />
            </InputGroup>
            <InputGroup className="mt-3 justify-content-center">
            <Button
                variant="primary"
                onClick={AddComentarios}
                >Agregar</Button>
            </InputGroup>
        </Container>
    )
}

export { AddComment }