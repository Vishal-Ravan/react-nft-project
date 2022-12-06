import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (

<>
<div className="heading-top">
    <h5>Join our Discord collab network to find giveaway partners!</h5>
</div>
<Navbar className='Navbar'  expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <Link to='/'><img src="https://nftprojectlist.com/wp-content/uploads/2021/08/logo-transparent-300x51.png" alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/all' className='link-all' > All Projects </Link></Nav.Link>
            <Nav.Link >All Project</Nav.Link>
            <Nav.Link href="#job">Job Board</Nav.Link>
            <Nav.Link href="#promotions">Promotions</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        <button className='primary'>Upcoming Drops</button>
      </Container>
    </Navbar>
</>    )
}

export default Topbar