import  React  from "react";

const Context = React.createContext();

function Provider(props){

    const [comentarios, setComentarios] = React.useState([])
    const [individual, setIndividual]  = React.useState({text: '', like: false, counterLikes: 0, respuestas: [] })
    const [key, setKey] = React.useState('')
    const [respuesta, setRespuesta] = React.useState('')

    return (
        <Context.Provider value={{
            comentarios,
            setComentarios, 
            individual,
            setIndividual,
            key,
            setKey,
            respuesta,
            setRespuesta,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, Provider}