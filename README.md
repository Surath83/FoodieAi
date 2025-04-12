# FoodieAi
# 🍱 AI Food Recognition & Nutrition Tracker

A full-stack AI-powered web app that lets users upload food images, recognizes the food, and returns detailed nutritional info using ML and the USDA FoodData dataset.

---

## 🌟 Features

- Upload/capture food images from browser
- ML model predicts food type using OpenCV
- Nutrition data retrieved from FDC (FoodData Central)
- Daily nutrition log feature
- Responsive UI with scroll effects
- Fully deployed on Render (Frontend + Backend)

---

## 🚀 Tech Stack

| Layer      | Tech                                    |
|------------|-----------------------------------------|
| Frontend   | React (Vite), Tailwind CSS, JavaScript  |
| Backend    | Flask, Gunicorn, OpenCV, Pillow, Flask-CORS |
| ML Model   | scikit-learn, OpenCV, NumPy             |
| Database   | MongoDB (future expansion)              |
| Hosting    | [Render](https://render.com)            |

---

## 📁 Folder Structure

root/ ├── Frontend/ # React frontend (Vite) │ ├── public/ │ └── src/ │ ├── App.jsx │ ├── components/ │ └── ... ├── Backend/ # Flask backend API │ ├── api/ # Flask Blueprints │ ├── models/ # ML / CV logic │ ├── utility/ # Helpers, data, FDC API │ ├── input_images/ │ ├── processed_images/ │ ├── main.py │ └── requirements.txt └── README.md # This file

yaml
Copy
Edit

---

## ⚙️ Local Setup

### 🔧 Backend (Flask + ML)

```bash
cd Backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
Make sure your model files and image folders exist:

bash
Copy
Edit
mkdir -p input_images processed_images
💻 Frontend (React)
bash
Copy
Edit
cd Frontend
npm install
npm run dev
Create a .env file in Frontend/ with:

env
Copy
Edit
VITE_API_BASE_URL=https://your-backend.onrender.com
Replace with your actual backend URL.

🌐 Render Deployment
Layer	Deployed URL
Frontend	https://your-frontend.onrender.com
Backend	https://your-backend.onrender.com
🔗 Connecting Frontend & Backend
1. Update Frontend .env
env
Copy
Edit
VITE_API_BASE_URL=https://your-backend.onrender.com
2. Use API in React
js
Copy
Edit
const apiUrl = import.meta.env.VITE_API_BASE_URL;

fetch(`${apiUrl}/predict`, {
  method: 'POST',
  body: formData,
});
3. Enable CORS in Flask
In main.py:

python
Copy
Edit
from flask_cors import CORS
CORS(app, origins=["https://your-frontend.onrender.com"])
🧪 API Endpoints
Method	Endpoint	Description
POST	/predict	Uploads an image and returns predicted food name and nutrition info
GET	/status	Returns basic API health/status
GET	/log (optional)	Returns nutrition logs (to implement)
Sample JSON Response:

json
Copy
Edit
{
  "food_name": "Pizza",
  "calories": 285,
  "protein": "12g",
  "fat": "10g",
  "carbohydrates": "36g"
}
⚙️ Cron/Worker Tasks (Future)
You can later add background tasks like:

Automatic log cleanup

Daily calorie summary

Notification triggers for nutrition limits

Image folder cleanup job

These can be done via:

Flask apscheduler

Render background workers

Celery with Redis (for large-scale)

🖼️ Preview
📸 Upload UI

📊 Nutrition Result

Replace with your actual screenshots hosted on GitHub or another CDN.

✅ Render Deployment Config
Frontend
Root Directory: Frontend/

Build Command: npm run build

Publish Directory: ./dist

Backend
Root Directory: Backend/

Build Command: pip install -r requirements.txt

Start Command: gunicorn main:app

📌 To-Do / Future Features
🥗 Nutrition tracking by user/day

🧾 User authentication (login/register)

🧠 Improved ML model accuracy

🗂 Nutrition history dashboard

🧬 Meal suggestions based on goals

👨‍💻 Author
Surath Chowdhury

markdown
Copy
Edit

Let me know if you'd like:

- Swagger-style **API docs**
- A **contribution guide**
- **License section**

Happy shipping! 🚀
 
