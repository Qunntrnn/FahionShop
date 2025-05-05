/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReporText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../Assets/Image/logo.png";

const CardProduct = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: "200" }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="test"
          src="data:image/jpeg;base64,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"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct>Test</StyleNameProduct>
      <WrapperReporText>
        <span style={{ marginRight: "4px" }}>
          <span> 4.96</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>

        <span>| Da ban 999+</span>
      </WrapperReporText>
      <WrapperPriceText>
        200.000 VNĐ <WrapperDiscountText>-5%</WrapperDiscountText>{" "}
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardProduct;
