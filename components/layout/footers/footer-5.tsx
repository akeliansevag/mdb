"use client";
import Hyperlink from "@/components/ui/hyperlink";
import { social } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

const Footer5 = () => {
    return (
        <>
            <footer className="footer-area bg-color-primary overflow-hidden">
                <div className="footer__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                        },
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    className="footer-widgets info text-color-white"
                                >
                                    <h4>
                                        We’re open and available to take on new
                                        projects. Let&apos;s discuss your ideas
                                        and bring them to life!
                                    </h4>

                                    <Hyperlink
                                        href="/portfolio-card"
                                        variant="primary"
                                    >
                                        Start a project
                                    </Hyperlink>
                                </motion.div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="row g-4 justify-content-end">
                                    <div className="col-sm-6 col-md-12 col-lg-7 col-xxl-5">
                                        <motion.div
                                            initial={{ opacity: 0, y: 60 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.2,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            className="footer-widgets contact text-color-white"
                                        >
                                            <h6 className="widget-title text-color-white">
                                                Contact
                                            </h6>
                                            <p className="address">
                                                740 New South Head Rd, Triple
                                                Bay Swfw 3108, New York
                                            </p>
                                            <div className="contacts">
                                                <ul className="custom-ul">
                                                    <li>
                                                        <Link
                                                            className="email"
                                                            href="mailto:hello@quanto.agency"
                                                        >
                                                            hello@quanto.agency
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="mobile"
                                                            href="tel:+18884567890"
                                                        >
                                                            +1 888 456 7890
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className="col-sm-6 col-md-12 col-lg-2 col-xxl-1">
                                        <motion.div
                                            initial={{ opacity: 0, y: 60 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.6,
                                                },
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            className="footer-widgets fade-anim"
                                            data-delay="0.6"
                                        >
                                            <div className="social-links">
                                                <ul className="custom-ul flex-lg-column">
                                                    {/* social start */}
                                                    {social.map((item, i) => (
                                                        <li key={i}>
                                                            <Link
                                                                href={item.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <i
                                                                    className={
                                                                        item.iconClass
                                                                    }
                                                                />
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    {/* social end */}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__middle">
                    <div className="container custom-container">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.8,
                                    delay: 0.4,
                                },
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            <Image
                                height={0}
                                width={0}
                                sizes="100vw"
                                src="/images/logo-4.svg"
                                alt="footer-logo"
                                className="w-100"
                                data-duration={1}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="footer__bottom has-bodder">
                    <div className="container custom-container p-xxl-0 overflow-hidden">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer__bottom-content row-padding-bottom">
                                    <div className="copyright-text text-color-white">
                                        All rights reserved — 2025 © Qubohub
                                    </div>
                                    <Link
                                        href="#header"
                                        className="scroll-to-top section-link"
                                    >
                                        Back to top
                                        <i className="fas fa-angle-up" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer5;
