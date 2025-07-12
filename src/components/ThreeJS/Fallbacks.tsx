"use client"

export function LoadingFallback() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="text-green-400 text-lg animate-pulse">Loading 3D Scene...</div>
        </div>
    )
}

export function FallbackScene() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
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

interface ErrorFallbackProps {
    error: Error
    resetErrorBoundary: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900 to-gray-700">
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
