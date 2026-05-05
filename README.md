# YouTube Video Listing UI (React + FreeAPI)

A modern YouTube-style video browsing interface built using **React** and the **FreeAPI YouTube Videos endpoint**. The project focuses on clean architecture, API integration, and a futuristic red-black-white UI with neon glow effects.

---

## 🚀 Live Demo



https://github.com/user-attachments/assets/0dacccfc-6505-4792-9681-c47788bb3fd5



---

## 📌 Features

- 🎥 Fetches real YouTube-style video data from FreeAPI
- 📺 Responsive video grid layout (YouTube-inspired)
- ⚡ Clean API integration with data normalization
- 🧠 Proper unique key handling (no React warnings)
- 🎨 Futuristic red/black/white theme
- ✨ Neon glow hover effects on cards
- 📱 Fully responsive design

---

## 🔗 API Used

https://api.freeapi.app/api/v1/public/youtube/videos

---

## 🧰 Tech Stack

- React (Vite / CRA)
- JavaScript (ES6+)
- CSS3 (Custom modern styling)
- FreeAPI (YouTube Video Data)

---

## 📁 Folder Structure

src/
│
├── api/
│   └── videos.js
│
├── components/
│   ├── VideoCard.jsx
│   └── VideoGrid.jsx
│
├── pages/
│   └── Home.jsx
│
├── styles.css
│
├── App.jsx
└── main.jsx

---

## ⚙️ How It Works

- App fetches data from FreeAPI endpoint
- API response is normalized to extract `video.items`
- Data is passed into a grid component
- Each video card renders:
  - Thumbnail
  - Title
  - Channel name
  - Views + publish date
- UI renders a responsive YouTube-style feed

---

## 🎨 UI Design

- Dark cinematic background (black base)
- Red neon glow accents
- Glass + neon hybrid cards
- Smooth hover animations
- Card lift + glow effect on interaction

---

## ▶️ Setup Instructions

```bash
git clone <repo-url>
cd project-folder
npm install
npm run dev

```
---
## Project made under - Web Dev COHORT 2026 by Chai Code.
