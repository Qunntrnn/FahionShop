import styled from "styled-components";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 1px solid red;
  height: 44px;
`;
export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  width: 100%;
  text-align: center;
`;

export const WrapperProduct = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
