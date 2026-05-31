import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Message failed ❌");
      }

    } catch (err) {

      alert("Server Error ❌");

    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "#111827",
        color: "white",
        padding: "100px 40px"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
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
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              background: "#06b6d4",
              border: "none",
              padding: "16px",
              borderRadius: "14px",
              color: "white",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  background: "#1e293b",
  border: "1px solid #334155",
  color: "white",
  padding: "16px",
  borderRadius: "14px",
  outline: "none"
};