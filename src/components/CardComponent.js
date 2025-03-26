import React from "react";
import "../assets/css/components/CardComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardComponent = ({ icon, number, text, classcard, classicon}) => {

  return (
    <div className="col-12 col-sm-6 col-md-5 col-lg-6 mt-3 px-2">
      <div className={`card ${classcard}`}>
        <div className="row">
          <div className="col-4 d-flex justify-content-center align-items-center">
          <div className={`icon-card ${classicon}`}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
          <div className="col-8 d-flex flex-column justify-content-center">
          <h2 className="m-0 num-card">{number}</h2>
          <p className="m-0 text-card">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  export default CardComponent;