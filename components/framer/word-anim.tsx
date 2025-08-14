import * as motion from "motion/react-client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type WordAnimProps = {
    children: React.ReactNode;
    stagger?: string;
    translateX?: string;
    translateY?: string;
    onScroll?: string;
    delay?: string;
    duration?: string;
    splitBy?: "words" | "chars";
};

const WordAnim: React.FC<WordAnimProps> = ({
    children,
    stagger = "0.04",
    translateX = "20",
    translateY = "0",
    onScroll = "1",
    delay = "0.1",
    duration = "0.75",
    splitBy = "words",
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const split = new SplitText(containerRef.current, {
                type: splitBy === "words" ? "words" : "chars",
            });

            gsap.from(split.words, {
                opacity: 0,
                x: translateX,
                y: translateY,
                stagger: parseFloat(stagger),
                delay: parseFloat(delay),
                duration: parseFloat(duration),
                scrollTrigger:
                    onScroll === "1"
                        ? { trigger: containerRef.current, start: "top 90%" }
                        : undefined,
            });

            return () => {
                split.revert();
            };
        }
    }, [
        children,
        stagger,
        translateX,
        translateY,
        delay,
        duration,
        splitBy,
        onScroll,
    ]);

    return <motion.div ref={containerRef}>{children}</motion.div>;
};

export default WordAnim;
