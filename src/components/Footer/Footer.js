import React from "react";
import "./Footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined, AppstoreAddOutlined, UsergroupAddOutlined, BlockOutlined } from '@ant-design/icons';


const Footer = () => {
  const navigate = useNavigate();
  const goNextPage = (url) => {
    navigate(url);
  }
  return (
    <div className="footer_wrapp flex_row flex_evenly">
      <div className="footer_item flex_col flex_center" onClick={() => goNextPage("/")}>
      <HomeOutlined style={{ fontSize: '20px' }}/>
        <span className="label">Главная</span>
      </div>
      <div className="footer_item flex_col flex_center" onClick={() => goNextPage("/add")}>
      <AppstoreAddOutlined style={{ fontSize: '20px' }}/>
        <span className="label">Добавить</span>
      </div>
      <div className="footer_item flex_col flex_center">
      <UsergroupAddOutlined style={{ fontSize: '20px' }}/>
        <span className="label">Участник</span>
      </div>
      <div className="footer_item flex_col flex_center">
      <BlockOutlined style={{ fontSize: '20px' }}/>
        <span className="label">Мои лоты</span>
      </div>
    </div>
  );
};
export default Footer;
