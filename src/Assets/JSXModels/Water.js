/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Gustavo_Gontijo (https://sketchfab.com/Baiano22)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/water-23a7e330abda46cb8a78e6963997ea5e
title: Water
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/water.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[10, 10, 10]}>
            <mesh
              geometry={nodes.Plane__0.geometry}
              material={materials['Scene_-_Root']}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/water.gltf');
