import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                  <li><a href="#team" className="nav-link">Equipe </a></li>
                  <li><a href="#contactUs" className="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>


          </div>
        </div>

      </header>

      <div className="ftco-blocks-cover-1">
        <div className="site-section-cover overlay" data-stellar-background-ratio="0.5" style={{
          backgroundImage: "url(" + "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&dpr=6&h=650&w=940" + ")"
        }}>
          <div className="container">
            <div className="row align-items-center justify-content-left text-left">
              <div className="col-md-7 ">
                <h1 className="mb-3" style={{ fontFamily: 'revert' }}>HELP RECOVER</h1>
                <p style={{ fontFamily: 'revert', textAlign: 'justify' }}>Avec la crise sanitaire et les différentes mesures qui ont suivies pour la limitation de celle-ci, de nombreuses personnes se sont retrouvées isolées. La tranche d'âge principalement impactée est celle des personnes âgées qui ne pouvaient plus bénéficier des visites de leurs proches...</p>
                <p><a href="https://github.com/tresor-ruph/projet-Integration/wiki/Description-du-projet" className="btn btn-primary">En savoir plus</a></p>
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
                <img src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&dpr=6&h=650&w=940" alt="description_image" className="img-fluid" />
              </div>

            </div>
            <div className="col-lg-5 ml-auto pl-lg-5 text-center">
              <h2 className="text-red text-center">Notre solution</h2>
              <p className="mb-5 lead" style={{ fontFamily: 'revert', textAlign: 'justify' }}>Nous vous mettons en contact avec des personnes vérifiées de votre entourage qui sont prêts à vous aider.  Ensuite, nous veillons à ce que tous les deux, vous soyez assurés et que tout se passe bien.<br></br>
                <br></br>En plus de son volet humanitaire, nous vous permettons de garder un contact avec vos êtres chers au moyen de discussions privées et de groupes de discussion.
              </p>
              <p><a href="https://www.dropbox.com/s/4etblliogcqi319/app-release.apk?dl=0" className="btn btn-primary">Télécharger l'application</a></p>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center text-center mb-5 section-2-title">
            <div className="col-md-6">
              <h2 className="text-center">Membres du projet</h2>
              <p className="mb-5 lead">Présentation du groupe d'étudiants ayant réalisé ce projet</p>
            </div>
          </div>
          <div className="row align-items-stretch">

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src="https://image.freepik.com/vecteurs-libre/jeune-homme-avatar-dessin-anime-personnage-photo-profil_18591-55058.jpg" alt="Image6"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Product Owner</span>
                  <h2>Patrick Tchoupe</h2>
                  <p>Ce fût un plaisir de participer à un projet d'une telle envergure</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src="https://us.123rf.com/450wm/dreamsvector/dreamsvector1710/dreamsvector171000223/87280917-jeune-afro-homme-avatar-.jpg?ver=6" alt="Image5"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Scrum master</span>
                  <h2>Tresor Tekadam</h2>
                  <p>On espère que cette appli vous sera utilsée en ces temps difficiles</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src="https://www.web-soluces.net/webmaster/avatar/AvatarMakerCom-Garcon.png" alt="Image1"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Scrum master</span>
                  <h2>Bilel Bouquoyoue</h2>
                  <p>Ce projet a pour point central l'entraide, le plus important c'est vous !</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src="https://media.gettyimages.com/vectors/man-portrait-face-icon-web-avatar-flat-style-vector-vector-id641304260" alt="Image2"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Team member</span>
                  <h2>Joachim Sanglier </h2>
                  <p>Super projet basé sur des valeurs importantes</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src='https://media.gettyimages.com/vectors/man-portrait-face-icon-web-avatar-flat-style-vector-vector-id641304260' alt="Image3"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Team member</span>
                  <h2>Florian Degives </h2>
                  <p>C'est un plaisir de participer à un projet basé sur l'entraide.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src='https://media.gettyimages.com/vectors/man-portrait-face-icon-web-avatar-flat-style-vector-vector-id641304260' alt="Image3"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Team member</span>
                  <h2>Martin Perdaens</h2>
                  <p>ça été une chouette expérience de développer un tel projet</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-5">
              <div className="post-entry-1 h-100 person-1">

                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" alt="Image4"
                  className="img-fluid" />

                <div className="post-entry-1-contents">
                  <span className="meta">Team member</span>
                  <h2>Sebastien Fantuzzi</h2>
                  <p>Content d'avoir participé à ce très beau projet </p>
                </div>
              </div>
            </div>


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