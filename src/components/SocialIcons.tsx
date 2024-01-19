import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { SiFiverr, SiUpwork } from "react-icons/si"
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github",
     icon: <FiGithub />, 
     link: "https://www.github.com/aressss1" 
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/faizan-asghar-806794280",
    },
    {
      name: "fiver",
      icon: <SiUpwork />,
      link: "https://www.upwork.com/freelancers/~0153ab8f7cb30c77a1",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
