import React from 'react'


import Primeiro from './componts/basicos/Primeiro'
import ComParametro from './componts/basicos/ComParamentro'
import Fragmento from './componts/basicos/Fragmento'



export default function App(props){
    return(
    <div id="app">
        <h1>Fundamnetos react</h1>
        <Fragmento /> 
        <ComParametro
        titulo="Situaçao do aluno"
        aluno="Pedro"
        nota={9.3} />
        <Primeiro></Primeiro>
    
    </div>

    )

}
