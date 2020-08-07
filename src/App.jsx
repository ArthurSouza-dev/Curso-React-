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
                <Card titulo="Aleatorio" >
                    <Aleatorio min={1} max={60} />
                </Card>


                <Card titulo="Fragmento">
                    <Fragmento />
                </Card>


                <Card titulo="Com Parametro">
                    <ComParametro
                        titulo="Situaçao do aluno"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="Primeiro">
                    <Primeiro></Primeiro>
                </Card>
            </div>


        </div>


    )
}
