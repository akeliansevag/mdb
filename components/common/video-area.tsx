const VideoArea = () => {
    return (
        <>
            <div className="quanto-video-area style-2 overflow-hidden">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <video
                                muted
                                autoPlay
                                loop
                                src="https://videos.pexels.com/video-files/3192305/3192305-uhd_2560_1440_25fps.mp4"
                                className="quanto-video"
                                id="quanto-video-2"
                            />
                            <button className="play-btn">Play</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoArea;
