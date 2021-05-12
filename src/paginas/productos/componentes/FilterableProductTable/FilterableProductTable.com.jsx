import React from 'react';
import Equipos from '../Equipos/Equipos.com';
import Inscripcion from '../Inscripcion/Inscripcion.com';
import SearchBar from '../search-bar/search-bar.com';
import InscripcionEquipo from '../InscripcionEquipo/InscripcionEquipo.com';
import './FilterableProductTable.style.css';


const FilterableProductTable = (props) => {
    return (
    <div className="fpt-container" >
        
        
            <SearchBar/>
            

                
                <div className="Jugador">
                    
                    <div className='table1'>JUGADORES (ROJO MENORES DE 25 AÑOS)</div>
                    <center><table className="table">
                    <tr>
                        <td>EQUIPO</td>
                        <td>----</td>
                        <td>CEDULA</td>
                        <td>NOMBRE</td>
                        <td>APELLIDO</td>
                        <td>EDAD</td>
                        <td>----</td>
                        <td>POSICION</td>
                    </tr>
                    </table></center>
                    
                    <table >
                        <tr>
                            <td><Inscripcion 
                            Liga={props.Liga}
                            onAddJugador={props.onAddJugador}
                            /></td>
                        </tr>
                    </table>
                
                </div>
                
            <div className='table2'>EQUIPOS</div>
            <div className="Equipo">

                    <center><table className="table">
                    <tr>
                        <td>ID</td>
                        <td>NOMBRE</td>
                        <td>CIUDAD</td>
                        <td>PAIS</td>
                    </tr>
                    </table></center>     
                         
                    <center><table>
                        <tr>
                            <InscripcionEquipo 
                            Liga={props.Liga}
                            onAddEquipo={props.onAddEquipo}
                            />
                        </tr>
                    </table></center>
            </div>
            
            
            
        
    </div>
    );
}

export default FilterableProductTable;