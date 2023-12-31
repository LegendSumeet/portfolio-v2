import { Container } from "@/components/Header/Container";
import { HeroSection } from "@/components/HeroSection";
import { AnimatePage } from "@/components/animate";
import Brand from "@/components/barnds/Brands";
import badgesData from "@/components/data";
import SVGImage from "@/components/image";
import { Service } from "@/components/services";
import { Serviceres } from "@/components/services/Serviceres";
import Image from "next/image";

export default function Home() {
  const softwareConsultancyData = {
    title: "Software Consultancy",
    subtitle:
      "I find the right tech stack for your project, scale your team and work with you every step of the way.",
    slug: "",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4b82f87fc551dd24aba2da01e686687305fe649c-900x600.svg",
    body: "I love working with startups and established businesses to find the right tech stack, be it a single new feature or a whole rebuild of your current product. I can help you find the perfect developers for your project and scale up as your business grows. When it comes to application development, I've seen it all. From building highly customized enterprise software stacks on the latest open source frameworks to reducing costs and improving user experience with cloud-based solutions. I offer consulting services for companies and agencies that strive to develop scalable and performant web solutions. Deeply knowing my customers' needs, I can help them make the right decision when it comes to deciding on a software architecture and tech stack.",
  };

  const websiteDevelopmentData = {
    title: "Website & App Development",
    subtitle:
      "I build web applications and websites that are well-designed, accessible, and performant.",
    slug: "2",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4003b5d63e0fe7d71b95891a263c0fa203580dc1-900x600.svg",
    body: "I've been building websites and apps for over year now I like to focus on accessibility, performance, and clean code.  I help my clients create the best possible digital products for their businesses. I don't just develop websites and apps, I make them beautiful, fast and accessible to people with disabilities. My goal is to work with you to help you reach your full potential.",
  };
  const ecommmerce = {
    title: "E-Commerce",
    subtitle: "I know how to help you sell more, with less effort.",
    slug: "2",
    image:
      "https://cdn.sanity.io/images/yq5nnpfd/production/4003b5d63e0fe7d71b95891a263c0fa203580dc1-900x600.svg",
    body: "E-commerce development is my trade.  Whether you're looking to create an MVP or start a new project, I can help you achieve financial goals through performant microservice architecture and modern JavaScript frontends.I can help you design, develop and deploy modern frontend applications built with a microservice architecture.  I can help you achieve financial goals through performant frontends built in React, Redux and GraphQL.",
  };

  return (
    <main>
      <AnimatePage>
        <HeroSection />
        <section id="services">
          <Container>
            <h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
              Services I provide
              <span className="mt-2 block text-xl font-bold text-white dark:text-off-white md:text-2xl">
                as a software architect with a passion for creating applications
                and websites that people love.
              </span>
            </h2>

            <Serviceres {...websiteDevelopmentData} />
            <Service {...ecommmerce} />
          </Container>
        </section>
      </AnimatePage>
    </main>
  );
}
