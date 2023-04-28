import React, {useEffect, useState} from 'react'
import { FaStar } from 'react-icons/fa'

const Star = ({ selected = false, onSelect = (f) => f }) => (
    <FaStar color={selected ? 'gold' : 'grey'} onClick={onSelect} />
)
const createArray = (length) => [...Array(length)]

export default function StarRating({ totalStars = 5 }) {
    const styles = {
        display: 'block',
        textAlign: 'center',
        padding: 7,
    }

    const randomNum = Math.random() * (5 - 3) + 3
    const [selectedStars, setSelectedStars] = useState(randomNum)

    // TODO Implement real star rating

    // const [selectedStars, setSelectedStars] = useState(
    //     typeof window !== 'undefined' && localStorage.getItem('selectedStars')
    //         ? parseInt(localStorage.getItem('selectedStars'))
    //         : 0
    // )

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         localStorage.setItem('selectedStars', selectedStars)
    //     }
    // }, [selectedStars])
    //
    // useEffect(() => {
    //     const rememberedStars = parseInt(localStorage.getItem('selectedStars'))
    //     if (rememberedStars > 0) {
    //         setSelectedStars(rememberedStars)
    //     }
    // }, [])
    //
    // const handleSelectStar = (index) => {
    //     setSelectedStars(index)
    // }


    return (
        <div style={styles}>
            <>
                {createArray(totalStars).map((n, i) => (
                    <Star
                        key={i}
                        selected={ i < selectedStars}
                        onSelect={() => setSelectedStars(i + 1)}
                        style={{ color: i < selectedStars ? 'gold' : 'grey' }}
                    />
                ))}
            </>
        </div>
    )
}
