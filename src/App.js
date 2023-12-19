import logo from './logo.svg';
import React from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import HeaderMenu from './components/HeaderMenu';
import { Suspense } from 'react';
import styled from 'styled-components';
const LazyDashBoard=React.lazy(()=>import('./pages/Dashboard'))
const LazyDetailPage=React.lazy(()=>import('./pages/Detail'))
const LazyNotFound=React.lazy(()=>import('./pages/NotFound'))
const LazyMain=React.lazy(()=>import('./pages/Main'))
const LazySimulation=React.lazy(()=>import('./pages/Simulation'))
const LazyLogin=React.lazy(()=>import('./pages/Login'))

  const SpinWrapper=styled.div`
      width: auto;
      height: auto;
      position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


  `


function App() {
  return (
    <>
<div className="App">
      <BrowserRouter>
      <HeaderMenu></HeaderMenu>
      <SideMenu></SideMenu>
          <Suspense fallback={<SpinWrapper>  <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 40,
        }}
        spin
      />
    }
  /></SpinWrapper>}>
            <Routes>
    {/* <Route path='/dashboard' element={<LazyDashBoard></LazyDashBoard>}></Route> */}
    <Route path='/' element={<LazyMain></LazyMain>}></Route>
    <Route path='/detail/:id' element={<LazyDetailPage></LazyDetailPage>}></Route>
    <Route path='/simulation' element={<LazySimulation></LazySimulation>}></Route>
    <Route path='/login' element={<LazyLogin></LazyLogin>}></Route>
    <Route path='*' element={<LazyNotFound></LazyNotFound>}>
    {/* <Route path='/' element={<LazyMain></LazyMain>}></Route> */}
   </Route>

</Routes>
          </Suspense>


    </BrowserRouter>
     <div></div>
    </div>
    </>
    
  );
}

export default App;
