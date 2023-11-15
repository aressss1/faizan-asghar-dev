import Link from "next/link";
import React from "react";
import { FiGithub, FiFolder } from "react-icons/fi";

function OtherProjects() {
  const otherProjecData = [
    {
      title: "My Store",
      descripton: "A full stack e-commerce application with different categories and filter functionality and many more",
      technology: [
        "NextJs",
        "Typescript",
        "MySQL",
        "Prisma"
      ],
      link: "/https://github.com/aressss1/custom-ecom-store.git",
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
      link: "/https://github.com/aressss1/ecommerce-admin.git",
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
      link: "/https://github.com/aressss1/airbnbb-clone.git",
    }
  ]

  return <div className="op" >
    <h2 className="op-heading" >Other Noteworthy Projects</h2>

    <div className="op-card" >
      {otherProjecData.map((project) => (
        <div  key={project.title} className="op-card-inner" >
          <div className="op-card-top" >
            <div ><FiFolder className="op-card-icon-1" /></div>
            <Link href={project.link}  ><FiGithub className="op-card-icon-2" /></Link>
          </div>
          <h2 className="op-card-heading" >
            {project.title}
          </h2>
          <p className="op-card-description" >
            {project.link}
          </p>
          <div className="op-card-footer" >
            {project.technology.map((tech) => (
              <p key={tech} >{tech}</p>
            ))}
          </div>
        </div>
      ))}
    </div>

  </div >;

}

export default OtherProjects;
