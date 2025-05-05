import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import imageProduct from "../../Assets/Image/test.jpg";
import imageProductSmall from "../../Assets/Image/test-small.jpg";
import { WrapperAdressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => { }
  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius : '4px' }}>
      <Col span={10} style={{borderRight : "1px solid #e5e5e5", paddingRight :'8px'}}>
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
      <Col span={14} style={{paddingLeft : '10px'}}>
        <WrapperStyleNameProduct>Decade driver csm</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell>| Da ban 999+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct><WrapperPriceTextProduct>200.000VND</WrapperPriceTextProduct></WrapperPriceProduct>
        <WrapperAdressProduct>
          <span>Giao đến </span>
          <span className="address"> Bách Thuận, Vũ Thư , Thái Bình </span>
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAdressProduct>
        <div style={{margin : "10px 0 20px ",padding : '10px 0'  , borderTop : '1px solid #e5e5e5',borderBottom : '1px solid #e5e5e5'}}>
          <div style={{marginBottom : '10px' }}>Số lượng</div>
          <WrapperQuantityProduct>

            <div  >
              <button style={{ border: "none", background: 'transparent' }}> <MinusOutlined size="10" style={{ color: '#000', fontSize: "20px" }} /></button>
              <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />
              <button style={{ border: "none", background: 'transparent' }}><PlusOutlined size="10" style={{ color: '#000', fontSize: "20px" }} /></button>
            </div>
          </WrapperQuantityProduct>
        </div>
        <div style={{display : "flex" , alignItems : 'center' , gap : "12px"}}>
          <ButtonComponent size={40} styleButton={{ background: 'rgb(255,57,69)', border : '1px solid rgb(13,92,182)' ,  height: "48px", width: "220px", border: "none", borderRadius: '4px' }} textButton={"Chọn mua"} styleTextButton={{ color: "#fff", fontSize : '15px', fontWeight : '700' }} >

          </ButtonComponent>
          <ButtonComponent size={40} styleButton={{ background: 'rgb(255,57,69)',  height: "48px", width: "220px", border: "none", borderRadius: '4px' }} textButton={"Mua trả sau"} styleTextButton={{ color: "rgb(13,92,182)", fontSize : '15px' }} >

          </ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
