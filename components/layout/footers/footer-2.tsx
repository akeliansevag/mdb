"use client";
import Hyperlink from "@/components/ui/hyperlink";
import { footerLink, social } from "@/data/data";
import Link from "next/link";
import FooterMenuList from "./footer-menu-list";
import MoveAnim from "@/components/framer/move-anim";

const Footer2 = () => {
    return (
        <>
            <footer className="footer-area bg-color-white">
                <div className="footer__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row justify-content-center text-center">
                            <div className="col-xl-10">
                                <div className="footer__center-content style-2">
                                    <Link
                                        href="#header"
                                        className="scroll-to-top section-link"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={180}
                                            height={180}
                                            viewBox="0 0 180 180"
                                            fill="none"
                                        >
                                            <path
                                                d="M97.5004 58.7132V150H82.5004V58.7132L42.2707 98.943L31.6641 88.3365L90.0004 30L148.337 88.3365L137.73 98.943L97.5004 58.7132Z"
                                                fill="#0F0F0F"
                                            />
                                        </svg>
                                    </Link>
                                    <MoveAnim>
                                        <h1 className="mb-3">
                                            Let’s shape something new
                                        </h1>
                                    </MoveAnim>
                                    <Hyperlink
                                        href="/contact"
                                        variant="primary"
                                    >
                                        Get in touch
                                    </Hyperlink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom has-bodder">
                    <div className="container custom-container p-xxl-0 overflow-hidden">
                        <div className="row">
                            <div className="col-md-6 order-1 order-md-0">
                                <div className="footer__bottom-content row-padding-bottom">
                                    <div className="copyright-text">
                                        All rights reserved — 2025 © Qubohub
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 order-0 order-md-1">
                                <div className="footer__bottom-content extend justify-content-end row-padding-bottom">
                                    <div className="link-social-wrapper">
                                        <div className="bottom-links">
                                            <ul className="custom-ul">
                                                <FooterMenuList
                                                    data={footerLink}
                                                />
                                            </ul>
                                        </div>
                                        <div className="footer-social-icons">
                                            {/* social links start */}
                                            {social
                                                .filter(
                                                    (_, i) => i !== 2 && i !== 3
                                                )
                                                .map((item, i) => (
                                                    <Link
                                                        href={item.href}
                                                        key={i}
                                                    >
                                                        <i
                                                            className={
                                                                item.iconClass
                                                            }
                                                        />
                                                    </Link>
                                                ))}
                                            {/* social links end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer2;
