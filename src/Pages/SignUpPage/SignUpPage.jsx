import React from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../Components/InputForm/InputForm";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../Assets/Image/logo-login.jpg";
const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#ccc",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          background: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Nhập mật khẩu"
          />
          <InputForm placeholder="Xác nhận mật khẩu" />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              border: "1px solid rgb(13,92,182)",
              height: "48px",
              width: "100%",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>

          <p>
            Bạn đã có tài khoản ?{" "}
            <WrapperTextLight>Đăng nhập </WrapperTextLight>
          </p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Welcome to QShop</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
