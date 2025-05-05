import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CardProduct from "../../Components/CardProduct/CardProduct";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProduct } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0  120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <Navbar />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProduct>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </WrapperProduct>
          <Pagination
            style={{ textAlign: "center", marginTop: "10px" }}
            showQuickJumper
            defaultCurrent={2}
            total={500}
            onChange={onChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
