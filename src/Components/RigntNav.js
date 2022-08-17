import React from 'react'

import styled from 'styled-components'

const UlStyled = styled.ul`
   display: flex;
   justify-content: space-between;
   list-style-type: none;
   flex-wrap: wrap;

a {
   text-decoration: none;
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 20px;
   letter-spacing: -0.01em;
   color: #000000;
   margin-left: 2rem;
}

a:hover {
  border-bottom: 2px solid #2351DC;
   font-weight: 700;
}

@media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: black;
    justify-content: center;
    place-items: center;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}
    width: 40%;
    top: 0;
    right: 0;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;

li {
    padding: 20px 30px 20px 0px;
} 
a{
    color: aliceblue;
}
}
`

const RigntNav = ({ open }) => {
  return (
    <UlStyled open={open}>
        <li><a href={'AboutUs'}> About Me </a></li>
        <li><a href={'Services'}> Services</a></li>
        <li><a href={'Project'}> Projects </a></li>
        <li><a href={'ContactMe'}> Contact Me </a></li>
    </UlStyled>
  )
}

export default RigntNav