"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Float } from "@react-three/drei"
import { Suspense, useRef, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"

function Model() {
    const { scene } = useGLTF("/Fish.glb")
    if (!scene) {
        throw new Error("Fish model failed to load")
    }
    return (
        <Float speed={2} rotationIntensity={1}>
            <primitive object={scene.clone()} scale={0.5} position={[0, 0, 0]} />
        </Float>
    )
}

function SafeOrbitControls() {
    const controlsRef = useRef()

    return (
        <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            minDistance={20}
            dampingFactor={0.05}
            enableDamping={true}
            onError={(error) => {
                console.error("OrbitControls error:", error)
            }}
        />
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Suspense fallback={null}>
                <Model />
            </Suspense>

            <SafeOrbitControls />

            <Suspense fallback={null}>
                <Environment preset="sunset" />
            </Suspense>
        </>
    )
}

function LoadingFallback() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-green-400 text-lg animate-pulse">Loading 3D Scene...</div>
        </div>
    )
}

function FallbackScene() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-green-500 rounded-lg flex items-center justify-center animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p className="text-green-400 font-semibold">Interactive 3D Experience</p>
                <p className="text-gray-400 text-sm">Explore our hackathon in 3D</p>
            </div>
        </div>
    )
}

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900 to-gray-700 rounded-lg">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p className="text-red-400 font-semibold">3D Scene Error</p>
                <p className="text-gray-400 text-sm">Something went wrong with the 3D scene</p>
                <button
                    onClick={resetErrorBoundary}
                    className="px-10 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    )
}

interface ThreeJSProps {
    className?: string
    height?: string
}

export default function ThreeJS({ className = "", height = "h-96" }: ThreeJSProps) {
    const [canvasError, setCanvasError] = useState(false)

    if (canvasError) {
        return (
            <div className={`w-full ${height} rounded-lg overflow-hidden ${className}`}>
                <FallbackScene />
            </div>
        )
    }

    return (
        <div className={`w-full ${height} rounded-lg overflow-hidden ${className}`}>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={(error, errorInfo) => {
                    console.error("ThreeJS Error Boundary:", error, errorInfo)
                }}
            >
                <Suspense fallback={<LoadingFallback />}>
                    <Canvas
                        camera={{ position: [0, 0, 8], fov: 45 }}
                        onCreated={({ gl }) => {
                            try {
                                gl.setClearColor("#1f2937")
                            } catch (error) {
                                console.error("Canvas creation error:", error)
                                setCanvasError(true)
                            }
                        }}
                        onError={(error) => {
                            console.error("Canvas error:", error)
                            setCanvasError(true)
                        }}
                        fallback={<FallbackScene />}
                        gl={{
                            antialias: true,
                            alpha: false,
                            powerPreference: "high-performance",
                        }}
                    >
                        <Scene />
                    </Canvas>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}
