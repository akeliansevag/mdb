import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Collapse } from "react-collapse";
import useToggle from "@/hooks/store/useToggle";

interface MenuItem {
    title: string;
    href?: string;
    dropdown?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: "Home",
        href: "#",
        dropdown: [
            { title: "Digital Agency", href: "/" },
            { title: "Creative Agency", href: "/home-2" },
            { title: "Design Studio", href: "/home-3" },
            { title: "Branding Agency", href: "/home-4" },
            { title: "Modern Agency", href: "/home-5" },
            { title: "Personal Portfolio", href: "/home-6" },
        ],
    },
    {
        title: "Pages",
        href: "#",
        dropdown: [
            { title: "About Us", href: "/about" },
            { title: "Service - 1", href: "/service" },
            { title: "Service - 2", href: "/service-2" },
            { title: "Service Details", href: "/service-details" },
            { title: "Career", href: "/career" },
            { title: "Career Details", href: "/career-details" },
            { title: "Team", href: "/team" },
            { title: "Team Details", href: "/team-details" },
            { title: "Pricing", href: "/pricing" },
            { title: "FAQ's", href: "/faq" },
            { title: "Error 404", href: "/404" },
        ],
    },
    {
        title: "Portfolio",
        href: "#",
        dropdown: [
            { title: "Portfolio Masonry", href: "/portfolio-masonry" },
            { title: "Portfolio Standard", href: "/portfolio-standard" },
            { title: "Portfolio Gallery", href: "/portfolio-gallery" },
            { title: "Portfolio Slider", href: "/portfolio-slider" },
            { title: "Portfolio Card", href: "/portfolio-card" },
            { title: "Portfolio Details", href: "/portfolio-details" },
        ],
    },
    {
        title: "Blog",
        href: "#",
        dropdown: [
            { title: "Blog Grid", href: "/blog-grid" },
            { title: "Blog List", href: "/blog-list" },
            { title: "Blog Details", href: "/blog-details" },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact",
    },
];

const MenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (e: React.MouseEvent) => {
        if (item.dropdown) {
            e.preventDefault();
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <li
            className={`${
                item.dropdown
                    ? "menu-item-has-children quanto-item-has-children"
                    : ""
            } ${isExpanded ? "quanto-active" : ""}`}
        >
            <Link href={item.href || "#"} onClick={toggleExpand}>
                {item.title}
            </Link>

            {item.dropdown && (
                <Collapse isOpened={isExpanded}>
                    <ul className="sub-menu quanto-submenu">
                        {item.dropdown.map((child, index) => (
                            <MenuLink key={index} item={child} />
                        ))}
                    </ul>
                </Collapse>
            )}
        </li>
    );
};

const SidebarNav: React.FC = () => {
    const isMenuSidebarOpen = useToggle((state) => state.isMenuSidebarOpen);
    const toggleMenuSidebar = useToggle((state) => state.toggleMenuSidebar);

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = menuRef.current;
        if (!el) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            el.scrollTop += e.deltaY;
        };

        el.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div
            className={`quanto-menu-wrapper v2 d-none d-lg-block ${
                isMenuSidebarOpen ? "quanto-body-visible" : ""
            }`}
        >
            <div className="quanto-menu-area text-center">
                <div className="quanto-mobile-menu-left">
                    <div className="mobile-logo">
                        <Link href="/">
                            <Image
                                height={29}
                                width={176}
                                src="/images/logo-2.svg"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div
                        className="mobile-menu-info fade-anim"
                        data-delay="0.60"
                    >
                        <h4 className="rating-point">4.8</h4>
                        <div className="stars">
                            <ul className="custom-ul">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <li key={i}>
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
                                ))}
                            </ul>
                        </div>
                        <p>2500+ reviews based on client feedback</p>
                    </div>
                </div>

                <div className="quanto-mobile-menu-center">
                    <nav ref={menuRef} className="quanto-mobile-menu">
                        <ul>
                            {menuItems.map((item, i) => (
                                <MenuLink key={i} item={item} />
                            ))}
                        </ul>
                    </nav>
                    <div className="quanto-mobile-menu-btn" />
                </div>

                <div className="quanto-mobile-menu-right">
                    <button
                        onClick={toggleMenuSidebar}
                        className="quanto-menu-toggle mobile"
                    >
                        <i className="ri-close-line" />
                    </button>
                    <div className="contact-info">
                        <h6 className="title">Contact</h6>
                        <p className="address">
                            740 New South Head Rd, Triple Bay Swfw 3108, New
                            York
                        </p>
                        <div className="contact">
                            <Link href="mailto:hello@quanta.agency">
                                hello@quanta.agency
                            </Link>
                            <Link href="tel:+8884567890">+1 888 456 7890</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarNav;
