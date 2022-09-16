const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");

dotenv.config();

mongoose
  .connect("mongodb+srv://Admin:Admin123+@mindfulness.tglek.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT || 5005, () => {
  console.log("Backend server is running!");
});

// app.listen(5005, () => {
//   console.log("Backend user server is running!");
// });
