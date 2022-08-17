import React from 'react'
import '../../src/styles/Components/Nav.css'
import Hamburger from './Hamburger'



const Nav = () => {
  return (
    <div className='nav'>
        <div>
            <h3>Oluwapelumi Ojo<span>.</span></h3>
        </div>

        <div> <Hamburger /> </div>
    </div>
  )
}

export default Nav