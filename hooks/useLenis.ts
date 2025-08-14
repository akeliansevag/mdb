import { useEffect } from "react";
import "lenis/dist/lenis.css";
import Lenis from "lenis";

const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
        });
        const raf = () => {
            lenis.raf(performance.now());
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};

export default useLenis;
