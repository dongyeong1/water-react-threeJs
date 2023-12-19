import React, { useCallback, useEffect, useState } from "react";
import {Canvas,useLoader } from '@react-three/fiber';
import {OrbitControls,Html, useProgress} from '@react-three/drei';    
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {Suspense } from 'react'
import * as THREE from 'three'
import styled from "styled-components";
import Chart from "../components/Chart";
import Scene from "../components/Scene";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Modal from "../components/Modal";

const Wrap=styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100vh;
`

const Wrapper=styled.div`
position: relative;
background-color: white;
border-radius: 30px;
border: 1px solid black;
  height: 80vh;
  width: 95%;
  margin-top: 100px;

  .mesh{
    cursor: pointer;
  }
`



const Main = ({}) => {

  const [rotateState,setRotateState]=useState(true)

  const [content,setContent]=useState()
  const [meshArray,setMeshArray]=useState([])
  const [wtOneArray,setWtOneArray]=useState([])
  const [wtTwoArray,setWtTwoArray]=useState([])
  const [wtThreeArray,setWtThreeArray]=useState([])
  const [extraDongArray,setExtraDongArray]=useState([])
  const [roadArray,setRoadArray]=useState([])
  const [treeArray,setTreeArray]=useState([])


  const [visible,setVisible]=useState(false)



  const func=useCallback((e)=>{
    setVisible(true)
    e.stopPropagation();
    setRotateState(false)
    setContent(e.object)
  })
  
  const clickObject=useCallback((e)=>{
    setContent(e.object)

  })



  const fbx = useLoader(FBXLoader, 'waterplant.fbx')


  useEffect(()=>{
    
    let meshsArr=[]
    let groupArr=[]
    fbx.children[0].children.forEach((data,index)=>{
    if(data.type==='Mesh'){
      meshsArr.push(fbx.children[0].children[index])
      setMeshArray(meshsArr)
    }else{
      if(data.name==='wt_1'){
        groupArr=[...fbx.children[0].children[index].children]
        setWtOneArray(groupArr)
      }else if(data.name==='wt_2'){
        groupArr=[...fbx.children[0].children[index].children]
        setWtTwoArray(groupArr)
      }else if(data.name==='wt_3'){
        groupArr=[...fbx.children[0].children[index].children]
        setWtThreeArray(groupArr)
      }else if(data.name==='extra_dong'){
        groupArr=[...fbx.children[0].children[index].children]
        setExtraDongArray(groupArr)
      }else if(data.name==='road'){
        groupArr=[...fbx.children[0].children[index].children]
        setRoadArray(groupArr)
      }else if(data.name==='trees'){
        groupArr=[...fbx.children[0].children[index].children]
        setTreeArray(groupArr)
      }
    }
  })
  },[])

 
  const Loader=()=> {
    return <Html center> <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 40,
        }}
        spin
      />
    }
  /></Html>
  }

  return (
    <Wrap>
    <Wrapper>  
    <Modal content={content} visible={visible} closeModal={()=>setVisible(false)}></Modal>

      <Canvas 
        resize={{ scroll: false }}
       camera={{
          isPerspectiveCamera: true,
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 3000,
          position: [100, 80, 250],
        }}>
      <Suspense fallback={ <Loader></Loader>}>
     <Scene fbx={fbx} func={func} content={content} roadArray={roadArray} treeArray={treeArray} meshArray={meshArray} wtOneArray={wtOneArray} wtTwoArray={wtTwoArray} wtThreeArray={wtThreeArray} extraDongArray={extraDongArray}/>
     <OrbitControls autoRotate={rotateState} />
   </Suspense>
   </Canvas>
   </Wrapper>
   </Wrap>
  )
}

export default Main