import React from "react";
import styled from 'styled-components';
import diselexy from "../../../Images/diselexy.png";

const Section = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f5f5 40%, #e0e0e0 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #dfdf29;
  font-size: 2.5rem;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
`;

const Paragraph = styled.p`
  margin: 0 auto 40px;
  line-height: 1.7;
  max-width: 800px;
  font-size: 1.2rem;
  color: #333;
  position: relative;
  z-index: 2;
`;

const Image = styled.img`
  width: 30%;
  height: auto;
  margin: 0 auto;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const BackgroundCircle = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(223, 223, 41, 0.2);
  border-radius: 50%;
  position: absolute;
  top: -200px;
  left: -200px;
  z-index: 1;
`;

const HeroSection = () => {
  return (
    <Section>
      <BackgroundCircle />
      <Title>C'est Quoi Dyslexie chez l'enfant ?</Title>
      <Paragraph>
        C'est un trouble neurodéveloppemental qui se manifeste par une difficulté
        persistante à apprendre à lire, à reconnaître les mots de manière fluide et
        à comprendre les textes. La dyslexie n'est pas liée à un manque d'intelligence
        ou de motivation, et avec un soutien adéquat, les enfants dyslexiques peuvent
        apprendre à lire et à écrire de manière efficace.
      </Paragraph>
      <Image src={diselexy} alt="Diselexy" />
    </Section>
  );
};

export default HeroSection;
