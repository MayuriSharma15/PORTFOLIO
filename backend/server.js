const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/contact",
  require("./routes/contactRoutes")
);

app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});