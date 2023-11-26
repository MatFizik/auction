import React from "react";
import "./main.scss";
import { Button, Input, Select } from "antd";
import Card from "./Card";

const cards = [
  {
    img: "https://top-fon.com/uploads/posts/2021-07/1626839247_60-p-fon-krasno-fioletovii-61.jpg",
    label: "Кресло",
    dateOfStart: "20.06.2021",
    initPrice: "1000",
  },
  {
    img: "https://top-fon.com/uploads/posts/2021-07/1626839247_60-p-fon-krasno-fioletovii-61.jpg",
    label: "Кресло",
    dateOfStart: "20.06.2021",
    initPrice: "1000",
  },
  {
    img: "https://top-fon.com/uploads/posts/2021-07/1626839247_60-p-fon-krasno-fioletovii-61.jpg",
    label: "Кресло",
    dateOfStart: "20.06.2021",
    initPrice: "1000",
  },
  {
    img: "https://top-fon.com/uploads/posts/2021-07/1626839247_60-p-fon-krasno-fioletovii-61.jpg",
    label: "Кресло",
    dateOfStart: "20.06.2021",
    initPrice: "1000",
  },
  {
    img: "https://top-fon.com/uploads/posts/2021-07/1626839247_60-p-fon-krasno-fioletovii-61.jpg",
    label: "Кресло",
    dateOfStart: "20.06.2021",
    initPrice: "1000",
  },
];

const Main = () => {
  return (
    <div>
      <div className="header">
        <div className="section_wrapp">
          <div className="section_content m40">
            <div className="card_wrapp">
              <div className="select_wrapp w100">
                <Select className="w100" placeholder="Категории"></Select>
              </div>
              <div>
                <Input.Search></Input.Search>
              </div>
            </div>
          </div>
        </div>
        <div className="section_wrapp">
          <div className="title_big flex_center">Будущие аукционы</div>
          <div className="section_content m40">
            {cards.map((card) => (
              <Card
                img={card.img}
                label={card.label}
                initPrice={card.initPrice}
                dateOfStart={card.dateOfStart}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Main;
