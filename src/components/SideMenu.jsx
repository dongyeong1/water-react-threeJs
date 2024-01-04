import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

const SideMenuWrapper = styled.div`
  padding: 60px 10px 10px 10px;
  position: fixed;
  left: 0%;
  top: 0%;
  width: 120px;
  height: 100vh;
  background-color: #2b547a;
  transition: all 0.1;
  opacity: 0.7;
  z-index: 100;

  ${({ closeMenu }) =>
    closeMenu &&
    `
        width:0px;

    opacity:1;
    `}
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const rotation = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(180deg);
}
`;

const HeaderIcon = styled.div`
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  background-color: #2b547a;
  border-radius: 50%;
  position: absolute;
  right: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
  transition: all 1s;
  opacity: 1;

  ${({ closeMenu }) =>
    closeMenu &&
    `
    transform:rotate(0deg);
    opacity: 1;

    
    `}
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  div {
    margin-top: 30px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

const EnergyMenu = styled.div`
  &:hover {
    background-color: white;
    color: #2b547a !important;
  }
  a:hover {
    color: #2b547a;
    width: 100%;
  }
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginMenu = styled.div`
  a {
    cursor: pointer;
    width: 100%;
  }
  a:hover {
    color: #2b547a;
  }
  &:hover {
    background-color: white;
    color: #2b547a !important;
  }
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideMenu = () => {
  const [closeMenu, setCloseMenu] = useState(true);

  const toMain = () => {
    window.location.replace("/");
  };
  return (
    <div>
      <SideMenuWrapper
        onMouseOut={() => setCloseMenu(true)}
        onMouseOver={() => setCloseMenu(false)}
        closeMenu={closeMenu}
      >
        <HeaderWrapper>
          <HeaderIcon
            closeMenu={closeMenu}
            onClick={() => setCloseMenu((prev) => !prev)}
          >
            >
          </HeaderIcon>
        </HeaderWrapper>
        <MenuWrapper>
          <LoginMenu>
            <a onClick={toMain}>{!closeMenu && "메인페이지"}</a>
          </LoginMenu>
          <EnergyMenu>
            <Link to="/simulation">{!closeMenu && "시뮬레이션"}</Link>
          </EnergyMenu>
          <EnergyMenu>
            <Link to="/detail/yak">{!closeMenu && "약품동"}</Link>
          </EnergyMenu>
          <EnergyMenu>
            <Link to="/detail/jiha">{!closeMenu && "지하공동구"}</Link>
          </EnergyMenu>
        </MenuWrapper>
      </SideMenuWrapper>
    </div>
  );
};

export default SideMenu;
