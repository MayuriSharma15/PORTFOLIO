import React from "react";
import { motion } from "framer-motion";
import {
FaTrophy,
FaLaptopCode,
FaGraduationCap,
FaBriefcase,
} from "react-icons/fa";

const Achievements = () => {
const stats = [
{
icon: <FaTrophy />,
number: "2nd",
title: "Rank Holder",
desc: "Secured 2nd Rank in B.Sc IT",
},
{
icon: <FaLaptopCode />,
number: "3+",
title: "Projects",
desc: "Full-Stack Applications Built",
},
{
icon: <FaBriefcase />,
number: "1",
title: "Internship",
desc: "Frontend Developer Experience",
},
{
icon: <FaGraduationCap />,
number: "87.5%",
title: "HSC Score",
desc: "Academic Excellence",
},
];

return (
<section
id="achievements"
className="py-28 px-6"
style={{
background: "#111827",
color: "white",
}}
> <div className="max-w-6xl mx-auto">

<motion.h2
  initial={{ opacity:0, y:30 }}
  whileInView={{ opacity:1, y:0 }}
  viewport={{ once:true }}
  transition={{ duration:0.6 }}
  style={{
    fontSize:"58px",
    fontWeight:"700",
    color:"#22d3ee",
    marginBottom:"15px"
  }}
>
  Achievements
</motion.h2>

<p
  style={{
    color:"#94a3b8",
    marginBottom:"50px",
    fontSize:"18px"
  }}
>
  Academic and professional milestones
</p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "25px",
        marginTop: "50px",
      }}
    >
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          style={{
            background: "rgba(255,255,255,0.05)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            borderRadius: "25px",
            padding: "35px",
            textAlign: "center",
            backdropFilter: "blur(15px)",
          }}
        >
          <div
            style={{
              fontSize: "38px",
              color: "#22d3ee",
            }}
          >
            {item.icon}
          </div>

          <h3
            style={{
              fontSize: "42px",
              marginTop: "18px",
              fontWeight: "700",
            }}
          >
            {item.number}
          </h3>

          <h4
            style={{
              marginTop: "10px",
              fontSize: "20px",
            }}
          >
            {item.title}
          </h4>

          <p
            style={{
              marginTop: "10px",
              color: "#cbd5e1",
            }}
          >
            {item.desc}
          </p>

        </motion.div>
      ))}
    </div>
  </div>
</section>

);
};

export default Achievements;
