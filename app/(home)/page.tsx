import Header from "@/components/layout/headers/header";
import About from "@/components/common/about";
import Hero from "@/components/pages/(home)/home-1/hero";
import OurAchievement from "@/components/common/our-achievement";
import ServiceArea from "@/components/pages/(home)/home-1/service-area";
import Testimonial from "@/components/pages/(home)/home-1/testimonial";
import Footer from "@/components/layout/footers/footer";
import AboutArea from "@/components/common/about-area";
import ServiceAreaTwo from "@/components/common/service-area";


export const metadata = {
    title: "Home",
};

const Home = () => {
    return (
        <>
            <div id="home">
                <Header />
            </div>
            
            <Hero />
            <About
                heading="We’re not just keeping pace with telecom evolution — we’re driving it. Our fully customized, in-house solutions are designed to challenge legacy limits and set new industry standards."
                paragraph="Backed by a culture of constant improvement and customer-centric excellence, we empower operators and enterprises with smarter, faster, and more agile telecom innovations."
            />
            
            <OurAchievement />
            <div id="messaging">
                <AboutArea style="style-2"/>
            </div>
            
            <div id="telecom">
                <ServiceArea />
            </div>
            
            <div id="mdbs">
                <Testimonial />
            </div>
            
            {/* <div id="blogs">
                <BlogArea />
            </div> */}
            <div id="products-and-services">
                <ServiceAreaTwo title="Where Innovation Meets Every Interaction"/>
            </div>
            <div id="get-in-touch">
                <Footer />
            </div>
            
        </>
    );
};

export default Home;
