"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { testimonials2 } from "@/data/data";
import * as motion from "motion/react-client";

interface Props {
    headline: string;
    style?: "style-2" | "style-3";
}

const Testimonial = ({ headline, style }: Props) => {
    return (
        <section
            className={
                style === "style-2"
                    ? "quanto-testimonial-section extend section-padding-top overflow-hidden"
                    : style === "style-3"
                    ? "quanto-testimonial3-section bg-color-2 section-padding-top-bottom"
                    : "quanto-testimonial3-section section-padding-top-bottom"
            }
        >
            <div className="container custom-container">
                <div className="row g-4 justify-content-between overflow-hidden">
                    <div className="col-lg-6 col-xxl-5 pe-xxl-0">
                        <div className="quanto__header h-100">
                            <motion.h3
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.5,
                                }}
                                className="title"
                            >
                                {headline}
                            </motion.h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-5">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 1,
                                },
                            }}
                            viewport={{
                                once: true,
                                amount: 0.5,
                            }}
                            className="fade-anim"
                        >
                            <Swiper
                                navigation={{
                                    nextEl: ".next-btn",
                                    prevEl: ".prev-btn",
                                }}
                                modules={[Navigation]}
                                loop={true}
                            >
                                {/* testimonial card start */}
                                {testimonials2.map((item, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="swiper-slide">
                                            <div className="testimonial3-content">
                                                <p>{item.content}</p>
                                                <div className="client-info">
                                                    <h5 className="client-name">
                                                        {item.name}
                                                    </h5>
                                                    <span className="client-designation">
                                                        {item.designation} at{" "}
                                                        {item.company}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* testimonial card end */}
                            </Swiper>
                            <div
                                className="testimonial3-navigation"
                                style={{ cursor: "pointer" }}
                            >
                                <div
                                    className={`prev-btn ${
                                        style === "style-3"
                                            ? "bg-color-white"
                                            : "bg-color-2"
                                    }`}
                                >
                                    <i className="fa-solid fa-angle-left" />
                                </div>
                                <div
                                    className={`next-btn ${
                                        style === "style-3"
                                            ? "bg-color-white"
                                            : "bg-color-2"
                                    }`}
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className="fa-solid fa-angle-right" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
