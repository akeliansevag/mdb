import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useSetBackgorund = () => {
    const path = usePathname();

    useEffect(() => {
        const elements = document.querySelectorAll("[data-bg-src]");

        if (elements.length > 0) {
            elements.forEach((element) => {
                const src = element.getAttribute("data-bg-src");
                (element as HTMLElement).style.backgroundImage = `url(${src})`;
                element.removeAttribute("data-bg-src");
                element.classList.add("background-image");
            });
        }
    }, [path]);
};

export default useSetBackgorund;
