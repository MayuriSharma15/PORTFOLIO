export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#111827",
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
          Experience
        </h2>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "40px",
            boxShadow:
              "0 10px 35px rgba(0,0,0,0.35)"
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              marginBottom: "10px"
            }}
          >
            Frontend Developer Intern
          </h3>

          <p
            style={{
              color: "#22d3ee",
              fontWeight: "600"
            }}
          >
            HumbleWalking
          </p>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "10px"
            }}
          >
            Jul 2025 – Oct 2025
          </p>

          <ul
            style={{
              marginTop: "25px",
              lineHeight: "2"
            }}
          >
            <li>Built responsive UI components</li>
            <li>Collaborated with development team</li>
            <li>Enhanced UX and frontend performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}