import React from "react"   


export default function Aleatorio(props){
    const { min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return(
        <div>
            
            
            <p>
                 <strong>valor Escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}