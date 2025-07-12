"use client"

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options

    const [isVisible, setIsVisible] = useState(false)
    const [hasTriggered, setHasTriggered] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        setHasTriggered(true)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            {
                threshold,
                rootMargin,
            }
        )

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [threshold, rootMargin, triggerOnce])

    return {
        ref: elementRef,
        isVisible: triggerOnce ? (isVisible || hasTriggered) : isVisible,
    }
} 