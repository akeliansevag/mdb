"use client";
import Hyperlink from "@/components/ui/hyperlink";
import { services4 } from "@/data/data";
import MoveAnim from "../framer/move-anim";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-2";
}

const ServiceArea2 = ({ style }: Props) => {
    return (
        <section
            className={`quanto-service4-section overflow-hidden ${
                style === "style-2"
                    ? "section-padding-top-bottom"
                    : "section-padding-bottom"
            }`}
            id="service-section"
        >
            <div className="container custom-container">
                <div className="row gx-4 gy-5">
                    <div className="col-md-10 col-lg-8 col-xxl-6">
                        <div className="quanto__header row-padding-bottom text-center text-md-start">
                            <MoveAnim>
                                <h3 className="title">
                                    We help you to build digital business
                                </h3>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* service card start */}
                        {services4.slice(0, 4).map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.6,
                                }}
                                className="quanto-service-box4 fade-anim"
                            >
                                <h5 className="service-title">{item.title}</h5>
                                <div className="service-info">
                                    <p>{item.description}</p>
                                    <Hyperlink href="/service-details">
                                        View details
                                    </Hyperlink>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={52}
                                    height={52}
                                    viewBox={item.viewBox}
                                    fill="none"
                                >
                                    <path
                                        d={item.svgPath}
                                        fill="currentColor"
                                    />
                                </svg>
                            </motion.div>
                        ))}
                        {/* service card end */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceArea2;
