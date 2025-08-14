"use client";
import { useRef, useState } from "react";

interface Props {
    videoSrc?: string;
    style?: "style-2";
}

const VideoArea4 = ({
    videoSrc = "https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4",
    style,
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
        <div
            className={`quanto-video-area style-2 overflow-hidden ${
                style === "style-2" ? "bg-color-2" : ""
            }`}
        >
            <div className="container custom-container">
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

export default VideoArea4;
