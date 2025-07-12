"use client"

import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"

export function SafeOrbitControls() {
    const controlsRef = useRef()

    return (
        <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            minDistance={17}
            dampingFactor={0.05}
            enableDamping={true}
            onError={(error) => {
                console.error("OrbitControls error:", error)
            }}
        />
    )
}
