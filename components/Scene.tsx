'use client'

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Model from "./Model"
import { Center, OrbitControls } from "@react-three/drei"


const Scene = () => {
  return (
    <Canvas>
        <directionalLight position={[-10, -10, 10]} intensity={5} />
        <ambientLight intensity={0.2}/>
        <spotLight intensity={0.2}/>
        <Suspense fallback={"<h1>Loading...</h1>"}>
            <Model/>
        </Suspense>
    <OrbitControls enableZoom={false}  maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}

export default Scene