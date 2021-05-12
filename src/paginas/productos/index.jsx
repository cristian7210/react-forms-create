import React, {useState} from 'react';
import FilterableProductTable from './componentes/FilterableProductTable/FilterableProductTable.com';



const Productopagba = () => {

  
  let Liga=[
      {
        id:'1',
        name:'AMERICA',
        ciudad:'Cali',
        pais:'colombia',
        jugador:[
          {
              cedula:'12345',
              nombre:"JULIAN",
              apellido:'AGUILAR',
              edad:24,
              posicion:"DELANTERO",
          },
          {
              cedula:'12346',
              nombre:"JOSE",
              apellido:'CALVO',
              edad:21,
              posicion:"ARQUERO",
          },
          
          {
              cedula:'12347',
              nombre:"ABEL",
              apellido:'LOPEZ',
              edad:21,
              posicion:"DELANTERO",
          },
      ]
      },
      {
        id:'2',
        name:"RIVER PLATE",
        ciudad:'Buenos Aires',
        pais:'Argentina',
        jugador:[
            {
              cedula:'543213',
              nombre:"MANUEL",
              apellido:'GARCIA',
              edad:43,
              posicion:"ARQUERO",
            },
            {
              cedula:'345331',
              nombre:"GUSTAVO",
              apellido:'ARANGO',
              edad:47,
              posicion:"DEFENSA",
            },
          ]
      },
        {
            id:"3",
            name:"BARCELONA",
            ciudad:'Barcelona',
            pais:'España',
            jugador:[
            
          {
            cedula:'894792',
            nombre:"LEO",
            apellido:'RESTREPO',
            edad:23,
            posicion:"DELANTERO",
          },
          
        ]
      },
      {
        id:"4",
        name:"LIVERPOOL",
        ciudad:'LIVERPOOL',
        pais:'INGLATERRA',
        jugador:[
        

      
      
    ]
  },
    ];

    const [Inscripciones,setInscripciones] = useState(Liga);


    return (
      <>  
      <FilterableProductTable 
        Liga={Inscripciones}
            onAddJugador={(newjugadorObj,equipoId,ced) => {
              
              const newLiga=[];

              for(let i=0;i<Inscripciones.length;i++){
                
                           if (equipoId !== Inscripciones[i].id) {
                                 newLiga.push(Inscripciones[i]);
                                 
                                 if(i == Inscripciones.length-1){
                                  alert('ESTE EQUIPO NO SE ENCUENTRA');
                                  }
                                
                           } else {
                           
                            console.log(ced);
                                newLiga.push({
                                  ...Inscripciones[i],
                                  jugador:[...Inscripciones[i].jugador,newjugadorObj]
                             });

                           }     
               }
               setInscripciones(newLiga);
             }}

            onAddEquipo={(newEquipoObj,equipoId)=>{
              const newLiga=[];

              for(let i=0;i<Inscripciones.length;i++){
                if (equipoId !== Inscripciones[i].id) {
                     newLiga.push(Inscripciones[i]);
                     
                } else {
                    newLiga.push({
                      ...Inscripciones[i],
                      Liga:[...Inscripciones[i],newEquipoObj]
                  });
                  
                
                }  
                setInscripciones(newLiga);  
              }
              
                    
              
            }}
      />
      
      </>
      
    )
}

export default Productopagba;