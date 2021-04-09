import React from 'react'
import arrayPersonajes from '../rickandmorty.json'
import Personaje from './personaje'

class Container extends React.Component {           
    constructor(props) {
        super(props);
        this.state= {
       
        }
    }
    borrar= (id) => {  
        // console.log(id)
        
            let filtrado = arrayPersonajes.filter(function(persona){
             if(persona.id === id){
                 return persona
             }
            // return arrayPersonajes.id == filtrada.id
         })
    
        //  arrayPersonajes.forEach(element => {
             
        //  });

        //  arrayPersonajes.forEach(function(personaje) {
        //      console.log();
        //     if (arrayPersonajes.id === personaje.id) {
        //       return (
        //           arrayPersonajes
                
        //       )
        //     }
        //   });
          
    };
    
render() {
    return(
    <div className="container">
             {
        arrayPersonajes.map((unPersonaje,idx) =>{
            return(
            <Personaje personajeAMostrar={unPersonaje} key={idx} color= "green"
            id={unPersonaje.id}
            img={unPersonaje.image}
            name={unPersonaje.name}
            species={unPersonaje.species}
            origin={unPersonaje.origin.name}
            status={unPersonaje.status}
            gender={unPersonaje.gender}
            borrarTarjeta = {this.borrar}
            />
            )
              })
                }
    </div>
 )

}
}

export default Container