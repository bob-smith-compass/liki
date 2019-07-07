import React, {useEffect, useState, useRef} from 'react'

export default function Events() {
    const scrollHandler = () => {
        console.log('Scrolling...')
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
    })
    return (
        <div>
            
        </div>
    )
}
