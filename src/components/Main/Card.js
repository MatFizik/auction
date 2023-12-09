import React, { useEffect } from "react";
import "./card.scss";
const Card = ({ img, label, dateOfStart, initPrice }) => {
  useEffect(() => {
    console.log(img);
  }, []);
  return (
    <div className="card_wrapp flex_row">
      <div className="card_image w30">
        <img src={require(img)} alt="img" />
      </div>
      <div className="info_wrapp flex_col">
        <span className="label_card">{label}</span>
        <span className="label">Дата начала аукциона:</span>
        <span className="label_var">{dateOfStart}</span>
        <span className="label">Стартовая цена:</span>
        <span className="label_var">{initPrice}</span>
      </div>
    </div>
  );
};

export default Card;
