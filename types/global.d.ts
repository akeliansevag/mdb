import { LinkType } from "@/data/data";

export interface OurAchievementType {
    value: number;
    unit: string;
    label: string;
}

export interface Project1Type {
    title: string;
    imageUrl: string;
    year: number;
    category: string;
}

export interface Project2Type {
    title: string;
    image: string;
    date: string;
    category: string;
}

export interface Project3Type {
    title: string;
    year: string;
    category: string;
    imageUrl: string;
}

export interface Project4Type {
    title: string;
    description: string;
    year: string;
    category: string;
    imageUrl: string;
}

export interface Project5Type {
    id: number;
    title: string;
    image: string;
    year: string;
    category: string;
    colMd: string;
    colLg: string;
    align?: "start" | "end" | "center";
}

export interface Service1Type {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export interface Service2Type {
    title: string;
    description: string;
    link: string;
}

export interface Service3Type {
    title: string;
    description: string;
    icon: string;
}

export interface Service4Type {
    title: string;
    description: string;
    svgPath: string;
    viewBox: string;
}

export interface Service5Type {
    title: string;
    description: string;
    icon: string;
    features: string[];
    delay: string;
}

export interface TestimonialType {
    image?: string;
    content?: string;
    name: string;
    designation: string;
    company?: string;
    profession?: string;
}

export interface Testimonial1Type {
    description: string;
    image: string;
    name: string;
    profession: string;
}

export interface BlogType {
    title: string;
    description?: string;
    date: string;
    imageUrl: string;
    url: string;
}

export interface Blog2Type {
    title: string;
    date: string;
    imgSrc: string;
}

export interface SocialType {
    href: string;
    iconClass: string;
}

export interface LinkType {
    href: string;
    label: string;
}

export interface ServiceType {
    title: string;
    description: string;
    icon: string;
    delay: string;
}

export interface TeamMemberType {
    name: string;
    position: string;
    image: string;
    socialLinks: {
        facebook: LinkType;
        twitter: LinkType;
        instagram: LinkType;
        linkedin: LinkType;
    };
}

export interface AwardType {
    title: string;
    info: string;
}

export interface PricingPlanType {
    title: string;
    description: string;
    price: string;
    features: string[];
}

export interface CareerTimelineType {
    title: string;
    location: string;
    deadline: string;
    roles: number;
}
