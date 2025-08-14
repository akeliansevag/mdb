"use client";
import MoveAnim from "@/components/framer/move-anim";
import WordAnim from "@/components/framer/word-anim";
import * as motion from "motion/react-client";

const Hero = () => {
    return (
        <>
            <section className="quanto-hero-about-section overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4 align-items-end">
                        <div className="col-lg-9 col-xxl-10">
                            <MoveAnim delay={0.45}>
                                <div className="quanto-hero-about__content">
                                    <h1 className="title">
                                        California-based team driving creative
                                        branding solutions
                                    </h1>
                                </div>
                            </MoveAnim>
                        </div>
                        <div className="col-lg-3 col-xxl-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.6,
                                    },
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="quanto-hero-about__info"
                            >
                                <h4 className="rating-point">4.8</h4>
                                <div className="stars">
                                    <ul className="custom-ul">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <li key={i}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                                            fill="#0F0F0F"
                                                        />
                                                    </svg>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <WordAnim delay="0.60">
                                    <p>
                                        2500+ reviews based on client feedback
                                    </p>
                                </WordAnim>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
