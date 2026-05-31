import { motion } from "framer-motion";

export default function Navbar() {

  const links = [
    "about",
    "skills",
    "experience",
    "projects",
    "achievements",
    "education",
    "contact"
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "18px 50px",
        background: "rgba(15,23,42,0.75)",
        backdropFilter: "blur(14px)",
        borderBottom:
          "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "24px"
        }}
      >
        Mayuri Sharma
      </h1>

      <div
        style={{
          display: "flex",
          gap: "25px"
        }}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              fontWeight: "500"
            }}
          >
            {item.charAt(0).toUpperCase() +
              item.slice(1)}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}