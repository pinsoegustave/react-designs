import React from 'react'
import Slides from './Slides'

const Slider = () => {

    const images = [
        'https://i.ibb.co/ncrXc2V/1.png',
        'https://i.ibb.co/B3s7v4h/2.png',
        'https://i.ibb.co/XXR8kzF/3.png',
        'https://i.ibb.co/yg7BSdM/4.png',
        'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20889052/pexels-photo-20889052/free-photo-of-a-forest-with-trees-and-fog-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/20949493/pexels-photo-20949493/free-photo-of-cattle-on-grassland-in-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/20993833/pexels-photo-20993833/free-photo-of-black-forest-2-shotoniphone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
        'https://images.pexels.com/photos/20111605/pexels-photo-20111605/free-photo-of-surf-in-ericeira.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
    ]

  return (
    <main className='App'>
        <div className='max-w-[400px]'>
            <Slides autoSlide={true} autoSlideInterval={1000}>
                { images.map((s) => (
                    <img src={s} alt="images" key={s} />
                )) }
            </Slides>
        </div>
    </main>
  )
}

export default Slider