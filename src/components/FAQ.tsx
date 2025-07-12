"use client"

import { useState } from "react"
import { useScrollAnimation } from "../hook/use-scroll-animation"

const FAQ = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const titleAnimation = useScrollAnimation({ threshold: 0.3 })
    const faqGridAnimation = useScrollAnimation({ threshold: 0.2 })

    const openModal = (id: string) => {
        setActiveModal(id)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    const faqData = [
        {
            id: "faq-1",
            question: "Who can participate?",
            answer: "Any student enrolled in a post-secondary institution can participate in our hackathon! Whether you're a beginner or an experienced developer, students of all skill levels are all welcome to join and create amazing projects."
        },
        {
            id: "faq-2",
            question: "What should I bring?",
            answer: "Bring your laptop, charger, and enthusiasm! We'll provide food, drinks, and all the mentorship you need to succeed. Don't forget your student ID if you're a student, and any hardware you might want to work with."
        },
        {
            id: "faq-3",
            question: "How do teams work?",
            answer: "You can form teams of up to 4 people. Don't have a team? No problem! We'll help you find teammates during the team formation session at the beginning of the event. We also have a Discord server for pre-event networking."
        },
        {
            id: "faq-4",
            question: "What prizes are available?",
            answer: "We have amazing prizes including cash awards up to $5,000, tech gadgets like MacBooks and gaming peripherals, and internship opportunities with our sponsor companies. Special category prizes are also available for best design, most innovative, and social impact."
        },
        {
            id: "faq-5",
            question: "Is there a registration fee?",
            answer: "No! Our hackathon is completely free to attend. We want to make it accessible to everyone interested in participating. All meals, swag, and access to workshops are included at no cost."
        },
        {
            id: "faq-6",
            question: "When is the deadline?",
            answer: "Registration closes one week before the event. Projects must be submitted by Sunday evening at 6 PM. Late submissions will not be accepted, so make sure to submit early to avoid any technical issues."
        },
        {
            id: "faq-7",
            question: "What technologies can I use?",
            answer: "You can use any programming language, framework, or technology you're comfortable with. We encourage innovation and creativity! Popular choices include React, Python, Unity, and more. Hardware projects are also welcome."
        },
        {
            id: "faq-8",
            question: "Will there be mentors available?",
            answer: "Yes! We have experienced mentors from companies like Google, Microsoft, Apple, and various startups who will be available throughout the event to help guide your projects. You can book 1-on-1 sessions or join group mentoring sessions."
        }
    ]

    return (
        <>
            <section id="FAQ" className="py-20">
                <div 
                    ref={titleAnimation.ref}
                    className={`text-center text-6xl font-bold mb-16 transition-all duration-1000 ease-out ${
                        titleAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div 
                    ref={faqGridAnimation.ref}
                    className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ease-out delay-300 ${
                        faqGridAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqData.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="group cursor-pointer transition-all duration-300 ease-out hover:scale-105"
                                onClick={() => openModal(faq.id)}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both',
                                    animation: faqGridAnimation.isVisible 
                                        ? 'fadeInUp 0.6s ease-out forwards' 
                                        : 'none'
                                }}
                            >
                                <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/20 hover:border-orange-500/30 transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative p-6">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold group-hover:text-purple-200 transition-colors duration-300">
                                                {faq.question}
                                            </h3>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {activeModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-2xl transform transition-all duration-500 ease-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-950 shadow-2xl shadow-gray-950">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-20 animate-pulse" />

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold">
                                        {faqData.find(faq => faq.id === activeModal)?.question}
                                    </h2>
                                    <button
                                        onClick={closeModal}
                                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-1 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full mb-4" />
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {faqData.find(faq => faq.id === activeModal)?.answer}
                                    </p>
                                </div>

                                <div className="flex justify-end mt-8">
                                    <button
                                        onClick={closeModal}
                                        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-cyan-500 hover:from-orange-600 hover:to-cyan-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
                                    >
                                        Got it!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes modalEnter {
                    0% {
                        transform: scale(0.9) translateY(20px);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.02) translateY(-5px);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    )
}

export default FAQ