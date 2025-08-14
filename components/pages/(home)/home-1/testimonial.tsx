"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Thumbs, Controller, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { testimonials } from "@/data/data";
import * as motion from "motion/react-client";

const Testimonial = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="quanto-testimonial-section section-padding-top overflow-hidden">
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="quanto__header">
                            <motion.h3
                                initial={{ opacity: 0, y: 180 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 150,
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
                                Bank Anywhere.  Grow Everywhere.
                            </motion.h3>
                        </div>
                    </div>
                </div>

                <div className="row g-4 justify-content-between">
                    <motion.div
                        className="col-12 col-lg-6 col-xl-5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                            },
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                    >
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={1}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            controller={{ control: mainSwiper }}
                            loop={true}
                            modules={[Controller, EffectFade]}
                            className="h-100"
                        >
                            {testimonials.map((testimonial, i) => (
                                <SwiperSlide key={i}>
                                    <div
                                        className="testimonial-img"
                                        style={{
                                            backgroundImage: `url(${testimonial.image})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            height: "100%",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <Swiper
                            onSwiper={setMainSwiper}
                            slidesPerView={1}
                            loop={true}
                            speed={800}
                            navigation={{
                                nextEl: ".quanto-testimonial__next",
                                prevEl: ".quanto-testimonial__prev",
                            }}
                            controller={{ control: thumbsSwiper }}
                            modules={[Navigation, Thumbs, Controller]}
                            className="swiper"
                        >
                            {testimonials.map((testimonial, i) => (
                                <SwiperSlide key={i}>
                                    <div className="testimonial-content">
                                        <p dangerouslySetInnerHTML={{ __html: testimonial.content || "" }} />
                                        {/* <div className="author">
                                            <h5 className="author-title">
                                                {testimonial.name}
                                            </h5>
                                            <span className="author-designation">
                                                {testimonial.designation}
                                            </span>
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="quanto-testimonial__navigation">
                            <div className="quanto-testimonial__prev prev-slide">
                                <i className="fa-solid fa-arrow-left" />
                            </div>
                            <div className="quanto-testimonial__next next-slide">
                                <i className="fa-solid fa-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
