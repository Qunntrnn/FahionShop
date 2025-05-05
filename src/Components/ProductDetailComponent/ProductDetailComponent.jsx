import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../Assets/Image/test.jpg";
import imageProductSmall from "../../Assets/Image/test-small.jpg";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailComponent = () => {
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row
          style={{
            paddingTop: "10px",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="image small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14}></Col>
    </Row>
  );
};

export default ProductDetailComponent;
