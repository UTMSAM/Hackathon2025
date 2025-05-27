import { Calendar, MapPin, Clock, Zap } from "lucide-react";

const About = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">
                        Hack The Herd
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        HackTheHerd is more than just a hackathon—it's a movement to bring together
                        the brightest minds in tech to solve real-world problems and build the future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="bg-gradient-to-br from-slate-900 to-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                            <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">When</h3>
                        <p className="text-gray-400">October (TBD)</p>
                        <p className="text-gray-400">36 hours of coding</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="bg-gradient-to-br from-slate-900 to-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Where</h3>
                        <p className="text-gray-400">University of Toronto Mississauga</p>
                        <p className="text-gray-400">@ some hall</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="bg-gradient-to-br from-slate-900 to-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-green-500/25">
                            <Clock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Duration</h3>
                        <p className="text-gray-400">Non-stop 36 hours</p>
                        <p className="text-gray-400">Build, test, present</p>
                    </div>

                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="bg-gradient-to-br from-slate-900 to-zinc-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-pink-500/25">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">something</h3>
                        <p className="text-gray-400">something else</p>
                        <p className="text-gray-400">...</p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-6">The Challenge</h3>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            This year's theme focuses on <span className="text-blue-400 font-semibold">Sustainable Technology</span> and
                            <span className="text-purple-400 font-semibold"> Community Impact</span>. Teams will work on solutions that
                            address climate change, social inequality, and technological accessibility. Whether you're a seasoned developer
                            or just starting your coding journey, there's a place for you in the herd.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
