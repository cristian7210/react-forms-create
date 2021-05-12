import React from 'react';
import Equipos from '../Equipos/Equipos.com';

import './Jugador1.style.css';


const Jugador1 = (props) => {
    return (
        
        
        <center>  <table>  
               <div className="pr-container">

               

                <tr> 
                   
                    <td><div className="rt-container">{props.NombreEquipo}</div></td>
                    <td><div className="rt-container">{' ---- '}   </div></td>

                    <td><div className="rt-container">{'   '}   {props.jugador.cedula}</div></td>
                    <td><div className="rt-container">{'   '}   {props.jugador.nombre}</div></td>
                    <td><div className="rt-container">{'   '}   {props.jugador.apellido}</div></td>

                    {props.jugador.edad <=25

                    ?//if = true
                    
                    <td> <div className="rt-container"> <spam className="pr-stock">{props.jugador.edad}</spam></div></td>
                    
                    :// else

                    <td><div className="rt-container">{props.jugador.edad}</div></td>
                    }
                    
                    
                    
                    <td><div className="rt-container">{' ---- '}   </div></td>
                    <td><div className="rt-container">{'   '}   {props.jugador.posicion}</div></td>
             </tr>
                
            </div>
        </table></center>
    );
}

export default Jugador1;