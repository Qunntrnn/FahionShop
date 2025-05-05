import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13 , 92 ,182)",
    colorButton = "#fff",
  } = props;
  return (
    <div style={{ display: "flex", backgroundColor: backgroundColorInput }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: "#fff" }}
      />
      <ButtonComponent
        size={size}
        type="text"
        icon={<SearchOutlined color={colorButton} />}
        style={{ backgroundColor: backgroundColorButton }}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      ></ButtonComponent>
    </div>
  );
};

export default ButtonInputSearch;
