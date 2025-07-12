"use client"

import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { useScrollAnimation } from "../hook/use-scroll-animation"

const Footer = () => {
    const brandAnimation = useScrollAnimation({ threshold: 0.3 })
    const linksAnimation = useScrollAnimation({ threshold: 0.3 })
    const contactAnimation = useScrollAnimation({ threshold: 0.3 })
    const copyrightAnimation = useScrollAnimation({ threshold: 0.3 })

    return (
        <footer className="py-12" style={{ background: '#141316' }}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div 
                        ref={brandAnimation.ref}
                        className={`md:col-span-2 transition-all duration-1000 ease-out ${
                            brandAnimation.isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
                                Ember Hacks
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            UTMSAM's Flagship Hackathon
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/UTMSAM/Hackathon2025" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Github className="w-5 h-5 text-white" />
                            </a>
                            <a href="https://www.instagram.com/utmsam" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/utm-sam" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    <div 
                        ref={linksAnimation.ref}
                        className={`transition-all duration-1000 ease-out delay-200 ${
                            linksAnimation.isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#About" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="#Sponsors" className="text-gray-400 hover:text-white transition-colors duration-300">Sponsors</a></li>
                            <li><a href="#FAQ" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                        </ul>
                    </div>

                    <div 
                        ref={contactAnimation.ref}
                        className={`transition-all duration-1000 ease-out delay-400 ${
                            contactAnimation.isVisible 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'
                        }`}
                    >
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-4 h-4"/>
                                <span>sam@utmsu.ca</span>
                            </div>
                            <p className="text-gray-400">University of Toronto</p>
                            <p className="text-gray-400">3359 Mississauga Rd</p>
                            <p className="text-gray-400">Mississauga, ON</p>
                        </div>
                    </div>
                </div>

                <div 
                    ref={copyrightAnimation.ref}
                    className={`border-t border-gray-800 mt-8 pt-8 text-center transition-all duration-1000 ease-out delay-600 ${
                        copyrightAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <p className="text-gray-400">
                        © 2025 Ember Hacks. All rights reserved. Built with ❤️ by the community.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer