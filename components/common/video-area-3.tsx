"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Props {
    scrollToSection?: string;
    videoSrc?: string;
}

const VideoArea3 = ({
    scrollToSection = "#",
    videoSrc = "https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4",
}: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlayed, setIsPlayed] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlayed(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlayed(false);
        }
    };

    return (
        <div className="quanto-video-area style-2 overflow-hidden">
            <div className="container custom-container position-relative">
                <Link
                    href={scrollToSection}
                    className="scroll-down section-link"
                    title="Scroll to next section"
                    aria-label="Scroll to next section"
                >
                    Scroll down
                    <Image
                        height={28}
                        width={16}
                        src="/images/icons/scroll-down.svg"
                        alt="Scroll down icon"
                        loading="lazy"
                    />
                </Link>
                <div className="row">
                    <div className="col-12 position-relative">
                        <video
                            ref={videoRef}
                            className="quanto-video"
                            id="quanto-video-2"
                            src={videoSrc}
                            loop
                            muted
                            playsInline
                            data-speed="0.8"
                            onClick={handlePause}
                        />
                        <button
                            type="button"
                            className={`play-btn${isPlayed ? " disabled" : ""}`}
                            aria-label="Play video"
                            onClick={handlePlay}
                            disabled={isPlayed}
                        >
                            Play
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoArea3;
