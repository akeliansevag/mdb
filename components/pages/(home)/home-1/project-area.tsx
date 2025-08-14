"use client";
import ProjectAreaCard from "@/components/common/project-area-card";
import Hyperlink from "@/components/ui/hyperlink";
import { project1 } from "@/data/data";

const ProjectArea = () => {
    return (
        <section className="quanto-project-section bg-color-primary section-padding-top-bottom overflow-hidden">
            <div className="container custom-container">
                <div className="row g-0 gy-4 gy-md-0 justify-content-between">
                    <div className="col-12 col-md-5 order-1 order-md-0">
                        <div className="row g-0">
                            <div className="col-md-12 project-row-gap">
                                <ProjectAreaCard data={project1[0]} />
                            </div>
                            <div className="col-md-8 mx-auto project-row-gap">
                                <ProjectAreaCard data={project1[2]} />
                            </div>
                            <div className="col-md-12">
                                <ProjectAreaCard data={project1[4]} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <div className="row">
                            <div className="col-12">
                                <div className="quanto__header text-center text-md-end">
                                    <Hyperlink
                                        variant="secondary"
                                        href="/portfolio-gallery"
                                    >
                                        View more works
                                    </Hyperlink>
                                </div>
                            </div>
                            <div className="col-md-10 ms-auto project-row-gap">
                                <ProjectAreaCard data={project1[1]} />
                            </div>
                            <div className="col-md-9 me-auto project-row-gap">
                                <ProjectAreaCard data={project1[3]} />
                            </div>
                            <div className="col-md-10 ms-auto">
                                <ProjectAreaCard data={project1[5]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectArea;
