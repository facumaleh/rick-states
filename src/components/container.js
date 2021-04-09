import React from 'react'
import arrayPersonajes from '../rickandmorty.json'
import Personaje from './personaje'

class Container extends React.Component {           
    constructor(props) {
        super(props);
        this.state= {
       
        }
    }
    borrar= (id ) => {  
        // console.log("hola")
        //  var filtrado= arrayPersonajes.filter(function(filtrada){
        //      if ({filtrada === {arrayPersonajes.id}}) {
                
        //      }
        //  })
    
    };
    
render() {
    return(
    <div className="container">
             {
        arrayPersonajes.map(function(unPersonaje,idx){
            return(
            <Personaje personajeAMostrar={unPersonaje} key={idx} color= "green"
            id={unPersonaje.id}
            img={unPersonaje.image}
            name={unPersonaje.name}
            species={unPersonaje.species}
            origin={unPersonaje.origin.name}
            status={unPersonaje.status}
            gender={unPersonaje.gender}
            borrarTarjeta = {()=>this.borrar()}
            />
            )
              })
                }
    </div>
 )

}
}

export default Container