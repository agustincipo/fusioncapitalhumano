import React, { Component } from 'react'
import navbarStyles from './navbar.module.scss'

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBContainer,
  MDBIcon,
} from 'mdbreact'

import { Link } from 'gatsby'
import CustomNavLink from './customLink'
import { ReactComponent as Logo } from '../images/logo.svg'

class NavbarPage extends Component {
  state = {
    collapsed: false,
  }

  handleTogglerClick = () => {
    const { collapsed } = this.state
    this.setState({
      collapsed: !collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    )
    return (
      <div>
        <MDBNavbar
          style={{ height: '60px' }}
          style={{ padding: '0px 0px 0px 0px' }}
          color="white"
          light
          expand="md"
          fixed="top"
          scrolling
          //Cambiar por blanco
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <Link to="/" className="navbar-brand">
                <Logo />
              </Link>{' '}
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={collapsed} navbar>
              <MDBNavbarNav right className={navbarStyles.navList}>
                <MDBNavItem active>
                  <Link
                    className={navbarStyles.navItem}
                    activeClassName={navbarStyles.activeNavItem}
                    to="/"
                  >
                    Home
                  </Link>
                </MDBNavItem>
                <MDBNavItem >
                  <Link
                    className={navbarStyles.navItem}
                    activeClassName={navbarStyles.activeNavItem}
                    to="/pymes"
                  >
                    Pymes
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link
                    className={navbarStyles.navItem}
                    activeClassName={navbarStyles.activeNavItem}
                    to="/candidatos"
                  >
                    Candidatos
                  </Link>{' '}
                </MDBNavItem>
                <MDBNavItem>
                  <Link
                    className={navbarStyles.navItem}
                    activeClassName={navbarStyles.activeNavItem}
                    to="/candidatos"
                  >
                    Contacto
                  </Link>{' '}
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapsed && overlay}
      </div>
    )
  }
}

export default NavbarPage
