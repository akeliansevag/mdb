"use client";
import useStickyHeader from "@/hooks/useStickyHeader";
import Nav from "./nav";
import Link from "next/link";
import Image from "next/image";
import Hyperlink from "@/components/ui/hyperlink";
import useToggle from "@/hooks/store/useToggle";
import MobileMenu from "./mobile-menu";

const Header3 = () => {
    const isSticky = useStickyHeader();
    const isMenuOpen = useToggle((state) => state.isMenuOpen);
    const toggleMenu = useToggle((state) => state.toggleMenu);

    return (
        <>
            <header
                className={`quanto-header main-header dark-header ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                <div className="sticky-wrap">
                    <div className="sticky-active">
                        <div className="container custom-container">
                            <div className="row gx-3 align-items-center justify-content-between">
                                <div className="col-8 col-sm-auto">
                                    <div className="header-logo">
                                        <Link href="/">
                                            <Image
                                                height={29}
                                                width={177}
                                                src="/images/logo-2.svg"
                                                alt="logo"
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col text-end text-lg-end">
                                    {/* navigation start */}
                                    <Nav />
                                    {/* navigation end */}
                                    <button
                                        className="menuBar-toggle quanto-menu-toggle d-inline-block d-lg-none"
                                        onClick={toggleMenu}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={40}
                                            height={40}
                                            viewBox="0 0 40 40"
                                            fill="none"
                                        >
                                            <path
                                                d="M24.4444 26V28H0V26H24.4444ZM40 19V21H0V19H40ZM40 12V14H15.5556V12H40Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="col-auto d-none d-lg-block ms-5">
                                    <Hyperlink
                                        href="/contact"
                                        variant="tertiary"
                                    >
                                        Get in touch
                                    </Hyperlink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu onClose={toggleMenu} isOpen={isMenuOpen} />
        </>
    );
};

export default Header3;
