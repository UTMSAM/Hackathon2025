"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Organizers = () => {
    const [hoveredOrganizer, setHoveredOrganizer] = useState<number | null>(null)

    const organizers = [
        { id: 1, name: "Bob", role: "Lead Organizer", link: "#", img: "/logo.svg" },
        { id: 2, name: "Bob", role: "Technical Director", link: "#", img: "/logo.svg" },
        { id: 3, name: "Bob", role: "Sponsorship Lead", link: "#", img: "/logo.svg" },
        { id: 4, name: "Bob", role: "Marketing Manager", link: "#", img: "/logo.svg" },
        { id: 5, name: "Bob", role: "Logistics Coordinator", link: "#", img: "/logo.svg" },
        { id: 6, name: "Bob", role: "Mentor Coordinator", link: "#", img: "/logo.svg" },
        { id: 7, name: "Bob", role: "Workshop Director", link: "#", img: "/logo.svg" },
        { id: 8, name: "Bob", role: "Community Manager", link: "#", img: "/logo.svg" },
        { id: 9, name: "Alan Liu", role: "Website Developer", link: "https://www.tcal.xyz", img: "/logo.svg" },
    ]

    return (
        <section id="Organizers" className="py-20 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-12">
          <span>
            Organizing Team
          </span>
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 relative">
                    {organizers.map((organizer) => (
                        <div key={organizer.id} className="flex-shrink-0 relative">
                            <Link href={organizer.link}>
                                <div
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-transparent hover:from-orange-500 hover:to-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer relative"
                                    onMouseEnter={() => setHoveredOrganizer(organizer.id)}
                                    onMouseLeave={() => setHoveredOrganizer(null)}
                                    style={{
                                        background:
                                            hoveredOrganizer === organizer.id
                                                ? "linear-gradient(45deg, #f97316, #22d3ee)"
                                                : "linear-gradient(45deg, rgba(249, 115, 22, 0.3), rgba(34, 211, 238, 0.3))",
                                        padding: "3px",
                                    }}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                                        <Image
                                            src={organizer.img}
                                            alt={organizer.name}
                                            width={96}
                                            height={96}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </Link>

                            {hoveredOrganizer === organizer.id && (
                                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700 z-10 whitespace-nowrap">
                                    <div className="text-sm font-semibold text-orange-400">{organizer.name}</div>
                                    <div className="text-xs text-cyan-400">{organizer.role}</div>
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Organizers