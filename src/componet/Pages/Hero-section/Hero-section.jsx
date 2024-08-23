import React from "react";
import { Container, Row, Col } from "reactstrap";
import diselexy from "../../../Images/diselexy.png";
import "./Hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="4" md="4">
            <div className="hero__content">
                <div>
              <h2 className="mb-4 hero__title">
              C'est Quoi Dyslexie chez l'enfant ?              </h2>
              <br/>
              <p className="par">
              C'est un trouble neurodéveloppemental qui se manifeste par une difficulté 
              <br/>persistante à apprendre à lire , à reconnaître les mots de manière fluide et <br/>à comprendre les textes. <br/>
              La dyslexie n'est pas liée à un manque d'intelligence ou de motivation, et <br /> avec un soutien adéquat, les enfants dyslexiques peuvent apprendre à lire <br /> et à écrire de manière efficace.
              </p>
              </div>
              <img src={diselexy} alt="Diselexy" className="deslixi" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
