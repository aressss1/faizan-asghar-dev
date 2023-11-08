import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Greetings! I'm Faizan, a dedicated creator deeply passionate
            about shaping innovative digital landscapes. My venture into 
            the realm of web development began in 2021 when I brought 
            <span className="link">SocioMedia</span> to life—an inspiring
            social media app crafted with the expertise of React and Node.js.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to the present day, I've become a maestro in crafting
            high-quality solutions that not only exceed my clients&apos;
            <span className="link">expectations</span> but also supercharge their growth in no time. 
            My expertise spans front-end and back-end technologies, enabling me
            to create end-to-end solutions that excel in both form and function.
          </p>

          <p className="about-grid-info-text">
           My approach is rooted in aligning technical solutions with your business
           objectives to boost efficiency and ROI. I thrive on problem-solving, 
           embrace challenges, and value collaborative teamwork
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">My Sql</li>
            <li className="about-grid-info-list-item">PostgreSQL</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Clerk</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
