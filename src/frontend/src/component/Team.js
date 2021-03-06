import React, { Component } from "react";
import "../styles/Team.css"
import Logo from "../assets/img/logo.png"
import Edo_photo from "../assets/img/Edo_photo.png"
import Marco_photo from "../assets/img/Marco_photo.png"
import Tiago_photo from "../assets/img/Tiago_photo.png"
import Attilio_photo from "../assets/img/Attilio_photo.png"

class Team extends Component {

  render() {
    return (
      <body>       
        
      <div class="container">
          <div class="row">
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/EdgardoCuellar" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Edo_photo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Cuellar Sanchez Edgardo</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/maluyckx" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Marco_photo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Luyckx Marco</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/timarque" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Tiago_photo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Marques Correia Tiago</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/adiscepo" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Attilio_photo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Discepoli Attilio</h2>
                      </div>
                  </div>
              </div>
          </div> 
      </div>

      <div class="container">
          <div class="row">
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/Arcools-ulb" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Logo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Cools Arnaud</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/gcoolen" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Logo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Coolen Gregory</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/alvdhoev" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Logo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Vanderhoeven Alan</h2>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="team">
                      <div class="team-img">
                        <a href="https://github.com/mathleng" rel="noreferrer" target="_blank" >
                          <img className="logo-header" alt="logo" src={Logo} />
                        </a>
                      </div>
                      <div class="team-content">
                          <h2>Leng Mathieu</h2>
                      </div>
                  </div>
              </div>
          </div> 
      </div>
      
  </body>
    );
  }
}

export default Team