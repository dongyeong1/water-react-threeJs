import logo from "./logo.svg";
import React from "react";
import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import HeaderMenu from "./components/HeaderMenu";
import { Suspense } from "react";
import styled from "styled-components";
const LazyDetailPage = React.lazy(() => import("./pages/Detail"));
const LazyNotFound = React.lazy(() => import("./pages/NotFound"));
const LazyMain = React.lazy(() => import("./pages/Main"));
const LazySimulation = React.lazy(() => import("./pages/Simulation"));
const LazyLogin = React.lazy(() => import("./pages/Login"));

const SpinWrapper = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
function App() {
  const Loader = () => {
    return (
      <SpinWrapper>
        {" "}
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 80,
              }}
              spin
            />
          }
        />
      </SpinWrapper>
    );
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <HeaderMenu></HeaderMenu>
          <SideMenu></SideMenu>
          <Suspense fallback={<Loader></Loader>}>
            <Routes>
              <Route path="/" element={<LazyMain></LazyMain>}></Route>
              <Route
                path="/detail/:id"
                element={<LazyDetailPage></LazyDetailPage>}
              ></Route>
              <Route
                path="/simulation"
                element={<LazySimulation></LazySimulation>}
              ></Route>
              <Route path="/login" element={<LazyLogin></LazyLogin>}></Route>
              <Route path="*" element={<LazyNotFound></LazyNotFound>}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <div></div>
      </div>
    </>
  );
}

export default App;
