import React, { useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html, useFBX } from "@react-three/drei";
import styled from "styled-components";

const NameWrapper = styled.div`
  background-color: #1e90ff;
  color: white;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
`;

const Scene = React.memo(
  ({
    fbx,
    func,
    content,
    roadArray,
    treeArray,
    meshArray,
    wtOneArray,
    wtTwoArray,
    wtThreeArray,
    extraDongArray,
    gdgMeshArray,
    gdgHlineArray,
    gdgBlineArray,
    gdgJlineArray,
    gdgLlineArray,
    gdgOneArray,
    gdgTwoArray,
    gdgThreeArray,
    gdgFourArray,
  }) => {
    let a_dong,
      b_dong,
      c_dong,
      d_dong,
      e_dong,
      f_dong,
      g_dong,
      h_dong,
      i_dong,
      j_dong,
      k_dong,
      l_dong,
      m_dong,
      o_dong,
      dong_JG,
      trees,
      water_wheel,
      rp,
      solar_panels,
      solar_panels_w_1,
      solar_panels_w_2,
      w11,
      w12,
      w13,
      w14,
      w15,
      wt15,
      w16,
      w17,
      n1_dong,
      n2_dong,
      n3_dong,
      n4_dong,
      n5_dong,
      n6_dong,
      n7_dong,
      n8_dong,
      ground,
      water_rough,
      road,
      tennis_court,
      extra,
      tree_dark_green,
      tree_green,
      tree_red,
      tree_yellow,
      gdg = {};

    useEffect(() => {
      console.log("asdasdsadmeshshshshs", meshArray);
    }, [meshArray]);

    useEffect(() => {}, []);

    const textureLoader = new THREE.TextureLoader();

    const gdgTexture = textureLoader.load("img/gdg_BaseColor.png");

    const treeTexture = ([tree_dark_green, tree_green, tree_yellow, tree_red] =
      useLoader(THREE.TextureLoader, [
        "img/trees_trees dark green_BaseColor.png",
        "img/trees_trees green_BaseColor.png",
        "img/trees_trees yellow_BaseColor.png",
        "img/trees_trees red_BaseColor.png",
      ]));
    const wtOneTexture = ([w11, w12, w13, w14] = useLoader(
      THREE.TextureLoader,
      [
        "img/w11_w11_BaseColor.png",
        "img/w11_w11_BaseColor.png",
        "img/w13_w13_BaseColor.png",
        "img/w14_w14_BaseColor.png",
      ]
    ));

    const wtTwoTexture = ([wt15] = useLoader(THREE.TextureLoader, [
      "img/w15_w15_BaseColor.png",
    ]));
    const wtThreeTexture = ([w16, w17] = useLoader(THREE.TextureLoader, [
      "img/w16_w16_BaseColor.png",
      "img/w17_w17_BaseColor.png",
    ]));

    const extraDongTexture = ([
      n1_dong,
      n2_dong,
      n3_dong,
      n4_dong,
      n5_dong,
      n6_dong,
      n7_dong,
      n8_dong,
    ] = useLoader(THREE.TextureLoader, [
      "img/n1dong_n1dong T_BaseColor.png",
      "img/n2dong_n2dong T_BaseColor.png",
      "img/n345dong_n345dong T_BaseColor.png",
      "img/n345dong_n345dong T_BaseColor.png",
      "img/n345dong_n345dong T_BaseColor.png",
      "img/n6dong_n6dong T_BaseColor.png",
      "img/n6dong_n6dong T_BaseColor.png",
      "img/n7dong_n7dong_BaseColor.png",
    ]));
    const roadTexture = ([ground, water_rough, road, tennis_court, extra] =
      useLoader(THREE.TextureLoader, [
        "img/ground_ground_BaseColor.png",
        "img/water_water_BaseColor.png",
        "img/road_road_BaseColor.png",
        "img/tennis_tennis_BaseColor.png",
        "img/extra_extra_BaseColor.png",
      ]));

    const meshTexture = ([
      a_dong,
      b_dong,
      c_dong,
      d_dong,
      e_dong,
      f_dong,
      g_dong,
      h_dong,
      i_dong,
      j_dong,
      k_dong,
      l_dong,
      m_dong,
      o_dong,
      dong_JG,
      rp,
      water_wheel,
      solar_panels,
      solar_panels_w_1,
      solar_panels_w_2,
      trees,
    ] = useLoader(THREE.TextureLoader, [
      "img/adong_dong a_BaseColor.png",
      "img/bdong_bdong_BaseColor.png",
      "img/cdong_cdong_BaseColor.png",
      "img/ddong_ddong_BaseColor.png",
      "img/edong_edong_BaseColor.png",
      "img/fdong_fdong_BaseColor.png",
      "img/gdong_gdong_BaseColor.png",
      "img/hdong_hdong_BaseColor.png",
      "img/jdong_jdong_BaseColor.png",
      "img/jdong_jdong_BaseColor.png",
      "img/mdong_mdong_BaseColor.png",
      "img/ldong_ldong_BaseColor.png",
      "img/mdong_mdong_BaseColor.png",
      "img/odong_odong_BaseColor.png",
      "img/dong JG_dong JG_BaseColor.png",
      "img/rp_rp_BaseColor.png",
      "img/water wheel_water wheel_BaseColor.png",
      "img/solar panel_solar panel_BaseColor.png",
      "img/solar panel w_solar panel w_BaseColor.png",
      "img/solar panel w_solar panel w_BaseColor.png",
      "img/trees_trees green_BaseColor.png",
    ]));

    return (
      <mesh scale={0.3}>
        {treeArray?.map((v, index) => (
          <primitive
            object={v}
            material={new THREE.MeshBasicMaterial({ map: treeTexture[index] })}
          />
        ))}
        {meshArray?.map((v, index) => (
          <>
            {v.name === "solar_panels" ? (
              <primitive
                material-color={v.name == content?.name && "#82CAFF"}
                scale={1}
                onClick={(e) => func(e)}
                onPointerOver={(e) => func(e)}
                object={v}
                material={
                  new THREE.MeshBasicMaterial({ map: meshTexture[index] })
                }
              />
            ) : (
              <primitive
                material-color={v.name == content?.name && "#82CAFF"}
                scale={v.name == content?.name ? [1, 2, 1] : 1}
                onClick={(e) => func(e)}
                onPointerOver={(e) => func(e)}
                object={v}
                material={
                  new THREE.MeshBasicMaterial({ map: meshTexture[index] })
                }
              />
            )}
            {v.name == content?.name && (
              <Html
                position={[
                  v.geometry.boundingSphere.center.x,
                  v.geometry.boundingSphere.center.y + 120,
                  v.geometry.boundingSphere.center.z,
                ]}
              >
                <NameWrapper>{v.name}</NameWrapper>
              </Html>
            )}
          </>
        ))}
        {wtOneArray?.map((v, index) => (
          <>
            <primitive
              material-color={v.name == content?.name && "#82CAFF"}
              scale={v.name == content?.name ? [1, 2, 1] : 1}
              onClick={(e) => func(e)}
              object={v}
              onPointerOver={(e) => func(e)}
              material={
                new THREE.MeshBasicMaterial({ map: wtOneTexture[index] })
              }
            />
            {v.name == content?.name && (
              <Html
                position={[
                  v.geometry.boundingSphere.center.x,
                  v.geometry.boundingSphere.center.y + 120,
                  v.geometry.boundingSphere.center.z,
                ]}
              >
                <NameWrapper>{v.name}</NameWrapper>
              </Html>
            )}
          </>
        ))}
        {wtTwoArray?.map((v, index) => (
          <>
            {" "}
            <primitive
              material-color={v.name == content?.name && "#82CAFF"}
              scale={v.name == content?.name ? [1, 2, 1] : 1}
              onClick={(e) => func(e)}
              object={v}
              onPointerOver={(e) => func(e)}
              material={
                new THREE.MeshBasicMaterial({ map: wtTwoTexture[index] })
              }
            />
            {v.name == content?.name && (
              <Html
                position={[
                  v.geometry.boundingSphere.center.x,
                  v.geometry.boundingSphere.center.y + 120,
                  v.geometry.boundingSphere.center.z,
                ]}
              >
                <NameWrapper>{v.name}</NameWrapper>
              </Html>
            )}
          </>
        ))}
        {wtThreeArray?.map((v, index) => (
          <>
            {" "}
            <primitive
              material-color={v.name == content?.name && "#82CAFF"}
              scale={v.name == content?.name ? [1, 2, 1] : 1}
              onClick={(e) => func(e)}
              object={v}
              onPointerOver={(e) => func(e)}
              material={
                new THREE.MeshBasicMaterial({ map: wtThreeTexture[index] })
              }
            />
            {v.name == content?.name && (
              <Html
                position={[
                  v.geometry.boundingSphere.center.x,
                  v.geometry.boundingSphere.center.y + 120,
                  v.geometry.boundingSphere.center.z,
                ]}
              >
                <NameWrapper>{v.name}</NameWrapper>
              </Html>
            )}
          </>
        ))}
        {extraDongArray?.map((v, index) => (
          <>
            <primitive
              material-color={v.name == content?.name && "#82CAFF"}
              scale={v.name == content?.name ? [1, 2, 1] : 1}
              onClick={(e) => func(e)}
              object={v}
              onPointerOver={(e) => func(e)}
              material={
                new THREE.MeshBasicMaterial({ map: extraDongTexture[index] })
              }
            />
            {v.name == content?.name && (
              <Html
                position={[
                  v.geometry.boundingSphere.center.x,
                  v.geometry.boundingSphere.center.y + 120,
                  v.geometry.boundingSphere.center.z,
                ]}
              >
                <NameWrapper>{v.name}</NameWrapper>
              </Html>
            )}
          </>
        ))}
        {roadArray?.map((v, index) => (
          <primitive
            object={v}
            material={new THREE.MeshBasicMaterial({ map: roadTexture[index] })}
          />
        ))}
        {gdgMeshArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}

        {gdgFourArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}
        {gdgTwoArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}
        {gdgThreeArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}

        {gdgOneArray?.map((data, index) => {
          if (data.type === "Mesh") {
            return (
              <primitive
                object={data}
                onClick={(e) => func(e)}
                material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
              />
            );
          }
        })}
        {gdgOneArray[0]?.children.map((data) => {
          if (data.type === "Mesh") {
            return (
              <primitive
                object={data}
                onClick={(e) => func(e)}
                material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
              />
            );
          }
        })}

        {gdgOneArray[0]?.children[3]?.children.map((data) => {
          return (
            <primitive
              object={data}
              onClick={(e) => func(e)}
              material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
            />
          );
        })}
        {gdgOneArray[0]?.children[4]?.children.map((data) => {
          return (
            <primitive
              object={data}
              onClick={(e) => func(e)}
              material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
            />
          );
        })}
        {gdgOneArray[0]?.children[5]?.children.map((data) => {
          return (
            <primitive
              object={data}
              onClick={(e) => func(e)}
              material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
            />
          );
        })}

        {gdgOneArray[2]?.children?.map((data) => {
          if (data.type === "Mesh") {
            return (
              <primitive
                object={data}
                onClick={(e) => func(e)}
                material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
              />
            );
          }
        })}
        {gdgOneArray[2]?.children[7]?.children?.map((data) => {
          return (
            <primitive
              object={data}
              onClick={(e) => func(e)}
              material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
            />
          );
        })}

        {gdgLlineArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}
        {gdgJlineArray?.map((v) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}

        {gdgBlineArray?.map((data) => {
          if (data.type === "Mesh") {
            return (
              <primitive
                object={data}
                onClick={(e) => func(e)}
                material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
              />
            );
          }
        })}

        {gdgBlineArray[4]?.children.map((data) => {
          return (
            <primitive
              object={data}
              onClick={(e) => func(e)}
              material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
            />
          );
        })}
        {gdgHlineArray?.map((v, index) => (
          <primitive
            object={v}
            onClick={(e) => func(e)}
            material={new THREE.MeshBasicMaterial({ map: gdgTexture })}
          />
        ))}
      </mesh>
    );
  }
);

export default Scene;
