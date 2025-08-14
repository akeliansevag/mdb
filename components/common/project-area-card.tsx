import { Project1Type } from "@/types/global";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
    data: Project1Type;
}

const ProjectAreaCard = ({ data }: Props) => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    return (
        <>
            <div className="quanto-data-box overflow-hidden">
                <Link href="portfolio-details">
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
                        className="quanto-project-thumb overflow-hidden"
                    >
                        <Image
                            height={0}
                            width={0}
                            sizes="(max-width: 575px) 100vw, (max-width: 767px) 50vw, (max-width: 991px) 33vw, 25vw"
                            src={data.imageUrl}
                            alt={`${data.title} thumbnail`}
                            className="w-100"
                            loading="eager"
                            priority
                        />
                    </motion.div>
                </Link>
                <div className="quanto-project-content">
                    <h5 className="text-color-white line-clamp-1">
                        <Link href="portfolio-details">{data.title}</Link>
                    </h5>
                    <span className="quanto-data-date text-color-white">
                        {data.year}
                        <i className="bi bi-dash" />
                        {data.category}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProjectAreaCard;
