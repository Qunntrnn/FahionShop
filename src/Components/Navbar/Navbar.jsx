import React from "react";
import { WrapperContent, WrapperLableText, WrapperTextValue } from "./style";
import { Checkbox, Rate } from "antd";
import { WrapperPriceText } from "../CardProduct/style";

const Navbar = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => (
          <WrapperTextValue>{option}</WrapperTextValue>
        ));

      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />

              <span>{`Tu ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperPriceText>{option}</WrapperPriceText>;
        });

      default:
        return null;
    }
  };
  return (
    <div>
      <WrapperLableText>Lable</WrapperLableText>
      <WrapperContent>
        {renderContent("text", ["Quan", "Ao", "Giay dep"])}
      </WrapperContent>
    </div>
  );
};

export default Navbar;
