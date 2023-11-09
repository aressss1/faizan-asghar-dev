import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Your success matters to me. I&apos;m dedicated to delivering value through 
        web solutions that go beyond the ordinary. Let&apos;s collaborate to create
        a project that&apos;s not just functional but also valuable.
      </p>
      <div className="contact-cta">
        <Button link="mailto:codewithfaizi@gmail.com" classname="btn1" text="Let&apos;s chat"  />
      </div>
    </motion.div>
  );
}

export default Contact;
