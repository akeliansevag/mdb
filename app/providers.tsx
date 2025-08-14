"use client";
import useLenis from "@/hooks/useLenis";
import useSetBackgorund from "@/hooks/useSetBackgorund";
import Preloader from "@/components/ui/preloader";

if (typeof window !== "undefined") {
    import("bootstrap");
}

const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    useLenis();
    useSetBackgorund();

    return (
        <>
            {/* preloader start */}
            <Preloader />
            {/* preloader end */}
            {children}
        </>
    );
};

export default Providers;
