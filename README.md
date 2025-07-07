# 🌦️ WeatherOps – A DevOps-Driven Weather Application

**WeatherOps** is a modern, lightweight weather application built to demonstrate **DevOps engineering** principles through continuous integration, secure deployment, and clean front-end architecture — all in a public GitHub project.

> ✅ **Live Demo**: [ongunakaycom.github.io/Weather7-Radar](https://ongunakaycom.github.io/Weather7-Radar)  
> 🔧 **Tech Stack**: HTML · CSS · JavaScript · Bootstrap · GitHub Actions · OpenWeatherMap API

---

## 🚀 Features

- 🔍 **Search by city name** – Real-time weather data via OpenWeatherMap API  
- 🌡️ **Live temperature & condition display** – Dynamic UI with weather icons  
- 🎨 **Responsive design** – Built with Bootstrap + custom CSS  
- 🔁 **CI/CD pipeline** – GitHub Actions for automated build & deploy  
- 🔐 **Security-first setup** – Includes dependency scanning and hardened configuration  
- ⚙️ **Ready for expansion** – Modular codebase designed for scaling (e.g., backend, Docker, testing)

---

## 🧪 DevOps Engineering Highlights

| Category              | Implementation Details                                                 |
|-----------------------|------------------------------------------------------------------------|
| 🔄 CI/CD Pipeline      | GitHub Actions: Lint → Build → Deploy on `main` push                   |
| ☁️ Deployment          | Deployed via GitHub Pages — adaptable to Netlify/Vercel                |
| 🛡️ Security Hardening   | Dependabot alerts + secure headers recommended                        |
| 🧪 Test-Ready           | Placeholder setup for unit tests, E2E (Cypress/Jest compatible)        |
| 🧱 Scalable Structure   | Easy to integrate APIs, backends, or Dockerized environments           |

---

## 📁 Project Structure

```plaintext
├── .gitattributes
├── .github/
│   └── workflows/
│       └── static.yml
├── img/
│   └── windmills.png
├── index.html
├── LICENSE
├── README.md
├── script.js
└── style.css
