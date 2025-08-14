"use client";
import Hyperlink from "@/components/ui/hyperlink";
import useStickyHeader from "@/hooks/useStickyHeader";
import Image from "next/image";
import Link from "next/link";
import SidebarNav from "./sidebar-nav";
import useToggle from "@/hooks/store/useToggle";
import MobileMenu from "./mobile-menu";

const Header4 = () => {
    const isSticky = useStickyHeader();
    const toggleMenuSidebar = useToggle((state) => state.toggleMenuSidebar);
    const isMenuOpen = useToggle((state) => state.isMenuOpen);
    const toggleMenu = useToggle((state) => state.toggleMenu);

    return (
        <>
            <header
                className={`quanto-header v6 main-header ${
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
                                                src="/images/logo-1.svg"
                                                alt="logo"
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col text-end text-lg-end">
                                    <div className="d-none d-lg-flex justify-content-between align-items-center">
                                        <div className="status">
                                            <div className="status-dot" />
                                            Available for new opportunity
                                        </div>
                                        <Hyperlink
                                            href="/contact"
                                            variant="primary"
                                        >
                                            Hire me
                                        </Hyperlink>
                                    </div>
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
                                    <button
                                        onClick={toggleMenuSidebar}
                                        className="quanto-menu-toggle large"
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
                                                fill="#0F0F0F"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SidebarNav />
            <MobileMenu onClose={toggleMenu} isOpen={isMenuOpen} />
        </>
    );
};

export default Header4;
