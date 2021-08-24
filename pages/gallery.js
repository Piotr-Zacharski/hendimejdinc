import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import { SliderData } from '../components/ImageSlider/SliderData'

export default function Gallery() {
    return (
        <div>
            <ImageSlider slides={SliderData} />
        </div>
    )
}
