import React from 'react'
import ImageCard from './ImageCard'
import { Bookmark, Heart, Share2 } from 'react-feather'

const Carousel = () => {
  return (
    <main>
        <ImageCard imgSrc='src/assets/pexels-pixabay.jpg'>
            <h3 className='text-xl font-bold mb-2 '>Forest Park</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, vero, 
                beatae sunt suscipit.</p>
            <div className='space-x-4 mt-4 flex'>
                <button className='btn'><Heart /></button>
                <button className='btn'><Bookmark /></button>
                <button className='btn'><Share2 /></button>
            </div>
        </ImageCard>
    </main>
  )
}

export default Carousel