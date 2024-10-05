"use client";
import React, { useState } from "react";
import data from "../data/data.json";
import NavBarContent from "./NavBarContent";
import {
    Zap,
    LayoutGrid,
    Sparkles,
    Bookmark,
    Star,
} from "lucide-react";

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
                <NavBarContent
                    key={section.title}
                    section={section}
                    index={index}
                    selectedContent={selectedContent[section.title]}
                    selectContent={(content) => selectContent(section.title, content)}
                    getIconForSection={getIconForSection}
                />
            ))}
            <button className="bg-card text-upgradeText text-xs font-medium h-8 rounded-md">
                Upgrade to <span className="gradientText">Pro</span>
            </button>
        </section>
    );
}
