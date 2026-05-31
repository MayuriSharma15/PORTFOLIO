const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {

  const {
    name,
    email,
    subject,
    message
  } = req.body;

  try {

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    await transporter.sendMail({
      from: email,
      to: "sharmamayuri1706@gmail.com",
      subject: subject,
      text: `
Name: ${name}
Email: ${email}

${message}
      `
    });

    res.status(200).json({
      success: true
    });

  } catch (err) {

  console.log(err);

  res.status(500).json({
    success: false,
    error: err.message
  });

}

});

module.exports = router;