import MoveAnim from "@/components/framer/move-anim";
import { Service1Type } from "@/types/global";
import Image from "next/image";

interface Props {
    data: Service1Type;
}

const ServiceAreaCard = ({ data }: Props) => {
    return (
        <>
            <div className="col-md-6 col-lg-4 col-xxl-3">
                <div className="quanto-service-box">
                    <MoveAnim>
                        <div className="quanto-iconbox-icon">
                            <Image
                                height={52}
                                width={52}
                                src={data.icon}
                                alt="service-icon"
                            />
                        </div>
                        <div className="quanto-iconbox-data">
                            <div className="quanto-iconbox-data-wrapper">
                                <h5>{data.title}</h5>
                                <p>{data.description}</p>
                            </div>
                            {/* <Hyperlink href={data.link}>View details</Hyperlink> */}
                        </div>
                    </MoveAnim>
                </div>
            </div>
        </>
    );
};

export default ServiceAreaCard;
