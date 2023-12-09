import React, { useEffect } from "react";
import "./main.scss";
import { Button, Input, Select } from "antd";
import Card from "./Card";
import useModal from "../States";
import Modal from "../Modal/Modal";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

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

const MineLots = () => {
  const isOpen = useModal((state) => state.isOpen);
  const toOpenModal = useModal((state) => state.open);
  const toCloseModal = useModal((state) => state.close);


  const navigate = useNavigate();

  const navToNext = (card) => {
    navigate("/lot", { state: card });
  }

  return (
    <div className="m20 section">
      <div className="header flex_row w100 flex_btw">
        <div className="profile_user">
          <div className="user_photo"></div>
          <div className="user_name"></div>
        </div>
        <div className="menu_burger" onClick={toOpenModal}>
          <div className="menu_burger_line"></div>
          <div className="menu_burger_line"></div>
          <div className="menu_burger_line"></div>
        </div>
      </div>
      <div className="w100">
        <div className="section_content">
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
      <div className="w100">
        <div className="title_big flex_center">Мои лоты</div>
        <div className="section_content">
          {cards.map((card, i) => (
            <div className="card_wrapper" onClick={()=> navToNext(card)}>
              <Card
                key={i}
                img={card.img}
                label={card.label}
                initPrice={card.initPrice}
                dateOfStart={card.dateOfStart}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container"></div>
      <div className="footer">
        <Footer />
      </div>

      <Modal isOpen={isOpen}></Modal>
    </div>
  );
};

export default MineLots;
