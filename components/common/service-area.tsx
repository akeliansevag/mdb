"use client";
import { services } from "@/data/data";
import ServiceAreaCard from "./service-area-card";
import * as motion from "motion/react-client";
import MoveAnim from "../framer/move-anim";

interface Props {
    title: string;
}

const ServiceArea = ({ title }: Props) => {
    return (
        <section
            className="quanto-service2-section section-padding-top-bottom overflow-hidden"
            id="service-section"
        >
            <div className="container custom-container">
                <div className="row gx-4 gy-5 justify-content-between">
                    <div className="col-12 col-xl-6 col-xxl-5">
                        <div className="quanto__header text-center text-lg-start">
                            <MoveAnim>
                                <h3 className="title special-title">{title}</h3>
                            </MoveAnim>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 col-xxl-6">
                        <div className="row g-114 quanto-service2__row">
                            {/* service area card start */}
                            {services.slice(0, 4).map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: i * 0.1 + 0.2,
                                        },
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    className="col-md-6"
                                >
                                    <ServiceAreaCard data={item} />
                                </motion.div>
                            ))}
                            {/* service area card end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
