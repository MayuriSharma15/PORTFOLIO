import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <>
      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 180, 0],
          y: [0, -100, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "fixed",
          top: "10%",
          left: "-120px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "#06b6d4",
          opacity: 0.35,
          filter: "blur(80px)",
          zIndex: -1
        }}
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -180, 0],
          y: [0, 120, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "fixed",
          top: "45%",
          right: "-120px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#8b5cf6",
          opacity: 0.30,
          filter: "blur(80px)",
          zIndex: -1
        }}
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          y: [0, 150, 0]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: "fixed",
          bottom: "-120px",
          left: "35%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "#ec4899",
          opacity: 0.28,
          filter: "blur(80px)",
          zIndex: -1
        }}
      />
    </>
  );
}