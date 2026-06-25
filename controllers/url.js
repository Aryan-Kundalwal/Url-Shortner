const shortid = require("shortid");
const URL = require('../models/url')
const QRCode = require("qrcode");

async function handleGenerateNewShortUrl(req, res) {

    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            error: "url is required!"
        });
    }

    const shortID = shortid();

    const BASE_URL = "https://little-petal-object.ngrok-free.dev";

    const shortUrl = `${BASE_URL}/url/${shortID}`;


   
    const qrImage = await QRCode.toDataURL(shortUrl);

    const newUrl =await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        qrCode: qrImage,
        createdBy: req.user._id,
    });

    return res.render("home", {
        id: shortID,
        qrCode: qrImage,
        urls: await URL.find({ createdBy: req.user._id }),
    });
}

async function handleGetAnalytics(req , res){
    const shortId = req.params.shortId.trim();
   const result = await URL.findOne({shortId});
   return res.json({totalClicks :result.visitHistory.length , analytics :result.visitHistory})
}
module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
}