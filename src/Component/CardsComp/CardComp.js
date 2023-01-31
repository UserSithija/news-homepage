import React from "react";
import carddata from "./carddata";
import "../CardsComp/CardComp.css";

function CardComp() {
  const cards = carddata.map((item) => {
    return (
      <div>
        <div className="card-comp ">
          <div className="card-left">
            <img src={item.image} alt="card" className="cardimg" />
          </div>
          <div className="card-body">
            <h2 className="card-number">{item.number}</h2>
            <h6 className="card-title">{item.title}</h6>
            <p className="card-text">{item.info}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div className="card-grid">{cards}</div>;
}

export default CardComp;
