import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    getIconForSection: (state: string) => JSX.Element | null;
};

export default function NavBarContent({
    section,
    index,
    selectedContent,
    selectContent,
    getIconForSection,
}: NavBarSectionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(section.isOpen);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
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
