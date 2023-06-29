import { Canvas, useFrame } from '@react-three/fiber'
import { Physics } from "@react-three/rapier";
import {  Environment, Text } from "@react-three/drei";
import React, { Suspense, useEffect } from 'react';
import { DuckyModel, GroundModel, ProjectileModel, SkeletonEnemyModel, SpikeModel } from './gameResources';
import { useDispatch, useSelector } from 'react-redux';
import { selectedClickStatus, selectedPauseStatus } from '../../features/reducers/gameConsoleReducer';
import { projectileFired, selectedFiredProjectiles } from '../../features/reducers/gameReducer';
import { GameMenuComponent } from './gameMenu/GameMenuComponent';

export const GameComponent = () => {
    const dispatch = useDispatch()
    const clickStatus = useSelector(selectedClickStatus)
    const firedProjectiles = useSelector(selectedFiredProjectiles)
    const pause = useSelector(selectedPauseStatus)
    
    const projectiles = firedProjectiles.map((projectile, index) => projectile.status === "fired" ? <ProjectileModel  key={index} projectile={projectile} /> : null)
    
    useEffect(() => {
        if(clickStatus && !pause){
            const key = JSON.stringify(Math.random(1000) * Date.now())
            dispatch(projectileFired({
                key : key,
                status: "fired"
            }))
        }
    }, [clickStatus])


    const Pause = () => {
        useFrame(() => null, 1)
    };

    const Loading = () => {
        return (
            <Text
            scale={[1, 1, 1]}
            color="black"
            anchorX="center"
            anchorY="middle"
        >
            Loading ...
        </Text>
        )
    };

    return (
        <React.Fragment>
        <Canvas style={{poiterEvents: "none"}} camera={{ far: 1000, fov: 85}} shadows >
                {pause ? <Pause/> : null}
            <Suspense fallback={<Loading/>}>
                    <Environment files={process.env.PUBLIC_URL+"/static/sky_2k.hdr"} background />
                <Physics paused={pause}>
                    <DuckyModel/>
                    <SkeletonEnemyModel/>
                    <SpikeModel/>
                    <GroundModel/> 
                    {projectiles}
                </Physics>
            </Suspense>
        </Canvas>
        {pause ? <GameMenuComponent/> : null}
        </React.Fragment>
    )
};