import React, { useEffect, useState } from "react";
import "./main.scss";
import { Button, Input, Select } from "antd";
import Card from "./Card";
import useModal from "../States";
import Modal from "../Modal/Modal";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import ApiService from "../APIService/ApiService";
import auth from "../Auth";
import Search from "antd/es/input/Search";

const Main = () => {
  const isOpen = useModal((state) => state.isOpen);
  const toOpenModal = useModal((state) => state.open);
  const id = auth((state) => state.id);
  const [auctions, setAuctions] = useState([]); // [1,2,3,4,5
  const [auctionsLocal, setAuctionsLocal] = useState([]); // [1,2,3,4,5
  const toCloseModal = useModal((state) => state.close);
  const [categories, setCategories] = useState([]); // [1,2,3,4,5
  const isAuth = auth((state) => state.isAuth);
  const signout = auth((state) => state.signout);

  const exit = () => {
    toCloseModal();
    signout();
  }

  const navigate = useNavigate();

  const getCategories = async () => {
    let c = await ApiService.getCategory();
    setCategories(c);
  }

  const getAuctions = async () => {
    let a = await ApiService.getAuctions();
    setAuctions(a.data);
    setAuctionsLocal(a.data);
  }

  useEffect(() => {
    getCategories();
    getAuctions();
    console.log(id);
  },[]);

  const navToNext = (card) => {
    navigate("/lot", { state: card });
  }

  const search = (e) => {
    let a = auctions.filter((item) => {
      return item.name.includes(e.target.value);
    });
    setAuctionsLocal(a);
  } 
  return (
    <div className="m20 section">
      <div className="header flex_row w100 flex_btw">
        <div className="profile_user">
          <div className="user_photo"></div>
          <div className="user_name"></div>
        </div>
        <div className="menu_items flex_row  flex_center">
          <span className="menu_item"><Link to="/">Главная</Link></span>
          <span className="menu_item"><Link to="/">Добавить лот</Link></span>
          <span className="menu_item"><Link to="/">Участник в лотах</Link></span>
          <span className="menu_item"><Link to="/">Мои лоты</Link></span>
          <span className="menu_item exit" onClick={exit}>Выйти</span>
        </div>
        <div className="menu_burger" onClick={toOpenModal}>
          <div className="menu_burger_line"></div>
          <div className="menu_burger_line"></div>
          <div className="menu_burger_line"></div>
        </div>
      </div>
      <div className="wrapper m10">
        <div className="section_content">
          <div className="card_wrapp">
            <div>
              <Input.Search onInput={search}></Input.Search>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="title_big flex_center">Аукционы</div>
        <div className="section_content">
          {auctionsLocal?.map((card, i) => (
            <div className="card_wrapper m10" onClick={()=> navToNext(card)}>
              <Card
                key={i}
                id={card.id}
                img={card.photoUrl}
                label={card.name}
                initPrice={card.startPrice}
                dateOfStart={card.startDate}
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

export default Main;
