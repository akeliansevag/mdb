import {
    AwardType,
    Blog2Type,
    BlogType,
    CareerTimelineType,
    LinkType,
    OurAchievementType,
    PricingPlanType,
    Project1Type,
    Project2Type,
    Project3Type,
    Project4Type,
    Project5Type,
    Service1Type,
    Service2Type,
    Service3Type,
    Service4Type,
    Service5Type,
    ServiceType,
    SocialType,
    TeamMemberType,
    Testimonial1Type,
    TestimonialType,
} from "@/types/global";

export const ourAchievement: OurAchievementType[] = [
    { value: 17, unit: "+", label: "Years of agency experience" },
    { value: 220, unit: "+", label: "Successfully projects done" },
    { value: 46, unit: "+", label: "World-wide team members" },
    { value: 98, unit: "%", label: "Clients satisfied & retention" },
];

export const project1: Project1Type[] = [
    {
        title: "Kinetic Sandscapes",
        imageUrl: "/images/project/project-1.png",
        year: 2024,
        category: "Branding",
    },
    {
        title: "Hopscotch Payments",
        imageUrl: "/images/project/project-2.png",
        year: 2024,
        category: "Development",
    },
    {
        title: "Brooklyn Brewery",
        imageUrl: "/images/project/project-3.png",
        year: 2024,
        category: "Photography",
    },
    {
        title: "Stories Worthwhile",
        imageUrl: "/images/project/project-4.png",
        year: 2024,
        category: "UI/UX Design",
    },
    {
        title: "Regenerative Farming",
        imageUrl: "/images/project/project-5.png",
        year: 2024,
        category: "Branding",
    },
    {
        title: "Fintech Accelerator",
        imageUrl: "/images/project/project-6.png",
        year: 2024,
        category: "UI/UX Design",
    },
];

export const projects2: Project3Type[] = [
    {
        title: "Kinetic Sandscapes",
        year: "2024",
        category: "Branding",
        imageUrl: "/images/project/project-2-1.png",
    },
    {
        title: "Hopscotch Payments",
        year: "2024",
        category: "Development",
        imageUrl: "/images/project/project-2-2.png",
    },
    {
        title: "Brooklyn Brewery",
        year: "2024",
        category: "Photography",
        imageUrl: "/images/project/project-2-3.png",
    },
    {
        title: "Regenerative Farming",
        year: "2024",
        category: "Branding",
        imageUrl: "/images/project/project-2-4.png",
    },
];

export const projects3: Project4Type[] = [
    {
        title: "Kinetic Sandscapes",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        year: "2024",
        category: "Branding",
        imageUrl: "/images/project/project-3-1.png",
    },
    {
        title: "Hopscotch Payments",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        year: "2024",
        category: "Development",
        imageUrl: "/images/project/project-3-2.png",
    },
    {
        title: "Brooklyn Brewery",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        year: "2024",
        category: "Photography",
        imageUrl: "/images/project/project-3-3.png",
    },
    {
        title: "Regenerative Farming",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        year: "2024",
        category: "UI/UX Design",
        imageUrl: "/images/project/project-3-4.png",
    },
];

export const projects4: Project1Type[] = [
    {
        title: "Kinetic Sandscapes",
        year: 2024,
        category: "Branding",
        imageUrl: "/images/project/portfolio-gallery-1.png",
    },
    {
        title: "Hopscotch Payments",
        year: 2024,
        category: "Development",
        imageUrl: "/images/project/portfolio-gallery-2.png",
    },
    {
        title: "Brooklyn Brewery",
        year: 2024,
        category: "Photography",
        imageUrl: "/images/project/portfolio-gallery-3.png",
    },
    {
        title: "Regenerative Farming",
        year: 2024,
        category: "Branding",
        imageUrl: "/images/project/portfolio-gallery-4.png",
    },
    {
        title: "Stories Worthwhile",
        year: 2024,
        category: "UI/UX Design",
        imageUrl: "/images/project/portfolio-gallery-5.png",
    },
    {
        title: "Fintech Accelerator",
        year: 2024,
        category: "Development",
        imageUrl: "/images/project/portfolio-gallery-6.png",
    },
];

export const projects5: Project5Type[] = [
    {
        id: 1,
        title: "Kinetic Sandscapes",
        image: "/images/project/project-2-1.png",
        year: "2024",
        category: "Branding",
        colMd: "col-md-6",
        colLg: "col-lg-4",
        align: "end",
    },
    {
        id: 2,
        title: "Hopscotch Payments",
        image: "/images/project/project-2-2.png",
        year: "2024",
        category: "Development",
        colMd: "col-md-6",
        colLg: "col-lg-7",
    },
    {
        id: 3,
        title: "Brooklyn Brewery",
        image: "/images/project/project-2-3.png",
        year: "2024",
        category: "Photography",
        colMd: "col-md-6",
        colLg: "col-lg-7",
    },
    {
        id: 4,
        title: "Regenerative Farming",
        image: "/images/project/project-2-4.png",
        year: "2024",
        category: "Branding",
        colMd: "col-md-6",
        colLg: "col-lg-4",
        align: "start",
    },
    {
        id: 5,
        title: "Stories Worthwhile",
        image: "/images/project/project-3-5.png",
        year: "2024",
        category: "UI/UX Design",
        colMd: "col-md-6",
        colLg: "col-lg-4",
        align: "end",
    },
    {
        id: 6,
        title: "Fintech Accelerator",
        image: "/images/project/project-3-6.png",
        year: "2024",
        category: "Development",
        colMd: "col-md-6",
        colLg: "col-lg-7",
    },
];

export const service1: Service1Type[] = [
    {
        icon: "/images/service/service-icon-1.svg",
        title: "Operator Hub",
        description:
            "Gain full control of your carrier ecosystem from one powerful portal",
        link: "/",
    },
    {
        icon: "/images/service/service-icon-2.svg",
        title: "Smart Routing",
        description:
            "Our advanced routing engine dynamically balances quality and cost in real time.",
        link: "/",
    },
    {
        icon: "/images/service/service-icon-3.svg",
        title: "Insights & Analytics",
        description:
            "Access detailed analytics on delivery, performance, and partner spend — all in one place.",
        link: "/",
    },
    {
        icon: "/images/service/service-icon-4.svg",
        title: "Seamless Integration",
        description:
            "Our API-first architecture integrates effortlessly with your OSS/BSS for full automation and operational efficiency.",
        link: "/",
    },
];

export const services2: Service2Type[] = [
    {
        title: "Branding Design",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        link: "/service-details",
    },
    {
        title: "Web Development",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        link: "/service-details",
    },
    {
        title: "UI/UX Design",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        link: "/service-details",
    },
    {
        title: "Digital Marketing",
        description:
            "Creative Design team on demand that can design, build, ship and scale your real has development agency.",
        link: "/service-details",
    },
];

export const services4: Service4Type[] = [
    {
        title: "01 ─ Brand Strategy",
        description:
            "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your company values and messaging.",
        svgPath:
            "M52 1.1365e-06L52 52L9.78146e-07 0L52 1.1365e-06ZM26 26L26 52L0 26L26 26Z",
        viewBox: "0 0 52 52",
    },
    {
        title: "02 ─ Web Development",
        description:
            "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your company values and messaging.",
        svgPath:
            "M26 52C32.8956 52 39.5088 49.2607 44.3848 44.3848C49.2607 39.5088 52 32.8956 52 26C52 19.1044 49.2607 12.4912 44.3848 7.61525C39.5088 2.7393 32.8956 2.40725e-05 26 2.27299e-05L26 26L26 52ZM0 52C6.89562 52 13.5088 49.2607 18.3848 44.3848C23.2607 39.5088 26 32.8956 26 26C26 19.1044 23.2607 12.4912 18.3848 7.61522C13.5088 2.73928 6.89563 1.34263e-06 6.19888e-06 0L0 52Z",
        viewBox: "0 0 52 52",
    },
    {
        title: "03 ─ UI/UX Design",
        description:
            "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your company values and messaging.",
        svgPath:
            "M35.36 0L26 9.36L16.64 7.27358e-07H1.54563e-06V16.64L9.36 26L0 35.36L8.18277e-07 52H16.64L26 42.64L35.36 52H52V35.36L42.64 26L52 16.64V7.27358e-07L35.36 0Z",
        viewBox: "0 0 52 52",
    },
    {
        title: "04 ─ Digital Marketing",
        description:
            "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your company values and messaging.",
        svgPath:
            "M52 2.34V0L0 3.44309e-07L4.11567e-08 2.34C2.24047e-07 12.7384 6.10429 21.7111 14.9249 25.87C6.10429 30.0289 -1.84046e-07 39.0016 2.56176e-07 49.4L3.66248e-07 52L52 52V49.4C52 39.0016 45.8957 30.0289 37.0751 25.87C45.8957 21.7111 52 12.7384 52 2.34Z",
        viewBox: "0 0 52 52",
    },
];

export const services5: Service5Type[] = [
    {
        title: "Branding Design",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-1.svg",
        features: [
            "Strategy & Research",
            "Logo Design",
            "Company Materials Design",
            "Motion Design",
        ],
        delay: "0.30",
    },
    {
        title: "Product Design",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-2.svg",
        features: [
            "Strategy & Research",
            "Logo Design",
            "Company Materials Design",
            "Motion Design",
        ],
        delay: "0.50",
    },
    {
        title: "Graphic Design",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-3.svg",
        features: [
            "Strategy & Research",
            "Logo Design",
            "Company Materials Design",
            "Motion Design",
        ],
        delay: "0.70",
    },
    {
        title: "No-Code Develop",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-4.svg",
        features: [
            "Strategy & Research",
            "Logo Design",
            "Company Materials Design",
            "Motion Design",
        ],
        delay: "0.90",
    },
];

export const testimonials: TestimonialType[] = [
    {
        image: "/images/testimonial/bank-anywhere.webp",
        content:
            "Deliver full-scale digital banking straight to users’ smartphones — no branches needed. <br /><br /> Our Mobile Banking Suite empowers wallets, peer-to-peer transfers, bill payments, international remittances, and micro-loans with built-in KYC, multi-currency support, and AI-powered credit scoring. <br /><br /> Launch fast with our modular architecture and plug-and-play APIs — built to help you scale across emerging markets with zero physical footprint.",
        name: "Jenny Bennett",
        designation: "Senior Marketing Manager at Caya",
    },
    // {
    //     image: "/images/testimonial/Testimonial-2.png",
    //     content:
    //         "Working with Quanto has been a breeze. Their understanding of our needs and ability to deliver fast, efficient solutions is truly impressive. Highly recommended for any business looking to scale.",
    //     name: "Michael Thomson",
    //     designation: "Product Head at NovaTech",
    // },
    // {
    //     image: "/images/testimonial/Testimonial-3.png",
    //     content:
    //         "From start to finish, Quanto provided exceptional service. Their team is skilled, responsive, and extremely professional. I’d definitely collaborate with them again.",
    //     name: "Emily Carter",
    //     designation: "Co-founder at DigitalLeap",
    // },
];

export const testimonials2: TestimonialType[] = [
    {
        content:
            "“Quanto team quickly understood our business requirements and were proactive and flexible with our ongoing support and developments. You can definitely trust them for complex project requirements as they are top-notch in their field and we can only recommend it.”",
        name: "Jenny Bennett",
        designation: "Senior Marketing Manager",
        company: "Caya",
    },
    {
        content:
            "“The team at Quanto demonstrated exceptional understanding and flexibility, providing ongoing support with excellent results. We highly recommend them for any complex project requirements.”",
        name: "John Doe",
        designation: "Product Manager",
        company: "Tech Solutions",
    },
    {
        content:
            "“Working with Quanto was an amazing experience! They understood our needs and delivered top-quality solutions while providing excellent support throughout the project.”",
        name: "Alice Cooper",
        designation: "Operations Lead",
        company: "Global Enterprises",
    },
];

export const testimonials3: Testimonial1Type[] = [
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-1.png",
        name: "Jenny Bennett",
        profession: "Senior Marketing Manager at Caya",
    },
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-2.png",
        name: "Nathan Hallmark",
        profession: "Designer Team Head at Qxygen",
    },
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-3.png",
        name: "Danny Aronson",
        profession: "Senior Brand Design at Goodnotes",
    },
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-1.png",
        name: "Jenny Bennett",
        profession: "Senior Marketing Manager at Caya",
    },
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-2.png",
        name: "Nathan Hallmark",
        profession: "Designer Team Head at Qxygen",
    },
    {
        description:
            "From the initial concept development to the final execution, Emily's ability to understand our brand values and target audience was evident throughout the entire process. She masterfully crafted a visually compelling and cohesive brand identity that perfectly.",
        image: "/images/testimonial/testimonial-author-2-3.png",
        name: "Danny Aronson",
        profession: "Senior Brand Design at Goodnotes",
    },
];

export const blogs: BlogType[] = [
    {
        title: "Why Omnichannel Messaging Became a Strategic Imperative for International Businesses",
        date: "Jul 16, 2025",
        imageUrl: "/images/blog/blog-1.webp",
        url: "/blog-details",
    },
    {
        title: "CPaaS and AI Benefits",
        date: "Sep 25, 2024",
        imageUrl: "/images/blog/blog-2.webp",
        url: "/blog-details",
    },
    {
        title: "Revolutionizing Financial Management: The Impact of Business Wallets",
        date: "Aug 08, 2024",
        imageUrl: "/images/blog/blog-3.webp",
        url: "/blog-details",
    },
    {
        title: "Accessible and Inclusive Design: Welcoming All Users",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-4.png",
        url: "/blog-details",
    },
    {
        title: "Common UX pain in design related projects you must know",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-5.png",
        url: "/blog-details",
    },
    {
        title: "How to bring fold to your startup company with Quanto",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-6.png",
        url: "/blog-details",
    },
    {
        title: "Simple guide to retrieval auto generated read content models",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-7.png",
        url: "/blog-details",
    },
    {
        title: "How to manage a talented and successful design team",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-8.png",
        url: "/blog-details",
    },
    {
        title: "We are on the quest for exceptional talent to join our team",
        date: "March 8, 2024",
        imageUrl: "/images/blog/blog-thumb-9.png",
        url: "/blog-details",
    },
];

export const blogs2: BlogType[] = [
    {
        date: "March 8, 2024",
        title: "Reveal business opportunities with our five point brand audit",
        description: "Description of the blog...",
        imageUrl: "/images/blog/blog-thumb-1.png",
        url: "/blog-details",
    },
    {
        date: "March 8, 2024",
        title: "Quanto agency revolutionizes work with the power of AI-driven",
        description: "Description of the blog...",
        imageUrl: "/images/blog/blog-thumb-2.png",
        url: "/blog-details",
    },
    {
        date: "March 8, 2024",
        title: "How young leaders can take charge of their professional growth",
        description: "Description of the blog...",
        imageUrl: "/images/blog/blog-thumb-3.png",
        url: "/blog-details",
    },
];

export const blogs3: Blog2Type[] = [
    {
        date: "March 8, 2024",
        title: "Reveal business opportunities with our five point brand audit",
        imgSrc: "/images/blog/blog-thumb-1.png",
    },
    {
        date: "March 8, 2024",
        title: "Quanto agency revolutionizes work with the power of ai-driven",
        imgSrc: "/images/blog/blog-thumb-2.png",
    },
    {
        date: "March 8, 2024",
        title: "How young leaders can take charge of their professional growth",
        imgSrc: "/images/blog/blog-thumb-3.png",
    },
    {
        date: "March 8, 2024",
        title: "Accessible and Inclusive Design: Welcoming All Users",
        imgSrc: "/images/blog/blog-thumb-4.png",
    },
    {
        date: "March 8, 2024",
        title: "Common UX pain in design related projects you must know",
        imgSrc: "/images/blog/blog-thumb-5.png",
    },
    {
        date: "March 8, 2024",
        title: "How to bring fold to your startup company with Quanto",
        imgSrc: "/images/blog/blog-thumb-6.png",
    },
    {
        date: "March 8, 2024",
        title: "Simple guide to retrieval auto generated read content models",
        imgSrc: "/images/blog/blog-thumb-7.png",
    },
    {
        date: "March 8, 2024",
        title: "We are on the quest for exceptional talent to join our team",
        imgSrc: "/images/blog/blog-thumb-9.png",
    },
];

export const social: SocialType[] = [
    { href: "https://x.com", iconClass: "fab fa-x-twitter" },
    { href: "https://instagram.com", iconClass: "fab fa-instagram" },
    { href: "https://linkedin.com", iconClass: "fab fa-linkedin" },
    { href: "https://facebook.com", iconClass: "fab fa-facebook" },
    { href: "https://youtube.com", iconClass: "fab fa-youtube" },
];

export const agencyLinks: LinkType[] = [
    { href: "#home", label: "Home" },
    { href: "#messaging", label: "Messaging" },
    { href: "#telecom", label: "Telecom" },
    { href: "#service", label: "Mobile Banking Suite" },
    { href: "#products-and-services", label: "Products & Services" },
    // { href: "/#blogs", label: "Blogs" },
];

export const servicesLinks: LinkType[] = [
    { href: "/service-details", label: "Brand Strategy" },
    { href: "/service-details", label: "Web Development" },
    { href: "/service-details", label: "UI/UX Design" },
    { href: "/service-details", label: "Digital Marketing" },
];

export const footerLink: LinkType[] = [
    { label: "Agency", href: "/" },
    { label: "Careers", href: "/career" },
    { label: "Privacy", href: "/privacy" },
    { label: "Testimonials", href: "/testimonials" },
];

export const footerSocial: LinkType[] = [
    {
        label: "Twitter",
        href: "https://x.com",
    },
    {
        label: "Instagram",
        href: "https://instagram.com",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
    },
    {
        label: "Behance",
        href: "https://behance.net",
    },
    {
        label: "Dribbble",
        href: "https://dribbble.com",
    },
];

export const services: ServiceType[] = [
    {
        title: "Messaging",
        description:
            "MDB enables large-scale user engagement with A2P and bulk SMS, powered by smart routing and seamless CRM integration.",
        icon: "/images/service/service-icon-1.svg",
        delay: "0.30",
    },
    {
        title: "Roaming",
        description:
            "Our cloud-based roaming suite boosts inbound traffic and revenue with virtual numbers and dual-number capabilities.",
        icon: "/images/service/service-icon-2.svg",
        delay: "0.45",
    },
    {
        title: "Call Management",
        description:
            "Enhance voice services with AI RBT, IVR, campaign tools, and intelligent call routing for a richer mobile experience.",
        icon: "/images/service/service-icon-3.svg",
        delay: "0.60",
    },
    {
        title: "Digital Services",
        description:
            "Automate, monitor, and scale with solutions for alerts, VAS testing, and partner management across telecom systems.",
        icon: "/images/service/service-icon-4.svg",
        delay: "0.75",
    },
];

export const services3: Service3Type[] = [
    {
        title: "Brand Strategy",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-1.svg",
    },
    {
        title: "Social Media",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-2.svg",
    },
    {
        title: "Motion Graphics",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-3.svg",
    },
    {
        title: "Digital Solution",
        description:
            "Brand identity design a the have to success whether you breath onfire quanto agency.",
        icon: "/images/service/service-icon-4.svg",
    },
];

export const projects: Project2Type[] = [
    {
        title: "Kinetic Sandscapes",
        image: "/images/project/project-2-1.png",
        date: "2024",
        category: "Branding",
    },
    {
        title: "Hopscotch Payments",
        image: "/images/project/project-2-2.png",
        date: "2024",
        category: "Development",
    },
    {
        title: "Brooklyn Brewery",
        image: "/images/project/project-2-3.png",
        date: "2024",
        category: "Photography",
    },
    {
        title: "Stories Worthwhile",
        image: "/images/project/project-2-4.png",
        date: "2024",
        category: "UI/UX Design",
    },
    {
        title: "Regenerative Farming",
        image: "/images/project/project-2-5.png",
        date: "2024",
        category: "Branding",
    },
    {
        title: "Fintech Accelerator",
        image: "/images/project/project-2-6.png",
        date: "2024",
        category: "UI/UX Design",
    },
];

export const teamMembers: TeamMemberType[] = [
    {
        name: "Tony Lixivel",
        position: "Lead Full Stack Developer",
        image: "/images/team/team-1.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Daniel Schrier",
        position: "Senior Product Designer",
        image: "/images/team/team-2.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Audrey Tassel",
        position: "Administrative & HR Assistant",
        image: "/images/team/team-3.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Tanguy Caruel",
        position: "Chief Technology Officer",
        image: "/images/team/team-4.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Brian Herbert",
        position: "Senior Software Developer",
        image: "/images/team/team-5.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Anna Peterson",
        position: "Lead Marketing Manager",
        image: "/images/team/team-6.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Patrick Johnson",
        position: "Creative Graphics Designer",
        image: "/images/team/team-7.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
    {
        name: "Cynthia Taylor",
        position: "Human Resources Officer",
        image: "/images/team/team-8.png",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#",
        },
    },
];

export const awards: AwardType[] = [
    {
        title: "Winner - Best eCommerce Websites",
        info: "Awwwards ─ 2023",
    },
    {
        title: "Awarded - Top Creative Agency in United State",
        info: "Envato Elements ─ 2022",
    },
    {
        title: "Mentioned - Honorable Mentioned",
        info: "Design Community ─ 2022",
    },
    {
        title: "Winner - Behance Portfolio Review",
        info: "Behance ─ 2021",
    },
    {
        title: "Winner - Featured App Design of the Week",
        info: "UI/UX Global Award ─ 2019",
    },
];

export const pricingPlans: PricingPlanType[] = [
    {
        title: "Standard",
        description: "Ideal for small businesses or startups.",
        price: "$990",
        features: [
            "Access to all basic features",
            "Work customization",
            "Mobile and desktop app",
            "Access to all design templates",
            "Priority customer support",
        ],
    },
    {
        title: "Professional",
        description: "Ideal for small businesses or startups.",
        price: "$1800",
        features: [
            "Access to all basic features",
            "Work customization",
            "Mobile and desktop app",
            "Access to all design templates",
            "Priority customer support",
        ],
    },
    {
        title: "Enterprise",
        description: "Ideal for small businesses or startups.",
        price: "$2900",
        features: [
            "Access to all basic features",
            "Work customization",
            "Mobile and desktop app",
            "Access to all design templates",
            "Priority customer support",
        ],
    },
];

export const workingProcess = [
    {
        title: "Send Email",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Meet Online",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Price Estimation",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Work Together",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Send Email",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Meet Online",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Price Estimation",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
    {
        title: "Work Together",
        description:
            "Listen stories of user, understand points, and give an estimate about cost and time-frame.",
    },
];

export const faq = [
    {
        question: "What happens after the design is ready & I approve it?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "Can you work with wireframes or our existing designs?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "Do you charge for additional revisions?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "I have an agency. Can I outsource work to you?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "What do I need to give you to get started?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "How does the agile manifesto address planning?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "What is a statement of work in project management?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
    {
        question: "How to become an agile project manager?",
        answer: "How quick is quick? For most design, we’re talking 2-3 business days. We balance speed with quality, ensuring you get top-notch design swiftly.",
    },
];

export const careerTimeline: CareerTimelineType[] = [
    {
        title: "Content Marketing Executive",
        location: "California, United States",
        deadline: "31 December, 2024",
        roles: 4,
    },
    {
        title: "Front End Developer",
        location: "California, United States",
        deadline: "8 January, 2025",
        roles: 1,
    },
    {
        title: "Communication Executive",
        location: "California, United States",
        deadline: "8 January, 2025",
        roles: 2,
    },
    {
        title: "Senior Product Designer",
        location: "California, United States",
        deadline: "20 February, 2025",
        roles: 2,
    },
];
