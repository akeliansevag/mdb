import MoveAnim from "@/components/framer/move-anim";

const Hero = () => {
    return (
        <>
            <section className="quanto-hero-common-section section-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-12 col-xl-10 col-xxl-9">
                            <MoveAnim delay={0.45}>
                                <div className="quanto-hero-common__content">
                                    <h1 className="title">
                                        Market Analysis &amp; Planning
                                    </h1>
                                </div>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
