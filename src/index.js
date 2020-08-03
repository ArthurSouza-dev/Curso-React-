import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './componts/basicos/Primeiro'
import ComParametro from './componts/basicos/ComParamentro'
const tag = <strong>Olá react </strong>

ReactDOM.render(
    <div>
        { tag }
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situaçao do aluno"
            aluno="Pedro"
            nota={9.3}
           />
    </div>,

    document.getElementById('root')
)