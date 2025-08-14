import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import ServiceArea from "@/components/common/service-area";
import Hero from "@/components/common/hero";
import VideoArea2 from "@/components/common/video-area-2";
import PricingPlan from "@/components/common/pricing-plan";

export const metadata = {
    title: "Service",
};

const Service = () => {
    return (
        <>
            <Header />
            <Hero title="Inspiring leadership through design" />
            <VideoArea2
                id="#service-section"
                imgSrc="/images/hero/common-hero-thumb.png"
            />
            <ServiceArea title="We help you to build digital business" />
            <PricingPlan />
            <Footer />
        </>
    );
};

export default Service;
