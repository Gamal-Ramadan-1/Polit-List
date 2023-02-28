import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Logo from '../../Imgs/white-logo.png'
import './NavBar.scss'
const NavBar = () => {
    return (
        <>
            <Navbar expand="md" className='py-3'>
                <Container>
                    <Navbar.Brand href="/Home">
                        <img src={Logo} alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link className='text-uppercase me-4 link text-md-start text-center' href="/Home">Home</Nav.Link>
                            <Nav.Link className='text-uppercase me-4 link text-md-start text-center' href="/Category">Category</Nav.Link>
                            <Nav.Link className='text-uppercase me-4 link text-md-start text-center' href="/Listing">Listing</Nav.Link>
                            <Nav.Link className='text-uppercase me-4 link text-md-start text-center' href="/Contact-us">Contact us</Nav.Link>
                        </Nav>
                        <button className='btn text-capitalize d-lg-flex justify-content-center align-items-center ms-lg-5 ms-0 d-none px-3'>
                            <i className="fa-solid fa-plus me-2"></i>
                            add your listing
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default NavBar