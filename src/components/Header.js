import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
       <Navbar expand="lg" bg='dark' variant='dark' style={{height:"60px"}}>
                <Container>
                    <NavLink className="text-decoration-none text-light" to="/">Home</NavLink>
                </Container>
            </Navbar>
    </div>
  )
}

export default Header
