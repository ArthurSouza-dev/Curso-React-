import './App.css'
import React from 'react'

import Familia from './componts/basicos/Familia'
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
                
                <Card titulo=" Exercisio #5 - Componente com Filhos " color="#0F0">
                    <Familia sobrenome="Ferreira"/>
                </Card>

                <Card titulo="Exercisio #4 -Aleatorio " color="#00ffff">
                    <h2>Numero Aleatorio</h2>
                   <Aleatorio min={1} max={11} />
                    <Aleatorio min={1} max={11} />
                    <Aleatorio min={1} max={11} />
                </Card>

                <Card titulo="Exercisio #3 -Fragmento" color="#ff5d85">
                    <Fragmento />
                </Card>

                <Card titulo="Exercisio #2 -Com Parametro" color="#ffbb00">
                    <ComParametro
                        titulo="Situaçao do aluno"
                        aluno="Pedro"
                        nota={9.3} />
                </Card>

                <Card titulo="Exercisio #1 -Primeiro" color="#ff0000">
                    <Primeiro></Primeiro>
                </Card>
                        
            </div>


        </div>


    )
}
