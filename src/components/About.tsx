"use client"

import { Calendar, MapPin, Clock, Zap } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "../hook/use-scroll-animation"

const About = () => {
    const titleAnimation = useScrollAnimation({ threshold: 0.3 })
    const statsAnimation = useScrollAnimation({ threshold: 0.3 })
    const featuresAnimation = useScrollAnimation({ threshold: 0.2 })
    const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
    const mentorLinkAnimation = useScrollAnimation({ threshold: 0.3 })

    return (
        <section id="About" className="py-20">
            <div className="container mx-auto px-4">
                <div
                    className="rounded-2xl p-8 mb-35 mt-15">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div 
                            ref={titleAnimation.ref}
                            className={`text-center transition-all duration-1000 ease-out ${
                                titleAnimation.isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <h2 className="text-6xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
                            Ember Hacks
                        </span>
                            </h2>
                            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                                Join the University of Toronto Mississauga's Society of Algorithmic Modelling for their
                                first-ever 36-hour hackathon experience.
                                Ember Hacks brings together passionate developers, designers, and innovators to create
                                solutions that matter.
                                You'll work alongside peers and mentors to transform an ambitious concept into a
                                tangible project in a sprint of creativity and coding.
                                Get ready to build, learn, and compete in an unforgettable weekend of innovation.
                            </p>
                        </div>
                        <div 
                            ref={statsAnimation.ref}
                            className={`text-center transition-all duration-1000 ease-out delay-300 ${
                                statsAnimation.isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-10'
                            }`}
                        >
                            <div className="p-8">
                                <div className="text-6xl font-bold text-orange-400 mb-2">36</div>
                                <div className="text-gray-300 text-xl">Hours</div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-6xl font-bold text-orange-400 mb-2">100+</div>
                                    <div className="text-gray-300 text-xl">Participants</div>
                                </div>
                                <div>
                                    <div className="text-6xl font-bold text-cyan-400 mb-2">$5K+</div>
                                    <div className="text-gray-300 text-xl">In Prizes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    ref={featuresAnimation.ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out delay-500 ${
                        featuresAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div
                            className="bg-gradient-to-br from-slate-900 to-zinc-900 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                            <Calendar className="w-12 h-12 text-white"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">When</h3>
                        <p className="text-gray-400 text-xl">October 23-25th</p>
                        <p className="text-gray-400 text-xl">36 hours of coding</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div
                            className="bg-gradient-to-br from-slate-900 to-zinc-900 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                            <MapPin className="w-12 h-12 text-white"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Where</h3>
                        <p className="text-gray-400 text-xl">University of Toronto Mississauga</p>
                        <p className="text-gray-400 text-xl">@ The William G. Davis Building</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div
                            className="bg-gradient-to-br from-slate-900 to-zinc-900 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25">
                            <Clock className="w-12 h-12 text-white"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Team Building</h3>
                        <p className="text-gray-400 text-xl">Teams of 2-4 members</p>
                        <p className="text-gray-400 text-xl">Build, test, present</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div
                            className="bg-gradient-to-br from-slate-900 to-zinc-900 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25">
                            <Zap className="w-12 h-12 text-white"/>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Workshops & Mentorship</h3>
                        <p className="text-gray-400 text-xl">Network with Professionals</p>
                        <p className="text-gray-400 text-xl">Assistance from Mentorship</p>
                    </div>
                </div>

                <div 
                    ref={ctaAnimation.ref}
                    className={`mt-40 text-center transition-all duration-1000 ease-out delay-700 ${
                        ctaAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <Link href="/register">
                        <button
                            className="mb-12 relative inline-flex h-22 w-65 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition duration-400">
                            <span
                                className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#ff6d3a_0%,#00cfff_50%,#ff6d3a_100%)]"></span>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 backdrop-blur-3xl">
                                <h1 className="relative z-10 text-2xl font-bold hover-underline background: linear-gradient(to right, #ff6d3a, #00cfff); -webkit-background-clip: text; background-clip: text; color: transparent;">
                                    Register Now
                                </h1>
                            </span>
                        </button>
                    </Link>
                </div>


                <div
                    ref={mentorLinkAnimation.ref}
                    className={`text-center transition-all duration-1000 ease-out delay-900 ${
                        mentorLinkAnimation.isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <a
                        href="mailto:sam@utmsu.ca?subject=Interest%20in%20Becoming%20a%20Mentor%2C%20Judge%20or%20Volunteer&body=Hi%2C%0A%0AI%20am%20interested%20in%20becoming%20a%20mentor%2C%20judge%20or%20volunteer.%20Please%20let%20me%20know%20more%20about%20the%20opportunities%20available.%0A%0AThank%20you%21"
                        className="text-gray-500 underline hover:text-gray-700 transition duration-200 text-xl"
                    >
                        Interested in becoming a Mentor, Judge or Volunteer?
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
