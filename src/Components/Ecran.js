import React, { Component } from 'react';

import './Ecran.css';

class Ecran extends Component {
  render() {
    return (
      <div id="commandes">
        <h2 id='titleDesktop'>&lt; Commandes &gt;</h2>
        <h2 id='titleMobile'>&lt; Images du jeu &gt;</h2>
        <p>ZSQD/Flèches directionnelles: Bouger le personnage <br /><br />
          Barre Espace: Valider<br /><br />
          Touches Ctrl + S: Sauvegarder</p>
        <div id="ecranJeu">NOPE</div>
      </div>
    );
  }
}

export default Ecran;