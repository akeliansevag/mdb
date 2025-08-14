"use client";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";

const MarqueeArea5 = () => {
    return (
        <>
            <section className="marquee-section extend">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    className="marquee-container fade-anim"
                >
                    <div className="marquee">
                        <Marquee
                            className="overflow-hidden py-2"
                            pauseOnHover={true}
                            speed={100}
                        >
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="marquee-item-container">
                                    <div className="marquee-item">
                                        <h1>Love the design&nbsp;</h1>
                                    </div>
                                    <div className="marquee-item">
                                        <h1>Love the design&nbsp;</h1>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default MarqueeArea5;
