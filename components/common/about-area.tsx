"use client";
import Image from "next/image";
import MoveAnim from "../framer/move-anim";
import * as motion from "motion/react-client";

interface Props {
    style?: "style-2";
}

const AboutArea = ({ style }: Props) => {
    return (
        <>
            <section
                className={`quanto-about-area2 section-padding-top section-padding-bottom ${
                    style === "style-2" ? "bg-color-white" : "bg-color-2"
                }`}
            >
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xl-9 col-xxl-8 mx-auto">
                            <div className="quanto__header text-center text-lg-start">
                                <MoveAnim>
                                    <h3 className="title">
                                        All Channels, Total Control.
                                        Revolutionize Customer Engagement with a Fully Integrated Messaging Platform
                                    </h3>
                                </MoveAnim>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-between row-padding-top overflow-hidden">
                        <div className="col-md-6 col-xl-5 col-xxl-4 d-flex align-items-xl-center order-1 order-xl-0 overflow-hidden">
                            <div className="overflow-hidden w-100">
                                <motion.div
                                    initial={{
                                        x: -150,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.1,
                                    }}
                                >
                                    <Image
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        src="/images/about/thumb-about-1.webp"
                                        alt="about-thumb"
                                        className="w-100"
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-4 order-0 order-xl-1">
                            <div className="section-content">
                                <MoveAnim>
                                    <p>
                                        Unify your communication like never before. Our Omni-Channel Messaging Suite integrates SMS, WhatsApp, Voice, RCS, Email, Instagram, Messenger, Viber, and Push into one streamlined API. 
                                    </p>
                                </MoveAnim>
                                <MoveAnim>
                                    <p>
                                        Design intelligent customer journeys using an intuitive visual builder, track real-time performance across every channel, and count on smart failover that ensures message delivery — no matter what. 
                                    </p>
                                </MoveAnim>
                                <MoveAnim>
                                    <p>
                                        Built-in compliance ensures every interaction meets global standards from the start.
                                    </p>
                                </MoveAnim>
                                {/* <Hyperlink href="/about">
                                    More about us
                                </Hyperlink> */}
                                <figure className="overflow-hidden w-100">
                                    <div className="overflow-hidden">
                                        <motion.div
                                            initial={{
                                                x: -150,
                                                opacity: 0,
                                            }}
                                            whileInView={{
                                                x: 0,
                                                opacity: 1,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeOut",
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.1,
                                            }}
                                        >
                                            <Image
                                                height={350}
                                                width={380}
                                                src="/images/about/thumb-about-2.webp"
                                                alt="about-thumb"
                                                className="w-100"
                                                style={{
                                                    aspectRatio: 38 / 35,
                                                }}
                                            />
                                        </motion.div>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-2 d-flex align-items-xl-center order-xl-2 overflow-hidden">
                            <div className="overflow-hidden w-100">
                                <motion.div
                                    initial={{
                                        x: -100,
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.1,
                                    }}
                                >
                                    <Image
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        src="/images/about/thumb-about-3.webp"
                                        alt="about-thumb"
                                        className="w-100"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* marque area start */}
                {/* <MarqueeArea2 /> */}
                {/* marque area end */}
            </section>
        </>
    );
};

export default AboutArea;
