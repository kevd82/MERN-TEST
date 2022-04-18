require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors ({origin: "http://localhost:3000",credentials: true}))

app.use(cookieParser())

require("./config/mongoose.config")
require("./routes/card.routes")(app)
require("./routes/user.routes")(app)

app.listen(process.env.My_PORT, ()=>console.log(`Port ${process.env.My_PORT} conquered!`))