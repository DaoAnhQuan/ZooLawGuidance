import React from 'react'

import nature from '../nature.mp4'
import '../styles/background.css'

function Background() {
    return (
        <video playsInline autoPlay muted loop>
            <source src={nature} type="video/mp4"/>
        </video>
    );
}

export default Background;