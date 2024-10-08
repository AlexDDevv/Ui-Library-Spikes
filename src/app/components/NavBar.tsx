"use client";
import React, { useState } from "react";
import data from "../data/data.json";
import NavBarContent from "./NavBarContent";
import Image from "next/image";
import btnDotLeft from "../../assets/img/btnDotLeft.svg"
import btnDotRight from "../../assets/img/btnDotRight.svg"

export default function NavBar() {
    const [selectedContent, setSelectedContent] = useState<{ [key: string]: string }>({
        Platform: "Webflow",
        Sections: "Hero"
    });

    const selectContent = (sectionTitle: string, content: string) => {
        setSelectedContent((prevSelectedContent) => ({
            ...prevSelectedContent,
            [sectionTitle]: content,
        }));
    };

    return (
        <section className="bg-bgContainer flex flex-col gap-y-6 p-8 pb-28 border-r-2 border-border min-w-[280px]">
            {data.navBarLaterale.map((section, index) => (
                <NavBarContent
                    key={section.title}
                    section={section}
                    index={index}
                    selectedContent={selectedContent[section.title]}
                    selectContent={(content) => selectContent(section.title, content)}
                />
            ))}
            <button className="flex items-center justify-between bg-card text-upgradeText text-xs font-medium h-8 rounded-md">
                <Image
                    src={btnDotLeft}
                    alt="Styled btn"
                />
                <p>
                    Upgrade to
                    <span className="gradientText ml-1">Pro</span>
                </p>
                <Image
                    src={btnDotRight}
                    alt="Styled btn"
                />
            </button>
        </section>
    );
}
