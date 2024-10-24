"use client";
import { useRouter, usePathname } from "next/navigation";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
    initial: { "--x": "100%", scale: 0.8 },
    animate: { "--x": "-100%", scale: 1 },
    whileTap: { scale: 0.95 },
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
            type: "spring",
            stiffness: 200,
            damping: 5,
            mass: 0.5,
        },
    },
} as AnimationProps;

interface shinyButtonProps {
    text: string
}

const ShinyButton = ({ text }: shinyButtonProps) => {
    const router = useRouter()
    const pathname = usePathname()

    const redirectToLibrary = () => {
        if (pathname === "/membership") {
            return
        } else {
            router.push("/library")
        }
    }

    return (
        <motion.button
            {...animationProps}
            className={`relative ${pathname === "/membership" ? "px-2 py-1 rounded-md" : "px-6 py-2.5 rounded-lg max-sm:px-5 max-sm:py-2 max-sm:rounded-md"} font-medium backdrop-blur-xl shadow-forCard bg-btn z-50`}
            onClick={redirectToLibrary}
        >
            <span
                className={`relative block h-full w-full ${pathname === "/membership" ? "text-xs normal-case text-grayText" : "text-sm uppercase text-white max-sm:text-xs"} tracking-wide`}
                style={{
                    maskImage:
                        "linear-gradient(-75deg,#292929 calc(var(--x) + 20%),transparent calc(var(--x) + 30%),#1B1B1B calc(var(--x) + 100%))",
                }}
            >
                {text}
            </span>
            <span
                style={{
                    mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                    maskComposite: "exclude",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,#1B1B1B/10%)_calc(var(--x)+20%),#1B1B1B/50%)_calc(var(--x)+25%),#1B1B1B/10%)_calc(var(--x)+100%))] p-px"
            ></span>
        </motion.button>
    );
};

export default ShinyButton;
