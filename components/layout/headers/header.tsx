"use client";
import Link from "next/link";
import Nav from "./nav";
import Hyperlink from "@/components/ui/hyperlink";
import Image from "next/image";
import useStickyHeader from "@/hooks/useStickyHeader";
import MobileMenu from "./mobile-menu";
import useToggle from "@/hooks/store/useToggle";

const Header = () => {
    const isSticky = useStickyHeader();
    const isMenuOpen = useToggle((state) => state.isMenuOpen);
    const toggleMenu = useToggle((state) => state.toggleMenu);

    return (
        <>
            <header
                className={`quanto-header main-header bg-color-white ${
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
                                            <img
                                                src="/images/logo-mdb.svg"
                                                alt="logo"
                                                width="177"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col text-end text-lg-center">
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
                                <div className="col-auto d-none d-lg-block">
                                    <Hyperlink
                                        variant="primary"
                                        href="#get-in-touch"
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

export default Header;
