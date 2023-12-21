import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ComposedChart,
  Bar,
} from "recharts";

import { phData, jeonData, alData, ondoData, takdoData } from "../data/data";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

const Wrapper = styled.div`
  height: 100vh;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TopContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const BottomContentWrapper = styled.div`
  width: 90%;
  border-radius: 20px;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #10194d;
`;
const Wrappers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  gap: 50px;
`;

const ImageWrapper = styled.div`
  width: 65%;
  height: 100%;
  background-color: white;
`;

const DonutChartWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TimeDonutWrapper = styled.div`
  height: 46%;
  width: 100%;
  background-color: #10194d;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const LifeDonutWrapper = styled.div`
  height: 46%;
  width: 100%;
  background-color: #10194d;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 70%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const ChartWrapper = styled.div`
  width: 50%;
  height: 100%;
  .recharts-wrapper {
    width: 100% !important;
    height: 100% !important;
  }
`;
const OneText = styled.div`
  width: 100%;
  height: 50%;
  background-color: #01082e;
  border-radius: 20px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
const ButtonWrapper = styled.div`
  /* background-color: red; */
  position: absolute;
  top: 5%;
  right: 1%;
  display: flex;
  gap: 10px;
  button {
    border-radius: 20px;
    border: none;
    height: 30px;
    width: 90px;
    font-size: 15px;
    cursor: pointer;
    background-color: white;
    font-weight: 600;
  }
  .ph {
    ${({ clickState }) =>
      clickState == "ph" &&
      `
      background-color:#413ea0;
      color:white;
    `}
  }
  .jeon {
    ${({ clickState }) =>
      clickState == "jeon" &&
      `
      background-color:#413ea0;
      color:white;

    `}
  }
  .al {
    ${({ clickState }) =>
      clickState == "al" &&
      `
      background-color:#413ea0;
      color:white;

    `}
  }
  .ondo {
    ${({ clickState }) =>
      clickState == "ondo" &&
      `
      background-color:#413ea0;
      color:white;

    `}
  }
  .takdo {
    ${({ clickState }) =>
      clickState == "takdo" &&
      `
      background-color:#413ea0;
      color:white;

    `}
  }
`;

const TextTitle = styled.div`
  margin-left: 20px;
  font-size: 12px;
  font-weight: 500;
`;
const TextContent = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
`;

const Title = styled.div`
  color: white;
  position: absolute;
  top: -15%;
  left: 0%;
  font-size: 13px;
`;
const GraphTitle = styled.div`
  color: white;
  position: absolute;
  top: 5%;
  left: 2%;
  font-size: 16px;
`;

const Detail = () => {
  const [dataState, setDataState] = useState(phData);
  const [clickState, setClickState] = useState("ph");

  const pieData = [
    { name: "Group A", value: 420 },
    { name: "Group B", value: 580 },
  ];
  const pieDatas = [
    { name: "Group A", value: 770 },
    { name: "Group B", value: 230 },
  ];
  const COLORSs = ["#8884d8", "#FFFFFF", "#FFBB28", "#FF8042"];

  return (
    <Wrapper>
      <TopContentWrapper>
        <Wrap>
          <ImageWrapper></ImageWrapper>
          <DonutChartWrapper>
            <TimeDonutWrapper>
              <TextWrapper>
                <OneText>
                  <TextTitle>최근 점검 날짜</TextTitle>
                  <TextContent>2023-01-23</TextContent>
                </OneText>
                <OneText>
                  <TextTitle>다음 점검 날짜</TextTitle>
                  <TextContent>2024-03-23</TextContent>
                </OneText>
              </TextWrapper>
              <ChartWrapper>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieData}
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    // values="400"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORSs[index % COLORSs.length]}
                      />
                    ))}
                    <Label
                      style={{ fontSize: 35, fill: "white", fontWeight: 600 }}
                      value="42%"
                      position="center"
                    ></Label>
                  </Pie>
                </PieChart>
              </ChartWrapper>
            </TimeDonutWrapper>
            <LifeDonutWrapper>
              <TextWrapper>
                <OneText>
                  <TextTitle>설치일자</TextTitle>
                  <TextContent>2018-01-13</TextContent>
                </OneText>
                <OneText>
                  <TextTitle>실제 사용 시간</TextTitle>
                  <TextContent>340일</TextContent>
                </OneText>
              </TextWrapper>
              <ChartWrapper>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieDatas}
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieDatas.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORSs[index % COLORSs.length]}
                      />
                    ))}
                    <Label
                      style={{ fontSize: 35, fill: "white", fontWeight: 600 }}
                      value="77%"
                      position="center"
                    ></Label>
                  </Pie>
                </PieChart>
              </ChartWrapper>
            </LifeDonutWrapper>
          </DonutChartWrapper>
        </Wrap>
      </TopContentWrapper>
      <Wrappers>
        <BottomContentWrapper>
          <GraphTitle>성분 데이터</GraphTitle>

          <ButtonWrapper clickState={clickState}>
            <button
              className="ph"
              clickState={clickState}
              onClick={() => {
                setDataState(phData);
                setClickState("ph");
              }}
            >
              PH
            </button>
            <button
              className="jeon"
              clickState={clickState}
              onClick={() => {
                setClickState("jeon");
                setDataState(jeonData);
              }}
            >
              전기전도도
            </button>
            <button
              className="al"
              clickState={clickState}
              onClick={() => {
                setClickState("al");
                setDataState(alData);
              }}
            >
              알칼리도
            </button>
            <button
              className="ondo"
              clickState={clickState}
              onClick={() => {
                setClickState("ondo");
                setDataState(ondoData);
              }}
            >
              온도
            </button>
            <button
              className="takdo"
              clickState={clickState}
              onClick={() => {
                setClickState("takdo");
                setDataState(takdoData);
              }}
            >
              탁도
            </button>
          </ButtonWrapper>
          <ComposedChart
            width={1200}
            height={220}
            data={dataState}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={["auto", "auto"]} />

            <Bar dataKey="uv" barSize={20} fill="#413ea0" />

            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </ComposedChart>
        </BottomContentWrapper>
      </Wrappers>
    </Wrapper>
  );
};

export default Detail;
