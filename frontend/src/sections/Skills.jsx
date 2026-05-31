import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

export default function Skills() {

  const skills = [
    {
      name: "React.js",
      icon: <FaReact />
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />
    },
    {
      name: "GitHub",
      icon: <FaGithub />
    }
  ];

  return (
    <section
      id="skills"
      style={{
        background: "#0f172a",
        color: "white",
        padding: "100px 40px"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#22d3ee",
            marginBottom: "40px"
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px"
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: "#1e293b",
                padding: "35px",
                borderRadius: "22px",
                textAlign: "center"
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  color: "#22d3ee"
                }}
              >
                {skill.icon}
              </div>

              <h3
                style={{
                  marginTop: "18px"
                }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}