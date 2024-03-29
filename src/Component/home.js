import React from "react";
import image_2 from "./../assets/images/Image_2.jpg"
import logo from "./../assets/images/logo1.png"
import { Fade, Zoom } from "react-reveal";
import Card from 'react-bootstrap/Card';
import Contact from "./contact"

function Home() {
  return (
    <div className="site-wrap  lead" id="home-section" style={{ fontFamily: 'revert' }}>

      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">

            <div className="col-1">
              <div className="site-logo mt-3">
                <img src={logo} alt="description_image" className="img-fluid" />
              </div>
            </div>
            <Fade right>
            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>
              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li><a href="#about" className="nav-link" >A propos de nous </a></li>
                  <li><a href="#team" className="nav-link">Services </a></li>
                  <li><a href="#contactUs" className="nav-link">Contactez nous</a></li>
                </ul>
              </nav>
            </div>
            </Fade>
          </div>
        </div>
      </header>

      <div className="ftco-blocks-cover-1">
        <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{
          backgroundImage: "url(" + "https://user-images.githubusercontent.com/52448401/222968551-25cc3a63-8fdb-48af-b9eb-842de4b96a5a.jpeg" + ")"
        }}>
          <div className="container">
            <div className="row align-items-center justify-content-left text-left">
              <Zoom top>
              <div className="col-md-7 ">
                <p style={{ textAlign: 'justify' }}>Nous sommes spécialisés dans la fourniture de services de transport sûrs et efficaces pour les particuliers, les entreprises et les organisations de la région. Que vous ayez besoin de déplacer des biens ou des équipements, nous sommes là pour vous aider.</p>
              </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="site-section">
        <div className="container">
          <h2 className="text-center">A propos de nous</h2>

          <div className="row mt-5">
          <Fade left>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-years">
                <img src="https://user-images.githubusercontent.com/52448401/226168205-ef3d082e-31e1-4d79-b8e9-aa7b12eb8b81.jpg" alt="description_image" className="img-fluid" style={{ height: "25rem", width: "30rem" }} />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="col-lg-5 pl-lg-3 text-center">
              <p style={{ textAlign: 'justify' }}>Notre flotte de véhicules bien entretenus et nos chauffeurs expérimentés sont équipés pour gérer toutes sortes de besoins en matière de transport. Des livraisons locales aux trajets longue distance, nous avons les ressources et l'expertise pour mener à bien le travail dans les délais impartis et dans les limites du budget<br></br>
                <br></br>Nos services sont disponibles 24 heures sur 24 et 7 jours sur 7, vous pouvez donc compter sur nous pour être là chaque fois que vous avez besoin de nous.
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>

      <div id="team" className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="text-center">Nos services</h2>
            </div>
          </div>
          <div className="row align-items-stretch" style={{ fontSize: "14px" }}>
          <Fade left>
            <div className="col-lg-4 ml-auto pl-lg-5">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222970906-75743872-33d1-476b-9349-97a6a438eb6b.jpg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left", }}>
                    Livraison standard & Express
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left", }}>
                      nous comprenons l'importance de livrer vos colis à leur destination à temps et en excellent état. Nous offrons une gamme d'options de livraison pour répondre à vos besoins, que vous ayez besoin d'une livraison le jour même, le lendemain ou d'un envoi international.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Fade>
            <Fade bottom>
            <div className="col-lg-4 ml-auto pl-lg-5 ">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/226722518-a24ecc20-d1b3-41b0-8be5-284177948dbd.jpeg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left" }}>
                    Location de véhicules utilitaire
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left" }}>
                    Nous offrons une expérience de location exceptionnelle avec une large gamme de véhicules utilitaire à choisir.Si vous avez besoin d'un véhicule pour des travaux de construction, nous proposons des options de location flexibles pour répondre à vos besoins.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Fade>
            <Fade right>
            <div className="col-lg-4 ml-auto pl-lg-5 ">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222972640-ba733cef-5494-4778-a86c-ad4c4c168017.jpg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left", }}>
                    Déménagement
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left" }}>
                      Notre équipe de professionnels expérimentés est dédiée à offrir un service de déménagement fiable et efficace. Nous proposons des services d'emballage et de déballage ainsi que de chargement et de déchargement.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Fade>

          </div>
        </div>
      </div>
      <div id="contactUs" className="site-footer" style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/52448401/222989122-c5ab2cc5-f826-4dfd-a866-13b9a2c93904.jpg" + ")" }} >
        <Contact />
      </div>
    </div>
  )
}

export default Home;