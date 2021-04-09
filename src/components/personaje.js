import React from 'react'
import{Button} from 'react-bootstrap';
// import arrayPersonajes from '../rickandmorty.json'


class Personaje extends React.Component {

constructor(props) {
    super(props);
    this.state= {
        color: this.props.color,
        colorOriginal:this.props.color,
        valor: this.props.valor
          }
    }

    cambiarColor= (nuevoColor)=>{
        console.log("cambiar color a " + nuevoColor);
        if (this.state.color === this.state.colorOriginal){
        this.setState({color: nuevoColor})
        console.log(this.state.color);
        }
        else{
        this.setState({color: this.state.colorOriginal})
        console.log(this.state.color)
        }
    }

    MouseEnter = (colorEntrar) => {
        if(this.state.color == this.state.colorOriginal) {
            this.setState({color: colorEntrar})
        }
    }

    MouseLeave = (colorViejo) => {
        if(this.state.color == "grey") {
            this.setState({color: colorViejo})
        }
        // console.log("Salgo de la tarjeta a " + colorViejo);
    }


    render(){

        const { img, name, origin,status,gender,species,borrarTajeta,id} = this.props;

        return (
               
            <div className="personaje" style={{backgroundColor: this.state.color}}
            onMouseEnter={this.MouseEnter.bind(this,"grey")}
            onMouseLeave={this.MouseLeave.bind(this,this.state.colorOriginal)}
            >
             <h2>{name}</h2>
             <img className="imgPersonaje" src={img}/>
             <p>Estatus: {status}</p>
             <p>Especie: {species}</p>
             <p>Gender: {gender}</p>
             <p>Origin:{origin}</p>
             <p>{id}</p>
             <Button variant="primary"  onClick={()=>this.cambiarColor("red")}>
                 Cambiar color 
            </Button>
            <br></br>
            <Button variant="danger"  onClick={()=>this.props.borrarTarjeta(id)}>
                 Borrar
            </Button>
        
         </div>
        )
    }
}

export default Personaje;
