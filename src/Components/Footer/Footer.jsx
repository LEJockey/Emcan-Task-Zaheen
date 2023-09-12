import React from "react"
import './Footer.css'
import Logo from '../../assets/png-logo 3.png'
import {HiOutlineCamera} from 'react-icons/hi2'
import {SlSocialTwitter} from 'react-icons/sl'
import {LiaFacebook} from 'react-icons/lia'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineGlobal} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

      <div className="row justify-content-between">

        {/* Logo */}

        <div className="col-lg-3 col-md-6 logo-col">

          <div className="logo">

            <img src={Logo} alt="Zaheen Logo" />

          </div>

          <p>
            Our website to fulfill customer demand by making them satisfied with growing their Knowledge.
          </p>
        </div>

        {/* About */}
        <div className="col-lg-2 col-md-6 about">

          <h2 className="title">
            About
          </h2>

          <ul className="list">

            <li>
              <a href="./#">Home</a>
            </li>

            <li>
              <a href="./#">Categories</a>
            </li>

            <li>
              <a href="./#">Contact Us</a>
            </li>

          </ul>
        </div>

        {/* Support */}
        <div className="col-lg-2 col-md-6 support">

          <h2 className="title">
            Support
          </h2>

          <ul className="list">

            <li>
              <a href="./#">FAQS</a>
            </li>

            <li>
              <a href="./#">Blog</a>
            </li>

            <li>
              <a href="./#">Privacy policy</a>
            </li>

            <li>
              <a href="./#">Technical Support</a>
            </li>

            <li>
              <a href="./#">Tearms & Conditions</a>
            </li>

          </ul>
        </div>

        {/* Follow US */}
        <div className="col-lg-2 col-md-6 follow-us">

          <h2 className="title">
            Follow Us
          </h2>

          <div className="follow-icons d-flex mb-5">

            <a href="./#" className="gap"> <HiOutlineCamera/> </a>

            <a href="./#" className="gap"> <SlSocialTwitter/> </a>

            <a href="./#" className="gap"> <LiaFacebook/> </a>

            <a href="./#"> <AiFillYoutube/> </a>

          </div>

        </div>

        {/* English Button */}
        <div className="col-lg-2 col-md-6 align-self-end ">

          <button className="d-flex align-items-center en-button">

            <AiOutlineGlobal/>

            <span>English</span>

          </button>
        </div>

      </div>
      
      <div className="d-flex justify-content-center">

        <div className="hr-line"></div>

      </div>

      </div>


    </footer>
  )
}

export default Footer