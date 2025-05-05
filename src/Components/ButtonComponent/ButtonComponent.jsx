import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  textButton,
  styleTextButton,
  ...rests
}) => {
  return (
    <Button
      size={size}
      //   icon={<SearchOutlined color={colorButton} />}
      style={styleButton}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
