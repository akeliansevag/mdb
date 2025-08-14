import { useEffect, useState } from "react";

const useStickyHeader = (threshold: number = 100): boolean => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeSticky = window.scrollY > threshold;
            setSticky((prev) =>
                prev !== shouldBeSticky ? shouldBeSticky : prev
            );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return isSticky;
};

export default useStickyHeader;
