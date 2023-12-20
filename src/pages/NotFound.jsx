import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  width: 200px;
  color: gray;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  margin-top: 30px;
  font-weight: 550;
`;
const NotFound = () => {
  const navigate = useNavigate();

  const toBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Content>존재하지 않는 페이지입니다.</Content>
      <ButtonWrapper>
        <Button onClick={toBack}>이전화면</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NotFound;
