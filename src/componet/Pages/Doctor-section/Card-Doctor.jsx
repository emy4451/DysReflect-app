
import React from "react";

const DoctorCard = (props) => {
  const { imgUrl, title, consultation, maladies, map } = props.item;

  return (
    <div className="single__Doctor__item">
      <div className="Doctor__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="Doctor__details">
        <h6 className="Doctor__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="consultation d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {consultation} 
          </p>

          <p className="maladies d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {maladies}
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="map d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {map}
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <a href="#"> Adress</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
