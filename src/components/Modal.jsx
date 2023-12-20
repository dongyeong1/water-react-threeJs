import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  width: 100%;
  position: absolute;
  top: 15%;
  bottom: 0;
  left: 0;
  right: 0;
`;
const ModalContent = styled.div`
  position: relative;
  color: white;
  z-index: 2;
  padding: 32px;
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 250px;
  height: 200px;
  background-color: #1f2b4e;
  border-radius: 20px;
`;

const Button = styled.div`
  width: 150px;
  border-radius: 20px;
  background-color: white;
  color: black;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`;
const CloseModal = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
`;

const Modal = ({ visible, closeModal, content }) => {
  const toDetail = () => {
    window.location.replace(`/detail/${content.name}`);
  };

  if (!visible) return null;
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent className="content">
        <CloseModal onClick={closeModal}>x</CloseModal>

        <h1>{content.name}</h1>
        <h2>{content.ID}</h2>
        <ButtonWrapper>
          <Button onClick={toDetail}>상세페이지 이동</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("portal")
  );
};

export default Modal;
