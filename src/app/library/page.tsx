"use client"
import { Eye } from "lucide-react"
import Image from "next/image";
import NavBar from "../components/NavBar";
import logoWebflow from "/public/logoWebflow.svg"
import logoFigma from "/public/logoFigma.svg"
import ContentSection from "../components/ContentSection";

export default function Home() {
    return (
        <main className="flex max-sm:flex-col">
            <NavBar />
            <div className="bg-bgHero w-full p-8 gap-y-8 max-md:p-7 max-md:gap-y-7">
                <section className="flex gap-8 h-[388px] border-b border-border pb-8 mb-8 max-lg:h-auto max-md:pb-7 max-md:mb-7">
                    <div className="w-1/2 h-full flex flex-col justify-between max-lg:w-full max-lg:gap-8 max-md:gap-7">
                        <div>
                            <div className="flex items-center gap-x-4 mb-6">
                                <h1 className="font-medium text-2xl text-white max-md:text-xl">Hero section</h1>
                                <span className="gradientText ml-1 font-medium max-md:text-sm">Pro</span>
                            </div>
                            <p className="text-sm text-grayText max-w-[500px]">Detailed header section with heading and graphic/image centred and feature cards on either side.</p>
                        </div>
                        <div>
                            <div className="flex gap-x-4 mb-4">
                                <button className="bg-btn text-white font-medium text-xs w-1/2 rounded-md px-2 py-2 h-12 shadow-forCard flex items-center justify-center gap-x-3 transition-colors duration-200 ease-in-out hover:bg-[rgba(27,27,27,0.5)]">
                                    <Image
                                        src={logoWebflow}
                                        alt="Logo de la plateforme Webflow"
                                    />
                                    Copy to Webflow
                                </button>
                                <button className="bg-btn text-white font-medium text-xs w-1/2 rounded-md px-2 py-2 h-12 shadow-forCard flex items-center justify-center gap-x-3 transition-colors duration-200 ease-in-out hover:bg-[rgba(27,27,27,0.5)]">
                                    <Image
                                        src={logoFigma}
                                        alt="Logo de la plateforme Figma"
                                    />
                                    Copy to Figma
                                </button>
                            </div>
                            <button className="bg-btn text-white font-medium text-xs w-full rounded-md px-2 py-2 h-12 shadow-forCard flex items-center justify-center gap-x-3 transition-colors duration-200 ease-in-out hover:bg-[rgba(27,27,27,0.5)]">
                                <Eye />
                                Live Preview
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 bg-card rounded-xl h-full shadow-forCard max-lg:hidden"></div>
                </section>
                <ContentSection />
            </div>
        </main>
    );
}
