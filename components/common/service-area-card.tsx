import Hyperlink from "@/components/ui/hyperlink";
import { ServiceType } from "@/types/global";
import Image from "next/image";

interface Props {
    data: ServiceType;
}

const ServiceAreaCard = ({ data }: Props) => {
    return (
        <div className="quanto-service-box style-2">
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
                {/* <Hyperlink href="/service-details">View details</Hyperlink> */}
            </div>
        </div>
    );
};

export default ServiceAreaCard;
