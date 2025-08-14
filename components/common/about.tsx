"use client";
import MoveAnim from "../framer/move-anim";

interface Props {
    heading: string;
    paragraph: string;
    variants?: "style-2";
}

const About = ({ heading, paragraph, variants }: Props) => {
    return (
        <section
            className={
                variants === "style-2"
                    ? "quanto-about-area2 bg-color-white section-padding-top-bottom"
                    : "quanto-about-section section-padding-top overflow-hidden"
            }
        >
            <div className="container custom-container">
                <div className="row justify-content-end">
                    <div className="col-lg-10 col-xl-9 col-xxl-10">
                        <div className="quanto-about__content">
                            <MoveAnim>
                                <h4 className="text_invert">{heading}</h4>
                            </MoveAnim>
                            <MoveAnim delay={0.5}>
                                <div className="about-info row-margin-top">
                                    <p className="text_invert">{paragraph}</p>
                                    {/* <Hyperlink href="/about-us">
                                        More about us
                                    </Hyperlink> */}
                                </div>
                            </MoveAnim>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
