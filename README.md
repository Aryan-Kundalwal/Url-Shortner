## 🔗 URL SHORTENER + QR CODE GENERATOR
Node.js · Express · MongoDB · React · Vercel

A scalable, full-stack URL shortening platform designed to deliver fast link generation, QR-based sharing, and real-time analytics. The system enables users to convert long URLs into compact, shareable links, track click activity, generate downloadable QR codes, and access links seamlessly across any device.

---

## 🚀 SYSTEM OVERVIEW

This application is engineered with a production-oriented architecture focusing on performance, accessibility, and modular backend design. It supports real-world link distribution use cases including QR-based sharing, analytics tracking, and cross-device redirection using a secure backend exposed via tunneling.

The system integrates MongoDB for persistent storage, Node.js/Express for API handling, and a React-based frontend deployed on Vercel for global accessibility.

---

## ✨ CORE CAPABILITIES

### 🔗 USER LAYER
- Instant short URL generation from long URLs
- Seamless redirection to original URLs
- QR code generation for every shortened link
- Downloadable QR images for offline sharing
- Cross-device accessibility via public endpoint (ngrok)
- Click tracking for every URL access

### 📊 ANALYTICS LAYER
- Real-time click count tracking per URL
- Persistent storage of URL access metrics in MongoDB
- Structured data model for URL + analytics mapping

###  🌐 ACCESS & SHARING LAYER
- Shareable short links accessible globally
- QR-based sharing for mobile-first workflows
- Direct link access without authentication barriers

---

### 🧠 ENGINEERING ARCHITECTURE

- Client–Server separation for modular scalability
- RESTful API design for predictable communication
- Stateless backend services for horizontal scalability
- MongoDB-based persistence layer for URL mapping & analytics
- QR generation pipeline integrated at API layer
- Public tunneling via ngrok for backend exposure
- Frontend hosted on Vercel for production deployment

---

## 🛠️ TECH STACK

### Frontend:
- React.js
- CSS3
- Axios

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB (Mongoose)

### Libraries & Tools:
- shortid (unique URL generation)
- qrcode (QR code generation)
- ngrok (public backend exposure)
- cookie-parser / JWT (if authentication used)

## Deployment:
- Frontend → Vercel
- Backend → Node.js + ngrok tunnel
- Database → MongoDB Atlas / Local MongoDB

---

## ⚙️ WORKFLOW

1. User enters a long URL
2. Backend generates a unique short ID
3. Mapping is stored in MongoDB
4. QR code is generated for the short URL
5. System returns:
   - Short URL
   - QR Code image
6. User can:
   - Copy link
   - Scan QR code
   - Download QR image
7. Every access increments click counter
8. User is redirected to original URL instantly

---

##🔗 API ENDPOINTS

### URL Management:
- POST /api/url → Create short URL
- GET /url/:shortId → Redirect to original URL

### Analytics:
- GET /api/url/analytics/:shortId → Fetch click statistics

---
## 📁 Project Structure

short-url/
├── controller/ # Route controllers (business logic handlers)
├── route/ # API & web routes
├── middleware/ # Authentication / logging / request handling
├── models/ # MongoDB schemas
├── service/ # Core business logic (URL, QR, analytics)
├── views/ # EJS templates (frontend rendering)
├── connect.js # MongoDB connection setup
├── index.js # App entry point
├── vercel.json # Vercel deployment configuration
├── package.json # Dependencies & scripts
├── package-lock.json # Dependency lock file
├── .gitignore # Ignored files
└── README.md # Project documentation

---

## 📌 KEY ENGINEERING HIGHLIGHTS

- Designed a high-performance URL redirection system with minimal latency
- Implemented QR-based link distribution for mobile-first accessibility
- Built analytics pipeline for tracking URL usage in real time
- Integrated ngrok for production-like external API exposure
- Ensured modular backend design for future scalability

---

## 🚀 FUTURE ENHANCEMENTS

- Custom branded URLs (vanity slugs)
- Expiration-based short links
- Advanced analytics dashboard (geo/device tracking)
- User authentication & history tracking
- Rate limiting & abuse prevention system
- Custom domain mapping support

---

## 👨‍💻 AUTHOR

-GitHub: https://github.com/Aryan-Kundalwal
-LinkedIn: https://linkedin.com/in/your-profile
