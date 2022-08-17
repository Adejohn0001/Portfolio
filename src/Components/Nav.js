import React from 'react'
import '../../src/styles/Components/Nav.css'
import Hamburger from './Hamburger'
import Icons from './Icons'

const Nav = () => {
  return (
    <div className='nav'>
        <div>
            <h3>Oluwapelumi Ojo<span>.</span></h3>
        </div>

        <div className='media'>
            <Icons />
        </div>

        <div> <Hamburger /> </div>
    </div>
  )
}

export default Nav