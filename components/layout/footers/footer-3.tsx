"use client";
import Image from "next/image";
import Link from "next/link";
import FooterMenuList from "./footer-menu-list";
import { agencyLinks, footerSocial, servicesLinks } from "@/data/data";
import * as motion from "motion/react-client";

const Footer3 = () => {
    return (
        <>
            <footer className="footer-area bg-color-primary">
                <div className="footer__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row section-padding-bottom">
                            <div className="col-12">
                                <Link
                                    href="/"
                                    className="connect d-flex footer-let-connect"
                                >
                                    <h1 className="text-color-white">
                                        Let’s connect
                                    </h1>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={150}
                                            height={150}
                                            viewBox="0 0 150 150"
                                            fill="none"
                                        >
                                            <path
                                                d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={150}
                                            height={150}
                                            viewBox="0 0 150 150"
                                            fill="none"
                                        >
                                            <path
                                                d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z"
                                                fill="white"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={150}
                                            height={150}
                                            viewBox="0 0 150 150"
                                            fill="none"
                                        >
                                            <path
                                                d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="row g-4 justify-content-between">
                            <div className="col-sm-5 col-lg-4">
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
                                    className="footer-widgets quanto text-color-white"
                                >
                                    <Link
                                        href="index.html"
                                        className="logo d-inline-block"
                                    >
                                        <Image
                                            height={29}
                                            width={177}
                                            src="/images/logo-2.svg"
                                            alt="quanto"
                                        />
                                    </Link>
                                    <p>
                                        Quanto is a digital studio where
                                        inventiveness and rigor come together to
                                        create.
                                    </p>
                                </motion.div>
                            </div>
                            <div className="col-sm-5 col-lg-2">
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
                                    className="footer-widgets"
                                >
                                    <div className="widget-links on-laptop">
                                        <ul className="custom-ul">
                                            <FooterMenuList
                                                data={agencyLinks}
                                            />
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-sm-5 col-lg-2">
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
                                    className="footer-widgets"
                                >
                                    <div className="widget-links on-laptop">
                                        <ul className="custom-ul">
                                            <FooterMenuList
                                                data={servicesLinks}
                                            />
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-sm-5 col-lg-2">
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
                                    className="footer-widgets"
                                >
                                    <div className="widget-links on-laptop">
                                        <ul className="custom-ul">
                                            <FooterMenuList
                                                data={footerSocial}
                                            />
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
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

export default Footer3;
