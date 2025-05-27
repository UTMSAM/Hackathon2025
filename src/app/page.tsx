import About from "@/components/About"
import Features from "@/components/Sponsors"
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer"
import ThreeJS from "@/components/ThreeJS"
import { NavbarMain } from "@/components/Navbar"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white m-0 p-0">
            <NavbarMain/>
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="w-full">
                        <ThreeJS height="h-[75vh]" className="shadow-2xl"/>
                    </div>
                    </div>
            </section>
            <About/>
            <Features/>
            <FAQ/>
            <Footer/>
        </div>
    )
}
