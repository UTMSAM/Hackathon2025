"use client"

import { Environment } from "@react-three/drei"
import { Suspense } from "react"
import { ThreeText } from "./ThreeText"
import { Model } from "./Model"
import { Fire } from "./Fire"
import { SafeOrbitControls } from "./Controls"

export function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.3} />

            <pointLight position={[0, 8, 0]} intensity={1.2} color="#ff6600" />
            <pointLight position={[-5, 5, 5]} intensity={0.8} color="#00bfff" />
            <pointLight position={[5, 3, -3]} intensity={0.6} color="#ffd700" />

            <spotLight
                position={[0, 10, -8]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.7}
                color="#ff4500"
                target-position={[0, 3.85, 0]}
            />

            <Suspense fallback={null}>
                <ThreeText />
            </Suspense>

            <Suspense fallback={null}>
                <Model />
            </Suspense>

            <Fire />

            <SafeOrbitControls />

            <Suspense fallback={null}>
                <Environment preset="city" />
            </Suspense>
        </>
    )
}
