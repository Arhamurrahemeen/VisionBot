# VisionSync – Dynamic 4-Block Display for Raspberry Pi

![VisionBot](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png)

**VisionSync** is a Raspberry Pi-powered dynamic display system that shows 4 images on a 7-inch screen (or monitor) in a 2×2 grid layout. Each image is fetched in real-time from a MongoDB database, and images are stored and served from Cloudinary, allowing you to update the display instantly without touching the Pi.


---

## 🚀 Live Demo

* **Frontend (Display):** [https://dynamic-rabanadas-1be5a0.netlify.app](https://dynamic-rabanadas-1be5a0.netlify.app)
* **Backend (API):** [https://visionbot-c6yg.onrender.com](https://visionbot-c6yg.onrender.com)
* **GitHub Repository:** [https://github.com/Arhamurrahemeen/VisionBot.git](https://github.com/Arhamurrahemeen/VisionBot.git)

---

# 📸 Project Gallery: Concept → Prototype → Reality

|                                                          Reference / Inspiration                                                          |                                      Prototype                                     |                                                         Final Build (VisionBot)                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://res.cloudinary.com/dprfncmie/image/upload/v1766126259/Visionbot_imagine_vehcvk.jpg" alt="Reference Image" width="100%"> | <img src="https://res.cloudinary.com/dprfncmie/image/upload/v1766128512/VisionBot_Progress_ttwy9k.png" alt="Prototype Build" width="100%"> | <img src="https://res.cloudinary.com/dprfncmie/image/upload/v1771173710/VisonSync_z8txno.jpg" alt="Final Build" width="100%"> |
|                                                    *What I imagined it would look like*                                                   |                    *Early hardware testing & layout experiments*                   |                                          *Fully working Raspberry Pi-powered dynamic display*                                          |

---

## 📑 Table of Contents

* [Features](#features)
* [Project Structure](#project-structure)
* [Tech Stack](#tech-stack)
* [Setup Instructions](#setup-instructions)
* [MongoDB Database Structure](#mongodb-database-structure)
* [Cloudinary Setup](#cloudinary-setup)
* [Frontend Layout](#frontend-layout)
* [VisionBot Mobile App](#visionbot-mobile-app)
* [Contact & Services](#contact--services)

---

# ✨ Features

* Dynamic 4-block image display (2×2 grid)
* Real-time updates (MongoDB → Frontend auto refresh)
* Images hosted on Cloudinary (secure public URLs)
* Responsive layout for small 7-inch screens
* Backend API built with Node.js & Express
* Auto-refresh every 5 seconds
* Companion Android control app

---

# 📁 Project Structure

```
VisionBot/

├── backend/
│   ├── models/
│   │   └── Screen.js
│   ├── routes/
│   │   └── screenRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env

├── frontend/
│   └── index.html
```

---

# 🛠 Tech Stack

**Backend:** Node.js, Express.js (Hosted on Render)
**Database:** MongoDB Atlas
**Storage:** Cloudinary
**Frontend:** HTML, CSS Grid, JavaScript (Hosted on Netlify)
**Hardware:** Raspberry Pi 3 + 7-inch display

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Project

```bash
git clone https://github.com/Arhamurrahemeen/VisionBot.git
cd VisionBot
```

---

## 2️⃣ Backend Setup

Navigate to backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```bash
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/visionbotDB
PORT=5000
```

Start the server:

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

Simply open:

```
frontend/index.html
```

Or use a local server like **Live Server**.

Make sure the frontend JavaScript is pointing to:

* `localhost` for development
* Render backend URL for production

---

# 🗄 MongoDB Database Structure

**Database:** `visionbotDB`
**Collection:** `screen`

Sample Document:

```json
{
  "_id": "screen_1",
  "blocks": {
    "block1": "https://res.cloudinary.com/example1.png",
    "block2": "https://res.cloudinary.com/example2.png",
    "block3": "https://res.cloudinary.com/example3.png",
    "block4": "https://res.cloudinary.com/example4.png"
  },
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

---

# ☁️ Cloudinary Setup

1. Create an account at [https://cloudinary.com](https://cloudinary.com)
2. Create a folder named `visionbot`
3. Upload images
4. Copy the **Secure URL**
5. Paste into MongoDB blocks

⚠️ Only use `res.cloudinary.com` URLs for public access.

---

# 🎨 Frontend Layout

**Technology:** HTML + CSS Grid

**Grid System:** 2×2 block layout

**Update Mechanism:**
Each `<img>` element auto-updates every **5 seconds** from MongoDB data.

---

# 📱 VisionSync Mobile App (Controller)


We also developed a companion Android application to make controlling the display effortless.

Instead of manually editing MongoDB, you can use the **VisionBot App**:

* User-friendly interface
* Input fields for each block
* One-click update
* Instant backend sync
* No coding required

---

# 📞 Contact & Services

I provide **paid and unpaid services** for:

* Raspberry Pi Projects
* IoT Systems
* Full Stack Applications
* Automation Systems

Feel free to connect:

**LinkedIn:** [https://www.linkedin.com/in/muhammad-arham-a20a09299/](https://www.linkedin.com/in/muhammad-arham-a20a09299/)
**Instagram:** [https://www.instagram.com/arham_urrahemeen](https://www.instagram.com/arham_urrahemeen)
**Email:** [arhamurrahemeen@gmail.com](mailto:arhamurrahemeen@gmail.com)

---

⭐ If you found this project helpful, please give it a star on GitHub!

---

If you want, I can now:

* Make a **minimal elite GitHub-style README version**
* Or make a **portfolio showcase version**
* Or optimize it to look investor/startup level** 🚀
