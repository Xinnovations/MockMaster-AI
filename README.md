# 🤖 Mock Master AI: Next-Gen Interview Preparation & Recruitment Platform

<div align="center">

<img src="static/mockmasterai-logo.jpg" alt="Mock Master AI Logo" height="170">

**Team InnovateX**

**Revolutionizing Candidate Preparation & Recruiter Screening with AI**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Backend-Flask-red.svg)](https://flask.palletsprojects.com/)
[![AI](https://img.shields.io/badge/AI-Gemini%20%7C%20spaCy%20%7C%20NLTK-green.svg)](https://deepmind.google/technologies/gemini/)

**🏆 Built for Hackathons & Scalable to Enterprises**

</div>

---

## 🚨 The Problem: Broken Interview Ecosystem

### 🎓 Candidate Struggles
- 73% face **interview anxiety** (NACE, 2023)  
- 60% drop out due to **irrelevant or generic assessments**  
- No personalized feedback or adaptive preparation  
- Coding prep platforms = only practice, not holistic interviews  

### 💼 Recruiter Pain Points
- 80% HRs say **screening takes too long** (SHRM, 2024)  
- Manual test creation = **expensive & inefficient**  
- High **bias risk** in evaluations  
- Mismatch between **resume skills vs test difficulty**  

---

## 💡 Mock Master AI: Our Solution

✅ **AI-driven platform that:**  
- Parses resumes → understands candidate skills  
- Generates **personalized coding + interview questions** (via Gemini)  
- Adapts difficulty **dynamically during test**  
- Simulates **real interviews** (technical + behavioral)  
- Provides **instant analytics & improvement roadmap**  
- Bias-free **scalable evaluation for recruiters**  

---

## 🏗️ System Overview

```mermaid
graph TB
    subgraph "🎓 Candidate Journey"
        A[Resume Upload] --> B[Skill Extraction via NLP]
        B --> C[Personalized Test Generation]
        C --> D[Mock Coding Interviews<br>Python, Java, C++]
        C --> E[Soft Skills & Behavioral Q&A]
        D --> F[Feedback: Strengths & Weaknesses]
        E --> F
    end

    subgraph "💼 Recruiter Workflow"
        G[Recruiter Dashboard]
        H[Role-Specific Assessment Generator]
        I[Bias-Free Evaluation Engine]
        J[Analytics & Reporting Tools]
    end

    F --> G
    H --> G
    I --> G
    J --> G
⚙️ Technical Architecture

🔨 Tech Stack

Frontend → HTML, CSS, JavaScript (React optional)

Backend → Python Flask + REST APIs

AI/ML → Gemini (DeepMind), spaCy, NLTK

Database → PostgreSQL / MongoDB

DevOps → Docker, Kubernetes (future scaling)

Security → OAuth login, input validation, anti-cheating (future)


🔄 Workflow

1. Resume parsed with NLP (spaCy, NLTK) → extract skills & experience


2. Gemini API generates adaptive coding + behavioral questions


3. Flask backend delivers test via REST APIs


4. Candidate attempts → auto-scored + analytics generated


5. Recruiter dashboard shows results, insights, and improvement roadmap




---

🚀 Hackathon MVP (Current Build)

✅ Resume parsing with NLP
✅ Gemini integration → coding test generation
✅ Flask backend → test delivery & scoring
✅ Web UI prototype (HTML, CSS, JS)

Why Feasible?

Only 5–6 APIs needed for full workflow

Modular → can scale to enterprise

Student-team buildable within hackathon timeframe

Clear progression → MVP → SaaS Platform



---

📊 Application Screenshots

> Place all images in the static/ folder of your repo.



Dashboard Mockup


Candidate Feedback Report


Recruiter Analytics




---

🎯 Target Audience

1. Students / Job Seekers

Practice real interview scenarios with instant AI feedback


2. Recruiters / HR Teams

Faster, bias-free, skill-aligned screening


3. Hackathons & Universities

Training + evaluation at scale, with minimal manual effort



---

🚀 Quick Start Guide

Prerequisites

Node.js 18+, Python 3.9+, PostgreSQL/MongoDB

Installation

# Clone repository
git clone https://github.com/innovatex/mockmaster-ai.git
cd mockmaster-ai

# Backend setup
pip install -r requirements.txt
flask run

# Frontend (basic HTML/JS)
open index.html


---

🤝 Team InnovateX

👩‍💻 Team Leader – Lasya K. (Full-Stack + AI Integration)
👨‍💻 Backend Developer – Prathamesh (Flask, REST APIs)
👩‍🔬 NLP Engineer – [Teammate] (Resume parsing, skill extraction)
👨‍🎨 Frontend Developer – [Teammate] (UI/UX, dashboard)


---

📄 License

MIT License - See LICENSE file for details.


---

<div align="center">⭐ Star this repo if Mock Master AI inspires you!
"Practice Smart. Get Hired Faster."

</div>
