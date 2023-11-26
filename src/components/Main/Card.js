import React from "react";
import './card.scss';
const Card = ({img, label, dateOfStart, initPrice}) => {
  return (
    <div className="card_wrapp flex_row">
        <div className="card_image w30">
            <img src={img} alt="img" />
        </div>
        <div className="info_wrapp flex_col">
            <div>{label}</div>
            <span>Дата начала аукциона:</span>
            <div>{dateOfStart}</div>
            <span>Стартовая цена:</span>
            <div>{initPrice}</div>
        </div>
    </div>
      
  );
};

export default Card;
