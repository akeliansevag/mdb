"use client";
import { service1 } from "@/data/data";
import ServiceAreaCard from "./service-area-card";
import * as motion from "motion/react-client";
import MarqueeArea2 from "@/components/common/marquee-area-2";

const ServiceArea = () => {
    return (
        <section className="quanto-service-section section-padding-top overflow-hidden">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-7 col-xxl-8">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.5,
                                },
                            }}
                            viewport={{
                                once: true,
                                amount: 0.6,
                            }}
                            className="quanto__header"
                        >
                            <h3 className="title">
                                Command Your Network. Optimize Every Route.
                            </h3>
                        </motion.div>
                    </div>
                </div>
                <div className="row g-4 row-padding-top">
                    {service1.map((service, i) => (
                        <ServiceAreaCard key={i} data={service} />
                    ))}
                </div>
            </div>
            {/* marque area start */}
                <MarqueeArea2 />
            {/* marque area end */}
        </section>
    );
};

export default ServiceArea;
