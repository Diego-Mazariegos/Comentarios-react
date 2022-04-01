import  React  from "react";
import { AddComment } from "../addComment";
import { Comment } from "../comment";
import { OpenModal } from "../commentsModal";
import { Context } from "../context";
import { Respuestas } from "../respuestas";
import { Container } from 'react-bootstrap'
function AppUI(){
    const {
        comentarios,
        setComentarios,
        setKey,
        setRespuesta
    } = React.useContext(Context)
    

    const [ openModal, setOpenModal ] = React.useState(false)
    const handleClose = () => {
        setRespuesta('')
        setOpenModal(false)
    };
    const handleShow = (key) => {
        setKey(key);
        setOpenModal(true)
    };


    function CambiarColor(key){
        const comentariosAux = [...comentarios]
        comentariosAux[key].like = true
        comentariosAux[key].counterLikes++
        setComentarios(comentariosAux)
    }

    return (
        <React.Fragment>
            <AddComment />
            {comentarios.map((comentario, key) => (
                <React.Fragment>
                    <Comment 
                    comentario={comentario} 
                    CambiarColor={() => CambiarColor(key)}
                    responder={() => handleShow(key)}
                    key={key}
                    />  
                    <Container className="bg-light border text-center">
                        {comentario.respuestas.length > 0 && (<h1>Respuestas</h1>) }
                        {comentario.respuestas?.map((message) => (
                            <Respuestas text={message} />
                        ))}
                    </Container>
                </React.Fragment>
            ))}
            <OpenModal 
                handleClose={handleClose}
                show={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI }
