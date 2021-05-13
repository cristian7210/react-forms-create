import React, { useState } from 'react';
import Equipos from '../Equipos/Equipos.com';
import './InscripcionEquipo.style.css';

const InscripcionEquipo = (props) => {

  const [idEquipo,setidEquipo]= useState('');
  const [name,setName]= useState('');
  const [ciudad,setCiudad]= useState('');
  const [pais,setPais]= useState('');
  
  

  const addEqu = (event)=>{
    event.preventDefault();

    const newEquipo = {
      
      id:idEquipo,
      name:name,
      ciudad:ciudad,
      pais:pais,
      jugador:[],
      
    };
    
    props.onAddEquipo(newEquipo,idEquipo);
     
    }


     return (

      
      <div classname="pt-container">
        <div>
          {props.Liga.map((equipo,index)=>{
               return (
                <React.Fragment key={equipo.Id}>
           
                    <Equipos 
                        key={equipo.Id} 
                        equipo={equipo}
                        
                    />

                </React.Fragment>
            );
        })}
        </div>

        <div className="formulario">
          <form>
           <center> <table>
                  <tr>
                    <td>ID</td>
                    <td>NOMBRE</td>
                    <td>CIUDAD</td>
                    
                  </tr>

                  <tr>
                    <td>
                      <input 
                      type="number" 
                      value={idEquipo}
                      onChange={(event)=>{
                        setidEquipo(event.target.value);
                      }}/>
                    </td>
                                    
                    <td>
                      <input 
                      type="text" 
                      value={name}
                      onChange={(event)=>{
                        setName(event.target.value);
                      }}/>
                    </td>
                    <td>
                      <input 
                      type="text" 
                      value={ciudad}
                      onChange={(event)=>{
                        setCiudad(event.target.value);
                      }}/>
                    </td>
                   
                    
                 </tr>
                 <tr>
                  <td>PAIS</td>
                 </tr>

            <tr>
              <td>
                      <input 
                        type="text" 
                        value={pais}
                        onChange={(event)=>{
                        setPais(event.target.value);
                        }}/>
                      </td>
              <td>
                <button onClick={addEqu}>
                AÑADIR EQUIPO
                </button>
              </td>

            </tr>
            </table></center>
          </form>
        </div>

      </div>
  
    );
}

export default InscripcionEquipo;