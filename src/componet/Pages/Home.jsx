import HeroSection from "./Hero-section/Hero-section";
import Types from "./Types-Dyslexie/Types";
import YouTubeVideo from "./YoutubeTV5/youtube";
import { useContext } from 'react';
import { NavContext } from "../navbar/router";
import MathGame from "../JeuxCalcule";
import {
  Container,
  HeroSectionWrapper,
  YouTubeVideoWrapper,
  MathGameWrapper,
  TypesWrapper,
  FooterWrapper
} from './HomeStyles';
import Footer from './Footer';

function Home() {
  const { setShowNav } = useContext(NavContext);
  setShowNav(true);
  return (
    <Container>
      <HeroSectionWrapper>
        <HeroSection />
      </HeroSectionWrapper>
      
      <YouTubeVideoWrapper>
        <YouTubeVideo videoId="SidgkXO3u3I" />
      </YouTubeVideoWrapper>
      
      <MathGameWrapper>
        <MathGame />
      </MathGameWrapper>
      
      <TypesWrapper>
        <Types />
      </TypesWrapper>


      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
}

export default Home;