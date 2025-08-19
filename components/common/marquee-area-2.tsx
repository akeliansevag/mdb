import Link from "next/link";
import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";

const MarqueeArea2 = ({ ...props }) => {
    return (
        <>
            <motion.div
                {...props}
                className="marquee-container"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                    },
                }}
                viewport={{ once: true }}
            >
                <div className="marquee-container section-margin-top">
                    <Marquee
                        className="overflow-hidden py-2"
                        pauseOnHover={true}
                        speed={100}
                    >
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Link
                                key={i}
                                className="marquee-item-container"
                                href="/contact"
                            >
                                <div className="marquee-item">
                                    <h1>
                                        MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . MDB . 
                                    </h1>
                                </div>
                            </Link>
                        ))}
                    </Marquee>
                </div>
            </motion.div>
        </>
    );
};

export default MarqueeArea2;
