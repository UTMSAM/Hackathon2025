"use client"

import { useGLTF, Float } from "@react-three/drei"

export function Model() {
    const { scene } = useGLTF("/island.glb")
    if (!scene) {
        throw new Error("Model failed to load")
    }

    const clonedScene = scene.clone()
    clonedScene.name = "island"

    return (
        <Float speed={2} rotationIntensity={0}>
            <primitive object={clonedScene} scale={0.5} position={[0, 0, 0]} />
        </Float>
    )
}
