import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                bgContainer: "var(--bgContainer)",
                bgHero: "var(--bgHero)",
                card: "var(--card)",
                btn: "var(--btn)",
                border: "var(--border)",
                borderCard: "var(--borderCard)",
                borderBtn: "var(--borderBtn)",
                grayText: "var(--grayText)",
                whiteText: "var(--whiteText)",
                upgradeText: "var(--upgradeText)",
                upgradeDots: "var(--upgradeDots)",
            },
            boxShadow: {
                "forCard": "inset 0 0 0 1px #292929",
            }
        },
    },
    plugins: [],
};
export default config;
