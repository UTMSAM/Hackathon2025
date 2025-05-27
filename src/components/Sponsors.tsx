"use client"

const Sponsors = () => {
    const sponsors = [
        {
            id: "mlh-1",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-2",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-3",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-4",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-5",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-6",
            name: "Major League Hacking",
            logo: "/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
    ]

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-6 text-white bg-clip-text text-transparent">Sponsors</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        HackTheHerd is fully supported by its sponsors, whom are listed below.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sponsors.map((sponsor) => {
                        return (
                            <a key={sponsor.id} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                                    <div className="rounded-xl flex items-center justify-center mb-4 transition-shadow duration-300">
                                        <img
                                            src={sponsor.logo || "/placeholder.svg"}
                                            alt={sponsor.alt}
                                            className="p-8 object-contain max-h-48 w-full"
                                            onError={(e) => {
                                                console.error("Image failed to load:", sponsor.logo)
                                                e.currentTarget.style.display = "none"
                                            }}
                                        />
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Sponsors
