import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "AI Travel Planner",
      desc:
        "AI powered itinerary planner with smart travel suggestions and API integration.",
      tech: ["React", "API", "Responsive"],
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      live: "#",
      github: "#"
    },
    {
      title: "StayEase",
      desc:
        "Airbnb inspired platform with authentication and CRUD operations.",
      tech: ["Node", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      live: "#",
      github: "#"
    },
    {
      title: "myBalance",
      desc:
        "Modern e-commerce platform with admin dashboard and OTP authentication.",
      tech: ["React", "Node", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      live: "#",
      github: "#"
    }
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{
        background:"#0f172a",
        color:"white"
      }}
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          style={{
            fontSize:"42px",
            fontWeight:"700",
            textAlign:"center"
          }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{delay:0.2}}
          style={{
            textAlign:"center",
            color:"#94a3b8",
            marginTop:"10px"
          }}
        >
          Full-stack projects showcasing design and development skills
        </motion.p>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap:"30px",
            marginTop:"50px"
          }}
        >
          {projects.map((project,index)=>(

            <motion.div
              key={index}
              initial={{
                opacity:0,
                y:50
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true
              }}
              transition={{
                duration:0.6,
                delay:index*0.2
              }}
              whileHover={{
                y:-12,
                scale:1.03
              }}
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius:"25px",
                overflow:"hidden",
                backdropFilter:"blur(15px)",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)"
              }}
            >

              <img
                src={project.image}
                alt={project.title}
                style={{
                  width:"100%",
                  height:"220px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"25px"}}>

                <h3
                  style={{
                    fontSize:"24px",
                    fontWeight:"700"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color:"#cbd5e1",
                    marginTop:"12px",
                    lineHeight:"1.7"
                  }}
                >
                  {project.desc}
                </p>

                <div
                  style={{
                    display:"flex",
                    gap:"10px",
                    flexWrap:"wrap",
                    marginTop:"18px"
                  }}
                >
                  {project.tech.map((t)=>(

                    <span
                      key={t}
                      style={{
                        background:"#1e293b",
                        color:"#22d3ee",
                        padding:"7px 12px",
                        borderRadius:"10px",
                        fontSize:"14px"
                      }}
                    >
                      {t}
                    </span>

                  ))}
                </div>

                <div
                  style={{
                    display:"flex",
                    gap:"15px",
                    marginTop:"25px"
                  }}
                >

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background:
                        "linear-gradient(135deg,#06b6d4,#8b5cf6)",
                      padding:"12px 18px",
                      borderRadius:"12px",
                      color:"white",
                      display:"flex",
                      gap:"8px",
                      alignItems:"center",
                      textDecoration:"none",
                      cursor:"pointer"
                    }}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background:"transparent",
                      border:"1px solid #22d3ee",
                      padding:"12px 18px",
                      borderRadius:"12px",
                      color:"#22d3ee",
                      display:"flex",
                      gap:"8px",
                      alignItems:"center",
                      textDecoration:"none",
                      cursor:"pointer"
                    }}
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>
            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}