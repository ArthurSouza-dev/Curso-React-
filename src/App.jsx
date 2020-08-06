import React from 'react'


import Primeiro from './componts/basicos/Primeiro'
import ComParametro from './componts/basicos/ComParamentro'
import Fragmento from './componts/basicos/Fragmento'
import Aleatorio from './componts/basicos/Aleatorio'
import Card from './componts/Layout/Card'

export default function App(props){
    return(
        <div id="app">
            
        <h1>Fundamnetos react</h1>
           
            <Card titulo="Ola mundo">
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            </Card>
                  


        <Aleatorio min={1} max={60}/>
           
        <Fragmento /> 
           
        <ComParametro
        titulo="Situaçao do aluno"
        aluno="Pedro"
        nota={9.3} />
            
        <Primeiro></Primeiro>
    
        </div>
    )
}
