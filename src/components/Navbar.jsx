import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';


export default function Navbar() {
  return (
    <MDBNavbar light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='text-light'>Navbar</MDBNavbarBrand>
         <span>
          <NavLink to="/">
          All Product
          </NavLink>
          </span>
         <MDBBtn className='fw-bold'>
          <NavLink to='/cart' className="text-light fw-bold">
            CART(0) 
          </NavLink>
          </MDBBtn>

      </MDBContainer>
    </MDBNavbar>
  );
}