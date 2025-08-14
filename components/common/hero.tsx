import MoveAnim from "../framer/move-anim";

interface Props {
    title: string;
}

const Hero = ({ title }: Props) => {
    return (
        <>
            <section className="quanto-hero-service-section section-padding-bottom overflow-hidden">
                <div className="container custom-container">
                    <div className="row g-4">
                        <div className="col-lg-12 col-xxl-11">
                            <MoveAnim delay={0.45}>
                                <div className="quanto-hero-service__content">
                                    <h1 className="title">{title}</h1>
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
