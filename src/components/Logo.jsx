import React from 'react'
import reactimg from '../assets/react.svg'
import logo from '../assets/logo.png'


function Logo({ width = '100px',className = "" }) {
    return (
        <img src={logo} className={`w-10 md:w-16 lg:w-24 ${className} `}alt="LOGO" />
    )
}

export default Logo