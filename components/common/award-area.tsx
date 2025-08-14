"use client";
import AwardAreaCard from "@/components/common/award-area-card";
import { awards } from "@/data/data";
import * as motion from "motion/react-client";

const AwardArea = () => {
    return (
        <>
            <section className="quanto-awards-area section-padding-top-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row justify-content-end">
                        <div className="col-lg-10 col-xl-8 col-xxl-7">
                            {/* awards start  */}
                            {awards.map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: i * 0.2,
                                        },
                                    }}
                                    viewport={{ once: true }}
                                    key={i}
                                >
                                    <AwardAreaCard data={item} />
                                </motion.div>
                            ))}
                            {/* awards end  */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AwardArea;
