"use client";
import { Project4Type } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
    data: Project4Type;
}

const ProjectCardArea3 = ({ data }: Props) => {
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <>
            <div className="quanto-project-box2 overflow-hidden">
                <div className="quanto-project-thumb overflow-hidden order-0 order-md-1">
                    <Link href="/portfolio-details">
                        <motion.div
                            initial={{
                                x: isMobile ? -200 : -300,
                                opacity: 0,
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                        >
                            <Image
                                height={0}
                                width={0}
                                sizes="100vw"
                                src={data.imageUrl}
                                alt="project"
                                className="w-100 img_reveal"
                            />
                        </motion.div>
                    </Link>
                </div>
                <div className="quanto-project-content order-1 order-md-0">
                    <div className="top-content">
                        <h4 className="text-color-primary line-clamp-1">
                            <Link href="/portfolio-details">{data.title}</Link>
                        </h4>
                        <p>{data.description}</p>
                    </div>
                    <span className="quanto-project-date text-color-primary">
                        {data.year}
                        <i className="bi bi-dash" />
                        {data.category}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProjectCardArea3;
