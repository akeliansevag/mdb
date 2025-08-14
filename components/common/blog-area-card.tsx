import { BlogType } from "@/types/global";
import Image from "next/image";

interface Props {
    data: BlogType;
    varient?: "style-3";
}

const BlogAreaCard = ({ data, varient }: Props) => {
    return (
        <>
            <div className={`quanto-blog-box ${varient}`}>
                <div className="quanto-blog-thumb">
                    {/* <Link href={data.url}>
                        <Image
                            height={0}
                            width={0}
                            sizes="100vw"
                            src={data.imageUrl}
                            alt="blog-thumb"
                        />
                    </Link> */}
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src={data.imageUrl}
                        alt="blog-thumb"
                    />
                </div>
                <div
                    className={`quanto-blog-content ${
                        varient === "style-3" ? "bg-color-white" : ""
                    }`}
                >
                    <h5 className="line-clamp-2">
                        {/* <Link href={data.url}>{data.title}</Link> */}
                        {data.title}
                    </h5>
                    <span className="quanto-blog-date">{data.date}</span>
                </div>
            </div>
        </>
    );
};

export default BlogAreaCard;
