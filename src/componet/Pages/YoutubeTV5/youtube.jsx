import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  padding: 40px 20px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const VideoTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  color: #222;
  letter-spacing: 1px;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #dfdf29;
    margin: 10px auto 0;
  }
`;

const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* Ratio 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  background: #000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const YouTubeVideo = ({ videoId }) => {
  return (
    <VideoContainer>
      <VideoTitle>Rapport Dyslexie en RTS</VideoTitle>
      <IframeContainer>
        <StyledIframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></StyledIframe>
      </IframeContainer>
    </VideoContainer>
  );
};

export default YouTubeVideo;
