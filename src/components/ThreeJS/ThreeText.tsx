
"use client"

import { useFrame } from "@react-three/fiber"
import { Float, Text3D, Center } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import helvetiker from "three.regular.helvetiker"

export function ThreeText() {
    const titleRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (titleRef.current) {
            const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
            titleRef.current.scale.setScalar(scale)
        }
    })

    return (
        <group ref={titleRef}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
                <Center position={[-2.8, 4.3, -0.05]}>
                    <Text3D
                        font={helvetiker}
                        size={1.2}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                        letterSpacing={0.1}
                    >
                        EMBER
                        <meshStandardMaterial
                            color="#ff4500"
                            metalness={0.1}
                            roughness={0.3}
                        />
                    </Text3D>
                </Center>
            </Float>

            <Float speed={1.3} rotationIntensity={0.08} floatIntensity={0.4}>
                <Center position={[2.8, 3.8, 0.05]}>
                    <Text3D
                        font={helvetiker}
                        size={1.2}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                        letterSpacing={0.1}
                    >
                        HACKS
                        <meshStandardMaterial
                            color="#00bfff"
                            metalness={0.1}
                            roughness={0.3}
                        />
                    </Text3D>
                </Center>
            </Float>

            <Float speed={1.8} rotationIntensity={0.08} floatIntensity={0.4}>
                <Center position={[0, 2.6, 0]}>
                    <Text3D
                        font={helvetiker}
                        size={0.4}
                        height={0.08}
                        curveSegments={8}
                        bevelEnabled
                        bevelThickness={0.01}
                        bevelSize={0.01}
                        bevelOffset={0}
                        bevelSegments={3}
                        letterSpacing={0.02}
                    >
                        OCTOBER 24TH - 25TH, 2025
                        <meshStandardMaterial
                            color="#ff4500"
                            metalness={0.2}
                            roughness={0.4}
                        />
                    </Text3D>
                </Center>
            </Float>

            <Float speed={1.3} rotationIntensity={0.06} floatIntensity={0.35}>
                <Center position={[0, 2, 0]}>
                    <Text3D
                        font={helvetiker}
                        size={0.22}
                        height={0.05}
                        curveSegments={6}
                        bevelEnabled
                        bevelThickness={0.005}
                        bevelSize={0.005}
                        bevelOffset={0}
                        bevelSegments={2}
                        letterSpacing={0.02}
                    >
                        UNIVERSITY OF TORONTO MISSISSAUGA
                        <meshStandardMaterial
                            color="#00bfff"
                            metalness={0.15}
                            roughness={0.35}
                        />
                    </Text3D>
                </Center>
            </Float>
        </group>
    )
}