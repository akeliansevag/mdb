import React from "react";

const serviceData = {
    id: "quanto-service-details-section",
    description: [
        `This service package is designed to create seamless, engaging, and innovative digital experiences. It combines intuitive User Interface (UI) design with strategic User Experience (UX) principles, ensuring your product not only looks great but also functions flawlessly. The focus extends beyond aesthetics, integrating product innovation strategies to help businesses stay competitive in an ever-evolving market. By leveraging user research, data analytics, and cutting-edge technologies, we deliver products.`,
        `This package is ideal for businesses aiming to launch new products, enhance existing ones, or establish competitive edge in their industry. By combining thoughtful design, strategic innovation, and a user-first approach, we create products that are not only relevant today but are also adaptable to the challenges of tomorrow.`,
    ],
    benefitsTitle: "Benefits of this service",
    benefitsIntro: `The UI/UX & Product Innovation Service Package offers a multitude of tangible and strategic benefits that help businesses enhance user satisfaction, achieve measurable outcomes, and stay ahead of the competition. Here's a detailed breakdown:`,
    benefits: [
        [
            "Custom Website Design",
            "Responsive Web Development",
            "E-Commerce Solutions",
            "JavaScript",
            "API Integration",
            "Front End Development",
        ],
        [
            "Front End Development",
            "Content Management Systems (CMS)",
            "Website Maintenance and Support",
            "SEO Optimization",
            "UX Research & Testing",
            "Mobile Optimization",
        ],
    ],
};

const CheckIcon = () => (
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
);

const ServiceInfo = () => {
    const { id, description, benefitsTitle, benefitsIntro, benefits } =
        serviceData;

    return (
        <section
            id={id}
            className="quanto-service-details-section row-padding-top row-padding-bottom overflow-hidden"
        >
            <div className="container custom-container">
                <div className="row g-4 justify-content-center">
                    <div className="col-xl-8">
                        <div className="quanto-service-details__content">
                            {description.map((item, i) => (
                                <p
                                    key={i}
                                    className={i === 1 ? "service-text" : ""}
                                >
                                    {item}
                                </p>
                            ))}

                            <div className="service-benefits">
                                <h4>{benefitsTitle}</h4>
                                <p>{benefitsIntro}</p>
                                <div className="benefits-list">
                                    <div className="row g-3 justify-content-start">
                                        {benefits.map((column, idx) => (
                                            <div
                                                key={idx}
                                                className="col-sm-6 col-xl-5"
                                            >
                                                <ul className="custom-ul">
                                                    {column.map((item, i) => (
                                                        <li key={i}>
                                                            <CheckIcon />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;
