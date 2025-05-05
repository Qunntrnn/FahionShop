import React from "react";
import TypeProduct from "../../Components/TypeProducts/TypeProduct";
import { WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from "./style";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import slider1 from "../../Assets/Image/slider1.webp";
import slider2 from "../../Assets/Image/slider2.webp";
import slider3 from "../../Assets/Image/slider3.webp";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Navbar from "../../Components/Navbar/Navbar";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { Color } from "antd/es/color-picker";

const HomePage = () => {
  const arr = ["Nam", "Nu", "Tre em"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        <div
          id="container"
          style={{
            backgroundColor: "#efefef",
            padding: "0 120px",
            height: "1000px",
            width: "100%",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProduct>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </WrapperProduct>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outLine"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
