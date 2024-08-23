import React from 'react';
import './Types.css'; // Assurez-vous d'importer le fichier CSS

const Types = () => {
  const handleButtonClick = () => {
    window.open('https://oraprdnt.uqtr.uquebec.ca/Gscdepot/ppg1025/105/ppg1025_105_c00.pdf'); // Ouvre le lien dans un nouvel onglet
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="column">
          <p>
            En savoir plus sur les types de dyslexie
          </p>
        </div>
        <div className="column">
          <button onClick={handleButtonClick} className="navigate-button">
            Allons-y
          </button>
        </div>
      </div>
    </div>
  );
};

export default Types;
