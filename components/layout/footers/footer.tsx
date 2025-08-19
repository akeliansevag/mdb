"use client";
import MarqueeArea from "@/components/common/marquee-area";
import { agencyLinks, servicesLinks, social } from "@/data/data";
import Link from "next/link";
import FooterMenuList from "./footer-menu-list";
import * as motion from "motion/react-client";

const Footer = () => {
    return (
        <>
            <footer className="footer-area bg-color-primary overflow-hidden">
                {/* marque area start */}
                <MarqueeArea />
                {/* marque area end */}
                <div className="footer__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-widgets-wrapper">
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
                                        className="footer-widgets contact text-color-white"
                                    >
                                        <h6 className="widget-title text-color-white">
                                            Contact
                                        </h6>
                                        <p className="address">
                                            Al Falah St, Abu Dhabi, United Arab Emirates

                                        </p>
                                        <div className="contacts">
                                            <ul className="custom-ul">
                                                <li>
                                                    <Link
                                                        className="email"
                                                        href="mailto:info@mdb-tech.net"
                                                    >
                                                        info@mdb-tech.net
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="mobile"
                                                        href="tel:971562632872"
                                                    >
                                                        +971 56 263 2872
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                    {/* agency links start */}
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
                                        {/* <h6 className="widget-title text-color-white">
                                            Agency
                                        </h6> */}
                                        <div className="widget-links">
                                            <ul className="custom-ul">
                                                <FooterMenuList
                                                    data={agencyLinks}
                                                />
                                            </ul>
                                        </div>
                                    </motion.div>
                                    {/* agency links end */}

                                    {/* serives link start */}
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
                                        className="footer-widgets invisible"
                                    >
                                        <h6 className="widget-title text-color-white">
                                            Services
                                        </h6>
                                        <div className="widget-links">
                                            <ul className="custom-ul">
                                                <FooterMenuList
                                                    data={servicesLinks}
                                                />
                                            </ul>
                                        </div>
                                    </motion.div>
                                    {/* serives link end */}

                                    {/* social links start */}
                                    {/* <motion.div
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
                                        <div className="social-links">
                                            <ul className="custom-ul">
                                                {social.map((item, i) => (
                                                    <li key={i}>
                                                        <Link
                                                            href={item.href}
                                                            target="_blank"
                                                        >
                                                            <i
                                                                className={
                                                                    item.iconClass
                                                                }
                                                            />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div> */}
                                    {/* social links end */}
                                </div>
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
                                        All rights reserved — 2025 © MDB
                                    </div>
                                    <Link
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();

                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            });
                                        }}
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

export default Footer;
