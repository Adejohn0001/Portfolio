import React from 'react'
import Oluwapelumi from '../assets/Oluwapelumi.png'
import '../../src/styles/Components/Header.css'
import Icons from './Icons'

const Header = () => {
  return (
    <div className='container'>
        <div className='text'>
            <p> Hi There </p>
            <h4> I am Oluwapelumi Ojo</h4>
            <p className='top-notch'> A Top-notch Developer, Writer and Mentor. </p>
            <Icons />
        </div>

        <div className='image-area'>
            <img src={Oluwapelumi} alt='Xylus-pics' className='image'/>
        </div>
    </div>
  )
}

export default Header