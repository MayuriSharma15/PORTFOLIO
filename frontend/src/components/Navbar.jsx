import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Achievements",
    "Education",
    "Contact"
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "rgba(8,11,20,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* LOGO */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700"
          }}
        >
          Mayuri Sharma
        </h2>

        {/* DESKTOP MENU */}
        <ul className="desktop-menu">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <div
          className="mobile-icon"
          onClick={() => setOpen(!open)}
          style={{
            color: "white",
            fontSize: "24px",
            cursor: "pointer"
          }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "#0f172a",
            padding: "20px"
          }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
                padding: "12px 0"
              }}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}