"use client"

import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useState, useMemo } from "react"
import * as THREE from "three"

export function Fire() {
    const fireRef = useRef<THREE.Points>(null)
    const smokeRef = useRef<THREE.Points>(null)
    const { mouse, camera, raycaster, scene, gl } = useThree()
    const [isOverIsland, setIsOverIsland] = useState(false)
    const [, setFirePosition] = useState<THREE.Vector3 | null>(null)
    const [mouseInitialized, setMouseInitialized] = useState(false)
    const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
    const fireParticleCount = 250
    const smokeParticleCount = 150

    useState(() => {
        const canvas = gl.domElement

        const handleMouseEnter = () => {
            setIsMouseInCanvas(true)
        }

        const handleMouseLeave = () => {
            setIsMouseInCanvas(false)
            setIsOverIsland(false)
            setFirePosition(null)
        }

        canvas.addEventListener("mouseenter", handleMouseEnter)
        canvas.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            canvas.removeEventListener("mouseenter", handleMouseEnter)
            canvas.removeEventListener("mouseleave", handleMouseLeave)
        }
    })

    const fireParticles = useMemo(() => {
        const positions = new Float32Array(fireParticleCount * 3)
        const velocities = new Float32Array(fireParticleCount * 3)
        const ages = new Float32Array(fireParticleCount)
        const sizes = new Float32Array(fireParticleCount)
        const maxAge = new Float32Array(fireParticleCount)
        const active = new Float32Array(fireParticleCount)
        const colors = new Float32Array(fireParticleCount * 3)

        for (let i = 0; i < fireParticleCount; i++) {
            positions[i * 3] = -1000
            positions[i * 3 + 1] = -1000
            positions[i * 3 + 2] = -1000

            velocities[i * 3] = (Math.random() - 0.5) * 0.02
            velocities[i * 3 + 1] = Math.random() * 0.04 + 0.02
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02

            ages[i] = 0
            maxAge[i] = 40 + Math.random() * 30
            sizes[i] = 0
            active[i] = 0

            colors[i * 3] = 1.0
            colors[i * 3 + 1] = 0.3 + Math.random() * 0.7
            colors[i * 3 + 2] = Math.random() * 0.2
        }

        return { positions, velocities, ages, sizes, maxAge, active, colors }
    }, [])

    const smokeParticles = useMemo(() => {
        const positions = new Float32Array(smokeParticleCount * 3)
        const velocities = new Float32Array(smokeParticleCount * 3)
        const ages = new Float32Array(smokeParticleCount)
        const sizes = new Float32Array(smokeParticleCount)
        const maxAge = new Float32Array(smokeParticleCount)
        const active = new Float32Array(smokeParticleCount)
        const opacity = new Float32Array(smokeParticleCount)

        for (let i = 0; i < smokeParticleCount; i++) {
            positions[i * 3] = -1000
            positions[i * 3 + 1] = -1000
            positions[i * 3 + 2] = -1000

            velocities[i * 3] = (Math.random() - 0.5) * 0.015
            velocities[i * 3 + 1] = Math.random() * 0.02 + 0.015
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015

            ages[i] = 0
            maxAge[i] = 120 + Math.random() * 80
            sizes[i] = 0
            active[i] = 0
            opacity[i] = 0
        }

        return { positions, velocities, ages, sizes, maxAge, active, opacity }
    }, [])

    useFrame(() => {
        if (!mouseInitialized) {
            setMouseInitialized(true)
            setIsOverIsland(false)
            setFirePosition(null)
        }

        if (!mouseInitialized || !isMouseInCanvas) {
            if (!isMouseInCanvas) {
                setIsOverIsland(false)
                setFirePosition(null)
            }
            updateFireParticles(false, null)
            updateSmokeParticles(false, null)
            return
        }

        const mouseVector = new THREE.Vector2(mouse.x, mouse.y)
        raycaster.setFromCamera(mouseVector, camera)

        const islandObject =
            scene.getObjectByName("island") ||
            scene.children.find((child) => child.type === "Group" || child.type === "Object3D")

        let currentlyOverIsland = false
        let currentFirePosition = null

        if (islandObject) {
            const intersects = raycaster.intersectObject(islandObject, true)

            if (intersects.length > 0) {
                currentlyOverIsland = true
                currentFirePosition = intersects[0].point
                setIsOverIsland(true)
                setFirePosition(intersects[0].point)
            } else {
                setIsOverIsland(false)
                setFirePosition(null)
            }
        } else {
            setIsOverIsland(false)
            setFirePosition(null)
        }

        updateFireParticles(currentlyOverIsland, currentFirePosition)
        updateSmokeParticles(currentlyOverIsland, currentFirePosition)
    })

    const updateFireParticles = (currentlyOverIsland: boolean, currentFirePosition: THREE.Vector3 | null) => {
        if (!fireRef.current) return

        const positions = fireRef.current.geometry.attributes.position.array as Float32Array
        const sizes = fireRef.current.geometry.attributes.size.array as Float32Array
        const colors = fireRef.current.geometry.attributes.color.array as Float32Array

        let activeFireCount = 0
        for (let i = 0; i < fireParticleCount; i++) {
            if (fireParticles.active[i] === 1) activeFireCount++
        }

        if (isMouseInCanvas && currentlyOverIsland && currentFirePosition) {
            const spawnRate = 6
            let spawned = 0
            for (let i = 0; i < fireParticleCount && spawned < spawnRate && activeFireCount < fireParticleCount; i++) {
                if (fireParticles.active[i] === 0) {
                    const idx = i * 3
                    const spreadRadius = 0.12
                    const angle = Math.random() * Math.PI * 2
                    const radius = Math.random() * spreadRadius

                    positions[idx] = currentFirePosition.x + Math.cos(angle) * radius
                    positions[idx + 1] = currentFirePosition.y - 0.05 + Math.random() * 0.03
                    positions[idx + 2] = currentFirePosition.z + Math.sin(angle) * radius

                    fireParticles.velocities[idx] = (Math.random() - 0.5) * 0.02
                    fireParticles.velocities[idx + 1] = Math.random() * 0.04 + 0.02
                    fireParticles.velocities[idx + 2] = (Math.random() - 0.5) * 0.02

                    fireParticles.ages[i] = 0
                    fireParticles.maxAge[i] = 40 + Math.random() * 30
                    fireParticles.active[i] = 1
                    fireParticles.sizes[i] = Math.random() * 0.15 + 0.08
                    sizes[i] = 0

                    const colorType = Math.random()
                    if (colorType < 0.3) {
                        colors[idx] = 1.0
                        colors[idx + 1] = 1.0
                        colors[idx + 2] = 0.8
                    } else if (colorType < 0.7) {
                        colors[idx] = 1.0
                        colors[idx + 1] = 0.5
                        colors[idx + 2] = 0.1
                    } else {
                        colors[idx] = 1.0
                        colors[idx + 1] = 0.2
                        colors[idx + 2] = 0.05
                    }

                    spawned++
                    activeFireCount++
                }
            }
        }

        for (let i = 0; i < fireParticleCount; i++) {
            if (fireParticles.active[i] === 0) {
                const idx = i * 3
                positions[idx] = -1000
                positions[idx + 1] = -1000
                positions[idx + 2] = -1000
                sizes[i] = 0
                continue
            }

            const idx = i * 3
            fireParticles.ages[i] += 1

            if (fireParticles.ages[i] > fireParticles.maxAge[i]) {
                positions[idx] = -1000
                positions[idx + 1] = -1000
                positions[idx + 2] = -1000
                sizes[i] = 0
                fireParticles.active[i] = 0
                fireParticles.ages[i] = 0
                fireParticles.maxAge[i] = 40 + Math.random() * 30
            } else {
                positions[idx] += fireParticles.velocities[idx]
                positions[idx + 1] += fireParticles.velocities[idx + 1]
                positions[idx + 2] += fireParticles.velocities[idx + 2]

                const ageRatio = fireParticles.ages[i] / fireParticles.maxAge[i]
                const turbulence = ageRatio * 0.018
                positions[idx] += (Math.random() - 0.5) * turbulence
                positions[idx + 2] += (Math.random() - 0.5) * turbulence

                let sizeMultiplier = 0
                if (ageRatio < 0.15) {
                    sizeMultiplier = ageRatio * 6.67
                } else if (ageRatio < 0.6) {
                    sizeMultiplier = 1 + Math.sin(ageRatio * Math.PI * 4) * 0.3
                } else {
                    sizeMultiplier = 1.3 - ((ageRatio - 0.6) / 0.4) * 1.3
                }
                sizes[i] = fireParticles.sizes[i] * Math.max(0, sizeMultiplier)

                fireParticles.velocities[idx + 1] += 0.001 * (1 - ageRatio)
                fireParticles.velocities[idx] *= 0.98
                fireParticles.velocities[idx + 1] *= 0.995
                fireParticles.velocities[idx + 2] *= 0.98
            }
        }

        fireRef.current.geometry.attributes.position.needsUpdate = true
        fireRef.current.geometry.attributes.size.needsUpdate = true
        fireRef.current.geometry.attributes.color.needsUpdate = true
    }

    const updateSmokeParticles = (currentlyOverIsland: boolean, currentFirePosition: THREE.Vector3 | null) => {
        if (!smokeRef.current) return

        const positions = smokeRef.current.geometry.attributes.position.array as Float32Array
        const sizes = smokeRef.current.geometry.attributes.size.array as Float32Array

        let activeSmokeCount = 0
        for (let i = 0; i < smokeParticleCount; i++) {
            if (smokeParticles.active[i] === 1) activeSmokeCount++
        }

        if (isMouseInCanvas && currentlyOverIsland && currentFirePosition) {
            const smokeSpawnRate = 2
            let spawned = 0
            for (
                let i = 0;
                i < smokeParticleCount && spawned < smokeSpawnRate && activeSmokeCount < smokeParticleCount;
                i++
            ) {
                if (smokeParticles.active[i] === 0) {
                    const idx = i * 3
                    const spreadRadius = 0.08
                    const angle = Math.random() * Math.PI * 2
                    const radius = Math.random() * spreadRadius

                    positions[idx] = currentFirePosition.x + Math.cos(angle) * radius
                    positions[idx + 1] = currentFirePosition.y + 0.3 + Math.random() * 0.2
                    positions[idx + 2] = currentFirePosition.z + Math.sin(angle) * radius

                    smokeParticles.velocities[idx] = (Math.random() - 0.5) * 0.015
                    smokeParticles.velocities[idx + 1] = Math.random() * 0.02 + 0.015
                    smokeParticles.velocities[idx + 2] = (Math.random() - 0.5) * 0.015

                    smokeParticles.ages[i] = 0
                    smokeParticles.maxAge[i] = 120 + Math.random() * 80
                    smokeParticles.active[i] = 1
                    smokeParticles.sizes[i] = Math.random() * 0.2 + 0.15
                    smokeParticles.opacity[i] = 0.3 + Math.random() * 0.2
                    sizes[i] = 0

                    spawned++
                    activeSmokeCount++
                }
            }
        }

        for (let i = 0; i < smokeParticleCount; i++) {
            if (smokeParticles.active[i] === 0) {
                const idx = i * 3
                positions[idx] = -1000
                positions[idx + 1] = -1000
                positions[idx + 2] = -1000
                sizes[i] = 0
                continue
            }

            const idx = i * 3
            smokeParticles.ages[i] += 1

            if (smokeParticles.ages[i] > smokeParticles.maxAge[i]) {
                positions[idx] = -1000
                positions[idx + 1] = -1000
                positions[idx + 2] = -1000
                sizes[i] = 0
                smokeParticles.active[i] = 0
                smokeParticles.ages[i] = 0
                smokeParticles.maxAge[i] = 120 + Math.random() * 80
            } else {
                positions[idx] += smokeParticles.velocities[idx]
                positions[idx + 1] += smokeParticles.velocities[idx + 1]
                positions[idx + 2] += smokeParticles.velocities[idx + 2]

                const ageRatio = smokeParticles.ages[i] / smokeParticles.maxAge[i]

                const spreadFactor = ageRatio * 0.025
                positions[idx] += (Math.random() - 0.5) * spreadFactor
                positions[idx + 2] += (Math.random() - 0.5) * spreadFactor

                let sizeMultiplier = 0
                if (ageRatio < 0.1) {
                    sizeMultiplier = ageRatio * 10
                } else {
                    sizeMultiplier = 1 + ageRatio * 2
                }
                sizes[i] = smokeParticles.sizes[i] * sizeMultiplier

                smokeParticles.velocities[idx] *= 0.995
                smokeParticles.velocities[idx + 1] *= 0.998
                smokeParticles.velocities[idx + 2] *= 0.995
            }
        }

        smokeRef.current.geometry.attributes.position.needsUpdate = true
        smokeRef.current.geometry.attributes.size.needsUpdate = true
    }

    const hasActiveParticles = () => {
        for (let i = 0; i < fireParticleCount; i++) {
            if (fireParticles.active[i] === 1) return true
        }
        for (let i = 0; i < smokeParticleCount; i++) {
            if (smokeParticles.active[i] === 1) return true
        }
        return false
    }

    if (!mouseInitialized || (!isOverIsland && !hasActiveParticles())) return null

    return (
        <>
            <points ref={fireRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={fireParticleCount}
                        array={fireParticles.positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-size"
                        count={fireParticleCount}
                        array={fireParticles.sizes}
                        itemSize={1}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={fireParticleCount}
                        array={fireParticles.colors}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.12}
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={0.95}
                    alphaTest={0.01}
                    blending={THREE.AdditiveBlending}
                    vertexColors={true}
                    depthWrite={false}
                />
            </points>

            <points ref={smokeRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={smokeParticleCount}
                        array={smokeParticles.positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-size"
                        count={smokeParticleCount}
                        array={smokeParticles.sizes}
                        itemSize={1}
                    />
                </bufferGeometry>
                <pointsMaterial
                    color="#4a4a4a"
                    size={0.2}
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={0.15}
                    alphaTest={0.01}
                    blending={THREE.NormalBlending}
                    vertexColors={false}
                    depthWrite={false}
                />
            </points>
        </>
    )
}
