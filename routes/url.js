const express = require("express");
const {
    handleGenerateNewShortUrl,
    handleGetAnalytics
} = require('../controllers/url');

const {
    checkForAuthentication,
    restrictTo
} = require('../middleware/auth');

const router = express.Router();

// ✅ PROTECTED ROUTE (URL CREATION)
router.post(
    "/",
    checkForAuthentication,
    restrictTo(["NORMAL"]),
    handleGenerateNewShortUrl
);

// ✅ PUBLIC OR PROTECTED (your choice, analytics usually protected)
router.get(
    '/analytics/:shortId',
    checkForAuthentication,
    handleGetAnalytics
);

module.exports = router;