import React from 'react';
import './YouTubeVideo.css'; // Assurez-vous d'importer le fichier CSS

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="video-container">
      <h2 className="video-title">Rapport Dyslexie en RTS</h2>
      <div className="iframe-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
