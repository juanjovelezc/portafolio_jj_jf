import React from 'react'
import './Home.css'
import Card from './Card'
import Banner from './Banner'

function Home() {

    return (
        <div className='home'>
            <Banner />
            <div className='home__equipo'>
                <h1>NUESTRO EQUIPO</h1>
            </div>
       
            <div className='home__profiles'>
                <Card 
                    name='Juanjo'
                    photo='https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/58842666_344336079551657_7991762664771835772_n.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=z0ILq60L0LsAX8MbPpx&oh=b636a2b4a698212355470495456416eb&oe=5F8A6A68'
                    age={22}
                    study='Tecnología en desarrollo de sistemas'
                    description='Tengo experiencia en React, Javascript y C#, tengo experiencia con bd relacionales y no relacionales. Me gusta trabajar con Firebase'
                />
                <Card 
                    name='Juanfer'
                    photo='https://instagram.feoh1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/57053789_333754130826990_804606882796664974_n.jpg?_nc_ht=instagram.feoh1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=A8CAwo273F0AX-tIPJb&oh=58f0a691a06b7823900db5e2ad021028&oe=5F8B9114'
                    age={21}
                    study= 'Ingenieria de sistemas'
                    description='Domino el inglés, tengo experiencia en el desarollo de aplicaciones en Java, también en JS, React, trabajo con MySQL para BD relacionales y con Firebase para BD no relacionales.'
                />
       
 
            </div>
        </div>
    )
}

export default Home
