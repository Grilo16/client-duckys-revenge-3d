import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody, Debug, CuboidCollider } from "@react-three/rapier";
import { Box, Cloud, Environment, FirstPersonControls, OrbitControls, PerspectiveCamera, PointerLockControls, QuadraticBezierLine, SoftShadows, Text } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from 'react';
import { DuckyMagicianModel, GroundModel, ProjectileModel, Projectiles, SkeletonEnemyModel, SpikeModel } from './gameResources';
import { useDispatch, useSelector } from 'react-redux';
import { selectedClickStatus } from '../../features/reducers/gameConsoleReducer';
import { projectileExpired, projectileFired, selectedFiredProjectiles, selectedPlayerPosition } from '../../features/reducers/gameReducer';

export const GameComponent = () => {
    const dispatch = useDispatch()
    const clickStatus = useSelector(selectedClickStatus)
    const firedProjectiles = useSelector(selectedFiredProjectiles)
    const [projectileList, setProjectileList] = useState({})
    
    const projectiles = firedProjectiles.map((projectile, index) => projectile.status === "fired" ? <ProjectileModel  key={index} projectile={projectile} /> : null)
    
    useEffect(() => {
        if(clickStatus){
            const key = JSON.stringify(Math.random(1000) * Date.now())
            dispatch(projectileFired({
                key : key,
                status: "fired"
            }))
        }
    }, [clickStatus])

    return (
        <Canvas shadows style={{poiterEvents: "none"}} camera={{ far: 1000, fov: 85}} >
            <Suspense fallback={null}>
                <Physics debug >
                    <pointLight position={[10, 10, 10]} castShadow />
                    <Environment preset="forest" />
                    <DuckyMagicianModel/>
                    <SkeletonEnemyModel/>
                    <SpikeModel/>
                    <GroundModel/>
                    {projectiles}

                </Physics>
            </Suspense>
        </Canvas>
    )
};