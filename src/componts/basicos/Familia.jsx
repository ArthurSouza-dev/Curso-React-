import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default function Familia(props){

    return(
        
        <div>
            <FamiliaMembro nome="Ana" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="João" {...props}/>
            <FamiliaMembro nome="Pedro" sobrenome="Silva" />
        </div>
        
    )



}