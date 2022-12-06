import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class NavbarComp extends Component {
  render() {
    return (
      // <Router>
      <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/* <Container>  */}
          <Nav className="ms-auto">
            <Navbar.Brand href="/Home">Rideoo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/PassengerMode"}>Passenger Mode</Nav.Link>
              <Nav.Link as={Link} to={"/BookedRideH"}>Booked Rides</Nav.Link>
              <Nav.Link as={Link} to={"/RiderMode"}>Rider Mode</Nav.Link>
              <Nav.Link as={Link} to={"/EPay"}>Epay</Nav.Link>
              <Nav.Link as={Link} to={"/ViewPayments"}>View Payments</Nav.Link>
              
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Navbar.Collapse>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
          </Nav>

          {/* </Container>  */}
        </Navbar>

      </div>
      //</Router>
    )
  }
}
// export default CollapsibleExample;
// import 'bootstrap/dist/css/bootstrap.css'

// const Navbar=()=>{
//     return(
//         <>
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav ms-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="/">Home </a>
//       </li>
//       <li class="nav-item active">
//         <a class="nav-link" href="/PassengerMode">Passenger Mode </a>
//       </li>
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Driver Mode </a>
//       </li>
//     </ul>
//     {/* <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form> */}
//   </div>
// </nav>

//         </>
//     )
// }

// export default Navbar;