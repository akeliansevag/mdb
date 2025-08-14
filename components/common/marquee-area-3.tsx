import Marquee from "react-fast-marquee";

interface Props {
    data: string;
}

const MarqueeArea3 = ({ data }: Props) => {
    return (
        <>
            <div className="marquee-container fade-anim">
                <div className="marquee">
                    <Marquee
                        className="overflow-hidden pb-4"
                        pauseOnHover={true}
                        speed={100}
                    >
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="marquee-item-container"
                                data-lag="0.2"
                                data-stagger="0.08"
                            >
                                <div className="marquee-item text-color-white">
                                    <h1 className="text-color-white">
                                        {data}&nbsp;
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default MarqueeArea3;
