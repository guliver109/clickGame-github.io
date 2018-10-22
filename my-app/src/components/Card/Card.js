import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card" onClick={() => props.handleIncrement(props.id)}>
     <div className="img-container">
      <img all={props.name} src={props.image} />
    </div>
  </div>
);
export default Card;
