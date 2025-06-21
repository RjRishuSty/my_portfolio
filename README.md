# 💼 My Portfolio – Full Stack Developer Showcase

This is my personal portfolio web application built using **React.js (frontend)** and **Express.js + MongoDB (backend)**. It showcases my skills, projects, and experience in modern web development through a clean and animated user interface. Visitors can explore project cards and view detailed information through a dynamic, route-aware layout.

The application also includes a secure **Admin Panel** with functionality to add new projects, making the content fully manageable through protected routes and JWT-based authentication.

---

## 🔗 Live Links

- 🌍 **Frontend**: [https://rishu-portfolio-three.vercel.app/](https://rishu-portfolio-three.vercel.app/)
- ⚙️ **Backend API (Render)**: [https://my-protfolio-backend-bi5k.onrender.com](https://my-protfolio-backend-bi5k.onrender.com)
- 📁 **GitHub Repo**: [https://github.com/RjRishuSty/my_portfolio](https://github.com/RjRishuSty/my_portfolio)

---

## 🧠 Project Features

### ✨ General
- Animated UI built with **Framer Motion**
- Clean and responsive design using **MUI**
- Routing with **React Router v7**
- Dynamic header that changes based on page (especially on project detail view)
- Secure **Admin Login** with protected project management routes

### 📂 Projects Page
- Lists all featured projects from the backend
- "View Details" opens the full description, image, and dev details for each project

### 📄 Project Details Page
- Dynamic route-based detail view for each project
- Uses `useParams` to fetch data and update the header

### ✍️ Contact Form
- Fully functional contact form with validation
- Form submissions are stored in MongoDB and validated using custom logic

---

## 🛠 Backend API Features

- 🔐 JWT-based admin authentication
- 📨 **POST /api/messages** – Submits user messages with email validation
- 📤 **POST /api/projects** – Allows admin to add projects (with duplication check)
- 📥 **GET /api/projects** – Fetches all saved projects from MongoDB

> API hosted at: [`https://my-protfolio-backend-bi5k.onrender.com`](https://my-protfolio-backend-bi5k.onrender.com)

---

## ⚙️ Tech Stack

### 🔧 Frontend (React)
| Technology       | Purpose                            |
|------------------|------------------------------------|
| React 19         | Component-based frontend           |
| React Router v7  | Page navigation                    |
| MUI              | Component library                  |
| Emotion          | MUI styling                        |
| Framer Motion    | UI animations                      |
| Swiper.js        | Carousel for project images        |
| Axios            | HTTP requests                      |
| Notistack        | Snackbar alerts                    |
| js-cookie        | Token handling                     |

### 🛠 Backend (Node.js + Express)
| Technology       | Purpose                            |
|------------------|------------------------------------|
| Express.js 5     | RESTful API backend                |
| Mongoose 8       | MongoDB ODM                        |
| JWT              | Token-based authentication         |
| Bcrypt.js        | Password hashing                   |
| CORS             | Cross-origin requests              |
| Cookie-parser    | Read/set secure cookies            |
| dotenv           | Environment variable support       |

---





---

Let me know if you'd like:
- A PDF version of this `README`
- Help generating project badges (e.g., build passing, deployed on Vercel)
- A visual banner for your GitHub page
