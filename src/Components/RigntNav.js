import React from 'react'
import {
  BrowserRouter as Router,
  Link 
} from 'react-router-dom';

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
    flex-flow: column nowrap;
    background-color: black;
    justify-content: center;
    place-items: center;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    width: 80%;
    top: 0;
    right: 0;
    padding: 3.5rem;
    transition: transform 0.3s ease-in-out;

li {
    padding: 20px 30px 20px 0px;
} 
a{
    color: aliceblue;
    font-size:12px;
}
}
`

const RigntNav = ({ open }) => {
  return (
    <Router>
     <UlStyled open={open}>
        <li> <Link to="/"> About Me  </Link> </li>
        <li> <Link to="/Services">  Services </Link> </li>
        <li> <Link to="/Project"> Projects </Link> </li>
        <li> <Link to="/GetInTouch" >  Contact Me </Link> </li>
     </UlStyled>
 </Router>
  )
}

export default RigntNav