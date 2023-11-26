import React from "react";
import "./signIn.scss";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="container m40 flex_center flex_col">
        <div className="m30 title_big">АВТОРИЗАЦИЯ</div>
        <div className="w100">
          <form className="flex_col flex_center w100">
            <div className="form_item_wrapp">
              <Input type="text" placeholder="Логин" />
            </div>
            <div className="form_item_wrapp">
            <Input.Password placeholder="Пароль" />
            </div>
            <div className="form_item_wrapp">
              <Button className="w100" type="primary">
                Войти
              </Button>
            </div>
          </form>
        </div>
          <div className="text_link_route"><Link to="/signup">Регистрация</Link></div>
      </div>
    </div>
  );
};

export default SignIn;
