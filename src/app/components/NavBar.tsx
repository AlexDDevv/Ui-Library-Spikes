"use client";
import React, { useState } from "react";
import data from "../data/data.json";
import Image from "next/image";
import {
    ChevronDown,
    ChevronUp,
    Zap,
    LayoutGrid,
    Sparkles,
    Bookmark,
    Star,
} from "lucide-react";

export default function NavBar() {
    const [openSection, setOpenSection] = useState<number | null>(null);
    const [selectedContent, setSelectedContent] = useState<string>("Webflow");

    const toggleSection = (index: number) => {
        setOpenSection((prevIndex) => (prevIndex === index ? null : index));
    };

    const selectContent = (content: string) => {
        setSelectedContent(content);
    };

    const icons = [
        {
            icon: <Zap className="text-white h-4 w-4" />,
            content: "Platform",
        },
        {
            icon: <LayoutGrid className="text-white h-4 w-4" />,
            content: "Sections",
        },
        {
            icon: <Sparkles className="text-white h-4 w-4" />,
            content: "Style",
        },
        {
            icon: <Bookmark className="text-white h-4 w-4" />,
            content: "Saved",
        },
        {
            icon: <Star className="text-white h-4 w-4" />,
            content: "Plan",
        },
    ];

    const getIconForSection = (state: string) => {
        const foundState = icons.find((item) => item.content === state);
        return foundState ? foundState.icon : null;
    };

    return (
        <section className="flex flex-col gap-y-6 p-8 shadow-[inset_0_0_0_1px_#1D1D1D] max-w-[280px]">
            {data.navBarLaterale.map((section, index) => (
                <div key={section.title} className="border-b border-dashed border-border">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-x-2.5 cursor-pointer" onClick={() => toggleSection(index)}>
                            {getIconForSection(section.title)}
                            <h2 className={`${openSection === index ? "text-white" : "text-grayText"} uppercase font-medium text-sm`}>
                                {section.title}
                            </h2>
                        </div>
                        {openSection === index ? (
                            <ChevronDown
                                onClick={() => toggleSection(index)}
                                className="text-grayText h-5 w-5 cursor-pointer"
                            />
                        ) : (
                            <ChevronUp
                                onClick={() => toggleSection(index)}
                                className="text-grayText h-5 w-5 cursor-pointer"
                            />
                        )}
                    </div>
                    {openSection === index && (
                        <>
                            <div className="border-l-2 border-border">
                                {section.content?.map((item) => (
                                    <div key={item.name} className="flex items-center gap-x-2.5 mb-6 px-6 cursor-pointer">
                                        {item.icon && (
                                            <Image
                                                src={item.icon}
                                                alt={`Logo de ${item.name}`}
                                                width={20}
                                                height={20}
                                            />
                                        )}
                                        {index !== 0 && selectedContent === item.name && (
                                            <div className="h-1.5 w-1.5 rounded-full gradientDot"></div>
                                        )}
                                        <h3 className={`text-sm ${selectedContent === item.name ? "text-white" : "text-grayText"}`} onClick={() => selectContent(item.name)}>
                                            {item.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                            {section.more && (
                                <p className="text-grayText mb-6">
                                    {section.more}
                                </p>
                            )}
                        </>
                    )}
                </div>
            ))}
            <button className="bg-card text-upgradeText text-xs font-medium h-8 rounded-md">Upgrade to <span className="gradientText">Pro</span></button>
        </section>
    );
}
