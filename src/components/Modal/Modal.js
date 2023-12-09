import React from "react";
import "./modalMenu.scss";
import useModal from "../States";
import { Link } from "react-router-dom";
import auth from "../Auth";

const Modal = ({ isOpen }) => {
  const isAuth = auth((state) => state.isAuth);
  const signout = auth((state) => state.signout);
  const toCloseModal = useModal((state) => state.close);
  return (
    <div className={`modal ${isOpen ? "open" : "close"}`}>
      <div className="modal__content flex_col">
        <div className="modal__close" onClick={toCloseModal}>
          X
        </div>
        <div className="modal__body flex_col flex_center">
          <span className="meny_item"><Link to="/">Главная</Link></span>
          <span className="meny_item"><Link to="/">Добавить лот</Link></span>
          <span className="meny_item"><Link to="/">Участник в лотах</Link></span>
          <span className="meny_item"><Link to="/">Мои лоты</Link></span>
          <span className="meny_item" onClick={signout}>Выйти</span>
        </div>
      </div>
    </div>
  );
};
export default Modal;
