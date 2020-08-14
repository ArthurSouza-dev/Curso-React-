import React from 'react'
import alunos from '../../data/aluno'


export default (props) =>{

    const alunosLI = alunos.map((aluno) => {

        return ( 
            <li key={aluno}>
                    {aluno.id} ) {aluno.nome} ---) {aluno.nota}
            </li>

        )
    })

    return(
        <div>
            <ul>
                {alunosLI}
            </ul>
        </div>
    )
}