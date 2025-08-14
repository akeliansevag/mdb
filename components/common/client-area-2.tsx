"use client";
import * as motion from "motion/react-client";
import Image from "next/image";

const clients = [
    { src: "/images/clients/logo-3.png", alt: "client-logo-3" },
    { src: "/images/clients/logo-4.png", alt: "client-logo-4" },
    { src: "/images/clients/logo-5.png", alt: "client-logo-5" },
    { src: "/images/clients/logo-6.png", alt: "client-logo-6" },
    { src: "/images/clients/logo-7.png", alt: "client-logo-7" },
    { src: "/images/clients/logo-8.png", alt: "client-logo-8" },
];

interface Props {
    style?: "style-2" | "style-3";
}

const ClientArea2 = ({ style }: Props) => {
    return (
        <div
            className={`quanto-lients-area ${
                style === "style-2"
                    ? "section-padding-top-bottom"
                    : style === "style-3"
                    ? "bg-color-2 section-padding-bottom"
                    : "section-padding-bottom"
            }`}
        >
            <div className="container custom-container">
                <div className="row g-4">
                    <div className="col-12">
                        <p>We worked with the largest global brands</p>
                    </div>
                    <div className="col-12 clients__box-wrapper">
                        {/* client are logo start */}
                        {clients.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: i * 0.1,
                                    },
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.6,
                                }}
                                className="client-box"
                                key={i}
                                data-delay={(i + 1) * 0.15}
                            >
                                <Image
                                    height={0}
                                    width={0}
                                    src={item.src}
                                    alt={item.alt}
                                    className="client-logo w-100 h-100"
                                    sizes="100vw"
                                />
                            </motion.div>
                        ))}
                        {/* client are logo end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientArea2;
