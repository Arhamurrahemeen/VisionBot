# VisionBot – Dynamic 6-Block Display for Raspberry Pi

![VisionBot](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png)

**VisionBot** is a Raspberry Pi-powered dynamic display system that shows 6 images on a 7-inch screen (or monitor) in a **3×2 grid layout**. Each image is fetched in real-time from a **MongoDB database**, and images are stored and served from **Cloudinary**, allowing you to update the display instantly without touching the Pi.

---

## Table of Contents
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [MongoDB Database Structure](#mongodb-database-structure)  
- [Cloudinary Setup](#cloudinary-setup)  
- [Frontend Layout](#frontend-layout)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  

---

## Features
- Dynamic 6-block image display (3×2 grid)  
- Real-time updates: change image in MongoDB → Pi updates automatically  
- Images hosted on Cloudinary (public secure URLs)  
- Responsive grid layout for small 7-inch screens  
- Easy backend API built with Node.js & Express  
- Auto-refresh every 5 seconds  

---

## Project Structure

Vision_Bot/  
├── backend/    
│ ├── models/  
│ │ └── Screen.js  
│ ├── routes/  
│ │ └── screenRoutes.js   
│ ├── public/  
│ │ └── index.html <-- 6-block frontend UI  
│ ├── server.js <-- Node.js + Express server  
│ ├── package.json  
│ └── .env



---

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas Cluster  
- **Storage:** Cloudinary for images  
- **Frontend:** HTML, CSS Grid, JavaScript  
- **Hardware:** Raspberry Pi 3 + 7-inch display  

---

## Setup Instructions

### 1️⃣ Clone Project
```bash
git clone <your-repo-url>
cd Vision_Bot/backend
npm install
```

### 2️⃣ Setup .env file
```bash
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@hms.6v2kiuj.mongodb.net/visionbotDB?appName=HMS
PORT=5000
```

### 3️⃣ Start the server
```bash
node server.js
```

### 4️⃣ Open on Raspberry Pi / Browser
```bash
http://localhost:5000/
```

- The 6-block screen will show the images from MongoDB

- Images update automatically every 5 seconds

---

## MongoDB Database Structure

Database: visionbotDB

Collection: screen

Sample Document:
```
{
  "_id": "screen_1",
  "blocks": {
    "block1": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png",
    "block2": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/js_wvtmx2.png",
    "block3": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/hdmi_a3a8xo.png",
    "block4": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/mazda_u34mqy.jpg",
    "block5": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/vscode_gq0k9n.png",
    "block6": "https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/github_sxg1nc.png"
  },
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```

---

## Cloudinary Setup

- Create a <b>Cloudinary</b> account: https://cloudinary.com

- Create a folder named ``visionbot``

- Upload images to the folder

- Copy <b>Secure URL</b> of each image → use in MongoDB blocks fields

Note: Only use res.cloudinary.com URLs for public access.

---

## Frontend Layout

HTML + CSS Grid for 3×2 block display

Each block ``<img>`` is auto-updated from MongoDB

---

## Future Improvements

- WebSocket support for instant updates without polling

- Admin panel to upload/change images dynamically

- Raspberry Pi kiosk mode (full-screen auto-start)

- Smooth fade-in/out transitions when images change

- Support multiple screens from same database

