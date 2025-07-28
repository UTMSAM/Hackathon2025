"use client"
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import Link from "next/link"
import { useState, useEffect } from "react"

export function NavbarMain() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const navItems = [
        {
            name: "About",
            link: "#About",
        },
        {
            name: "Sponsors",
            link: "#Sponsors",
        },
        {
            name: "FAQ",
            link: "#FAQ",
        },
        {
            name: "Organizers",
            link: "#Organizers",
        },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleNavClick = (e: Event) => {
            const target = e.target as HTMLElement
            const link = target.closest("a")

            if (link && link.getAttribute("href")?.startsWith("#")) {
                e.preventDefault()
                const sectionId = link.getAttribute("href")?.substring(1)
                if (sectionId) {
                    scrollToSection(sectionId)
                }
            }
        }

        document.addEventListener("click", handleNavClick)

        return () => {
            document.removeEventListener("click", handleNavClick)
        }
    }, [])

    return (
        <Navbar>
            <NavBody>
                <button onClick={scrollToTop} className="focus:outline-none">
                    <NavbarLogo />
                </button>
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <Link href="/register">
                        <button
                            className="relative inline-flex h-12 w-25 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6d3a_0%,#00cfff_50%,#ff6d3a_100%)]"></span>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Register
                            </span>
                        </button>
                    </Link>
                </div>
            </NavBody>

            <MobileNav>
                <MobileNavHeader>
                    <button onClick={scrollToTop} className="focus:outline-none">
                        <NavbarLogo/>
                    </button>
                    <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}/>
                </MobileNavHeader>

                <MobileNavMenu isOpen={isMobileMenuOpen}>
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={(e) => {
                                e.preventDefault()
                                const sectionId = item.link.substring(1)
                                scrollToSection(sectionId)
                                setIsMobileMenuOpen(false)
                            }}
                            className="relative text-neutral-600 dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
                            Login
                        </NavbarButton>
                        <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                            Book a call
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}
