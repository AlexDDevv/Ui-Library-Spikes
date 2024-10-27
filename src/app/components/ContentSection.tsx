import { useState } from "react";
import bookmarkSelected from "../../assets/img/bookmarkSelected.svg";
import bookmark from "../../assets/img/bookmark.svg";
import Image from "next/image";
import data from "../data/data.json";

export default function ContentSection() {
    const [sectionLiked, setSectionLiked] = useState<boolean[]>(new Array(data.articles.length).fill(false));

    const handleLikedSection = (idx: number) => {
        setSectionLiked((prev) =>
            prev.map((liked, i) => (i === idx ? !liked : liked))
        );
    };

    return (
        <section>
            <div className="flex items-center justify-between mb-10 max-mobile:flex-col max-mobile:gap-7">
                <h2 className="font-medium text-2xl text-white max-md:text-xl">Other sections you might like</h2>
                <button className="bg-btn text-grayText font-medium text-xs px-2 py-2 rounded-md shadow-forCard">Browse All</button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-x-6 gap-y-10 max-md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
                {data.articles.map((article, idx) => (
                    <article key={idx}>
                        <div className="w-full h-[217px] bg-card rounded-xl shadow-forCard mb-4 max-mobile:h-48"></div>
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-x-4">
                                    <h1 className="font-medium text-2xl text-white max-md:text-xl">Hero section</h1>
                                    <span className="gradientText ml-1 font-medium max-md:text-sm">Pro</span>
                                </div>
                                <div
                                    className="flex items-center justify-center cursor-pointer"
                                    onClick={() => handleLikedSection(idx)}
                                >
                                    {sectionLiked[idx] ? (
                                        <Image
                                            src={bookmarkSelected}
                                            alt="Icon marque page"
                                        />
                                    ) : (
                                        <Image
                                            src={bookmark}
                                            alt="Icon marque page"
                                        />
                                    )}
                                </div>
                            </div>
                            <p className="text-sm text-grayText max-md:text-xs">{article.date}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
