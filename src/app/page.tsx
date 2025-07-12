import About from "@/components/About"
import Features from "@/components/Sponsors"
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer"
import ThreeJS from "@/components/ThreeJS"
import { NavbarMain } from "@/components/Navbar"
import Organizers from "@/components/Organizers"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white m-0 p-0">
            <NavbarMain/>

            <section className="relative h-screen w-full">

                <ThreeJS height="h-full" className="w-full"/>
            </section>

            <About/>
            <Features/>
            <FAQ/>
            <Organizers/>
            <Footer/>
        </div>
    )
}