import MoveAnim from "@/components/framer/move-anim";
import Link from "next/link";

const Footer6 = () => {
    return (
        <>
            <footer className="footer6-area bg-color-primary">
                <div className="footer6__center section-padding-top-bottom">
                    <div className="container custom-container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-9 col-xl-10 col-xxl-9">
                                <div className="footer-content">
                                    <MoveAnim delay={0.45}>
                                        <h2>Let’s shape something new</h2>
                                    </MoveAnim>
                                    <p>
                                        Contact us today and let&apos;s bring
                                        your cinematic vision to life!
                                    </p>
                                    <Link href="mailto:steven@enderson.com">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.6663 5H23.333C30.6968 5 36.6663 10.9695 36.6663 18.3333C36.6663 25.6972 30.6968 31.6667 23.333 31.6667V37.5C14.9997 34.1667 3.33301 29.1667 3.33301 18.3333C3.33301 10.9695 9.30254 5 16.6663 5Z"
                                                fill="#0F0F0F"
                                            />
                                        </svg>
                                        <div className="jumper">
                                            <span>steven@enderson.com</span>
                                            <span>steven@enderson.com</span>
                                        </div>
                                    </Link>
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
                                    <div className="copyright-text text-color-white">
                                        All rights reserved — 2025 © Qubohub
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 order-0 order-md-1">
                                <div className="footer__bottom-content extend justify-content-end row-padding-bottom">
                                    <div className="link-social-wrapper">
                                        <div className="footer-social-icons with-text text-color-white">
                                            <Link href="/">
                                                <i className="fa-brands fa-x-twitter" />
                                                Dribbble
                                            </Link>
                                            <Link href="/">
                                                <i className="fab fa-instagram" />
                                                Behance
                                            </Link>
                                            <Link href="/">
                                                <i className="fa-brands fa-dribbble" />
                                                Instagram
                                            </Link>
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

export default Footer6;
