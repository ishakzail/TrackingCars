import React from 'react'
import '../css/home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Nav , Navbar , Form , NavDropdown , FormControl} from 'react-bootstrap';

const Home = (props) => {

    const TOKEN = localStorage.getItem('TOKEN');


    const logout = async (event)=>{ 
      
      await  localStorage.removeItem('token')
          
          
            props.history.push('/login')
         
      };
    return(
      <div>
        <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">ADMIN PANEL</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                      <Nav.Link href="">Home</Nav.Link>
                      <Nav.Link href="">Edit Profile</Nav.Link>
                      <Nav.Link href="">View Users</Nav.Link>
                      <Nav.Link className="logout" href=""><a onClick={(event) =>logout()}>Logout</a></Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
        </Navbar>
      </div>
    )
}
export default Home;