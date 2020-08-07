import './card.css'
import React from 'react'


export default function Card(props){

    const cardStyle = {
        backgroundColor: props.color || '#0F0',
        borderColor: props.color || '#0F0',
    }
  
  
    return(
            <div className="Card" style={cardStyle}>
                <div className="Titlle">{props.titulo}</div>
                <div className="Content">{props.children}</div>
            </div>


    )

}
