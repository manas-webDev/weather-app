# 🌤️ Weather App

A responsive weather application built using HTML, CSS and JavaScript. The application allows users to search for a city and view its current weather information using the OpenWeatherMap API.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌤️ Display current weather condition
- 💧 Display humidity
- 💨 Display wind speed
- 🌧️ Dynamic weather images
- ❌ Invalid city error handling
- ⚡ Real-time weather data using an API
- 📱 **Fully Responsive Design**: Optimized for mobile and tablet screens using CSS media queries.
- 🔒 **Secure API Key Handling**: Built-in Vercel Serverless Function to hide the OpenWeather API key from the frontend.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenWeatherMap API
- Node.js (Vercel Serverless Function)

## 🚀 How to Deploy on Vercel (Securely)

To ensure your OpenWeather API Key is not exposed in the browser, follow these steps:

1. **Update `script.js`**: 
   Before deploying, comment out the `LOCAL TESTING` section and uncomment the `VERCEL DEPLOYMENT` section in `script.js`.
2. **Push to Github**: Upload this repository to your Github account.
3. **Import to Vercel**: Create a new project on Vercel and import your repository.
4. **Add Environment Variable**: 
   Before clicking "Deploy", go to the **Environment Variables** section and add:
   - **Name**: `WEATHER_API_KEY`
   - **Value**: `Your_OpenWeather_API_Key_Here`
5. **Deploy**: Click Deploy. The app will now securely fetch weather data via the `/api/weather` serverless function!

## 💻 Local Testing

If you want to test the app locally on your computer without Vercel:
1. Open `script.js`
2. Ensure the `LOCAL TESTING` section is uncommented and the `VERCEL DEPLOYMENT` section is commented out.
3. Open `index.html` in your browser. *(Note: This exposes your API key locally, so do not deploy this version!)*

## 📁 Project Structure

Weather/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
├── api/
│   └── weather.js (Serverless backend for Vercel)
│
└── weather-img/
    └── images/
        ├── clear.jpg
        ├── clouds.jpg
        ├── drizzle.jpg
        ├── humidity.jpg
        ├── mist.jpg
        ├── rain.jpg
        ├── search.jpg
        ├── snow.jpg
        └── wind.jpg