import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Attractor } from "@react-three/rapier-addons"
import { useDispatch, useSelector } from "react-redux";
import { projectileExpired } from "../../../features/reducers/gameReducer";
import { selectedDirection } from "../../../features/reducers/gameConsoleReducer";

export const ProjectileModel = ({projectile, visible}) => {
  const {scene, mouse} = useThree()
  const projectileRef = useRef()
  const dispatch = useDispatch()
  const movingDirection = useSelector(selectedDirection)
  const [colisionStatus, setColisionStatus] = useState(false)

  const ducky = scene.children.find((model) => model.name ==="ducky" )

  useEffect(() => {
    const {x, y, z} = {...ducky?.position}
    projectileRef?.current?.setTranslation({x: -2 + x, y: y + 0.8, z : z - (mouse.x/2)})
    projectileRef?.current?.setLinvel({
        x: movingDirection === "up" ? -20 : -15,
        y: 9 , 
        z:  Math.PI * -8 * mouse.x + (movingDirection === "right" ? -5 : movingDirection === "left" ? +5 : 0)
      })
    
  }, [])

  useEffect(() => {
    if(colisionStatus)
    dispatch(projectileExpired(projectile.key))
  },[colisionStatus])

  return (

      <RigidBody
      visible={visible}
      name={projectile.key}
      ref={projectileRef}
      colliders={"ball"}
      density={500}
      
      angularDamping={2}
      type={"dynamic"}
      onCollisionEnter={(payload) => {
        setTimeout(() =>
          setColisionStatus(true),
          3000
        )
      }
    }
    >
      <Attractor strength={5} />
      
      <mesh castShadow>
          <sphereGeometry args={[0.42, 16, 16]} />
          <meshBasicMaterial color={"black"}/>
      </mesh>
    </RigidBody>
          
    )
};
