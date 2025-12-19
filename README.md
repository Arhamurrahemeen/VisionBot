# VisionBot – Dynamic 4-Block Display for Raspberry Pi

![VisionBot](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png)

**VisionBot** is a Raspberry Pi-powered dynamic display system that shows 4 images on a 7-inch screen (or monitor) in a **2×2 grid layout**. Each image is fetched in real-time from a **MongoDB database**, and images are stored and served from **Cloudinary**, allowing you to update the display instantly without touching the Pi.

### 🚀 Live Demo
- **Frontend (Display):** [https://dynamic-rabanadas-1be5a0.netlify.app](https://dynamic-rabanadas-1be5a0.netlify.app)
- **Backend (API):** [https://visionbot-c6yg.onrender.com](https://visionbot-c6yg.onrender.com)
- **GitHub Repository:** [https://github.com/Arhamurrahemeen/VisionBot.git](https://github.com/Arhamurrahemeen/VisionBot.git)

---

---

## 📸 Project Gallery: Expectation vs. Reality

| Reference / Inspiration | Actual Build (VisionBot) |
| :---: | :---: |
| <img src="https://res.cloudinary.com/dprfncmie/image/upload/v1766126259/Visionbot_imagine_vehcvk.jpg" alt="Reference Image" width="100%"> | <img src="https://res.cloudinary.com/dprfncmie/image/upload/v1766128512/VisionBot_Progress_ttwy9k.png" alt="Actual Build" width="100%"> |
| *What I expected it to look like* | *What I made* |

---

## Table of Contents
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
- [MongoDB Database Structure](#mongodb-database-structure)  
- [Cloudinary Setup](#cloudinary-setup)  
- [Frontend Layout](#frontend-layout)  
- [VisionBot Mobile App](#VisionBot-Mobile-App)  

---

## Features
- Dynamic 2-block image display (2×2 grid)  
- Real-time updates: change image in MongoDB → Pi/Frontend updates automatically  
- Images hosted on Cloudinary (public secure URLs)  
- Responsive grid layout for small 7-inch screens  
- Easy backend API built with Node.js & Express  
- Auto-refresh every 5 seconds  

---

## Project Structure
VisionBot/

 ├── backend/

│ ├── models/

│ │ └── Screen.js

│ ├── routes/

│ │ └── screenRoutes.js

│ ├── server.js <-- Node.js + Express server

│ ├── package.json

│ └── .env 

├── frontend/

│ └── index.html <-- 4-block frontend UI

---

## Tech Stack
- **Backend:** Node.js, Express.js (Hosted on Render)
- **Database:** MongoDB Atlas Cluster  
- **Storage:** Cloudinary for images  
- **Frontend:** HTML, CSS Grid, JavaScript (Hosted on Netlify)
- **Hardware:** Raspberry Pi 3 + 7-inch display (optional for testing)

---

## Setup Instructions

### 1️⃣ Clone Project
```bash
git clone [https://github.com/Arhamurrahemeen/VisionBot.git](https://github.com/Arhamurrahemeen/VisionBot.git)
cd VisionBot
```

### 2️⃣ Backend Setup
Navigate to the backend folder and install dependencies:

```Bash
cd backend
npm install
```

Create a .env file in the backend folder:
```bash
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@hms.6v2kiuj.mongodb.net/visionbotDB?appName=HMS
PORT=5000
```

Start the server:

```Bash
node server.js
The backend will run on http://localhost:5000
```

### 3️⃣ Frontend Setup
You can simply open the ```frontend/index.html``` file in your browser, or serve it using a local server (like Live Server).

Note: Ensure your frontend JavaScript is pointing to the correct backend URL (localhost for development or the Render URL for production).

MongoDB Database Structure

Database: ```visionbotDB```

Collection: ```screen```

Sample Document:
```
{
  "_id": "screen_1",
  "blocks": {
    "block1": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/raspberry_relgps.png)",
    "block2": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/js_wvtmx2.png](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/js_wvtmx2.png)",
    "block3": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/hdmi_a3a8xo.png](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/hdmi_a3a8xo.png)",
    "block4": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/mazda_u34mqy.jpg](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/mazda_u34mqy.jpg)",
    "block5": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/vscode_gq0k9n.png](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/vscode_gq0k9n.png)",
    "block6": "[https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/github_sxg1nc.png](https://res.cloudinary.com/dprfncmie/image/upload/v1765616999/github_sxg1nc.png)"
  },
  "updatedAt": "2025-01-01T00:00:00.000Z"
}
```
---

## Cloudinary Setup
Create a Cloudinary account: ```https://cloudinary.com```

Create a folder named ```visionbot```

Upload images to the folder

Copy the ```Secure URL``` of each image → use in MongoDB blocks fields

Note: Only use ```res.cloudinary.com``` URLs for public access.

---

## Frontend Layout
<b>Technology</b>: HTML + CSS Grid

<b>Grid</b>: 2×2 block display

<b>Update Mechanism</b>: Each block ```<img>``` is auto-updated from MongoDB data every <b>5 seconds</b>.

---

---

## 📱 VisionBot Mobile App (Controller)

We also developed a companion Android application to make controlling the display effortless. Instead of manually editing the MongoDB database, you can use the **VisionBot App**.

- **User-Friendly Interface:** specific fields to input image URLs for each block.
- **Instant Sync:** Clicking "Update" in the app sends a request to the backend, updating MongoDB and the display screen instantly.
- **No Coding Required:** Allows non-technical users to change the display content without touching the code or database.


