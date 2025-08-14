import { PricingPlanType } from "@/types/global";
import Link from "next/link";

interface Props {
    data: PricingPlanType;
}

const PricingPlanCard = ({ data }: Props) => {
    return (
        <>
            <div className="quanto-pricing-box bg-white">
                <h5 className="pricing-title">{data.title}</h5>
                <p className="pricing-info">{data.description}</p>
                <h3 className="pricing">{data.price}</h3>
                <div className="pricing-list">
                    <ul className="custom-ul">
                        {data.features.map((item2, i2) => (
                            <li key={i2}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.26686 17.2517L23.3996 2.09009C18.5966 8.6869 13.7937 15.2841 9.01958 21.9098L0.599609 11.6671C3.17479 13.5188 5.72074 15.3708 8.2673 17.2513L8.26686 17.2517Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                {item2}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="/contact" className="quanto-link-btn btn-pill">
                    Go with this plan
                    <span>
                        <i className="fa-solid fa-arrow-right arry1" />
                        <i className="fa-solid fa-arrow-right arry2" />
                    </span>
                </Link>
            </div>
        </>
    );
};

export default PricingPlanCard;
