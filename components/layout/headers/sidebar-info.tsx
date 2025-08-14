import Image from "next/image";
import Link from "next/link";

const SidebarInfo = () => {
    return (
        <>
            <div
                className="offcanvas offcanvas-end desktop-sidemenu"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header sidemenu-header">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M8.58981 10.0001L0.796875 2.20718L2.21109 0.792969L10.004 8.58582L17.7969 0.792969L19.2111 2.20718L11.4182 10.0001L19.2111 17.7929L17.7969 19.2072L10.004 11.4143L2.21109 19.2072L0.796875 17.7929L8.58981 10.0001Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="offcanvas-body sidemenu-body">
                    <div className="short-info">
                        <Image
                            height={39}
                            width={236}
                            src="/images/desktop-logo.svg"
                            alt="quanto"
                        />
                        <p>
                            We are digital agency that helps businesses develop
                            immersive and engaging
                        </p>
                    </div>
                    <div className="contact-info">
                        <h6>Contact</h6>
                        <p>
                            740 New South Head Rd, Triple Bay Swfw 3108, New
                            York
                        </p>
                        <div className="contact">
                            <Link href="mailto:hello@quanta.agency">
                                hello@quanta.agency
                            </Link>
                            <Link href="tel:+18884567890">+1 888 456 7890</Link>
                        </div>
                    </div>
                    <div className="revew">
                        <h4>4.8</h4>
                        <div className="stars">
                            <ul className="custom-ul">
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14.8328 9.16783L12 0L9.16718 9.16783H0L7.41641 14.8339L4.58359 24.0017L12 18.3357L19.4164 24.0017L16.9734 16.0956L12.6545 17.7925L16.5841 14.8355L16.5836 14.8339L24 9.16783H14.8328Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <p>2500+ reviews based on client feedback</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;
