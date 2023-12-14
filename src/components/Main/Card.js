import React, { useEffect } from "react";
import "./card.scss";
import imgg from "../Assets/img/121d9b5d-634e-41ff-b6e0-896f28ce5fed.jpg";
import Settings from "../../Settings";
import "moment/locale/ru";
import moment from "moment";
import dayjs from "dayjs";
const Card = ({ img, label, dateOfStart, initPrice }) => {

  const originalDate = moment(dateOfStart);
  const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');

  return (
    <div className="card_wrapp flex_row">
      <div className="card_image w30">
        <img src={"data:image/jpeg;base64,"+img} alt="img" />
        {/* <img src={img ?? img} alt="img" /> */}
      </div>
      <div className="info_wrapp flex_col">
        <span className="label_card">{label}</span>
        <span className="label">Дата начала аукциона:</span>
        <span className="label_var">{formattedDate}</span>
        <span className="label">Стартовая цена:</span>
        <span className="label_var">{initPrice + " сом"}</span>
      </div>
    </div>
  );
};

export default Card;
