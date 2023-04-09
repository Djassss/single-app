import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={'/game'}>Game</Link>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Header