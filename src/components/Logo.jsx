import React from 'react'
import reactimg from '../assets/react.svg'
import logo from '../assets/logo.png'


function Logo({ width = '100px' }) {
    return (
        <img src={logo} width={width}alt="LOGO" />
    )
}

export default Logo