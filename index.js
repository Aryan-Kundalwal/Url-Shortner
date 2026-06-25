const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser')
const path = require("path")
const {connectTOMongoDB} = require('./connect')
const {checkForAuthentication , restrictTo} = require('./middleware/auth')
const URL = require('./models/url')
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 8001;


let isConnected = false;

const startDB = async () => {
  if (isConnected) return;

  try {
    await connectTOMongoDB(process.env.MONGO_URL);
    isConnected = true;
    console.log("MongoDB Connected !");
  } catch (err) {
    console.log("DB Error:", err);
  }
};

startDB();



app.set("view engine" , "ejs")
app.set("views" ,path.resolve('./views'))
app.use(cookieParser())




app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use("/url", urlRoute);
app.use("/user" ,userRoute)
app.use('/' , staticRoute)

 app.get("/url/:shortId",async (req , res) => {
   const shortId = req.params.shortId ;
  const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
        $push : {
            visitHistory : {
                timestamp : Date.now(),
            }
        },
    }
   );
   if (!entry) {
  return res.status(404).send("URL not found");
}

res.redirect(entry.redirectURL);
 })

module.exports = app

