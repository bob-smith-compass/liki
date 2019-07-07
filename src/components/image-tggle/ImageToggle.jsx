import React, {useRef} from 'react'
import './image-tobble.css'

export default function ImageToggle({primaryImage, secondaryImage}) {
    const imgRef = useRef(null);
    return (
        <img onMouseOver={() => {
            imgRef.current.src = secondaryImage;
        }} onMouseOut={() => {
            imgRef.current.src = primaryImage;
        }} 
        src={primaryImage}
        alt="" ref={imgRef}
        />
            
    )
}
