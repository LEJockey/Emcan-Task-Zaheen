import React from 'react'
import './Navbar.css'
import Logo from '../../assets/png-logo 1.png'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineGlobal} from 'react-icons/ai'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-0">

      <div className="container-fluid">
        
        {/*Navbar  Logo */}
        <a className="navbar-brand m-0 p-0" href="./#"> 

          <img src={Logo} alt="Zaheen Logo" />

        </a>
        {/* Responsive button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/*Form Search*/}
          <form className="d-flex w-50 align-items-center position-relative" role="search">

            <span>Subjects</span>
            

            <input className="form-control me-2 w-100" type="search" placeholder="Search for anything" aria-label="Search for anything"/>

            <FiSearch className='search-icon'/>

          </form>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-start">

            <li className="nav-item">

              <a className="nav-link active p-0" aria-current="page" href="./#">Teach on Zaheen </a>

            </li>
        <li className="nav-item">
          <a className="nav-link ms-3 p-0" href="./#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cart-container position-relative p-0" href="./#"><AiOutlineShoppingCart className='cart'/></a>

        </li>
        <li className="nav-item ms-2">
          <a className="nav-link Btn p-0 sign-in" href="./#">Sign In</a>
        </li>

        <li className="nav-item">
          <a className="nav-link global d-flex justify-content-center align-items-center p-0 ms-2" href="./#"><AiOutlineGlobal/></a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header

