import './App.css'
import React from 'react'


import Primeiro from './componts/basicos/Primeiro'
import ComParametro from './componts/basicos/ComParamentro'
import Fragmento from './componts/basicos/Fragmento'
import Aleatorio from './componts/basicos/Aleatorio'
import Card from './componts/Layout/Card'

export default function App(props) {
    return (

        <div className="App">


         <h1>Fundamnetos react</h1>

            <div className="Cards">
                <Card titulo="Aleatorio" color="#0F0">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="Fragmento" color="#ff5d85">
                    <Fragmento />
                </Card>

                <Card titulo="Com Parametro" color="#ffbb00">
                    <ComParametro
                        titulo="Situaçao do aluno"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="Primeiro" color="#ff0000">
                    <Primeiro></Primeiro>
                </Card>
                        
            </div>


        </div>


    )
}
