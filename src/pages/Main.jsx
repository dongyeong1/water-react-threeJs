import React, { useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import * as THREE from "three";
import styled, { keyframes } from "styled-components";
import Scene from "../components/Scene";
import Modal from "../components/Modal";
import { useAxios } from "../hooks/useAxios";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useUpdateEffect } from "../hooks/useUpdateEffect";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 30px;
  border: 1px solid black;
  height: 80vh;
  width: 95%;
  margin-top: 100px;

  .mesh {
    cursor: pointer;
  }
`;

const boxFade = keyframes`
0% {
  opacity: 1;
 }
 50% {
  opacity: 0;
 }
 100% {
  opacity: 1;
 }
`;

const Font = styled.div`
  font-size: 30px;
  animation: ${boxFade};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const Main = ({}) => {
  const [rotateState, setRotateState] = useState(true);

  const [content, setContent] = useState();
  const [meshArray, setMeshArray] = useState([]);
  const [wtOneArray, setWtOneArray] = useState([]);
  const [wtTwoArray, setWtTwoArray] = useState([]);
  const [wtThreeArray, setWtThreeArray] = useState([]);
  const [extraDongArray, setExtraDongArray] = useState([]);
  const [roadArray, setRoadArray] = useState([]);
  const [treeArray, setTreeArray] = useState([]);

  const [gdgMeshArray, setGdgMeshArray] = useState([]);
  const [gdgHlineArray, setGdgHlineArray] = useState([]);
  const [gdgJlineArray, setGdgJlineArray] = useState([]);
  const [gdgLlineArray, setGdgLlineArray] = useState([]);
  const [gdgBlineArray, setGdgBlineArray] = useState([]);

  const [gdgOneArray, setGdgOneArray] = useState([]);
  const [gdgTwoArray, setGdgTwoArray] = useState([]);
  const [gdgThreeArray, setGdgThreeArray] = useState([]);
  const [gdgFourArray, setGdgFourArray] = useState([]);

  const [visible, setVisible] = useState(false);

  const func = useCallback((e) => {
    //e가 선택된 객체정보
    e.stopPropagation();
    setRotateState(false);
    setContent(e.object);
  });

  const fbx = useLoader(FBXLoader, "waterplant.fbx");

  useEffect(() => {
    console.log("ffffffffffffffffffff", fbx);
  }, [fbx]);

  useEffect(() => {
    let meshsArr = [];
    let groupArr = [];
    let gdgMeshArr = [];
    let gdgGroupArr = [];

    //지하공동구

    //open 지하공동구
    fbx.children[1].children[3].children[0].children.forEach((data, index) => {
      if (data.type === "Mesh") {
        gdgMeshArr.push(data);
        setGdgMeshArray(gdgMeshArr);
      } else {
        if (data.name === "B_line") {
          gdgGroupArr = [...data.children];
          setGdgBlineArray(gdgGroupArr);
        } else if (data.name === "H_line") {
          gdgGroupArr = [...data.children];
          setGdgHlineArray(gdgGroupArr);
        } else if (data.name === "J_line") {
          gdgGroupArr = [...data.children];
          setGdgJlineArray(gdgGroupArr);
        } else if (data.name === "L_line") {
          gdgGroupArr = [...data.children];
          setGdgLlineArray(gdgGroupArr);
        } else if (data.name === "group226") {
          gdgGroupArr = [...data.children];
          setGdgOneArray(gdgGroupArr);
        } else if (data.name === "group232") {
          gdgGroupArr = [...data.children];
          setGdgTwoArray(gdgGroupArr);
        } else if (data.name === "group234") {
          gdgGroupArr = [...data.children];
          setGdgThreeArray(gdgGroupArr);
        } else if (data.name === "group235") {
          gdgGroupArr = [...data.children];
          setGdgFourArray(gdgGroupArr);
        }
      }
    });

    // 일반 지하공동구
    // fbx.children[1].children[0].children.forEach((data, index) => {
    //   if (data.type === "Mesh") {
    //     gdgMeshArr.push(data);
    //     setGdgMeshArray(gdgMeshArr);
    //   } else {
    //     if (data.name === "B_line") {
    //       gdgGroupArr = [...data.children];
    //       setGdgBlineArray(gdgGroupArr);
    //     } else if (data.name === "H_line") {
    //       gdgGroupArr = [...data.children];
    //       setGdgHlineArray(gdgGroupArr);
    //     } else if (data.name === "J_line") {
    //       gdgGroupArr = [...data.children];
    //       setGdgJlineArray(gdgGroupArr);
    //     } else if (data.name === "L_line") {
    //       gdgGroupArr = [...data.children];
    //       setGdgLlineArray(gdgGroupArr);
    //     } else if (data.name === "group226") {
    //       gdgGroupArr = [...data.children];
    //       setGdgOneArray(gdgGroupArr);
    //     } else if (data.name === "group232") {
    //       gdgGroupArr = [...data.children];
    //       setGdgTwoArray(gdgGroupArr);
    //     } else if (data.name === "group234") {
    //       gdgGroupArr = [...data.children];
    //       setGdgThreeArray(gdgGroupArr);
    //     } else if (data.name === "group235") {
    //       gdgGroupArr = [...data.children];
    //       setGdgFourArray(gdgGroupArr);
    //     }
    //   }
    // });

    //지면 위
    fbx.children[0].children.forEach((data, index) => {
      if (data.type === "Mesh") {
        meshsArr.push(fbx.children[0].children[index]);
        setMeshArray(meshsArr);
      } else {
        if (data.name === "wt_1") {
          groupArr = [...fbx.children[0].children[index].children];
          setWtOneArray(groupArr);
        } else if (data.name === "wt_2") {
          groupArr = [...fbx.children[0].children[index].children];
          setWtTwoArray(groupArr);
        } else if (data.name === "wt_3") {
          groupArr = [...fbx.children[0].children[index].children];
          setWtThreeArray(groupArr);
        } else if (data.name === "extra_dong") {
          groupArr = [...fbx.children[0].children[index].children];
          setExtraDongArray(groupArr);
        } else if (data.name === "road") {
          groupArr = [...fbx.children[0].children[index].children];
          setRoadArray(groupArr);
        } else if (data.name === "trees") {
          groupArr = [...fbx.children[0].children[index].children];
          setTreeArray(groupArr);
        }
      }
    });
  }, []);

  function Loader() {
    return (
      <Html center>
        <Font>loading...</Font>
      </Html>
    );
  }

  return (
    <Wrap>
      <Wrapper>
        <Modal
          content={content}
          visible={visible}
          closeModal={() => setVisible(false)}
        ></Modal>

        <Canvas
          resize={{ scroll: false }}
          camera={{
            isPerspectiveCamera: true,
            fov: 75,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 3000,
            position: [100, 80, 250],
          }}
        >
          <Suspense fallback={<Loader></Loader>}>
            <Scene
              func={func}
              content={content}
              roadArray={roadArray}
              treeArray={treeArray}
              meshArray={meshArray}
              wtOneArray={wtOneArray}
              wtTwoArray={wtTwoArray}
              wtThreeArray={wtThreeArray}
              extraDongArray={extraDongArray}
              gdgMeshArray={gdgMeshArray}
              gdgHlineArray={gdgHlineArray}
              gdgBlineArray={gdgBlineArray}
              gdgJlineArray={gdgJlineArray}
              gdgLlineArray={gdgLlineArray}
              gdgOneArray={gdgOneArray}
              gdgTwoArray={gdgTwoArray}
              gdgThreeArray={gdgThreeArray}
              gdgFourArray={gdgFourArray}
              fbx={fbx}
            />
            <OrbitControls autoRotate={rotateState} />
          </Suspense>
        </Canvas>
      </Wrapper>
    </Wrap>
  );
};

export default Main;
