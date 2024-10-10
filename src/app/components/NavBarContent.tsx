import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Zap, LayoutGrid, Sparkles, Bookmark, Star, } from "lucide-react";
import { usePathname } from "next/navigation";

type SectionContent = {
    icon?: string;
    name: string;
    isSelected?: boolean
};

type NavBarSectionProps = {
    section: {
        title: string;
        content?: SectionContent[];
        more?: string;
        isOpen: boolean;
    };
    index: number;
    selectedContent: string;
    selectContent: (content: string) => void;
};

export default function NavBarContent({
    section,
    index,
    selectedContent,
    selectContent,
}: NavBarSectionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(section.isOpen);

    const pathname = usePathname()

    useEffect(() => {
        if (pathname !== "/library") {
            setIsOpen(false);
        } else {
            setIsOpen(section.isOpen)
        }
    }, [pathname]);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const icons = [
        {
            icon: <Zap className={`h-4 w-4 ${isOpen ? "text-white" : "text-grayText"}`} />,
            content: "Platform",
        },
        {
            icon: <LayoutGrid className={`h-4 w-4 ${isOpen ? "text-white" : "text-grayText"}`} />,
            content: "Sections",
        },
        {
            icon: <Sparkles className={`h-4 w-4 ${isOpen ? "text-white" : "text-grayText"}`} />,
            content: "Style",
        },
        {
            icon: <Bookmark className={`h-4 w-4 ${isOpen ? "text-white" : "text-grayText"}`} />,
            content: "Saved",
        },
        {
            icon: <Star className={`h-4 w-4 ${isOpen ? "text-white" : "text-grayText"}`} />,
            content: "Plan",
        },
    ];

    const getIconForSection = (state: string) => {
        const foundState = icons.find((item) => item.content === state);
        return foundState ? foundState.icon : null;
    };

    return (
        <div key={section.title} className="border-b border-dashed border-border">
            <div className="flex items-center justify-between mb-6">
                <div
                    className="flex items-center gap-x-2.5 cursor-pointer"
                    onClick={handleToggle}
                >
                    {getIconForSection(section.title)}
                    <h2
                        className={`${isOpen ? "text-white" : "text-grayText"
                            } uppercase font-medium text-sm transition-colors duration-200 ease-in-out hover:text-white`}
                    >
                        {section.title}
                    </h2>
                </div>
                {isOpen ? (
                    <ChevronDown
                        onClick={handleToggle}
                        className="text-white h-5 w-5 cursor-pointer"
                    />
                ) : (
                    <ChevronUp
                        onClick={handleToggle}
                        className="text-grayText h-5 w-5 cursor-pointer transition-colors duration-200 ease-in-out hover:text-white"
                    />
                )}
            </div>
            {isOpen && (
                <>
                    <div className="border-l-2 border-border">
                        {section.content?.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center gap-x-2.5 mb-6 px-6 cursor-pointer"
                            >
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
                                <h3
                                    className={`text-sm ${selectedContent === item.name
                                        ? "text-white"
                                        : "text-grayText"
                                        } transition-colors duration-200 ease-in-out hover:text-white`}
                                    onClick={() => selectContent(item.name)}
                                >
                                    {item.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                    {section.more && (
                        <p className="text-grayText mb-6">{section.more}</p>
                    )}
                </>
            )}
        </div>
    );
}
