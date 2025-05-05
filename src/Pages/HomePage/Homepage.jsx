import React from "react";
import TypeProduct from "../../Components/TypeProducts/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../Components/SliderComponent/SliderComponent";
import slider1 from "../../Assets/Image/slider1.webp";
import slider2 from "../../Assets/Image/slider2.webp";
import slider3 from "../../Assets/Image/slider3.webp";
import CardProduct from "../../Components/CardProduct/CardProduct";

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
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
