import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const LeftContentsBackground1Icon = styled.img`
  position: relative;
  width: 484px;
  height: 752px;
  object-fit: cover;
`;
const BigCards = styled.div`
  position: absolute;
  top: 89px;
  left: 918px;
  background-color: var(--color-gray-200);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 525px;
  height: 918px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 12px;
  left: 25px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--text-white);
  box-sizing: border-box;
  width: 95px;
  height: 38px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 88px;
  left: 25px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--text-white);
  box-sizing: border-box;
  width: 95px;
  height: 38px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 164px;
  left: 25px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--text-white);
  box-sizing: border-box;
  width: 95px;
  height: 38px;
`;
const Div2 = styled.div`
  position: absolute;
  top: -10px;
  left: 21px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 68px;
  left: 21px;
`;
const P = styled.p`
  margin: 0;
`;
const Div4 = styled.div`
  position: absolute;
  top: 145px;
  left: 21px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 699px;
  left: 900px;
  width: 95px;
  height: 202px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 699px;
  left: 1315px;
  width: 95px;
  height: 202px;
`;
const Div8 = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 173px;
  height: 30px;
  flex-shrink: 0;
`;
const ShapeCircleIcon6 = styled.img`
  position: relative;
  width: 14px;
  height: 14px;
  object-fit: cover;
  display: none;
`;
const Button = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 600;
`;
const ShapeCircleParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const ButtonStyle2Shadow6 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  box-shadow: var(--light-shadow-6);
  width: 98.71px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
`;
const ButtonStyle2Shadow7 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-dimgray);
  box-shadow: var(--light-shadow-6);
  width: 65.08px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
`;
const Component8 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 33px 0px 13px;
  gap: 5px;
  text-align: left;
  font-family: var(--caption-heavy);
`;
const Div9 = styled.div`
  position: relative;
  line-height: 190.5%;
  display: flex;
  align-items: center;
  width: 68px;
  flex-shrink: 0;
`;
const Component1Child = styled.input`
  position: relative;
  border: 1px solid var(--text-white);
  background-color:transparent;
  box-sizing: border-box;
  width: 220px;
  height: 34px;
  color:white;
  text-align:right;
  padding-right:10px;
`;
const Ntu = styled.div`
  position: relative;
  line-height: 240.75%;
  display: flex;
  align-items: center;
  width: 38px;
  flex-shrink: 0;
`;
const Component1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-xl) var(--padding-8xs);
  gap: var(--gap-3xs);
`;
const Component2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 6px var(--padding-xl) var(--padding-8xs);
  gap: var(--gap-3xs);
`;
const ButtonStyle2Shadow8 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  box-shadow: var(--light-shadow-6);
  width: 60px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  box-sizing: border-box;
`;
const ButtonStyle2ShadowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px var(--padding-5xs) 299px;
  text-align: left;
  font-family: var(--caption-heavy);
`;
const Div16 = styled.div`
  position: relative;
  line-height: 190.5%;
  display: none;
  align-items: center;
  width: 68px;
  flex-shrink: 0;
`;
const Component9Child = styled.div`
  position: relative;
  border: 1px solid var(--text-white);
  box-sizing: border-box;
  width: 220px;
  height: 34px;
  display: none;
`;
const Ntu7 = styled.div`
  position: relative;
  line-height: 240.75%;
  display: none;
  align-items: center;
  width: 38px;
  flex-shrink: 0;
`;
const BigCards1 = styled.div`
  position: absolute;
  top: 89px;
  left: 100px;
  background-color: var(--color-gray-200);
  width: 397px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  text-align: justify;
`;
const Div17 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
  font-weight: 600;
`;
const ButtonStyle2Shadow9 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  box-shadow: var(--light-shadow-6);
  width: 93px;
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
`;
const ButtonStyle2Shadow10 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  box-shadow: var(--light-shadow-6);
  width: 98.71px;
  height: 31px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
`;
const ShapeCircleParent2 = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const ButtonStyle2Shadow11 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-dimgray);
  box-shadow: var(--light-shadow-6);
  width: 65.08px;
  height: 31px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) 0px;
  box-sizing: border-box;
`;
const Component81 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 25px 0px;
  text-align: left;
  font-size: var(--caption-heavy-size);
`;
const Child = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: -0.52%;
  bottom: 0%;
  left: 0.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Span = styled.span``;
const Ppm1 = styled.span`
  font-size: var(--font-size-sm);
`;
const PpmTxt = styled.span`
  width: 100%;
`;
const Ppm = styled.div`
  position: absolute;
  height: 27.36%;
  width: 32%;
  top: 36.13%;
  left: 34.07%;
  line-height: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const Item = styled.div`
  position: absolute;
  height: 5.26%;
  width: 0.52%;
  top: 45%;
  right: 31.75%;
  bottom: 49.74%;
  left: 67.73%;
  border-right: 1px solid var(--text-white);
  box-sizing: border-box;
`;
const Inner = styled.img`
  position: absolute;
  height: 0.03%;
  width: 4.65%;
  top: 47.42%;
  right: 29.43%;
  bottom: 52.56%;
  left: 65.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Child1 = styled.img`
  position: absolute;
  height: 0.03%;
  width: 4.65%;
  top: 47.37%;
  right: 64.53%;
  bottom: 52.61%;
  left: 30.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Div18 = styled.div`
  position: absolute;
  height: 100%;
  width: 65.89%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 34.11%;
`;
const Div19 = styled.div`
  position: absolute;
  height: 53.57%;
  width: 97.53%;
  top: 0%;
  left: 0%;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Apac = styled.b`
  position: absolute;
  height: 53.57%;
  width: 97.53%;
  top: 46.43%;
  left: 2.47%;
  font-size: var(--font-size-xl);
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GroupDiv = styled.div`
  position: absolute;
  height: 28.9%;
  width: 39.26%;
  top: 36.65%;
  right: 60.74%;
  bottom: 34.45%;
  left: 0%;
  font-size: var(--caption-heavy-size);
`;
const ComponentChild = styled.div`
  position: absolute;
  height: 2.11%;
  width: 26.19%;
  top: 64.38%;
  right: 66.66%;
  bottom: 33.51%;
  left: 7.15%;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(188, 193, 212, 0.86),
    rgba(64, 106, 255, 0)
  );
`;
const Parent1 = styled.div`
  flex: 1;
  position: relative;
  width: 294.04px;
`;
const BigCards2 = styled.div`
  position: absolute;
  top: 89px;
  left: 512px;
  background-color: var(--color-gray-200);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 392px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
  font-size: var(--font-size-19xl);
  font-family: var(--caption-heavy);
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
  border-radius: var(--br-5xs);
  background-color: var(--text-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-mini);
  gap: var(--gap-4xs);
`;
const FrameChild = styled.img`
  align-self: stretch;
  position: relative;
  max-height: 100%;
  width: 17px;
  object-fit: cover;
`;
const Show = styled.div`
  position: relative;
  font-weight: 500;
`;
const BicaretDownFillIcon1 = styled.img`
  position: relative;
  width: 8px;
  height: 8px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent3 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-4xs);
  gap: var(--gap-9xs);
`;
const ShowParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 22px;
  gap: var(--gap-xs);
  font-size: var(--caption-heavy-size);
  color: var(--text-white);
  font-family: var(--font-montserrat);
`;
const FieldContentParent = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;
`;
const Div22 = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-base);
  text-align: left;
  color: var(--color-darkslategray-200);
  font-family: var(--caption-heavy);
`;
const Txt = styled.span`
  line-break: anywhere;
`;
const B = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: 17px;
`;
const Parent4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const TableInner = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 15px 50px;
`;
const Div24 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;
const Parent5 = styled.div`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TableChild = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 15px 20px;
`;
const Table = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-sm);
`;
const Previous = styled.div`
  position: relative;
  font-weight: 500;
  text-align: left;
`;
const Div65 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 13px;
  height: 15px;
  flex-shrink: 0;
`;
const Wrapper = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-darkslategray-100);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-4xs);
`;
const Frame = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-dimgray);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-4xs);
`;
const PreviousParent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xs);
`;
const Div64 = styled.div`
  align-self: stretch;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base);
  font-size: var(--caption-heavy-size);
`;
const DarkTable = styled.div`
  position: absolute;
  top: 530px;
  left: 100px;
  border-radius: 10px;
  width: 801px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-mini);
  font-family: var(--font-montserrat);
`;
const Div68 = styled.div`
  position: absolute;
  top: 97px;
  left: 920px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  font-family: var(--caption-heavy);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 174px;
  height: 67px;
`;
const WaterDropIcon3 = styled.img`
  position: absolute;
  height: 1.61%;
  width: 0.89%;
  top: 44.53%;
  right: 31.75%;
  bottom: 53.86%;
  left: 67.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const WaterDropIcon4 = styled.img`
  position: absolute;
  height: 1.61%;
  width: 0.89%;
  top: 48.46%;
  right: 31.75%;
  bottom: 49.92%;
  left: 67.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const WaterDropIcon5 = styled.img`
  position: absolute;
  height: 1.61%;
  width: 0.89%;
  top: 52.4%;
  right: 31.75%;
  bottom: 45.99%;
  left: 67.36%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Child4 = styled.div`
  position: absolute;
  top: 67.5px;
  left: calc(50% - 672.5px);
  border-top: 1px solid rgba(255, 255, 255, 0.42);
  box-sizing: border-box;
  width: 1363px;
  height: 1px;
`;
const Ai = styled.h1`
  margin: 0;
  position: absolute;
  top: 14px;
  left: calc(50% - 142px);
  font-size: 28px;
  letter-spacing: 0.07em;
  font-weight: 700;
  font-family: inherit;
`;
const Image14Icon = styled.img`
  position: absolute;
  top: 9px;
  left: 451px;
  width: 96px;
  height: 53px;
  object-fit: cover;
`;
const Child5 = styled.button`
  position: absolute;
  top: 14px;
  left: 1271px;
  border-radius: 2px;
  background-color: #0f3886;
  width: 115px;
  height: 45px;
  color:white;
  font-family: 'GmarketSansMedium';
`;

const Div1Root = styled.div`
  position: relative;
  background: linear-gradient(
    117.59deg,
    #1f2b4e,
    rgba(62, 85, 154, 0.88) 40.94%,
    rgba(6, 16, 46, 0.76) 76.78%,
    rgba(0, 0, 0, 0.92)
  );
  width: 100%;
  height: 1030px;
  overflow: hidden;
  text-align: center;
  font-size: var(--caption-heavy-size);
  color: var(--text-white);
  font-family: 'GmarketSansMedium';
`;
const AllGroup = styled.div`
margin-left:300pz;
`;

export default function Simulation(){
  
  return (
    
    <Div1Root>
      <BigCards>
        <LeftContentsBackground1Icon
          alt=""
          src="simulImage/left-contents-background-1@2x.png"
        />
      </BigCards>
      <RectangleParent>
        <GroupChild />
        <GroupItem />
        <GroupInner />
        <Div2>응집제 종류</Div2>
        <Div3>응집제주입률</Div3>
        <Div4>
          <P>응집제주입량</P>
        </Div4>
      </RectangleParent>
      <RectangleGroup>
        <GroupChild />
        <GroupItem />
        <GroupInner />
        <Div2>응집제 종류</Div2>
        <Div3>응집제주입률</Div3>
        <Div4>
          <P>응집제주입량</P>
        </Div4>
      </RectangleGroup>
      <BigCards1>
        <Component8>
          <Div8>알고리즘 모의</Div8>
          <ButtonStyle2Shadow6>
            <ShapeCircleParent>
              <ShapeCircleIcon6 alt="" />
              <Button>현재값 불러오기</Button>
            </ShapeCircleParent>
          </ButtonStyle2Shadow6>
          <ButtonStyle2Shadow7>
            <ShapeCircleParent>
              <ShapeCircleIcon6 alt="" />
              <Button>초기화</Button>
            </ShapeCircleParent>
          </ButtonStyle2Shadow7>
        </Component8>
        <Component1>
          <Div9>탁도</Div9>
          <Component1Child />
          <Ntu>NTU</Ntu>
        </Component1>
        <Component2>
          <Div9>pH</Div9>
          <Component1Child />
          <Ntu></Ntu>
        </Component2>
        <Component1>
          <Div9>수온</Div9>
          <Component1Child />
          <Ntu>℃</Ntu>
        </Component1>
        <Component1>
          <Div9>전기전도도</Div9>
          <Component1Child />
          <Ntu>µS/cm</Ntu>
        </Component1>
        <Component1>
          <Div9>유량</Div9>
          <Component1Child />
          <Ntu>㎥/h</Ntu>
        </Component1>
        <Component1>
          <Div9>탁도#1</Div9>
          <Component1Child />
          <Ntu>NTU</Ntu>
        </Component1>
        <Component1>
          <Div9>탁도#2</Div9>
          <Component1Child />
          <Ntu>NTU</Ntu>
        </Component1>
        <ButtonStyle2ShadowWrapper>
          <ButtonStyle2Shadow8>
            <ShapeCircleParent>
              <ShapeCircleIcon6 alt="" />
              <Button>저장</Button>
            </ShapeCircleParent>
          </ButtonStyle2Shadow8>
        </ButtonStyle2ShadowWrapper>
        <Component1>
          <Div16 />
          <Component9Child />
          <Ntu7>NTU</Ntu7>
        </Component1>
      </BigCards1>
      <BigCards2>
        <Component81>
          <Div17>권장 응집제</Div17>
          <ButtonStyle2Shadow9>
            <ShapeCircleParent>
              <ShapeCircleIcon6 alt="" />
              <Button>시뮬레이션 동작</Button>
            </ShapeCircleParent>
          </ButtonStyle2Shadow9>
          <ButtonStyle2Shadow10>
            <ShapeCircleParent>
              <ShapeCircleIcon6 alt="" />
              <Button>현재값 불러오기</Button>
            </ShapeCircleParent>
          </ButtonStyle2Shadow10>
          <ButtonStyle2Shadow11>
            <ShapeCircleParent2>
              <ShapeCircleIcon6 alt="" />
              <Button>초기화</Button>
            </ShapeCircleParent2>
          </ButtonStyle2Shadow11>
        </Component81>
        <Parent1>
          <Div18>
            <Child alt="" src="simulImage/group-2@2x.png" />
            <Ppm>
              <PpmTxt>
                <Span>{`12 `}</Span>
                <Ppm1>ppm</Ppm1>
              </PpmTxt>
            </Ppm>
            <Item />
            <Inner alt="" src="simulImage/line-3@2x.png" />
            <Child1 alt="" src="simulImage/line-4@2x.png" />
          </Div18>
          <GroupDiv>
            <Div19>1계열</Div19>
            <Apac>APAC</Apac>
          </GroupDiv>
          <ComponentChild />
        </Parent1>
        <Parent1>
          <Div18>
            <Child alt="" src="simulImage/group-2@2x.png" />
            <Ppm>
              <PpmTxt>
                <Span>{`13 `}</Span>
                <Ppm1>ppm</Ppm1>
              </PpmTxt>
            </Ppm>
            <Item />
            <Inner alt="" src="simulImage/line-3@2x.png" />
            <Child1 alt="" src="simulImage/line-4@2x.png" />
          </Div18>
          <GroupDiv>
            <Div19>2계열</Div19>
            <Apac>APAC</Apac>
          </GroupDiv>
          <ComponentChild />
        </Parent1>
      </BigCards2>
      <DarkTable>
        <Div22>
          <FieldContentParent>
            <FieldContent>
              <IconFieldCalendar2 alt="" src="simulImage/icon--field--calendar@2x.png" />
              <ChooseDate>25/11/2022</ChooseDate>
              <IconFieldCalendar2 alt="" src="simulImage/icon--field--clear@2x.png" />
            </FieldContent>
              <B><Txt>-</Txt></B>
            <FieldContent>
              <IconFieldCalendar2 alt="" src="simulImage/icon--field--calendar@2x.png" />
              <ChooseDate>25/11/2022</ChooseDate>
              <IconFieldCalendar2 alt="" src="simulImage/icon--field--clear@2x.png" />
            </FieldContent>
            <ShowParent>
              <Show>Show</Show>
              <Parent3>
                <Show>10</Show>
                <BicaretDownFillIcon1 alt="" src="simulImage/bicaretdownfill@2x.png" />
              </Parent3>
              <Show>entries</Show>
            </ShowParent>
          </FieldContentParent>
        </Div22>
        <Table>
          <TableInner>
            <Parent4>
              <B>
                <Txt>
                  <P>모의</P>
                  <P>시간</P>
                </Txt>
              </B>
              <B>
                <Txt>
                  <P>원수</P>
                  <P>탁도</P>
                </Txt>
              </B>
              <B>
                <Txt>
                  <P>원수</P>
                  <P>pH</P>
                </Txt>
              </B>
              <B>
                <Txt>
                  <P>원수</P>
                  <P>수온</P>
                </Txt>
              </B>
              <B>
                <Span>
                  <P>{`원수 `}</P>
                  <P>전기전도도</P>
                </Span>
              </B>
              <B>
                <Txt>
                  <P>원수</P>
                  <P>유량</P>
                </Txt>
              </B>
              <B>
                <Txt>
                  <P>침전지</P>
                  <P>탁도#1</P>
                </Txt>
              </B>
              <B>
                <Txt>
                  <P>침전지</P>
                  <P>탁도#2</P>
                </Txt>
              </B>
            </Parent4>
          </TableInner>
          <TableChild>
            <Parent5>
              <Div24>2023-12-13 00:00</Div24>
              <Div24>0.99</Div24>
              <Div24>7.22</Div24>
              <Div24>3.38</Div24>
              <Div24>179.5</Div24>
              <Div24>3983</Div24>
              <Div24>0.28</Div24>
              <Div24>0.31</Div24>
            </Parent5>
          </TableChild>
          <TableChild>
            <Parent5>
              <Div24>2023-12-13 00:00</Div24>
              <Div24>0.99</Div24>
              <Div24>7.22</Div24>
              <Div24>3.38</Div24>
              <Div24>179.5</Div24>
              <Div24>3983</Div24>
              <Div24>0.28</Div24>
              <Div24>0.31</Div24>
            </Parent5>
          </TableChild>
          <TableChild>
            <Parent5>
              <Div24>2023-12-13 00:00</Div24>
              <Div24>0.99</Div24>
              <Div24>7.22</Div24>
              <Div24>3.38</Div24>
              <Div24>179.5</Div24>
              <Div24>3983</Div24>
              <Div24>0.28</Div24>
              <Div24>0.31</Div24>
            </Parent5>
          </TableChild>
          <TableChild>
            <Parent5>
              <Div24>2023-12-13 00:00</Div24>
              <Div24>0.99</Div24>
              <Div24>7.22</Div24>
              <Div24>3.38</Div24>
              <Div24>179.5</Div24>
              <Div24>3983</Div24>
              <Div24>0.28</Div24>
              <Div24>0.31</Div24>
            </Parent5>
          </TableChild>
          <TableChild>
            <Parent5>
              <Div24>2023-12-13 00:00</Div24>
              <Div24>0.99</Div24>
              <Div24>7.22</Div24>
              <Div24>3.38</Div24>
              <Div24>179.5</Div24>
              <Div24>3983</Div24>
              <Div24>0.28</Div24>
              <Div24>0.31</Div24>
            </Parent5>
          </TableChild>
        </Table>
        <Div64>
          <PreviousParent>
            <Previous>Previous</Previous>
            <Wrapper>
              <Div65>1</Div65>
            </Wrapper>
            <Frame>
              <Div65>2</Div65>
            </Frame>
            <Frame>
              <Div65>3</Div65>
            </Frame>
            <Previous>Next</Previous>
          </PreviousParent>
        </Div64>
      </DarkTable>
      <Div68>약품 투여 시뮬레이션</Div68>
      <WaterDropIcon3 alt="" src="simulImage/water-drop.svg" />
      <WaterDropIcon4 alt="" src="simulImage/water-drop1.svg" />
      <WaterDropIcon5 alt="" src="simulImage/water-drop@2x.png" />
    

      <Child4 />
      {/* <Ai>AI 디지털 트윈 통합 시스템</Ai>
      <Image14Icon alt="" src="simulImage/image-14@2x.png" /> */}
      {/* <Link to="/three"><Child5>로그인</Child5></Link> */}
      
    </Div1Root>
  );
};
