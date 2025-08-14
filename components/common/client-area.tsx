"use client";
import Image from "next/image";
import * as motion from "motion/react-client";

const clientLogos = [
    "/images/clients/logo-1.png",
    "/images/clients/logo-2.png",
    "/images/clients/logo-3.png",
    "/images/clients/logo-4.png",
    "/images/clients/logo-5.png",
    "/images/clients/logo-6.png",
    "/images/clients/logo-7.png",
    "/images/clients/logo-8.png",
    "",
    "/images/clients/logo-9.png",
    "/images/clients/logo-10.png",
];

interface Props {
    style?: "style-2";
}

const ClientArea = ({ style }: Props) => {
    const isStyle2 = style === "style-2";

    return (
        <div
            className={`clients-area overflow-hidden ${
                style === "style-2"
                    ? "section-padding-top-bottom"
                    : "section-padding-top"
            }`}
        >
            <div className="clients__wrapper">
                <div className="container custom-container">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <div className="quanto__header text-center text-md-start">
                                <motion.p
                                    initial={{ opacity: 0, x: -100 }}
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
                                    className="title mx-auto mx-md-0"
                                >
                                    We worked with the largest global brands
                                </motion.p>
                            </div>
                        </div>
                        <div className="col-md-6 ps-md-0">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
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
                                className="quanto__header logo"
                            >
                                {clientLogos.slice(0, 2).map((item, i) => (
                                    <div key={i} className="client-box ">
                                        <Image
                                            height={0}
                                            width={0}
                                            sizes="100vw"
                                            style={{
                                                height: "auto",
                                                width: "auto",
                                            }}
                                            src={item}
                                            alt={`client-logo-${i + 1}`}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
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
                            className="col-12 clients__box-wrapper"
                        >
                            {clientLogos.slice(2).map((item, i) => {
                                if (!item) {
                                    return isStyle2 ? (
                                        <div
                                            key={i}
                                            className="client-box d-none d-sm-block d-md-none d-lg-block border-0"
                                        />
                                    ) : null;
                                }

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 100 }}
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
                                        className="client-box"
                                    >
                                        <Image
                                            src={item}
                                            alt={`client-logo-${i + 3}`}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientArea;
