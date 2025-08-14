import { TeamMemberType } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

interface Props {
    data: TeamMemberType;
}

const TeamAreaCard = ({ data }: Props) => {
    return (
        <>
            <div className="quanto-team-box">
                <figure className="team-thumb">
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src={data.image}
                        alt="team"
                        className="w-100"
                    />
                    <Image
                        height={0}
                        width={0}
                        sizes="100vw"
                        src={data.image}
                        alt="team"
                        className="w-100"
                    />
                    <ul className="custom-ul">
                        <li>
                            <Link href={data.socialLinks.facebook}>
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.socialLinks.twitter}>
                                <i className="fa-brands fa-x-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.socialLinks.instagram}>
                                <i className="fa-brands fa-instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.socialLinks.linkedin}>
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                        </li>
                    </ul>
                </figure>
                <div className="team-content">
                    <h6 className="team-data-name">
                        <Link href="/team-details">{data.name}</Link>
                    </h6>
                    <span className="team-data-position">{data.position}</span>
                </div>
            </div>
        </>
    );
};

export default TeamAreaCard;
