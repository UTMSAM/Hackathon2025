import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                            HACK THE HERD
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Some footer text here
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                                <Twitter className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300">
                                <Github className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sponsors</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Code of Conduct</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-4 h-4"/>
                                <span>hello@hacktheherd.com</span>
                            </div>
                            <p className="text-gray-400">University of Toronto</p>
                            <p className="text-gray-400">3359 Mississauga Rd</p>
                            <p className="text-gray-400">Mississauga, ON</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 HackTheHerd. All rights reserved. Built with ❤️ by the community.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;