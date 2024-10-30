"use client";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

const GLOBE_CONFIG: COBEOptions = {
    width: 575,
    height: 355,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [0.85, 0.85, 0.85],
    markers: [
        { location: [14.5995, 120.9842], size: 0.05 },
        { location: [19.076, 72.8777], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.05 },
        { location: [39.9042, 116.4074], size: 0.05 },
        { location: [-23.5505, -46.6333], size: 0.05 },
        { location: [19.4326, -99.1332], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.05 },
        { location: [45.7772, 4.7794], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [45.4215, -75.6972], size: 0.05 },
        { location: [59.3293, 18.0686], size: 0.05 },
        { location: [55.6761, 12.5683], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [37.5665, 126.9780], size: 0.05 }
    ],
};

export default function Globe({
    config = GLOBE_CONFIG,
}: {
    className?: string;
    config?: COBEOptions;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const [r, setR] = useState(0);
    const [canvasWidth, setCanvasWidth] = useState(0);
    let phi = 0;

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
        }
    };

    const onRender = useCallback(
        (state: Record<string, unknown>) => {
            if (!pointerInteracting.current) phi += 0.005;
            state.phi = phi + r;
            state.width = canvasWidth * 2;
            state.height = canvasWidth * 2;
        },
        [r, canvasWidth],
    );

    const handleResize = () => {
        if (canvasRef.current) {
            setCanvasWidth(canvasRef.current.offsetWidth);
            phi = 0; // Réinitialise la rotation après redimensionnement
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize(); // Appelle handleResize au montage pour initialiser la largeur

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: canvasWidth * 2,
            height: canvasWidth * 2,
            onRender,
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, [canvasWidth, config]);

    return (
        <div className="flex items-center justify-center inset-0 aspect-[1/1] w-[350px] h-[350px] max-md:w-[300px] max-md:h-[300px]">
            <canvas
                className="h-full w-full flex items-center justify-center [contain:layout_paint_size]"
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current,
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}
