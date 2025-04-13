<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>FoodieAi - AI Food Recognition & Nutrition Tracker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      color: #333;
    }
    .container {
      max-width: 960px;
      margin: auto;
      padding: 20px;
      background: #fff;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    pre {
      background: #eee;
      padding: 10px;
      overflow-x: auto;
    }
    code {
      font-family: monospace;
      background: #f1f1f1;
      padding: 2px 4px;
      border-radius: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
    video {
      width: 100%;
      margin: 20px 0;
    }
    ul {
      padding-left: 20px;
    }
    hr {
      border: none;
      border-top: 1px solid #ccc;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🍱 FoodieAi - AI Food Recognition & Nutrition Tracker</h1>
    <p>A full-stack AI-powered web app that lets users upload food images, recognizes the food, and returns detailed nutritional info using ML and the USDA FoodData Central dataset.</p>

    <hr>

    <h2>🌟 Features</h2>
    <ul>
      <li>Upload/capture food images from browser</li>
      <li>ML model predicts food type using OpenCV</li>
      <li>Nutrition data retrieved from FDC (FoodData Central)</li>
      <li>Daily nutrition log feature</li>
      <li>Responsive UI with scroll effects</li>
      <li>Fully deployed on Render (Frontend + Backend)</li>
      <li>Project showcase video included</li>
    </ul>

    <hr>

    <h2>🚀 Tech Stack</h2>
    <table>
      <tr><th>Layer</th><th>Tech</th></tr>
      <tr><td>Frontend</td><td>React (Vite), Tailwind CSS, JavaScript</td></tr>
      <tr><td>Backend</td><td>Flask, Gunicorn, OpenCV, Pillow, Flask-CORS</td></tr>
      <tr><td>ML Model</td><td>scikit-learn, OpenCV, NumPy</td></tr>
      <tr><td>Database</td><td>MongoDB (future expansion)</td></tr>
      <tr><td>Hosting</td><td>Render</td></tr>
    </table>

    <hr>

    <h2>📁 Folder Structure</h2>
    <pre><code>root/
├── Frontend/
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── components/
│       └── ...
├── Backend/
│   ├── api/
│   ├── models/
│   ├── utility/
│   ├── input_images/
│   ├── processed_images/
│   ├── main.py
│   └── requirements.txt
└── README.md</code></pre>

    <hr>

    <h2>⚙️ Local Setup</h2>

    <h3>🔧 Backend (Flask + ML)</h3>
    <pre><code>cd Backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py</code></pre>

    <h3>💻 Frontend (React)</h3>
    <pre><code>cd Frontend
npm install
npm run dev</code></pre>

    <p><strong>Note:</strong> Create a <code>.env</code> file in <code>Frontend/</code> with:</p>
    <pre><code>VITE_API_BASE_URL=https://your-backend.onrender.com</code></pre>

    <hr>

    <h2>🌐 Render Deployment</h2>
    <table>
      <tr><th>Layer</th><th>Deployed URL</th></tr>
      <tr><td>Frontend</td><td>https://your-frontend.onrender.com</td></tr>
      <tr><td>Backend</td><td>https://your-backend.onrender.com</td></tr>
    </table>

    <hr>

    <h2>🔗 Connecting Frontend & Backend</h2>
    <ul>
      <li>Update <code>.env</code> file in Frontend</li>
      <li>Use API endpoints in React frontend</li>
      <li>Enable CORS in Flask backend</li>
    </ul>

    <hr>

    <h2>🧪 API Endpoints</h2>
    <table>
      <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
      <tr><td>POST</td><td>/predict</td><td>Uploads an image and returns predicted food + nutrition</td></tr>
      <tr><td>GET</td><td>/status</td><td>Returns basic API health/status</td></tr>
      <tr><td>GET</td><td>/log (optional)</td><td>Returns nutrition logs (to be implemented)</td></tr>
    </table>

    <hr>

    <h2>🎥 Project Demo</h2>
    <video src="video.mp4" controls></video>

    <h2>📊 Nutrition Result</h2>
    <p><i>Add screenshots of prediction and nutrition info display here.</i></p>

    <hr>

    <h2>✅ Render Deployment Config</h2>

    <h3>Frontend</h3>
    <ul>
      <li><strong>Root Directory:</strong> Frontend/</li>
      <li><strong>Build Command:</strong> <code>npm run build</code></li>
      <li><strong>Publish Directory:</strong> <code>./dist</code></li>
    </ul>

    <h3>Backend</h3>
    <ul>
      <li><strong>Root Directory:</strong> Backend/</li>
      <li><strong>Build Command:</strong> <code>pip install -r requirements.txt</code></li>
      <li><strong>Start Command:</strong> <code>gunicorn main:app</code></li>
    </ul>

    <hr>

    <h2>📌 To-Do / Future Features</h2>
    <ul>
      <li>🥗 Nutrition tracking by user/day</li>
      <li>🧾 User authentication (login/register)</li>
      <li>🧠 Improved ML model accuracy</li>
      <li>🗂 Nutrition history dashboard</li>
      <li>🧬 Meal suggestions based on goals</li>
    </ul>

    <hr>

    <h2>👨‍💻 Collaborators</h2>
    <p><strong>Team: <i>Loader Logic</i></strong></p>
    <ul>
      <li>Surath Chowdhury</li>
      <li>Amam Jain</li>
      <li>Aditya Mishra</li>
      <li>Ankesh Kumar Srivastva</li>
    </ul>

    <hr>

    <p>Let us know if you'd like:</p>
    <ul>
      <li>Swagger-style API docs</li>
      <li>A contribution guide</li>
      <li>License section</li>
    </ul>

    <h3>Happy coding! 🚀</h3>
  </div>
</body>
</html>
