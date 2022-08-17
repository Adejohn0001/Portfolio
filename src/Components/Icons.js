import React from 'react'
import LinkedIn from '../assets/LinkedIn.png'
import Twitter from '../assets/Twitter.png'


const Icons = () => {
  return (
    <div>
       <a
        href={'https://www.linkedin.com/in/oluwapelumi-ojo-2837a01a9'}
        target="_blank"
        rel="noopener noreferrer">
          <img src={LinkedIn} alt='LinkedIn-icon' className='linkedin' />
      </a>

      <a
        href={'https://mobile.twitter.com/@Tobby_adejohn'}
        target="_blank"
        rel="noopener noreferrer">
          <img src={Twitter} alt='Twitter-icon' />
      </a>
    </div>
  )
}

export default Icons