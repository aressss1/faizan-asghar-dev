import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
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
        "I developed a Discord Clone.This messaging app offers real-time communication with Socket.io and file sharing through UploadThing. It enables message editing and deletion, ensuring dynamic conversations. Users can engage in 1:1 text, audio, and video calls and manage member roles. The platform features a user-friendly interface, infinite message loading, and secure authentication.",
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
      projectName: "Spotify App",
      projectLink: "https://github.com/aressss1/ecommerce-admin.git",
      projectDescription:
        "I made a Spotify Clone. This application features song uploads, Stripe integration, and sleek Tailwind design with animations. It offers responsive design, user authentication, file storage, and robust audio player capabilities. Additionally, it seamlessly handles Stripe payments, route management, and real-time server interactions, including subscription management.",
      projectTech: [
        "NextJs",
        "Typescript",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/aressss1/ecommerce-admin.git",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        
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
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
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
    </div>
  );
}

export default Projects;
