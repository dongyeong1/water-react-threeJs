import React, { useEffect, useState } from "react";
import {Canvas,useLoader } from '@react-three/fiber';
import * as THREE from 'three'

const Scene=React.memo(({fbx, func,content, roadArray, treeArray, meshArray,wtOneArray, wtTwoArray, wtThreeArray, extraDongArray})=>{
    let a_dong,b_dong,c_dong,d_dong,e_dong,f_dong,g_dong,h_dong,i_dong,j_dong,k_dong,l_dong,m_dong,o_dong,
    dong_JG,trees,water_wheel,rp,solar_panels,solar_panels_w_1,solar_panels_w_2,w11,w12,w13,w14,w15,wt15,w16,w17,
    n1_dong,n2_dong,n3_dong,n4_dong,n5_dong,n6_dong,n7_dong,n8_dong,ground,water_rough,road,tennis_court,extra,
    tree_dark_green,tree_green,tree_red,tree_yellow={}
    const treeTexture=[tree_dark_green,tree_green,tree_yellow,tree_red]=
    useLoader(THREE.TextureLoader,
       ['img/trees_trees dark green_BaseColor.png',
        'img/trees_trees green_BaseColor.png',
        'img/trees_trees yellow_BaseColor.png',
        'img/trees_trees red_BaseColor.png',
      ])
    const wtOneTexture=[w11,w12,w13,w14]=
    useLoader(THREE.TextureLoader,[
      'img/w11_w11_BaseColor.png',
      'img/w11_w11_BaseColor.png',
      'img/w13_w13_BaseColor.png',
      'img/w14_w14_BaseColor.png',
    ])
  
    const wtTwoTexture=[wt15]=
    useLoader(THREE.TextureLoader,[
      'img/w15_w15_BaseColor.png',
    ])
    const wtThreeTexture=[w16,w17]=
    useLoader(THREE.TextureLoader,[
      'img/w16_w16_BaseColor.png',
      'img/w17_w17_BaseColor.png',
    ])
  
    const extraDongTexture=[n1_dong,n2_dong,n3_dong,n4_dong,n5_dong,n6_dong,n7_dong,n8_dong]=
    useLoader(THREE.TextureLoader,[
              'img/n1dong_n1dong T_BaseColor.png',
              'img/n2dong_n2dong T_BaseColor.png',
              'img/n345dong_n345dong T_BaseColor.png',
              'img/n345dong_n345dong T_BaseColor.png',
              'img/n345dong_n345dong T_BaseColor.png',
              'img/n6dong_n6dong T_BaseColor.png',
              'img/n6dong_n6dong T_BaseColor.png',
              'img/n7dong_n7dong_BaseColor.png',
    ])
    const roadTexture=[ground,water_rough,road,tennis_court,extra]=
    useLoader(THREE.TextureLoader,[
             'img/ground_ground_BaseColor.png',
              'img/water_water_BaseColor.png',
              'img/road_road_BaseColor.png',
              'img/tennis_tennis_BaseColor.png',
              'img/extra_extra_BaseColor.png',
    ])
  
    const meshTexture=[a_dong,b_dong,c_dong,d_dong,e_dong,f_dong,
      g_dong,h_dong,i_dong,j_dong,k_dong,l_dong,m_dong,o_dong,
      dong_JG,rp,water_wheel,solar_panels,solar_panels_w_1,solar_panels_w_2,trees,
    ]=useLoader(THREE.TextureLoader,[
      'img/adong_dong a_BaseColor.png',
      'img/bdong_bdong_BaseColor.png',
      'img/cdong_cdong_BaseColor.png',
      'img/ddong_ddong_BaseColor.png',
      'img/edong_edong_BaseColor.png',
      'img/fdong_fdong_BaseColor.png',
      'img/gdong_gdong_BaseColor.png',
      'img/hdong_hdong_BaseColor.png',
      'img/jdong_jdong_BaseColor.png',
      'img/jdong_jdong_BaseColor.png',
      'img/mdong_mdong_BaseColor.png',
      'img/ldong_ldong_BaseColor.png',
      'img/mdong_mdong_BaseColor.png',
      'img/odong_odong_BaseColor.png',
      'img/dong JG_dong JG_BaseColor.png',
      'img/rp_rp_BaseColor.png',
      'img/water wheel_water wheel_BaseColor.png',
      'img/solar panel_solar panel_BaseColor.png',
      'img/solar panel w_solar panel w_BaseColor.png',
      'img/solar panel w_solar panel w_BaseColor.png',
      'img/trees_trees green_BaseColor.png',
    ])
  
    return(
    <mesh  scale={0.3} >
      {treeArray?.map((v,index)=>
          <primitive   object={v} material={new THREE.MeshBasicMaterial({ map: treeTexture[index]})}/>
        )}
      {meshArray?.map((v,index)=>
          <primitive     material-color={v.name==content?.name&&'#ff6080'}  scale={v.name==content?.name?[1,2,1]:1} onClick={(e)=> (func(e))}  object={v} material={new THREE.MeshBasicMaterial({ map: meshTexture[index]})}/>
        )}
      {wtOneArray?.map((v,index)=>
          <primitive  material-color={v.name==content?.name&&'#ff6080'} scale={v.name==content?.name?[1,2,1]:1} onClick={(e)=> (func(e))} object={v} material={new THREE.MeshBasicMaterial({ map: wtOneTexture[index]})}/>
        )}
      {wtTwoArray?.map((v,index)=>
          <primitive  material-color={v.name==content?.name&&'#ff6080'} scale={v.name==content?.name?[1,2,1]:1} onClick={(e)=> (func(e))} object={v} material={new THREE.MeshBasicMaterial({ map: wtTwoTexture[index]})}/>
        )}
      {wtThreeArray?.map((v,index)=>
          <primitive  material-color={v.name==content?.name&&'#ff6080'} scale={v.name==content?.name?[1,2,1]:1} onClick={(e)=> (func(e))}   object={v} material={new THREE.MeshBasicMaterial({ map: wtThreeTexture[index]})}/>
        )}
      {extraDongArray?.map((v,index)=>
          <primitive   material-color={v.name==content?.name&&'#ff6080'} scale={v.name==content?.name?[1,2,1]:1} onClick={(e)=> (func(e))}  object={v} material={new THREE.MeshBasicMaterial({ map: extraDongTexture[index]})}/>
        )}
      {roadArray?.map((v,index)=>
          <primitive  object={v} material={new THREE.MeshBasicMaterial({ map: roadTexture[index]})}/>
        )}
 
    <primitive  object={fbx}/>
    </mesh>)
    
  })

export default Scene