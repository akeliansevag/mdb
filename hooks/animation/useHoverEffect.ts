import { gsap } from "gsap";
import { RefObject } from "react";
import { useGSAP } from "@gsap/react";

const useHoverEffect = (containerRef: RefObject<HTMLElement | null>) => {
    useGSAP(
        () => {
            if (!containerRef.current) return;

            const ctx = gsap.context(() => {
                const targetBoxes = gsap.utils.toArray<HTMLElement>([
                    ".quanto-pricing-box",
                    ".process-box",
                ]);

                targetBoxes.forEach((box) => {
                    const overlay = document.createElement("div");
                    overlay.className = "hover-overlay";
                    box.insertBefore(overlay, box.firstChild);

                    gsap.set(overlay, {
                        autoAlpha: 0,
                        y: 0,
                        x: 0,
                    });

                    const getDirection = (
                        box: HTMLElement,
                        event: MouseEvent
                    ): string => {
                        const rect = box.getBoundingClientRect();
                        const mouseX = event.clientX - rect.left;
                        const mouseY = event.clientY - rect.top;

                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const relativeX = mouseX - centerX;
                        const relativeY = mouseY - centerY;

                        const angle = Math.atan2(relativeY, relativeX);
                        const degrees = angle * (180 / Math.PI);

                        if (degrees >= -45 && degrees <= 45) return "right";
                        if (degrees > 45 && degrees <= 135) return "bottom";
                        if (degrees > 135 || degrees <= -135) return "left";
                        return "top";
                    };

                    const getAnimationProps = (
                        direction: string,
                        isEntering: boolean
                    ) => {
                        const animProps: any = {
                            autoAlpha: isEntering ? 1 : 0,
                            x: 0,
                            y: 0,
                        };
                        const distance = 100;

                        switch (direction) {
                            case "right":
                                animProps[isEntering ? "startX" : "x"] =
                                    distance + "%";
                                break;
                            case "left":
                                animProps[isEntering ? "startX" : "x"] =
                                    -distance + "%";
                                break;
                            case "bottom":
                                animProps[isEntering ? "startY" : "y"] =
                                    distance + "%";
                                break;
                            case "top":
                                animProps[isEntering ? "startY" : "y"] =
                                    -distance + "%";
                                break;
                        }

                        return animProps;
                    };

                    box.addEventListener("mouseenter", (e) => {
                        const direction = getDirection(box, e);
                        const animProps = getAnimationProps(direction, true);

                        gsap.fromTo(
                            overlay,
                            {
                                autoAlpha: 0,
                                x: animProps.startX || 0,
                                y: animProps.startY || 0,
                            },
                            {
                                duration: 0.5,
                                autoAlpha: 1,
                                x: 0,
                                y: 0,
                                ease: "power2.out",
                            }
                        );
                    });

                    box.addEventListener("mouseleave", (e) => {
                        const direction = getDirection(box, e);
                        const animProps = getAnimationProps(direction, false);

                        gsap.to(overlay, {
                            duration: 0.5,
                            ...animProps,
                            ease: "power2.in",
                        });
                    });
                });
            }, containerRef);

            return () => {
                ctx.revert();
            };
        },
        {
            scope: containerRef,
        }
    );
};

export default useHoverEffect;
