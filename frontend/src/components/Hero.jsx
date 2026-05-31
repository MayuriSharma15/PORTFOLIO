import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaCode,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaGithub
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

import profile from "../assets/mayuri.jpeg";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "120vh",
        background:
          "linear-gradient(135deg,#0f172a,#111827,#1e1b4b)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* Image + Floating Icons */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            margin: "0 auto 35px"
          }}
        >

          {/* React */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "10px",
              left: "-20px",
              fontSize: "38px",
              color: "#61dafb"
            }}
          >
            <FaReact />
          </motion.div>

          {/* Node */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "20px",
              right: "-10px",
              fontSize: "36px",
              color: "#22c55e"
            }}
          >
            <FaNodeJs />
          </motion.div>

          {/* Mongo */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            style={{
              position: "absolute",
              bottom: "35px",
              left: "-20px",
              fontSize: "34px",
              color: "#4ade80"
            }}
          >
            <SiMongodb />
          </motion.div>

          {/* GitHub */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            style={{
              position: "absolute",
              bottom: "25px",
              right: "-15px",
              fontSize: "34px",
              color: "white"
            }}
          >
            <FaGithub />
          </motion.div>

          {/* Main Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            style={{
              width: "220px",
              height: "220px",
              margin: "20px auto",
              borderRadius: "50%",
              padding: "5px",
              background:
                "linear-gradient(135deg,#06b6d4,#8b5cf6,#ec4899)",
              boxShadow:
                "0 0 45px rgba(34,211,238,0.35)"
            }}
          >
            <img
              src={profile}
              alt="Mayuri Sharma"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #0f172a"
              }}
            />
          </motion.div>

        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "58px",
            fontWeight: "700"
          }}
        >
          Mayuri Sharma
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "15px",
            color: "#22d3ee",
            fontSize: "28px",
            fontWeight: "600"
          }}
        >
          <TypeAnimation
            sequence={[
              "Full-Stack Web Developer",
              2000,
              "React Developer",
              2000,
              "B.Sc. IT Student",
              2000,
              "MERN Developer",
              2000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: "20px",
            color: "#cbd5e1",
            maxWidth: "700px",
            lineHeight: "1.8"
          }}
        >
          B.Sc. IT Student • 2nd Rank Holder •
          Building beautiful modern websites and scalable
          full-stack applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "18px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background:
                "linear-gradient(135deg,#06b6d4,#8b5cf6)",
              border: "none",
              padding: "14px 26px",
              borderRadius: "14px",
              color: "white",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            <FaCode />
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "transparent",
              border: "2px solid #22d3ee",
              padding: "14px 26px",
              borderRadius: "14px",
              color: "#22d3ee",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            <FaDownload />
            Download Resume
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
}