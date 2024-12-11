import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentroute from './Routers/studentrouter.js'
import subjectroute from './Routers/subjectrouter.js'
import marksroute from './Routers/marksrouter.js'
import connectdb from "./Database/config.js";
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())
connectdb()
app.route("/api/student", studentroute);
app.route("/api/subject", subjectroute)
app.route("/api/marks",marksroute)
app.get('/', (req, res) => {
    res.send("welcome to student api")
})
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`server connected ${process.env.PORT}` )
})
