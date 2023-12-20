import styled, { keyframes } from "styled-components";
import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const Container = styled.div`
  display: flex;

  background: linear-gradient(
    117.59deg,
    #1f2b4e,
    rgba(62, 85, 154, 0.88) 40.94%,
    rgba(6, 16, 46, 0.76) 76.78%,
    rgba(0, 0, 0, 0.92)
  );
`;

const Content1 = styled.div`
  flex: 1;
  padding: 20px 0px 20px 20px;
`;
const Content2 = styled.div`
  flex: 2;
  padding: 20px 0px 20px 20px;
`;

const Clear = styled.div`
  clear: both;
`;

const DashboardCard = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 60px 10px 0px 0px;
  width: 490px;
  float: left;
`;
const DashboardCardLong = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
  width: 1000px;
  float: left;
`;
const DashboardImage = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 60px;
  padding: 20px 20px 0 20px;
  width: 700px;
  height: 1000px;
  float: left;
  background-image: url("simulImage/left-contents-background-1@2x.png");
  background-size: 600px;
  background-position: 50% 30px;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  align-content: space-between;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 520px;
  padding: 10px;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableCell = styled.div`
  flex: 1;
  padding: 8px;
  color: white;
`;

const InputBox = styled.input`
  width: 270px;
  padding: 8px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid gray;
  color: gray;
`;
const InputBoxImage = styled.input`
  width: 120px;
  padding: 8px;
  margin: 10px 5px 20px 5px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid gray;
  color: white;
`;
const Button = styled.button`
  background-color: #1e4d5a;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
`;
const P = styled.text`
  color: white;
  font-size: 18px;
`;
const ImageView = styled.img`
  height: 10px;
  width: 90px;
  margin: 15px;
`;

const SlideDown = keyframes`
 from{
    transform: translateY(0px);
}
to{
     transform: translateY(150px);
 }
`;
const MoveWater = styled.img`
  height: 10px;
  width: 10px;
  position: absolute;
  top: 460px;
  left: 1194px;
  animation: ${SlideDown} 3s linear infinite;
`;
const DarkTable = styled.div`
  border-radius: 10px;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FieldContentParent = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
`;

const TableInner = styled.div`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 15px 20px;
`;
const TableText = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
  color: white;
  text-align: center;
`;
const TableChild = styled.div`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 5px 20px;
`;
const Table = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Previous = styled.div`
  position: relative;
  font-weight: 500;
  text-align: left;
  color: white;
`;

const PreviousParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NextButton = styled.div`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 10px 10px 10px;
`;

const IconFieldCalendar2 = styled.img`
  position: relative;
  width: 16px;
  height: 16px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ChooseDate = styled.div`
  flex: 1;
  position: relative;
`;
const FieldContent = styled.div`
  align-self: stretch;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 7px;
  gap: 4xs;
`;

export const Simulation = () => {
  const data = [
    { name: "Group A", value: 700 },
    { name: "Group B", value: 100 },
  ];
  const ImageInputBox = () => {
    return (
      <>
        <P style={{ marginLeft: "15px" }}>응집제 종류</P>
        <InputBoxImage />
        <P style={{ marginLeft: "15px" }}>응집제 종류</P>
        <InputBoxImage />
        <P style={{ marginLeft: "15px" }}>응집제 종류</P>
        <InputBoxImage />
      </>
    );
  };

  const Calender = () => {
    return (
      <FieldContentParent>
        <FieldContent>
          <IconFieldCalendar2
            alt=""
            src="simulImage/icon--field--calendar@2x.png"
          />
          <ChooseDate>25/11/2022</ChooseDate>
          <IconFieldCalendar2
            alt=""
            src="simulImage/icon--field--clear@2x.png"
          />
        </FieldContent>
      </FieldContentParent>
    );
  };
  const TableMake = () => {
    const name = [
      "모의시간",
      "원수탁도",
      "원수pH",
      "원수수온",
      "원수전기전도도",
      "원수유량",
      "침전지탁도#1",
      "침전지탁도#2",
    ];
    const value = [
      {
        time: "2023-12-13 00:00",
        ppm: 0.99,
        ph: 7.22,
        c: 3.38,
        elec: 179.5,
        water: 3983,
        one: 0.28,
        two: 0.31,
      },
      {
        time: "2023-12-13 00:00",
        ppm: 0.99,
        ph: 7.22,
        c: 3.38,
        elec: 179.5,
        water: 3983,
        one: 0.28,
        two: 0.31,
      },
    ];
    return (
      <DarkTable>
        <Calender />
        <Table>
          <TableInner>
            {name.map((data) => (
              <TableText>{data}</TableText>
            ))}
          </TableInner>
          {value.map((data) => (
            <TableChild>
              <TableText>{data.time}</TableText>
              <TableText>{data.ppm}</TableText>
              <TableText>{data.ph}</TableText>
              <TableText>{data.c}</TableText>
              <TableText>{data.elec}</TableText>
              <TableText>{data.water}</TableText>
              <TableText>{data.one}</TableText>
              <TableText>{data.two}</TableText>
            </TableChild>
          ))}
        </Table>
        <NextButton>
          <PreviousParent>
            <Previous>Previous</Previous>
            <Button>1</Button>
            <Button style={{ backgroundColor: "gray" }}>2</Button>
            <Button style={{ backgroundColor: "gray" }}>3</Button>
            <Previous>Next</Previous>
          </PreviousParent>
        </NextButton>
      </DarkTable>
    );
  };
  const InputComponent = (props) => {
    return (
      <TableContainer>
        <TableRow>
          <TableCell>{props.name}</TableCell>
          <TableCell>
            <InputBox type="text" placeholder="입력하세요" />
          </TableCell>
          <TableCell>{props.unit}</TableCell>
        </TableRow>
      </TableContainer>
    );
  };
  const COLORS = ["#3084A3", "#ffffff", "#1E4D5A", "#ffffff"];
  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;
  return (
    <Container>
      <Content1>
        {/* 알고리즘 모의 입력 영역 */}
        <DashboardCard>
          <P>알고리즘 모의</P>
          <Button style={{ float: "right" }}>현재값 불러오기</Button>
          <Button style={{ float: "right", backgroundColor: "gray" }}>
            초기화
          </Button>
          <InputComponent name={"탁도"} unit={"ppm"} />
          <InputComponent name={"pH"} unit={"ppm"} />
          <InputComponent name={"수온"} unit={"ppm"} />
          <InputComponent name={"전기전도도"} unit={"ppm"} />
          <InputComponent name={"유량"} unit={"ppm"} />
          <InputComponent name={"탁도#1"} unit={"ppm"} />
          <InputComponent name={"탁도#2"} unit={"ppm"} />
        </DashboardCard>
        {/* 주입량 결과 확인 영역, 조절 가능 */}
        <DashboardCard>
          <P>권장 응집제</P>
          <Button style={{ float: "right" }}>시뮬레이션 동작</Button>
          <P
            style={{
              position: "absolute",
              top: "230px",
              left: "590px",
              fontSize: "12px",
            }}
          >
            1계열
          </P>
          <P
            style={{
              position: "absolute",
              top: "250px",
              left: "575px",
              fontSize: "22px",
            }}
          >
            APAC
          </P>
          <ImageView
            src="simulImage/simul_line.png"
            style={{ position: "absolute", top: "280px", left: "553px" }}
          ></ImageView>
          <PieChart width={500} height={315}>
            <Pie
              data={data}
              cx={250}
              cy={120}
              innerRadius={60}
              outerRadius={100}
              fill="#1E4D5A"
              paddingAngle={5}
              dataKey="value"
            >
              <Label
                style={{ color: "#ffffff", fontSize: 40 }}
                value={7}
                position="center"
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <P
            style={{
              position: "absolute",
              top: "510px",
              left: "590px",
              fontSize: "12px",
            }}
          >
            2계열
          </P>
          <P
            style={{
              position: "absolute",
              top: "530px",
              left: "575px",
              fontSize: "22px",
            }}
          >
            APAC
          </P>
          <ImageView
            src="simulImage/simul_line.png"
            style={{ position: "absolute", top: "560px", left: "553px" }}
          ></ImageView>
          <PieChart width={500} height={250}>
            <Pie
              data={data}
              cx={250}
              cy={100}
              innerRadius={60}
              outerRadius={100}
              fill="#1E4D5A"
              paddingAngle={5}
              dataKey="value"
            >
              <Label
                style={{ color: "#ffffff", fontSize: 40 }}
                value={7}
                position="center"
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[(index + 2) % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </DashboardCard>
        <Clear />
        {/* 결과 확인 table 출력 영역 */}
        <DashboardCardLong>
          <TableMake></TableMake>
        </DashboardCardLong>
      </Content1>
      {/* 시뮬레이션 이미지 출력 영역 */}
      <Content2>
        <MoveWater src="simulImage/water-drop@2x.png"></MoveWater>
        <DashboardImage>
          <ImageInputBox></ImageInputBox>
          <ImageInputBox></ImageInputBox>
        </DashboardImage>
      </Content2>
    </Container>
  );
};

export default Simulation;
