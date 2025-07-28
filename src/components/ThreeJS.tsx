"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Scene } from "./ThreeJS/Scene"
import { LoadingFallback, FallbackScene, ErrorFallback } from "./ThreeJS/Fallbacks"

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
      <div className={`w-full ${height} ${className}`}>
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
                    gl.setClearColor("#18171a")
                  } catch (error) {
                    console.error("Canvas creation error:", error)
                    setCanvasError(true)
                  }
                }}
                onError={() => {
                  console.error("Canvas error occurred")
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
