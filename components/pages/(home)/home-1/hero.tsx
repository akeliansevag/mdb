"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const clientImages: string[] = [
    "/images/hero/avatar-add.png",
    "/images/hero/avatar-1.png",
    "/images/hero/avatar-2.png",
];

const Hero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const heroThumbRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            if (!heroThumbRef.current) return;

            const ctx = gsap.context(() => {
                const mm = gsap.matchMedia();

                mm.add("(min-width: 768px)", () => {
                    const videoWrapper =
                        heroThumbRef.current!.querySelector(".video-wrapper");

                    if (!videoWrapper) return;

                    const tp_hero = gsap.timeline({
                        scrollTrigger: {
                            trigger: heroThumbRef.current,
                            start: "top 70",
                            pin: true,
                            markers: false,
                            scrub: 1,
                            pinSpacing: true,
                            end: "bottom top",
                        },
                    });

                    tp_hero.to(videoWrapper, {
                        width: "100%",
                        duration: 1.5,
                        ease: "power2.inOut",
                    });

                    return () => {
                        tp_hero.kill();
                    };
                });

                return () => {
                    mm.revert();
                };
            });

            return () => {
                ctx.revert();
                ScrollTrigger.refresh();
            };
        },
        {
            scope: containerRef,
        }
    );

    return (
        <section
            ref={containerRef}
            className="quanto-hero-section overflow-hidden"
        >
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12 position-relative">
                        <MoveAnim>
                            <div
                                className="quanto-hero__content move-anim"
                                data-delay="0.45"
                            >
                                <h1 className="title">
                                    Smarter Networks. Faster <span className="ms-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={110}
                                            height={110}
                                            viewBox="0 0 110 110"
                                            fill="none"
                                        >
                                            <path
                                                d="M60.5 0H49.5L53.0145 50.2065L19.9982 12.22L12.22 19.9982L50.2065 53.0145L1.44248e-06 49.5L0 60.5L50.2065 56.9856L12.22 90.0018L19.9982 97.78L53.0145 59.7935L49.5 110H60.5L56.9855 59.7935L90.0018 97.78L97.78 90.0018L59.7935 56.9855L110 60.5V49.5L59.7936 53.0145L97.78 19.9982L90.0018 12.22L56.9855 50.2065L60.5 0Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        Innovation.
                                    </span> 
                                    <span className="opacity-0 invisible">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={110}
                                            height={110}
                                            viewBox="0 0 110 110"
                                            fill="none"
                                        >
                                            <path
                                                d="M60.5 0H49.5L53.0145 50.2065L19.9982 12.22L12.22 19.9982L50.2065 53.0145L1.44248e-06 49.5L0 60.5L50.2065 56.9856L12.22 90.0018L19.9982 97.78L53.0145 59.7935L49.5 110H60.5L56.9855 59.7935L90.0018 97.78L97.78 90.0018L59.7935 56.9855L110 60.5V49.5L59.7936 53.0145L97.78 19.9982L90.0018 12.22L56.9855 50.2065L60.5 0Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        creativity
                                    </span>
                                </h1>
                            </div>
                        </MoveAnim>
                        <div className="quanto-hero__info">
                            <WordAnim stagger="0.06">
                                <p>
                                    Our next-gen platform goes beyond CPaaS, eSIM provisioning, network orchestration, and digital finance. We equip operators and enterprises to launch faster, grow smarter, and deliver seamless global experiences that set them apart.
                                </p>
                            </WordAnim>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="quanto-hero__thumb section-margin-top"
                            ref={heroThumbRef}
                        >
                            <div className="video-wrapper">
                                <video loop muted autoPlay playsInline>
                                    <source
                                        src="https://videos.pexels.com/video-files/4630092/4630092-uhd_2560_1440_25fps.mp4"
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
