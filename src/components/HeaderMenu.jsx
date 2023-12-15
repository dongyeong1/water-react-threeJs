import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HeaderWrapper=styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 80px;
    background-color: transparent;
    /* opacity: 0.1; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;

`

const HeaderTitle=styled.div`
position: absolute;
left:50%;
transform: translateX(-50%);
    color:white;
    font-weight: 600;
    font-size:40px;
`
const HeaderDate=styled.div`
margin-left:50px;
font-size: 20px;
width:300px;
color:white;
`

const HeaderLogin=styled.div`
    width:100px;
    height: 40px;
    background-color:#10194D;;
    border-radius: 20px;
    font-weight: 600;
    display: flex;
    justify-content:center;
    align-items: center;
    color: white;
    margin-right: 50px;
`
const HeaderMenu = () => {
    // let today=new Date();
    // let hours = today.getHours(); // 시
    // let minutes = today.getMinutes();  // 분
    // let seconds = today.getSeconds();  // 초
    const [timeState,setTimeState]=useState( new Date())
    const liveDate=()=>{
        setTimeState(new Date())
    }

useEffect(()=>{
    const timeId=setInterval(()=>liveDate(),1000)
    return()=>{
        clearInterval(timeId)

    }
})

  return (
    <HeaderWrapper>
    <HeaderDate><span>현재시간</span>&nbsp;<span>{timeState.getFullYear()+'-'+timeState.getMonth()+'-'+timeState.getDate()}</span>&nbsp;<span>{timeState.getHours()+':'+timeState.getMinutes()+':'+timeState.getSeconds()}</span></HeaderDate>
    <HeaderTitle>스마트 정수장 AI 플랫폼</HeaderTitle>

<HeaderLogin>Login</HeaderLogin>

    </HeaderWrapper>
  )
}

export default HeaderMenu