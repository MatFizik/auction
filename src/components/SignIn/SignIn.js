import React, {useState}from "react";
import "./signIn.scss";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import ApiService from "../APIService/ApiService";
import { useNavigate } from "react-router-dom";
import auth from "../Auth";

const SignIn = () => {
  const isAuth = auth((state) => state.isAuth);
  const id = auth((state) => state.id);
  const signIn = auth((state) => state.signin);
const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

  const onFinish = async (data) => {
    console.log(login, password);
      let formData = new FormData();
      formData.append("email", login);
      formData.append("password", password);
      let r = await ApiService.auth(formData)
      console.log(r.code);
      if(r.message == "Success"){
        navToNext()
        signIn({id: r.code, login: login})
        console.log("Успешно", isAuth)
        console.log("Успешно", id)
      }
  };

  const navToNext = () => {
    navigate("/");
  }

  return (
    <div>
      <div className="container m40 flex_center flex_col">
        <div className="m30 title_big">АВТОРИЗАЦИЯ</div>
        <div className="w100">
          <form className="flex_col flex_center w100">
            <div className="form_item_wrapp">
              <Input type="text" placeholder="Логин" onChange={(v)=>setLogin(v.target.value)} />
            </div>
            <div className="form_item_wrapp">
            <Input.Password placeholder="Пароль" onChange={(v)=>setPassword(v.target.value)}/>
            </div>
            <div className="form_item_wrapp">
              <Button onClick={onFinish} className="w100" type="primary">
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
