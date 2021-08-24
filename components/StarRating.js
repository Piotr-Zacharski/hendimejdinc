import React, { useState } from 'react'
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

    const [selectedStars, setSelectedStars] = useState(0)

    return (
        <div style={styles}>
            <>
                {createArray(totalStars).map((n, i) => (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStars(i + 1)}
                    />
                ))}
            </>
        </div>
    )
}
