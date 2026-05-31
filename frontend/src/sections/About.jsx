export default function About() {
  return (
    <section
      id="about"
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
            marginBottom: "30px",
            color: "#22d3ee"
          }}
        >
          About Me
        </h2>

        <div
          style={{
            background: "#1f2937",
            borderRadius: "25px",
            padding: "35px",
            lineHeight: "1.8"
          }}
        >
          <p>
            I am Mayuri Sharma, a passionate
            Full-Stack Web Developer and
            B.Sc IT student from Mumbai.

            I secured 2nd Rank in my class and
            enjoy creating modern, responsive
            and recruiter-focused web applications.

            My goal is to build impactful
            digital experiences and grow as a
            professional developer.
          </p>
        </div>
      </div>
    </section>
  );
}