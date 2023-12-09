import React from "react";
import "./signUp.scss";
import { Input, Button, Form } from "antd";
import { Link } from "react-router-dom";
import ApiService from "../APIService/ApiService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (data) => {
    console.log(data);
      let formData = new FormData();
      formData.append("name", data.username);
      formData.append("email", data.email);
      formData.append("password", data.password);
      let r = await ApiService.registration(formData)
      console.log(r);
      if(r.code == 0){
        navToNext()
        console.log("Успешно")
      }
  };

  const navToNext = () => {
    navigate("/signin");
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="container m40 flex_center flex_col">
        <div className="m30 title_big">Регистрация</div>
        <div className="w100">
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username" 
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Имя"/>
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>
            <Form.Item>
            <Button className="w100 form_item_wrapp" type="primary" htmlType="submit">Создать аккаунт</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="text_link_route">
          <Link to="/signin">Уже есть аккаунт?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
