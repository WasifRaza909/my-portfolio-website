"use client"

import { useGLTF, Center } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { AxesHelper, Group } from "three"
import { useFrame } from "@react-three/fiber"

const Model = () => {
    const groupRef = useRef<Group>(null)

    const { scene } = useGLTF('/gaming_desktop_pc.glb')
    useEffect(() => {
        const axesHelper = new AxesHelper()

        scene.add(axesHelper)
    },[])
    useFrame(() => {
        if (groupRef.current) {
            console.log(groupRef.current)
            groupRef.current.rotation.y += 0.02
        }
    })

    return (
            <group
                ref={groupRef}
                scale={[0.3, 0.3, 0.3]}
                rotation={[0,0, 0]}
                position={[0.1, 0, 0]}
            >
                         <Center>
                            
                <primitive object={scene} />
                         </Center>
            </group>
    )
}

export default Model
