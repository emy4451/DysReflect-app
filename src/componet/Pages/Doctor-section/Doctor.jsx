import React from "react";
import { Container, Row, Col } from "reactstrap";
import DoctorImg1 from "../../../Images/DoctorImg1.png";
import DoctorImg2 from "../../../Images/DoctorImg2.png";
import DoctorImg3 from "../../../Images/DoctorImg3.png";
import "./Doctor.css";
import DoctorCard from "./Card-Doctor";

const DoctorData = [
  {
    id: "01",
    title: "Dr.Kamoun - L’orthophoniste",
    consultation: 12,
    maladies: 50,
    map:"https://maps.app.goo.gl/39rGK3x2V9eSEJyv7",
    imgUrl: DoctorImg1,

  },

  {
    id: "02",
    title: "Dr Imène Ayadi - psychologue ",
    consultation: 12,
    maladies: 40,
    map:"https://maps.app.goo.gl/Kj7oAmmwfU9TR3dQ7",
    imgUrl: DoctorImg2,
  },

  {
    id: "03",
    title: "Dr.Ahmed - L’orthoptiste",
    consultation: 12,
    maladies: 66,
    map:"https://maps.app.goo.gl/MLuKAv8HAY5Dwbse9",
    imgUrl: DoctorImg3,
  },
];

const Doctor = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="Doctor__top d-flex justify-content-between align-items-center">
              <div className="Doctor__top__left w-50">
                <h2>Qui sont les spécialistes de la dyslexie en Tunisie ?</h2>
               <div><p>Sommaire</p></div>     <br/>
                <div><p>L’orthophoniste, unique intervenant reconnu</p></div>
                <div><p>Le psychologue et le neuropsychologue pour assister l’orthophoniste</p></div>
                <div><p>Le psychologue et le neuropsychologue pour assister l’orthophoniste</p></div>
                <div><p>Le pédopsychiatre, le trait d’union entre le patient et le spécialiste</p></div>
                <div><p>L’ergothérapeute, pour favoriser l’autonomie de l’enfant</p></div>

            

              </div>

              <div className="w-50 text-end">
                <button className="btn">Trouver Tous</button>
              </div>
            </div>
          </Col>
          {DoctorData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <DoctorCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Doctor;