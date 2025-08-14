import Link from "next/link";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    href: string;
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    position?: "left";
}

const Hyperlink = ({
    children = "Hyperlink",
    href,
    className,
    variant,
    position,
}: Props) => {
    return (
        <>
            <Link
                className={clsx(
                    "quanto-link-btn",
                    {
                        "btn-pill": variant === "primary",
                        "btn-dark": variant === "secondary",
                        "btn-pill btn-light": variant === "tertiary",
                    },
                    className
                )}
                href={href}
            >
                {position === "left" && (
                    <span>
                        <i className="fa-solid fa-arrow-left arry1" />
                        <i className="fa-solid fa-arrow-left arry2" />
                    </span>
                )}

                {children}
                {position !== "left" && (
                    <span>
                        <i className="fa-solid fa-arrow-right arry1" />
                        <i className="fa-solid fa-arrow-right arry2" />
                    </span>
                )}
            </Link>
        </>
    );
};

export default Hyperlink;
