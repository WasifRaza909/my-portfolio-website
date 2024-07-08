"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"

const Model = () => {
    const groupRef = useRef<Group>(null)

    const {scene} = useGLTF('/gaming_desktop_pc.glb')

  return (
    <group  scale={0.3} rotation={[0, -1.7,0]} ref={groupRef}>
        <primitive object={scene}/>
    </group>
  )
}

export default Model