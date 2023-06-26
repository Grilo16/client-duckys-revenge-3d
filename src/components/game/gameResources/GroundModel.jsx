import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export const GroundModel = (props) => {
    const { nodes, materials } = useGLTF('static/Ground.glb')
    return (
        <RigidBody  
            type='fixed' 
            colliders="cuboid"
            position={[-60.446, -9.69, -0.485]} 
            rotation={[-Math.PI / 2, 0, 0]}
            >
          <mesh  
            geometry={nodes.Ground.geometry}
            material={materials.Material__44} 
       
            >
            </mesh>
        </RigidBody>
    )
  }
  
  useGLTF.preload('/Ground.glb')
  