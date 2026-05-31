export default function Education() {

  const education = [
    {
      year: "2021",
      title: "Higher Secondary Education",
      desc: "Commerce • 87.50%"
    },
    {
      year: "2023–2026",
      title: "B.Sc Information Technology",
      desc:
        "K.P.B Hinduja College • 2nd Rank"
    },
    {
      year: "Certifications",
      title: "Digital Marketing + Figma",
      desc:
        "Professional Skill Development"
    }
  ];

  return (
    <section
      id="education"
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
            marginBottom: "50px"
          }}
        >
          Education Timeline
        </h2>

        {education.map((item) => (
          <div
            key={item.title}
            style={{
              borderLeft:
                "3px solid #22d3ee",
              paddingLeft: "30px",
              marginBottom: "40px"
            }}
          >
            <h4
              style={{
                color: "#22d3ee"
              }}
            >
              {item.year}
            </h4>

            <h3
              style={{
                marginTop: "10px",
                fontSize: "24px"
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1"
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}