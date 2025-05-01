# Authenticated Notes Dashboard

## Overview
The Authenticated Notes Dashboard is a full-stack web application that allows users to securely create, edit, delete, and view their notes. It includes user authentication, a responsive UI with dark/light mode, and state management using Redux. The backend is powered by Node.js and MongoDB, while the frontend is built with React and styled using TailwindCSS.

## Live Demo 🚀  
Frontend: [Netlify Deployment](https://vashu-notes-app.netlify.app/)  
Backend: [Render Deployment](https://notes-app-tumg.onrender.com)

## Features
### Frontend
- **User Authentication**: Secure login and signup functionality.
- **Notes Management**: Users can add, edit, delete, and view notes.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile.

### Backend
- **Secure API**: Built with Express.js, protected using JWT.
- **Session Persistence**: Ensures users remain logged in across sessions.
- **Database**: MongoDB for data persistence.

## Tech Stack
### Frontend
- **React**: Component-based UI library.
- **Redux**: State management for authentication and notes.
- **TailwindCSS**: Utility-first styling with dark/light mode.

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Minimalist web framework for API creation.
- **MongoDB**: NoSQL database for storing user and note data.
- **JWT**: Secure token-based authentication.

## Installation & Setup 🛠️

### Backend Setup

1. Clone the repository:
   ```sh
   https://github.com/Vashu-Nayak/Notes-App

2. Navigate to Project Folder:
   ```sh
   cd Notes-App/backend

3. Install dependencies:
   ```sh
   npm install

4. Set up the environment variables in a .env file:
    ```sh
    PORT=3000
    MONGO_URI=mongodb+srv://<Your-User-Name>:<Your_Password>@cluster0.ta5mg.mongodb.net/Notes?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=Your_Secret_Key
    ```

5. Start the Server
    ```sh
    npm start
    ```

6. Backend will run on http://localhost:3000.

### Frontend Setup

1. Navigate to the frontend folder:
    ```sh
    cd Notes-App/frontend
    ```

2. Install dependencies:
   ```sh
   npm install

3. Start the development server:
   ```sh
   npm run dev

4. Frontend will run on http://localhost:5173.

### Author :

### Vashu

Assessment Submission for Kenmark
