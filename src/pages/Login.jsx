import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { CardTitle } from "react-bootstrap";
import "./LoginForm.css";

const Wrapper = styled.div`
  background-image: url("loginImage/water1.jpg");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;
export default function LoginForm() {
  return (
    <>
      <Wrapper>
        <div className="center_position">
          <Card className="LoginCard">
            <Card.Body>
              <div className="center_position">
                <img
                  className="logo"
                  src="loginImage/unit.gif"
                  alt="로고"
                ></img>
              </div>
              <CardTitle className="CardTitle">Kwater Login</CardTitle>
              <div className="center_position user_select">
                <label style={{ fontSize: "20px" }}>사용자</label>&nbsp;{" "}
                <input style={{ width: "24px" }} type="radio" name="user" />
                &nbsp;&nbsp;&nbsp;
                <label style={{ fontSize: "20px" }}>관리자</label>&nbsp;{" "}
                <input style={{ width: "24px" }} type="radio" name="user" />
              </div>
              <Card.Text>
                <form>
                  <input
                    className="inputstyle"
                    type="text"
                    placeholder="아이디"
                  ></input>
                  <br />
                  <br />
                  <input
                    className="inputstyle"
                    type="password"
                    placeholder="패스워드"
                  ></input>
                </form>
              </Card.Text>
              <br />

              <div className="center_position">
                <button className="loginbutton">로그인</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Wrapper>
    </>
  );
}
