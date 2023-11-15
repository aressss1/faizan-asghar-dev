'use client'

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FiGithub, FiFolder } from "react-icons/fi";

function OtherProjects() {
  const otherProjecData = [
    {
      title: "My Store",
      descripton: "A comprehensive e-commerce platform offers varied categories and robust filtering options. It facilitates seamless navigation through diverse products and features. The application ensures an enhanced shopping experience with category selection ",
      technology: [
        "NextJs",
        "Typescript",
        "MySQL",
        "Prisma"
      ],
      link: "https://github.com/aressss1/custom-ecom-store.git",
    },
    {
      title: "Dashboard + CMS",
      descripton: "Shadcn UI-powered Admin integrates CMS, API, and vendor management for diverse stores like  Shoe, Laptop, Suit. It enables seamless control of categories, products, filters, and billboards, generating dynamic API routes.",
      technology: [
        "NextJs",
        "Typescript",
        "MySQL",
        "Prisma"
      ],
      link: "https://github.com/aressss1/ecommerce-admin.git",
    },
    {
      title: "AirBnb App",
      descripton: "The app boasts Tailwind design with responsive UI, offering versatile authentication options and features like Cloudinary image upload, react-hook-form validation, react-toast error handling, and react-date-range calendars for seamless user interaction.",
      technology: [
        "NextJs",
        "Typescript",
        "MongoDB",
        "Prisma"
      ],
      link: "https://github.com/aressss1/airbnbb-clone.git",
    }
  ]

  const router = useRouter()

  return <div className="op" >
    <motion.h2
      className="op-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      Other Noteworthy Projects
    </motion.h2>

    <div
      className="op-card"
    >
      {otherProjecData.map((project) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={project.title}
          onClick={() => router.push(`${project.link}`)}
          className="op-card-inner" >
          <div className="op-card-top" >
            <div>
              <FiFolder className="op-card-icon-1" />
            </div>
            <div
              onClick={() => router.push(`${project.link}`)}
            >
              <FiGithub className="op-card-icon-2" />
            </div>
          </div>
          <h2 className="op-card-heading" >
            {project.title}
          </h2>
          <p className="op-card-description" >
            {project.descripton}
          </p>
          <div className="op-card-footer" >
            {project.technology.map((tech) => (
              <p key={tech} >{tech}</p>
            ))}
          </div>
        </motion.div>
      ))}
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
  </div >;

}

export default OtherProjects;
