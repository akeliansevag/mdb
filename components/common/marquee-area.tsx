import Link from "next/link";
import Marquee from "react-fast-marquee";

const MarqueeArea = () => {
    return (
        <>
            <div className="marquee-container fade-anim">
                <Marquee
                    className="overflow-hidden py-2"
                    pauseOnHover={true}
                    speed={100}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Link
                            key={i}
                            className="marquee-item-container"
                            href="/contact"
                        >
                            <div className="marquee-item text-color-white">
                                <h1 className="text-color-white">
                                    Let’s work together
                                </h1>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={150}
                                    height={150}
                                    viewBox="0 0 150 150"
                                    fill="none"
                                >
                                    <path
                                        d="M100.023 58.8388L46.232 112.63L37.3932 103.791L91.1844 50H43.7733V37.5H112.523V106.25H100.023V58.8388Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </Marquee>
            </div>
        </>
    );
};

export default MarqueeArea;
