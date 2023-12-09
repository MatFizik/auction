import React, { useEffect, useState } from "react";
import "../Assets/sections.scss";
import "../Main/main.scss";
import locale from "antd/es/date-picker/locale/ru_RU";

import {
  Button,
  Input,
  Select,
  Form,
  DatePicker,
  InputNumber,
  Upload,
  message,
} from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import ApiService from "../APIService/ApiService";
import TextArea from "antd/es/input/TextArea";
import auth from "../Auth";
import dayjs from "dayjs";
//import locale from 'antd/locale/ru_RU';
import "moment/locale/ru";
import moment from "moment";

const Add = () => {
  const [category, setCategory] = useState();
  const [dateStart, setDateStart] = useState();
  const [dateFinish, setDateFinish] = useState();

  const [categories, setCategories] = useState();
  const [imgBase, setImgBase] = useState();
  const [fileList, setFileList] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Аукцион успешно создан',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Ошибка создания',
    });
  };
  
  const authId = auth((state) => state.id);

  const getCategories = async () => {
    let c = await ApiService.getCategory();
    let obj;
    obj = c.data.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
    setCategories(obj);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const toBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.file);
    reader.onload = () => {
      let s = {
        name: file.file.name,
        type: file.file.type,
        size: file.file.size,
        url: reader.result,
        uid: file.file.uid,
        base64: reader.result.split(",")[1],
      };
      setImgBase(s.base64);
      let arr = [];
      arr.push(fileList);
      arr.push(s);

      setFileList(arr);

      console.log(s);
    };
  };

  const onFinish = async (data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("SalesmanId", authId);
    formData.append("CategoryId", category);
    formData.append("photoUrl", imgBase);
    formData.append("StartDate", dateStart);
    formData.append("FinishDate", dateFinish);
    formData.append("startprice", data.initPrice);
    formData.append("step", data.minOfStep);

    let r = await ApiService.createAuction(formData);
    if(r.code == 0){
      success();
      navigate("/");
    }else{
      error();
    }
    console.log(r);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const Date1 = (v) => {
    console.log(v, "Date1");
    setDateStart(v);
  };
  const Date2 = (v) => {
    console.log(v, "Date2");
    setDateFinish(v);
  };

  return (
    <div>
      {contextHolder}
      <div className="arrow_back m20" onClick={goBack}></div>
      <div className="m20">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item name="name">
            <div
              className="section_wrapp"
              rules={[
                {
                  required: true,
                  message: "Это обязательное поле!",
                },
              ]}
            >
              <span>Название</span>
              <Input placeholder="Название лота" className="w100" />
            </div>
          </Form.Item>
          <Form.Item name="description">
            <div
              className="section_wrapp"
              rules={[
                {
                  required: true,
                  message: "Это обязательное поле!",
                },
              ]}
            >
              <span>Описание</span>
              <TextArea placeholder="Название лота" className="w100" />
            </div>
          </Form.Item>
          <Form.Item
            name="category"
            // rules={[
            //   {
            //     required: true,
            //     message: "Это обязательное поле!",
            //   },
            // ]}
          >
            <div className="section_wrapp">
              <span>Категория лота</span>
              <Select
                placeholder="Выберите категорию"
                className="w100"
                onSelect={(e) => setCategory(e)}
                options={categories}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="dateOfStart"
            // rules={[
            //   {
            //     required: true,
            //     message: "Это обязательное поле!",
            //   },
            // ]}
          >
            <div className="section_wrapp">
              <span>Дата начала аукциона</span>
                <label>
                  <DatePicker
                    id={"date-picker"}
                    onChange={Date1}
                    showTime
                    locale={locale}
                    className={"w100"}
                  />
                </label>
            </div>
          </Form.Item>
          <Form.Item
            name="dateOfFinish"
            // rules={[
            //   {
            //     required: true,
            //     message: "Это обязательное поле!",
            //   },
            // ]}
          >
            <div className="section_wrapp">
              <span>Срок аукциона</span>
              <DatePicker
                placeholder="YYYY-MM-DD"
                className="w100"
                showTime
                locale={locale}
                onChange={Date2}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="initPrice"
            rules={[
              {
                required: true,
                message: "Это обязательное поле!",
              },
            ]}
          >
            <div className="section_wrapp">
              <span>Стартовая цена</span>
              <InputNumber placeholder="" className="w100" />
            </div>
          </Form.Item>
          <Form.Item
            name="minOfStep"
            rules={[
              {
                required: true,
                message: "Это обязательное поле!",
              },
            ]}
          >
            <div className="section_wrapp">
              <span>Минимальное значение повышения ставки</span>
              <InputNumber placeholder="" className="w100" />
            </div>
          </Form.Item>
          <Form.Item>
            <ImgCrop rotationSlider wi>
              <Upload
                customRequest={toBase}
                listType="picture-card"
                onChange={onChange}
                //fileList={fileList}
                onPreview={onPreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item>
            <div className="mUB30">
              <Button
                className="w100 form_item_wrapp"
                type="primary"
                htmlType="submit"
              >
                Создать лот
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Add;
