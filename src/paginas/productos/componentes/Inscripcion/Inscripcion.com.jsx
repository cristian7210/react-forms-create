import React, { useState } from 'react';
import Equipos from '../Equipos/Equipos.com';
import Jugador1 from '../Jugador/Jugador1.com';
import './Inscripcion.style.css';
import FilterableProductTable from '../FilterableProductTable/FilterableProductTable.com'

const Inscripcion = (props) => {

  const [cedula,setCedula]= useState('');
  const [nombre,setNombre]= useState('');
  const [apellido,setApellido]= useState('');
  const [posicion,setPosicion]= useState('');
  const [edad,setEdad]= useState('');
  const [idequipo,setIdequipo]= useState('');

  const addJug = (event)=>{
    event.preventDefault();

    const newjugador = {
      cedula:cedula,
      nombre:nombre,
      apellido:apellido,
      edad:edad,
      posicion:posicion,
      
    };
    
    props.onAddJugador(newjugador,idequipo,cedula,edad);
     
  }

    return (

      
      <div classname="pt-container">
        <div>
        {props.Liga.map((equipo,index)=>{
          return (
            
            <React.Fragment key={equipo.Id}>
             
              {equipo.jugador.map((jugador, index2)=>{
                  return(
                      
                      <Jugador1 
                      key={jugador.Id} 
                      jugador={jugador}
                      NombreEquipo={equipo.name}
                       />
                  );
                })}
            </React.Fragment>
            
            );
        })}
        
        </div>

        
                
        <div className="formulario">
          <form>
           <center> <table  >
                  <tr>
                    <td>CEDULA</td>
                    <td>NOMBRE</td>
                    <td>APELLIDO</td>
                    <td>EDAD</td>
                  </tr>
                  <tr>
                   
                    <td>
                      <input 
                      type="text" 
                      value={cedula}
                      onChange={(event)=>{
                        setCedula(event.target.value);
                      }}/>
                    </td>
                                    
                    <td>
                      <input 
                      type="text" 
                      value={nombre}
                      onChange={(event)=>{
                        setNombre(event.target.value);
                      }}/>
                    </td>
                    <td>
                      <input 
                      type="text" 
                      value={apellido}
                      onChange={(event)=>{
                        setApellido(event.target.value);
                      }}/>
                    </td>
                    <td width='600px'>
                      <input 
                        type="number" 
                        value={edad}
                        onChange={(event)=>{
                        setEdad(event.target.value);
                        }}
                    /></td>
                    
                 </tr>
                    <tr>
              <td> ID EQUIPO</td>
              <td>POSICION</td>
            </tr>
            <tr>
              <td>
                      <input 
                      type="text" 
                      value={idequipo}
                      onChange={(event)=>{
                        setIdequipo(event.target.value);
                      }}/>
                    </td>
              
              <td>
                    <select
                        value={posicion}
                        onChange={(event)=>{
                        setPosicion(event.target.value);
                        }}
                        >
                        <option>-------------------</option>
                        <option value="ARQUERO">ARQUERO</option>
                        <option value="DEFENSA">DEFENSA</option>
                        <option value="VOLANTE">VOLANTE</option>
                        <option value="DELANTERO">DELANTERO</option>
                        </select>
                        
              </td>



              
              
              <td><button onClick={addJug}>
                AÑADIR JUGADOR</button></td>

            </tr>
            </table></center>
          </form>
        </div>
        
      </div>
  
    );
}

export default Inscripcion;