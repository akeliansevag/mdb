import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";
import ServiceArea2 from "@/components/common/service-area-2";
import Hero from "@/components/common/hero";
import VideoArea2 from "@/components/common/video-area-2";
import ImageArea from "@/components/pages/(service)/service-2/image-area";
import ClientArea from "@/components/common/client-area";

export const metadata = {
    title: "Service 2",
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
            <ServiceArea2 style="style-2" />
            <ImageArea />
            <ClientArea style="style-2" />
            <Footer />
        </>
    );
};

export default Service;
