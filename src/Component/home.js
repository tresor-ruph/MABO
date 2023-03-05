import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
import image_1 from "./../assets/images/Image_1.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {
  return (
    <div className="site-wrap" id="home-section">

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
              <div className="site-logo">
                <FaHandsHelping color='rgb(128,255,255)' size='3em' />
              </div>
            </div>

            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none"><a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span className="icon-menu h3 text-white"></span></a></span>



              <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li><a href="#team" className="nav-link">A propos de nous </a></li>
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
                <h1 className="mb-3" style={{ fontFamily: 'revert' }}>XXXX</h1>
                <p style={{ fontFamily: 'revert', textAlign: 'justify' }}>Nous sommes spécialisés dans la fourniture de services de transport sûrs et efficaces pour les particuliers, les entreprises et les organisations de la région. Que vous ayez besoin de déplacer des biens, des équipements ou des personnes, nous sommes là pour vous aider.</p>
                {/* <p><a href="https://github.com/tresor-ruph/projet-Integration/wiki/Description-du-projet" className="btn btn-primary">En savoir plus</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="img-years">
                <img src={image_1} alt="description_image" className="img-fluid" />
              </div>

            </div>
            <div className="col-lg-5 ml-auto pl-lg-5 text-center">
              {/* <h2 className="text-red text-center">A propos de nous</h2> */}
              <p className="mb-5 lead" style={{ fontFamily: 'revert', textAlign: 'justify' }}>Notre flotte de véhicules bien entretenus et nos chauffeurs expérimentés sont équipés pour gérer toutes sortes de besoins en matière de transport. Des livraisons locales aux trajets longue distance, nous avons les ressources et l'expertise pour mener à bien le travail dans les délais impartis et dans les limites du budget<br></br>
                <br></br>Nos services sont disponibles 24 heures sur 24 et 7 jours sur 7, vous pouvez donc compter sur nous pour être là chaque fois que vous avez besoin de nous.
              </p>
              {/* <p><a href="https://www.dropbox.com/s/4etblliogcqi319/app-release.apk?dl=0" className="btn btn-primary">Télécharger l'application</a></p> */}
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
          <div className="row align-items-stretch">
            <Card style={{ width: '28rem' }}>
              <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222970906-75743872-33d1-476b-9349-97a6a438eb6b.jpg" />
              <Card.Body>
                <Card.Title>Livraison</Card.Title>
                <Card.Text>
                nous comprenons l'importance de livrer vos colis à leur destination à temps et en excellent état. Nous offrons une gamme d'options de livraison pour répondre à vos besoins, que vous ayez besoin d'une livraison le jour même, le lendemain ou d'un envoi international.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '28rem' }}>
              <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222972795-03928c0f-6433-4d04-9744-ee3a08cbcb84.jpg" />
              <Card.Body>
                <Card.Title>Location de véhicules</Card.Title>
                <Card.Text>
                Nous offrons une expérience de location exceptionnelle avec une large gamme de véhicules de haute qualité à choisir. Que vous ayez besoin d'une voiture pour les affaires ou les loisirs, nous proposons des options de location flexibles pour répondre à vos besoins, y compris des locations à court terme et à long terme.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '28rem' }}>
              <Card.Img variant="top" src="https://user-images.githubusercontent.com/52448401/222972640-ba733cef-5494-4778-a86c-ad4c4c168017.jpg" />
              <Card.Body>
                <Card.Title>Déménagement</Card.Title>
                <Card.Text>
                Notre équipe de professionnels expérimentés est dédiée à offrir un service de déménagement fiable et efficace. Nous proposons des services d'emballage et de déballage, de chargement et de déchargement, ainsi que des options de stockage à court et à long terme pour vos biens.                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            {/* <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}




          
          </div>
        </div>
      </div>




      <div className="site-section section-3" id="contactUs" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" + ")" }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5">
              <h2 className="text-white primary-color-icon text-center">Contactez le service client</h2>
              <p className="lead text-white mb-5" style={{ fontFamily: 'revert', textAlign: 'justify' }}>Nous essayons aussi bien que possible d’être toujours accessible pour tout le monde.<br></br>

                <br></br>Nous préférons être contactés par email, afin d’être en mesure de traiter chaque question du mieux possible.<br></br>

                N’hésitez pas à nous contacter aux heures de bureau.</p>
              <p><a href="mailto:HelpRecover2020@gmail.com" className="btn btn-primary">Nous contacter</a></p>
            </div>
          </div>
        </div>
      </div>



      <footer className="site-footer">
        <div className="container">
          <div className="row pt-2 mt-2 text-center">
            <p>
              <a href="https://github.com/tresor-ruph/projet-Integration/wiki/Aspects-s%C3%A9curit%C3%A9">Politique de confidentialité </a><br></br>
              <a href="https://github.com/tresor-ruph/projet-Integration/wiki/Aspect-juridique">Termes et conditions</a><br></br>
              <Link to="/adminLogin">Espace administrateur</Link>
            </p>
          </div>
          <div className="row pt-2 mt-2 text-center">
            <div>
              <p>
                Copyright &copy; {new Date().getFullYear()} Help Recover tous droits réservés | Ce site a été conçu avec <i className="icon-heart text-danger" aria-hidden="true"></i> par <a href="https://github.com/tresor-ruph/projet-Integration" target="_blank" >Groupe 4</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home;