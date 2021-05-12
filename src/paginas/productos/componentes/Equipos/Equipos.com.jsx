import React from 'react';

import './Equipos.style.css';


const Equipos = (props) => {
    return (
        
           
        <center>  <table>  
        <div className="pr-container">

             <tr> 
            
             <td><div className="rt-container">{props.equipo.id}</div></td>
             <td><div className="rt-container">{props.equipo.name}</div></td>
             <td><div className="rt-container">{props.equipo.ciudad}</div></td>
             <td><div className="rt-container">{props.equipo.pais}</div></td>
             
      </tr>
         
     </div>
 </table></center> 
       
        
    )
}

export default Equipos;