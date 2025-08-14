"use client";
import Meter from "@/components/common/meter";
import { ourAchievement } from "@/data/data";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-2";
}

const OurAchievement = ({ style }: Props) => {
    return (
        <section
            className={`quanto-funfacts-section overflow-hidden ${
                style === "style-2"
                    ? "section-padding-top"
                    : "section-padding-top-bottom"
            }`}
            id="our-achievement-01"
        >
            <div className="container custom-container">
                <div className="row">
                    <div className="col-12">
                        <div className="quanto-funfacts__wrapper">
                            {/* funfact start */}
                            {ourAchievement?.map((item, i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 100 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.5,
                                            },
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        className="quanto-funfact-box"
                                    >
                                        <h2 className="counter-item d-inline-flex align-items-center">
                                            <Meter value={item.value} />
                                            <em>{item.unit}</em>
                                        </h2>
                                        <span className="funfact-info">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                );
                            })}
                            {/* funfact end */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurAchievement;
