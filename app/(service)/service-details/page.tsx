import VideoArea2 from "@/components/common/video-area-2";
import VideoArea4 from "@/components/common/video-area-4";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import ChooseUs from "@/components/pages/(service)/service-details/choose-us";
import Hero from "@/components/pages/(service)/service-details/hero";
import ServiceInfo from "@/components/pages/(service)/service-details/service-info";

export const metadata = {
    title: "Service Details",
};

const ServiceDetails = () => {
    return (
        <>
            <Header />
            <Hero />
            <VideoArea2 imgSrc="/images/hero/common-hero-thumb-2.png" />
            <ServiceInfo />
            <VideoArea4 />
            <ChooseUs />
            <Footer />
        </>
    );
};

export default ServiceDetails;
