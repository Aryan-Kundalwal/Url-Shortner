const express = require("express");
const URL = require("../models/url");
const { restrictTo, checkForAuthentication } = require("../middleware/auth");

const router = express.Router();


// ============================
// 🚀 PUBLIC ROUTE (IMPORTANT)
// QR CODE WILL HIT THIS ROUTE
// NO LOGIN REQUIRED
// ============================
router.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitHistory: { timestamp: Date.now() }
                }
            }
        );

        if (!entry) {
            return res.status(404).send("URL not found");
        }

        return res.redirect(entry.redirectURL);

    } catch (error) {
        return res.status(500).send("Server Error");
    }
});


// ============================
// 🚀 USER DASHBOARD (PROTECTED)
// ============================
router.get(
    "/",
    checkForAuthentication,
    restrictTo(["NORMAL", "ADMIN"]),
    async (req, res) => {

        const allUrls = await URL.find({ createdBy: req.user._id });

        return res.render("home", {
            urls: allUrls,
            id: null,
            qrCode: null
        });
    }
);


// ============================
// 🚀 ADMIN PANEL (PROTECTED)
// ============================
router.get(
    "/admin/urls",
    checkForAuthentication,
    restrictTo(["ADMIN"]),
    async (req, res) => {

        const allUrls = await URL.find({});

        return res.render("home", {
            urls: allUrls,
            id: null,
            qrCode: null
        });
    }
);


// ============================
// 🚀 AUTH ROUTES (PUBLIC)
// ============================
router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/login", (req, res) => {
    return res.render("login");
});


module.exports = router;