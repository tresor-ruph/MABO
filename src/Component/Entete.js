import React, { Component } from "react";

class Entete extends Component {
  render() {
    return (
      <header className="site-navbar site-navbar-target" role="banner">

        <div className="container">
          <div className="row align-items-center position-relative">

            <div className="col-3 ">
              <div className="site-logo">
                <a href="index.html">Barberz</a>
              </div>
            </div>

            <div className="col-9  text-right">


              <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>



              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                  <li><a href="services.html" className="nav-link">Services</a></li>
                  <li><a href="barber-shop.html" className="nav-link">Barber Shop</a></li>
                  <li><a href="about.html" className="nav-link">About</a></li>
                  <li><a href="blog.html" className="nav-link">Blog</a></li>
                  <li><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>


          </div>
        </div>

      </header>
    )
  }

}

export default Entete;