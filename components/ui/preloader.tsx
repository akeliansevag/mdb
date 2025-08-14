"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const PreloaderContent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        };

        if (document.readyState === "complete") {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    if (!isLoading) return null;

    return (
        <>
            <div className="preloader">
                <div className="spinner-wrap">
                    <div className="preloader-logo">
                        <Image
                            height={29}
                            width={177}
                            src="/images/logo-white.webp"
                            alt="preloader logo"
                            className="img-fluid"
                        />
                    </div>
                    <div className="spinner" />
                </div>
            </div>
        </>
    );
};

const Preloader = () => {
    return (
        <Suspense fallback={null}>
            <PreloaderContent />
        </Suspense>
    );
};

export default Preloader;
