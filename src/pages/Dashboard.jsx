import React, { useCallback, useState, useEffect } from "react";
import styled from 'styled-components'
import { Input } from 'antd';
import {EnvironmentOutlined, SearchOutlined ,MailOutlined,HomeOutlined,PieChartOutlined,FormOutlined} from '@ant-design/icons';
import { Chart } from "react-google-charts";
import { PieChart, Pie,Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const BackgroundWrapper=styled.div`
border-radius:40px;
    background-color:#0A0769;
    width:90%;
    height:90vh;
    position:relative;
`

const InnerWrapper=styled.div`
/* padding:20px; */
/* margin-top:100px; */
    width:100%;
    /* height:calc(100%-80px); */
    /* margin-left:5%; */

`

const Wrapper=styled.div`
    width:100%;
    height:100vh;
    /* background-color:#93D2DF; */
    display:flex;
    justify-content:center;
    align-items:center;
`
const HeaderWrapper=styled.div` 
    padding:20px;
`

const Header=styled.div`    
display:flex;
justify-content:space-between;
aligin-items:center;

    width:100%;
    height:40px;
    .ant-input-affix-wrapper{
        width:450px;
        height:40px;
        background-color:#F5F6FD;
        border:none;
    }
    .ant-input{
        background-color:#F5F6FD;
    }
`
const LeftContent=styled.div`
display:flex;
flex-direction:column;
gap:20px;
    width:70%;
    height:550px;
`
const RightContent=styled.div`
    width:30%;
    height:550px;
    border-radius:20px;
/* 
    background-color:#F5F6FD; */
    background-image: url('../3dImage.png');
    background-size : cover;
  background-position : center;
    `
const ContentWrapper=styled.div`
    display:flex;
    padding:20px;
    gap:30px;

`

const NumberWrapper=styled.div`
font-size:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:20%;
    gap:20px;
`

const NumberOne=styled.div`
/* background-color:white; */
/* box-shadow:7px 7px 20px lightgray; */

height:100%;
width:33%;
border-radius:20px;
transition: all 0.5s;
display:flex;
align-items:center;
justify-content:center;

&:hover{
    background: #F51711;
    color: white;
    transform:translateY(-10px);
}

`

const NumberTwo=styled.div`
/* background-color:white; */
/* box-shadow:7px 7px 20px lightgray; */
height:100%;
width:33%;
border-radius:20px;
transition: all 0.5s;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background: #F51711;
    color: white;
    transform:translateY(-10px);
}


`
const NumberThree=styled.div`
/* background-color:white;
box-shadow:7px 7px 20px lightgray; */
height:100%;
width:33%;
border-radius:20px;
transition: all 0.5s;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background: #F51711;
    color: white;
    transform:translateY(-10px);
}
`

const ChartWrapper=styled.div`
    width:100%;
height:40%;
/* background-color:#F5F6FD; */
border-radius:20px;

`

const BoxWrapper=styled.div`
    display:flex;
    width:100%;
    gap:30px;
    height:40%;
`

const BoxOne=styled.div`
border-radius:20px;
    width:50%;
    /* background-color:white; */
    /* box-shadow:7px 7px 20px lightgray; */
    transition: all 0.5s;

    &:hover{
        background: #F51711;
        color: white;
        transform:translateY(-10px);
    }
`
const BoxTwo=styled.div`
    width:50%;
    /* background-color:white; */
    border-radius:20px;
    /* box-shadow:7px 7px 20px lightgray; */
    transition: all 0.5s;

    &:hover{
        background: #F51711;
        color: white;
        transform:translateY(-10px);
    }
`

const MenuWrapper=styled.div`
background-color:white;
width:300px;
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
margin-right:100px;
font-size:14px;
font-weight:600;
`

const MenuOne=styled.div`
    width:30%;

`
const MenuTwo=styled.div`
    width:30%;
    
`
const MenuThree=styled.div`
width:30%;

`

const NoticeWrapper=styled.div`
width:100px;
background-color:white;
display:flex;
align-items:center;
gap:30px;
justify-content:right;
`

const Notice=styled.div`

`
const SmallProfile=styled.div`
border-radius:10px;
background-color:yellow;
width:30px;
height:30px;
`

const IconWrapper=styled.div`
position:absolute;
    display:flex;
    flex-direction:column;
    color:white;
    gap:30px;
    margin-left:6px;
    
   
`
const Wrap=styled.div`
    align-items:center;
    position:absolute;
    display:flex;
    height:100%;
`
const WhiteBox=styled.div`
width:50px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
transition:all 1s;
   &:hover{
    
    background:#F51711 !important;
    border-radius:20px;
    transform:translateX(15px);
    z-index:100;
   }
`

const f1=(msg)=>{
    console.log(msg);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('1번 주문 완료')
        },1000)
    })
}

const f2=(msg)=>{
    console.log(msg);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('2번 주문 완료')
        },2000)
    })
}

const f3=(msg)=>{
    console.log(msg);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('3번 주문완료')
        },3000)
    })
}

f1().then((res)=>f2(res)).then((res)=>f3(res)).then((res)=>console.log(res))

const Dashboard = () => {

    const pieData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 700 },
        // { name: 'Group C', value: 300 },
        // { name: 'Group D', value: 200 },
      ];    
      const COLORS = ['#82ca9d', '#FFFFFF', '#FFBB28', '#FF8042'];
      const COLORSs = ['#8884d8', '#FFFFFF', '#FFBB28', '#FF8042'];

const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  


     const columndata = [
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name  
    ];
     const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
      
       const options = {
        backgroundColor:'transparent',
        legend: {position: 'none'}
      };
       const optionsss = {
        pieHole: 0.4,
        is3D: false,
        backgroundColor:'transparent',
        legend: {position: 'none'}
      };
    return (
    <Wrapper>
       {/* <BackgroundWrapper> */}
        {/* <Wrap>
       <IconWrapper>
        <WhiteBox>        <HomeOutlined style={{fontSize:22,cursor:"pointer"}} />
</WhiteBox>
<WhiteBox>
<PieChartOutlined  style={{fontSize:22,cursor:"pointer"}} />

</WhiteBox>
<WhiteBox>
<FormOutlined style={{fontSize:22,cursor:"pointer"}} />

</WhiteBox>
<WhiteBox>
<EnvironmentOutlined style={{fontSize:22,cursor:"pointer"}} />

</WhiteBox>
       </IconWrapper>   
       </Wrap> */}
    <InnerWrapper>  
        {/* <HeaderWrapper><Header>
            
        <Input size="default" placeholder="Search" prefix={<SearchOutlined />} />

        <MenuWrapper>
        <MenuOne>Feedback</MenuOne>
        <MenuTwo>Contacts</MenuTwo>
        <MenuThree>Help</MenuThree>


        </MenuWrapper>
        <NoticeWrapper>
            <Notice><MailOutlined /></Notice>
            <SmallProfile>s</SmallProfile>

        </NoticeWrapper>
            
            </Header></HeaderWrapper> */}

            
            <ContentWrapper>
            <RightContent></RightContent>

            <LeftContent>
            <NumberWrapper>
                <NumberOne>10,000</NumberOne>
                <NumberTwo>2,000</NumberTwo>
                <NumberThree>500</NumberThree>


            </NumberWrapper>
            <ChartWrapper>

            {/* <Chart       options={options}
 chartType="ColumnChart" width="100%" height="100%" data={columndata} /> */}
           
 <LineChart
          width={900}
          height={220}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
            </ChartWrapper>
            <BoxWrapper>
                <BoxOne>



            {/* <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    /> */}
    <PieChart width={700} height={400}>
    <Pie
          data={pieData}
          cx={120}
          cy={100}
          innerRadius={65}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          values="400"
          stroke="none"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />          ))}
            <Label style={{fontSize:35,fill:'white',fontWeight:600 }} value='40%' position="center"></Label>
        
        </Pie>
    </PieChart>


    </BoxOne>
                <BoxTwo>
                
                
                {/* <Chart
      chartType="PieChart"
      data={data}
      options={optionsss}
      width={"100%"}
      height={"100%"}
    /> */}
    
    
    <PieChart width={700} height={400}>
    <Pie
          data={pieData}
          cx={120}
          cy={100}
          innerRadius={65}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          values="400"
          stroke="none"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORSs[index % COLORS.length]} />          ))}
            <Label style={{fontSize:35, fill:'white',fontWeight:600 }} value='40%' position="center"></Label>
        
        </Pie>
    </PieChart>
    </BoxTwo>

            </BoxWrapper>

            </LeftContent>

            </ContentWrapper>
          

    </InnerWrapper>

       {/* </BackgroundWrapper> */}
       </Wrapper>
    );
};

export default Dashboard;