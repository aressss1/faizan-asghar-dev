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
            Greetings! I&apos;m Faizan Asghar, a Talented full stack web developer. With 3 years of experience, my mission is simple: to provide <span className="link" >value-driven</span> web applications & websites that make a difference. I&apos;m passionate about understanding your objectives and crafting tailored web applications that align perfectly with your vision.
          </p>
          <p className="about-grid-info-text">
            I thrive when collaborating with <span className="link" >visionaries—individuals</span> who have a clear understanding of their objectives and have conducted thorough research into their needs. Your creative mindset and innovative spirit resonate with my dedication to delivering unique, purpose-driven web applications.
          </p>
          <p className="about-grid-info-text">
            Your vision guides my approach. I start by delving deep into your <span className="link" >ideas</span>, <span className="link" >plans</span>, and execution strategies for your web application. Understanding your unique value proposition and market differentiators is crucial to crafting a standout web application tailored to your <span className="link" >success</span>.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Tailwind CSS</li>
            <li className="about-grid-info-list-item">Shadncn UI</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">My Sql</li>
            <li className="about-grid-info-list-item">PostgreSQL</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Clerk</li>
            <li className="about-grid-info-list-item">Next Auth</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
