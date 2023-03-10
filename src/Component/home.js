import React from "react";
import image_2 from "./../assets/images/Image_2.jpg"
import logo from "./../assets/images/logo1.png"
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
          </div>
        </div>
      </header>

      <div className="ftco-blocks-cover-1">
        <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{
          backgroundImage: "url(" + "https://user-images.githubusercontent.com/52448401/222968551-25cc3a63-8fdb-48af-b9eb-842de4b96a5a.jpeg" + ")"
        }}>
          <div className="container">
            <div className="row align-items-center justify-content-left text-left">
              <div className="col-md-7 ">
                <p style={{ textAlign: 'justify' }}>Nous sommes sp??cialis??s dans la fourniture de services de transport s??rs et efficaces pour les particuliers, les entreprises et les organisations de la r??gion. Que vous ayez besoin de d??placer des biens, des ??quipements ou des personnes, nous sommes l?? pour vous aider.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="site-section">
        <div className="container">
          <h2 className="text-center">A propos de nous</h2>

          <div className="row mt-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-years">
                <img src={image_2} alt="description_image" className="img-fluid" style={{ height: "25rem", width: "30rem" }} />
              </div>

            </div>
            <div className="col-lg-5 pl-lg-3 text-center">
              <p style={{ textAlign: 'justify' }}>Notre flotte de v??hicules bien entretenus et nos chauffeurs exp??riment??s sont ??quip??s pour g??rer toutes sortes de besoins en mati??re de transport. Des livraisons locales aux trajets longue distance, nous avons les ressources et l'expertise pour mener ?? bien le travail dans les d??lais impartis et dans les limites du budget<br></br>
                <br></br>Nos services sont disponibles 24 heures sur 24 et 7 jours sur 7, vous pouvez donc compter sur nous pour ??tre l?? chaque fois que vous avez besoin de nous.
              </p>
            </div>
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
            <div className="col-lg-4 ml-auto pl-lg-5">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222970906-75743872-33d1-476b-9349-97a6a438eb6b.jpg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left", }}>
                    Livraison standard & Express
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left", }}>
                      nous comprenons l'importance de livrer vos colis ?? leur destination ?? temps et en excellent ??tat. Nous offrons une gamme d'options de livraison pour r??pondre ?? vos besoins, que vous ayez besoin d'une livraison le jour m??me, le lendemain ou d'un envoi international.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 ml-auto pl-lg-5 ">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222980521-47617623-7dc8-416d-80e0-804fe280f97c.jpg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left" }}>
                    Location de v??hicules
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left" }}>
                      Nous offrons une exp??rience de location exceptionnelle avec une large gamme de v??hicules de haute qualit?? ?? choisir. Que vous ayez besoin d'une voiture pour les affaires ou les loisirs, nous proposons des options de location flexibles pour r??pondre ?? vos besoins, y compris des locations ?? court terme et ?? long terme.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 ml-auto pl-lg-5 ">
              <Card style={{ width: '25rem', height: '33rem' }}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222972640-ba733cef-5494-4778-a86c-ad4c4c168017.jpg" style={{ height: '20rem' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder", textAlign: "left", }}>
                    D??m??nagement
                  </Card.Title>
                  <Card.Text>
                    <div style={{ textAlign: "left" }}>
                      Notre ??quipe de professionnels exp??riment??s est d??di??e ?? offrir un service de d??m??nagement fiable et efficace. Nous proposons des services d'emballage et de d??ballage, de chargement et de d??chargement, ainsi que des options de stockage ?? court et ?? long terme pour vos biens.
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

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