import MarqueeCard from "./MarqueeCard";
import data from "../../data/data.json"

interface MarqueeProps {
    repeat?: number;
    [key: string]: unknown;
}

export default function Marquee({
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]"
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
                    >
                        {data.marquee.map(item => (
                            <MarqueeCard
                                key={item.name}
                                name={item.name}
                                username={item.username}
                                body={item.body}
                                img={item.img}
                            />
                        ))}
                    </div>
                ))}
        </div>
    );
}
