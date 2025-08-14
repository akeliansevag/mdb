"use client";
import Link from "next/link";
import FooterMenuList from "./footer-menu-list";
import { agencyLinks, servicesLinks } from "@/data/data";
import Image from "next/image";
import * as motion from "motion/react-client";

const Footer4 = () => {
    return (
        <>
            <footer className="footer-area bg-color-primary overflow-hidden">
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
                                            740 New South Head Rd, Triple Bay
                                            Swfw 3108, New York
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
                                        <h6 className="widget-title text-color-white">
                                            Agency
                                        </h6>
                                        <div className="widget-links">
                                            <ul className="custom-ul">
                                                <FooterMenuList
                                                    data={agencyLinks}
                                                />
                                            </ul>
                                        </div>
                                    </motion.div>
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
                                        <div className="newsletter">
                                            <h6 className="widget-title text-color-white">
                                                Sign up for our curated edit of
                                                new tracks &amp; sounds
                                            </h6>
                                            <form
                                                action="index-4.html"
                                                className="newsletter-form"
                                            >
                                                <input
                                                    type="email"
                                                    className="form-control newsletter-input"
                                                    placeholder="Enter email address"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="newsletter-btn quanto-link-btn btn-pill"
                                                >
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right arry1" />
                                                        <i className="fa-solid fa-arrow-right arry2" />
                                                    </span>
                                                </button>
                                            </form>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src="/images/logo-3.svg"
                        alt="footer-logo"
                        className="w-100"
                        data-duration={1}
                    />
                </div>
            </footer>
        </>
    );
};

export default Footer4;
