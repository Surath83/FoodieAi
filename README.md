# FoodieAi  
🍱 **AI Food Recognition & Nutrition Tracker**

A full-stack AI-powered web app that lets users upload food images, recognizes the food, and returns detailed nutritional info using ML and the USDA FoodData Central dataset.

---

## 🌟 Features

- Upload/capture food images from browser
- ML model predicts food type using OpenCV
- Nutrition data retrieved from FDC (FoodData Central)
- Daily nutrition log feature
- Responsive UI with scroll effects
- Fully deployed on Render (Frontend + Backend)
- Project showcase video included

---

## 🚀 Tech Stack
Layer	    Tech
Frontend	React (Vite), Tailwind CSS, JavaScript
Backend	    Flask, Gunicorn, OpenCV, Pillow, Flask-CORS
ML Model	scikit-learn, OpenCV, NumPy
Database	MongoDB (future expansion)
Hosting	    Render

## 📁 Folder Structure
csharp
Copy
Edit
root/
├── Frontend/                # React frontend (Vite)
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── components/
│       └── ...
├── Backend/                 # Flask backend API
│   ├── api/                 # Flask Blueprints
│   ├── models/              # ML / CV logic
│   ├── utility/             # Helpers, data, FDC API
│   ├── input_images/
│   ├── processed_images/
│   ├── main.py
│   └── requirements.txt
└── README.md                # This file

## ⚙️ Local Setup
🔧 Backend (Flask + ML)
bash
Copy
Edit
cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py

## 💻 Frontend (React)
bash
Copy
Edit
cd Frontend
npm install
npm run dev
Note: Create a .env file in Frontend/ with:

ini
Copy
Edit
VITE_API_BASE_URL=https://your-backend.onrender.com
Replace with your actual backend URL.

## 🌐 Render Deployment
Layer	Deployed URL
Frontend	https://your-frontend.onrender.com
Backend	https://your-backend.onrender.com
🔗 Connecting Frontend & Backend
Update .env file in Frontend/

Use API endpoints in React frontend

Enable CORS in Flask backend

## 🧪 API Endpoints
Method	Endpoint	Description
POST	/predict	Uploads an image and returns predicted food + nutrition
GET	/status	Returns basic API health/status
GET	/log (optional)	Returns nutrition logs (to be implemented)

---

## 🎥 Project Demo

<video src="video.mp4" controls width="100%"></video>

## 📊 Nutrition Result

---

## ✅ Render Deployment Config
Frontend
Root Directory: Frontend/

Build Command: npm run build

Publish Directory: ./dist

Backend
Root Directory: Backend/

Build Command: pip install -r requirements.txt

Start Command: gunicorn main:app

## 🌐 Render Deployment
📌 To-Do / Future Features

🥗 Nutrition tracking by user/day

🧾 User authentication (login/register)

🧠 Improved ML model accuracy

🗂 Nutrition history dashboard

🧬 Meal suggestions based on goals

---

## 👨‍💻 Collaborators
Team: <i>Loader Logic</i>
- Surath Chowdhury
- Amam Jain
- Aditya Mishra
- Ankesh Kumar Srivastva

---

Let me know if you'd like:

- Swagger-style API docs
- A contribution guide
- License section

Happy codeing! 🚀