const express = require("express");
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


const startDB = async () => {
  if (isConnected) return;

  await connectTOMongoDB(process.env.MONGO_URL);
  isConnected = true;

  console.log("MongoDB Connected !");
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
   res.redirect(entry.redirectURL)
 })

module.exports = app

