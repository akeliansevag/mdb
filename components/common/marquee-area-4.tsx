"use client";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";

interface Props {
    data: string[];
}
const MarqueeArea4 = ({ data }: Props) => {
    return (
        <>
            <section className="marquee-section">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    viewport={{ once: true }}
                    className="marquee-container"
                >
                    <Marquee pauseOnHover={true} speed={100}>
                        <div className="marquee-item-container d-flex overflow-hidden">
                            {data.map((item, i) => (
                                <div key={i} className="marquee-item">
                                    <h1 style={{ lineHeight: "120%" }}>
                                        {item}&nbsp;
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </motion.div>
            </section>
        </>
    );
};

export default MarqueeArea4;
