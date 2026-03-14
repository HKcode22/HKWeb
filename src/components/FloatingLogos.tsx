import { motion } from "framer-motion";
import React from "react";

const logos = [
  { label: "Python", x: "10%", delay: 0 },
  { label: "PyTorch", x: "70%", delay: 4 },
  { label: "TensorFlow", x: "30%", delay: 8 },
  { label: "SQL", x: "85%", delay: 2 },
  { label: "React", x: "50%", delay: 6 },
  { label: "AWS", x: "15%", delay: 10 }
];

export const FloatingLogos: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {logos.map((logo, index) => (
        <motion.div
          key={logo.label}
          className="floating-logo"
          style={{ left: logo.x }}
          initial={{ y: -120, opacity: 0 }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 0.35, 0],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
            delay: logo.delay,
            repeatType: "loop"
          }}
        >
          <span className="floating-logo-pill">{logo.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

