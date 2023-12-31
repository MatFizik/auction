import React, { useEffect, useState } from "react";
import "./lot.scss";
import "../Main/main.scss";
import "../Assets/sections.scss";
import { Input, message } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import ApiService from "../APIService/ApiService";
import "moment/locale/ru";
import auth from "../Auth";
import { Button, Modal } from "antd";
import trophy from "./trophy.jpg";

import moment from "moment";

const Lot = () => {
  const [openModal, setOpenModal] = useState();
  const [bet, setBet] = useState();
  const [bets, setBets] = useState();

  const obj = useLocation().state;
  const navigate = useNavigate();
  const authId = auth((state) => state.id);
  const [messageApi, contextHolder] = message.useMessage();

  const [status, setStatus] = useState();

  const goBack = () => {
    navigate(-1);
  };

  const getByTestId = async () => {
    console.log(obj.id);
    let formData = new FormData();
    formData.append("auctionId", obj.id);
    let r = await ApiService.getBets(formData);
    console.log(r.data[0]);
    var t = r.data.sort((a, b) => b.price - a.price);
    setStatus(t[0]?.product.status);
    setBets(t);
  };

  const success = (msg) => {
    messageApi.open({
      type: "success",
      content: msg,
    });
  };
  const error = (msg) => {
    messageApi.open({
      type: "error",
      content: msg,
    });
  };

  const toPlayBet = async () => {
    let formData = new FormData();
    formData.append("playerId", authId);
    formData.append("productId", obj.id);
    formData.append("date", new Date().toISOString());
    formData.append("price", bet);
    let r = await ApiService.createBet(formData);
    console.log(r);
    if (r.message == "Success") {
      setOpenModal(false);
      success(r.message);
    } else {
      error(r.message);
    }
    getByTestId();
  };

  useEffect(() => {
    getByTestId();
  }, []);

  const originalDate = moment(obj.startDate);
  const modifiedDate = originalDate.add(6, "hours");
  const formattedDate = originalDate.format("YYYY-MM-DD HH:mm:ss");

  return (
    <div className="m20">
      {contextHolder}
      <div className="arrow_back" onClick={goBack}></div>
      <div className="section_wrapp lot">
        <div className="gallery w100 flex_center photo">
          <img src={"data:image/jpeg;base64," + obj.photoUrl} alt="img" />
        </div>
        <div className="section p10">
          <div className="flex_col">
            <span className="label_name">{obj.name}</span>
          </div>
          <div className="flex_row flex_btw">
            <div className="flex_col">
              <span className="label">Дата начала аукциона</span>
              <span className="label_var">{formattedDate}</span>
            </div>
            <div className="flex_col">
              <span className="label">Стартовая цена</span>
              <span className="label_var">{obj.startPrice + " сом"}</span>
            </div>
          </div>
        </div>
        <div className="section p10 flex_col">
          <div>
            <span className="">Описание</span>
          </div>
          <div>
            <span className="description">{obj.description}</span>
          </div>
        </div>
        <div className="section p10 flex_col"></div>
        <div className="section ">
          {authId != obj.salesmanId && (
            <Button
              type="primary"
              className="w100"
              onClick={() => setOpenModal(true)}
            >
              Участвовать
            </Button>
          )}
        </div>
      </div>
      {openModal && (
        <Modal
          title="Basic Modal"
          open={openModal}
          onOk={toPlayBet}
          onCancel={() => setOpenModal(false)}
        >
          <Input placeholder="Bet" onChange={(v) => setBet(v.target.value)} />
        </Modal>
      )}

      <div className="section_wrapp bets p20 flex_col">
        {status == "Finished" ? (
          <div className="flex_row flex_btw w100">
            <div className="flex_col trophy">
              <img src={trophy}></img>
            </div>
            <div className="flex_col">
              <span className="label">Победитель:</span>
              <span>
                <b>{bets[0].player.name}</b>
              </span>
            </div>
            <div className="flex_col">
              <span className="label">Ставка:</span>
              <span>
                <b>{bets[0].price + " сом"}</b>
              </span>
            </div>
          </div>
        ) : (
          <div>
            {bets?.map((bet, i) => (
              <div className="flex_row flex_btw w100" key={i}>
                <div className="flex_col">
                  <span className="label">Имя:</span>
                  <span>
                    <b>{bet.player.name}</b>
                  </span>
                </div>
                <div className="flex_col">
                  <span className="label">Ставка:</span>
                  <span>
                    <b>{bet.price + " сом"}</b>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lot;
