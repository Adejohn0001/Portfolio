import React, { useState } from 'react'
import '../../src/styles/Components/Hamburger.css'
import RigntNav from './RigntNav'
import styled from 'styled-components'

const StyledBurger = styled.div`
display:none;

@media (max-width: 768px) {
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 20;
cursor: pointer;

div{
 background-color: ${({ open }) => open ? '#ccc' : '#333'};
 width: 2rem;
 height: 0.25rem;
 border-radius: 10px;
 transform-origin: 1px;
 transition: all 0.5s linear;

 //&:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
 }
 &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity:  ${({ open }) => open ? '0' : '1'};
 }
 &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
 }
}
}

`



const Hamburger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
     <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RigntNav open={open} />
    </>
  )
}

export default Hamburger