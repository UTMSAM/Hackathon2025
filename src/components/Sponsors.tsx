"use client"

import { useScrollAnimation } from "../hook/use-scroll-animation"

const Sponsors = () => {
    const titleAnimation = useScrollAnimation({ threshold: 0.3 })
    const sponsorsGridAnimation = useScrollAnimation({ threshold: 0.2 })
    const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

    const sponsors = [
        {
            id: "mlh-1",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-2",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-3",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-4",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-5",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
        {
            id: "mlh-6",
            name: "Major League Hacking",
            logo: "/Sponsors/MLH.png",
            alt: "MLH Logo",
            url: "https://mlh.io",
        },
    ]

    return (
        <section id="Sponsors" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div 
                    ref={titleAnimation.ref}
                    className={`text-center mb-16 transition-all duration-1000 ease-out ${
                        titleAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h2 className="text-7xl font-bold mb-6 text-ember-orange bg-clip-text text-transparent">Sponsors</h2>
                    <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                        Ember Hacks is fully supported by its sponsors, whom are listed below.
                    </p>
                </div>

                <div 
                    ref={sponsorsGridAnimation.ref}
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-300 ${
                        sponsorsGridAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    {sponsors.map((sponsor, index) => {
                        return (
                            <a 
                                key={sponsor.id} 
                                href={sponsor.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both',
                                    animation: sponsorsGridAnimation.isVisible 
                                        ? 'fadeInUp 0.6s ease-out forwards' 
                                        : 'none'
                                }}
                            >
                                <div className="bg-slate-700 rounded-2xl p-8 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                                    <div className="flex items-center justify-center mb-4 transition-shadow duration-300">
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

                <div 
                    ref={ctaAnimation.ref}
                    className={`text-center mt-15 transition-all duration-1000 ease-out delay-500 ${
                        ctaAnimation.isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                    }`}
                >
                    <a
                        href="mailto:sam@utmsu.ca?subject=Interest%20in%20Becoming%20a%20Sponsor"
                        className="text-gray-500 underline hover:text-gray-700 transition duration-200 text-2xl"
                    >
                        Interested in becoming a Sponsor?
                    </a>
                </div>
            </div>

            <style jsx>{`
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
        </section>
    )
}

export default Sponsors
