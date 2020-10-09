import React from 'react'
import './Card.css'

function Card({ name, photo, age, study, description }) {
    return (
        <div className='card'>
            <div className='card__name'>
                <h1>{name}, {age}</h1>
                <div className='card__nameLenguajes'>
                    <img 
                        src='https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                    />
                    <img 
                        src='https://img.icons8.com/color/452/firebase.png'
                    />
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/932px-C_Sharp_logo.svg.png'
                    />
                </div>

            </div>

            <div className='card__photo'>
                <img 
                    src={photo}
                    alt='photo_of'
                />
            </div>
            <div className='card__info'>
                <h2><strong>Estudios:</strong> {study}</h2>
                <h2><strong>Descripción:</strong> {description}</h2>
            </div>
        </div>
    )
}

export default Card
