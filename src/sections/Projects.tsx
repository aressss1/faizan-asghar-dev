import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


function Projects() {
  const router = useRouter()

  const projectsData = [
    {
      image: "/Project-1.png",
      projectName: "Genius AI",
      projectLink: "https://github.com/aressss1/saas-ai-platform.git",
      projectDescription:
        "A custom AI SaaS offering comprises 5 different tools: Image Generation Tool, Video Generation Tool, Code Generation Tool, Conversation Tool, and Music Generation Tool. It also includes a Free Tier and a Premium Tier with Stripe monthly subscriptions. It is fully responsive, animated, and features an animated loading state.",
      projectTech: [
        "NextJs",
        "Typescript",
        "Tailwind CSS",
        "Open AI Api",
        "Replica AI Api",
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/saas-ai-platform.git",
        externalLink: "",
      },
    },
    {
      image: "/Project-2.png",
      projectName: "Discord App",
      projectLink: "https://github.com/aressss1/discord-clone.git",
      projectDescription:
        "I developed a Discord Clone. This messaging app offers real-time communication with Socket.io and file sharing through UploadThing. It enables message editing and deletion, ensuring dynamic conversations. Users can engage in 1:1 text, audio, and video calls and manage member roles.",
      projectTech: [
        "NextJS",
        "Typescript",
        "Socket.io",
        "Prisma",
        "My SQL",
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/discord-clone.git",
        externalLink: "",
      },
    },
    {
      image: "/Project-3.png",
      projectName: "Ecomm. Admin Dashboard + CMS",
      projectLink: "https://github.com/aressss1/ecommerce-admin.git",
      projectDescription:
        "This versatile admin dashboard acts as a CMS, admin panel, and API generator, enabling control over multiple vendors or stores within a single platform. Users can effortlessly manage categories, products, and images, along with creating, updating, and deleting filters.",
      projectTech: [
        "NextJs",
        "Typescript",
        "MySQL",
        "Prisma"
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/ecommerce-admin.git",
        externalLink: "",
      },
    },
    {
      image: "/Project-4.png",
      projectName: "My Store - Ecomm. Store",
      projectLink: "https://github.com/aressss1/custom-ecom-store",
      projectDescription:
        "Full-Stack Ecommerce Store with Stripe Integeration as a payment gateway with features like smart product preview, add to cart, add to favourites, also contain checkout page and many more.",
      projectTech: [
        "NextJs",
        "Typescript",
        "Stripe",
        "MySQL"
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/custom-ecom-store",
        externalLink: "",
      },
    },
    {
      image: "/Project-5.png",
      projectName: "My Store - Ecomm. Store",
      projectLink: "https://github.com/aressss1/sp-clone",
      projectDescription:
        "a Spotify-style app with sleek Tailwind design, Supabase authentication, and GitHub login. Implemented features like song upload, favorites, and advanced player with Tailwind animations. Integrate Stripe for one-time and recurring payments.",
      projectTech: [
        "NextJs",
        "Typescript",
        "Supabase",
        "PostgreSQL"
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/sp-clone",
        externalLink: "",
      },
    },
  ];

  const responsiveness = [
    {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }
  ]
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>

      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} className="imageClass"  />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3  
                    onClick={() => router.push(projectExternalLinks.github)}
                    className="project-info-title">
                    {projectName}
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>

      <motion.div
        className="op-btn"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <Button
          text="See More"
          classname="btn2"
          link="https://github.com/aressss1"
        />
      </motion.div>
    </div>
  );
}

export default Projects;


