import Image from "next/image";
import Link from "next/link";

interface Props {
    imgSrc: string;
    id?: string;
}

const VideoArea2 = ({ imgSrc, id = "#" }: Props) => {
    return (
        <>
            <div className="quanto-video-area style-2 overflow-hidden">
                <div className="container custom-container position-relative">
                    <Link href={id} className="scroll-down section-link">
                        Scroll down
                        <Image
                            height={28}
                            width={16}
                            src="/images/icons/scroll-down.svg"
                            alt="Scroll down"
                        />
                    </Link>
                    <div className="row">
                        <div className="col-12">
                            <div className="quanto-hero__thumb text-end">
                                <Image
                                    height={0}
                                    width={0}
                                    sizes="100vw"
                                    src={imgSrc}
                                    alt="hero-thumb"
                                    data-speed="0.8"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoArea2;
