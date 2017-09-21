import React, {Component} from 'react';
import {Navbar,NavbarToggler,NavbarBrand  } from 'reactstrap';

  export default class Playlist extends React.Component {
    render(){
      return(
        <Navbar className="nav-bar" light toggleable>
          <NavbarBrand className="nav-text">Play What?!</NavbarBrand>
        </Navbar>
      )
    }

  }
