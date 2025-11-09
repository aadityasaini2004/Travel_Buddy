Travel Buddy - AI Powered Trip Planner
Welcome to Travel Buddy – an AI-powered web application that helps you plan and organize your dream trips, save itineraries, and manage travel plans with ease.

🚀 Features
AI Trip Generation: Generate personalized travel itineraries using Google's Gemini AI.

User Authentication: Secure login & signup using Clerk.

Search Destinations: Find locations using OpenStreetMap.

Save & Manage Trips: Store your itineraries in MongoDB, view and delete anytime.

Modern UI: Clean dark theme with smooth design and page transitions.

📦 Tech Stack
Frontend: React, Vite, Clerk, Tailwind CSS, Axios, React Router

Backend: Node.js, Express, MongoDB, Mongoose, CORS, dotenv

External APIs: Gemini AI (Google), OpenStreetMap

📁 Folder Structure
bash
Travel-Planner-Project/
│
├── backend/               # Node/Express API
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Trip.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── trips.js
│   ├── server.js
│   └── .env
│
├── frontend/              # React UI
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── create-trip/
│   │   ├── my-trips/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env.local
🛠️ Installation & Setup
Backend Setup (Node.js & Express)
Go to backend folder:

text
cd backend
Install dependencies:

text
npm install
Create .env file:

text
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start backend server:

text
npm run dev
Server runs on http://localhost:5000.

Frontend Setup (React + Vite)
Go to frontend folder:

text
cd frontend
Install dependencies:

text
npm install
Add .env.local:

text
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_GEMINI_API_KEY=your_gemini_api_key
Start frontend:

text
npm run dev
App runs on http://localhost:5173.

🌐 Usage
Open the app in browser (http://localhost:5173)

Login/Signup (Clerk).

Enter your travel preferences.

Generate your trip itinerary.

Save, view, and manage trips on "My Trips" page.

📝 Important Links
Clerk: https://clerk.com/

Gemini AI: https://aistudio.google.com/

MongoDB Atlas: https://www.mongodb.com/atlas/database

OpenStreetMap: https://nominatim.openstreetmap.org

