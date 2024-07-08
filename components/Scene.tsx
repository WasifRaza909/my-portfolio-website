'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Model from "./Model"
import { Center } from "@react-three/drei"
const Scene = () => {
  return (
    <Canvas>
        <directionalLight position={[-10, -10, 10]} intensity={4} />
        <Center>

        <Suspense fallback={null}>
            <Model/>
        </Suspense>

        </Center>
    </Canvas>
  )
}

export default Scene