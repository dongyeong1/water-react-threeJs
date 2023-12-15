import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes,css  } from 'styled-components'
import { useNavigate } from "react-router-dom";

const SideMenuWrapper=styled.div`
padding: 10px;
    position: fixed;
    left:0%;
    top: 0%;
    width:120px;
    height: 100vh;
    background-color: #1F2B4E;
    transition: all 0.1;
    opacity: 0.7;
    z-index: 100;


    
    ${({closeMenu})=>closeMenu&&`
        width:0px;

    opacity:1;
    `}
`

const HeaderWrapper=styled.header`
display: flex;
justify-content: space-between;
`
const HeaderLogo=styled.div`
    width:50px;
    height:50px;

`

const HeaderText=styled.div`
margin-right: 100px;

`

const rotation = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(180deg);
}
`;


const HeaderIcon=styled.div`
color:white;
font-size: 20px;
width:30px;
height: 30px;
background-color: blue;
border-radius:50%;
position: absolute;
right: -15px;
/* display: flex;
align-items: center; */
display: flex;
align-items: center;
justify-content: center;
transform:rotate(180deg);
transition: all 1s;
opacity: 1;

${({closeMenu})=>closeMenu&&
    // css`
    // animation: ${rotation} 1s linear ;
    
    // `    
    `
    transform:rotate(0deg);
    opacity: 1;

    
    `
}




`


const MenuWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
        margin-top: 30px;
    }
    a{
        text-decoration:none;
        color:white
    }
    
`


const EnergyMenu=styled.div`

`

const LoginMenu=styled.div`

`

const SimulationMenu=styled.div`

`
const DashboardMenu=styled.div`

`

const SideMenu = () => {

    const [closeMenu,setCloseMenu]=useState(true)
    const navigate = useNavigate();

    const toMain=()=>{
        
        navigate('/main')
        window.location.replace("/")
    }
  return (
    <div>
    <SideMenuWrapper onMouseOut={()=>setCloseMenu(true)} onMouseOver={()=>setCloseMenu(false)} closeMenu={closeMenu} >
        <HeaderWrapper>
            <HeaderLogo ></HeaderLogo>
            <HeaderText>{!closeMenu&&'수자원공사'}</HeaderText>
            <HeaderIcon closeMenu={closeMenu} onClick={()=>setCloseMenu(prev=>!prev)}>></HeaderIcon>
        </HeaderWrapper>
        <MenuWrapper>
        <DashboardMenu><Link  to='/dashboard'>{!closeMenu&&'대쉬보드'}</Link></DashboardMenu>
        <SimulationMenu><Link to='/energy'>{!closeMenu&&'상세페이지'}</Link></SimulationMenu>
        
        <EnergyMenu><Link to='/simulation'>{!closeMenu&&'시뮬레이션'}</Link></EnergyMenu>
            <LoginMenu><div onClick={toMain} >{!closeMenu&&'메인페이지'}</div></LoginMenu>

        </MenuWrapper>
    </SideMenuWrapper>
    </div>
  )
}

export default SideMenu