import React from 'react'
import img1 from '../assets/rickmorty1.jpg'
import img2 from '../assets/rickmorty2.jpg'
import img3 from '../assets/rickmorty3.jpg'
import img4 from '../assets/rickmorty4.jpg'
import img5 from '../assets/rickmorty5.jpg'
import img6 from '../assets/rickmorty6.jpg'

const HeaderImg = () => {
    const images = [img1, img2, img3, img4, img5, img6]
    const getRandomImage = () => {
        return Math.floor(Math.random() * 7)
    }
    return (
        <div>
            <img src={images[getRandomImage()]} alt="" />
        </div>
    )
}

export default HeaderImg