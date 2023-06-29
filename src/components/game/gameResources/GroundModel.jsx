import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three';

export const GroundModel = (props) => {
    const { nodes } = useGLTF(process.env.PUBLIC_URL+'/static/Ground.glb')
  const {  materials: textureMaterials } = useGLTF(process.env.PUBLIC_URL+'/static/forestLeavesTextures/forest_leaves_02_4k.gltf')


  const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
    process.env.PUBLIC_URL+'/static/forestLeavesTextures/textures/forest_leaves_02_diffuse_4k.jpg',
    process.env.PUBLIC_URL+'/static/forestLeavesTextures/textures/forest_leaves_02_nor_gl_4k.jpg',
    process.env.PUBLIC_URL+'/static/forestLeavesTextures/textures/forest_leaves_02_rough_4k.jpg',
  ])



    colorMap.repeat.set(250, 250)
    colorMap.wrapS = THREE.RepeatWrapping
    colorMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set(250, 250)
    normalMap.wrapS = THREE.RepeatWrapping
    normalMap.wrapT = THREE.RepeatWrapping
    roughnessMap.repeat.set(250, 250)
    roughnessMap.wrapS = THREE.RepeatWrapping
    roughnessMap.wrapT = THREE.RepeatWrapping 

    
    return (
        <RigidBody  
            type='fixed' 
            colliders="cuboid"
            position={[-60.446, -11.69, -0.485]} 
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1.2}
            >
          <mesh  
            receiveShadow
            geometry={nodes.Ground.geometry}
            material={textureMaterials.forest_leaves_02}
            
            
            >
              <planeGeometry args={[1000, 1000]} attach='geometry'  position={[-60.446, -11.69, -0.485]}  />

              <meshPhysicalMaterial
              attach={"material"}
              map={colorMap}
              normalMap={normalMap}
              roughnessMap={roughnessMap}
              displacementScale={0.2}
                 />
            </mesh>
        </RigidBody>
    )
  }
  
  useGLTF.preload('/Ground.glb')
  