"use client"
import ShinyButton from "./components/UI/ShinyButton";
import Particles from "./components/UI/Particules";

export default function Home() {
    return (
        <>
            <main className="bg-bgHero flex flex-col items-center justify-center flex-1 text-center gap-y-8 relative overflow-hidden  max-sm:gap-y-6">
                <h1 className="font-semibold text-7xl text-white flex flex-col leading-snug z-50 max-lg:text-6xl max-lg:leading-snug max-md:text-5xl max-md:leading-snug max-sm:text-4xl max-sm:leading-snug max-mobile:text-3xl">
                    <p>
                        Unlock the
                        <span className="gradientText mx-4">Full Potential</span>
                        of
                    </p>
                    <p>
                        <span className="gradientText mx-4">Your Design</span>
                        with Paste
                    </p>
                </h1>
                <p className="text-white text-lg max-w-[430px] max-sm:text-sm max-sm:max-w-[300px] max-mobile:text-xs max-mobile:max-w-[280px]">Ready-to-use components for stunning designs. Export seamlessly to Webflow and Figma.</p>
                <ShinyButton
                    text="Get Started Now"
                />
                <div className="absolute top-1/2 left-1/3 bg-grayText w-[1500px] h-[150px] rounded-full blur-[60px] rotate-[-45deg] max-lg:top-1/3 max-md:top-[40%] max-md:left-0 max-mobile:top-[20%]"></div>
                <div className="absolute top-1/2 right-1/3 bg-grayText w-[1500px] h-[150px] rounded-full blur-[60px] rotate-[45deg] max-lg:top-1/3 max-md:top-[40%] max-md:right-0 max-mobile:top-[20%]"></div>
                <Particles />
            </main>
        </>
    );
}
