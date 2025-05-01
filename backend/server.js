const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/authRoutes.js")
const noteRoutes = require("./routes/notesRoutes.js")
const { connectDB } = require('./config/db.js');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => callback(null, true), 
  credentials: true,
}));


app.use("/auth" , authRoutes)
app.use("/note" , noteRoutes)


app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});
