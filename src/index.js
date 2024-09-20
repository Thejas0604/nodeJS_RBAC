const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv").config();

dbConnect();
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/role", userRouter);

//start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
