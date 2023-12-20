import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: transparent;
  /* opacity: 0.1; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  z-index: 1000;
`;

const HeaderTitle = styled.div`
  cursor: pointer;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: 600;
  font-size: 40px;
`;
const HeaderDate = styled.div`
  margin-left: 1350px;
  font-size: 20px;
  width: 300px;
  color: white;
`;

const HeaderLogin = styled.div`
  width: 100px;
  height: 40px;
  background-color: #10194d;
  border-radius: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  a {
    text-decoration-line: none;
    color: white;
    font-size: 16px;
  }
`;
const HeaderMenu = () => {
  const [timeState, setTimeState] = useState(new Date());
  const liveDate = () => {
    setTimeState(new Date());
  };

  const toMain = () => {
    window.location.replace("/");
  };

  useEffect(() => {
    const timeId = setInterval(() => liveDate(), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return (
    <HeaderWrapper>
      <HeaderDate>
        <span>현재시간</span>&nbsp;
        <span>
          {timeState.getFullYear() +
            "-" +
            timeState.getMonth() +
            "-" +
            timeState.getDate()}
        </span>
        &nbsp;
        <span>
          {timeState.getHours() +
            ":" +
            timeState.getMinutes() +
            ":" +
            timeState.getSeconds()}
        </span>
      </HeaderDate>
      <HeaderTitle onClick={toMain}>스마트 정수장 AI 플랫폼</HeaderTitle>

      <HeaderLogin>
        <Link to="/login">Login</Link>
      </HeaderLogin>
    </HeaderWrapper>
  );
};

export default HeaderMenu;
