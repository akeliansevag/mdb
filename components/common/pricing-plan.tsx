"use client";
import { pricingPlans } from "@/data/data";
import PricingPlanCard from "./pricing-plan-card";
import { useRef } from "react";
import useHoverEffect from "@/hooks/animation/useHoverEffect";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-1";
}

const PricingPlan = ({ style }: Props) => {
    const containerRef = useRef<HTMLElement | null>(null);
    useHoverEffect(containerRef);

    return (
        <>
            <section
                ref={containerRef}
                className={`quanto-pricing-area section-padding-top-bottom ${
                    style === "style-1" ? "bg-color-white" : "bg-color-2"
                }`}
            >
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="quanto__header">
                                <motion.h3
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    className="title text-center text-lg-start"
                                >
                                    Find your right plan
                                </motion.h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 row-padding-top">
                        {/* pricing card start */}
                        {pricingPlans.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    },
                                }}
                                viewport={{ once: true }}
                                className="col-md-6 col-xl-4"
                            >
                                <PricingPlanCard data={item} />
                            </motion.div>
                        ))}
                        {/* pricing card end */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlan;
