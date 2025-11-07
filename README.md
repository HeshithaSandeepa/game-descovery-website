# 🎮 Game Discovery Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-fast-yellowgreen?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strong-blue?logo=typescript)](https://www.typescriptlang.org/)

A modern web application built for discovering, searching, and filtering video games. This app fetches data from the powerful [RAWG.io Video Games Database API](https://rawg.io/apidocs) to provide an up-to-date and extensive game library.

---

### 🚀 Live Demo

You can try the live version of this application here:

➡️ **[https://game-app-blond.vercel.app/](https://game-app-blond.vercel.app/)**

---

### 📸 Screenshots

**Home Page**

![Home Page Screenshot](https://i.imgur.com/rSVjdG1.png)

---

### ✨ Key Features

- **Game Browsing:** Explore lists of popular, upcoming, and new games.
- **Search:** Instantly find any game by name.
- **Dynamic Filtering:** Filter games by platform (PC, PlayStation, Xbox, etc.).
- **Genre Selection:** Browse games from specific genres (e.g., Action, RPG, Strategy).
- **Responsive Design:** Fully functional and looks great on both desktop and mobile devices.

---

### 🛠️ Tech Stack

This project was built using a modern frontend stack:

- **Core:** [React.js](https://reactjs.org/) (powered by [Vite](https://vitejs.dev/))
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI/Styling:** [Chakra UI](https://chakra-ui.com/)
- **Data Fetching:** [Axios](https://axios-http.com/)
- **State Management (Data):** [React Query](https://tanstack.com/query/v3/)
- **API:** [RAWG Video Games Database API](https://rawg.io/apidocs)

---

### ⚙️ Getting Started (Local Setup)

To get a local copy up and running, follow these simple steps.

#### 1. Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (v18+ recommended)
- `npm` (installs with Node.js)

#### 2. Get Your API Key

1.  Go to [rawg.io/apidocs](https://rawg.io/apidocs) and create a free account.
2.  Navigate to your dashboard and get your API Key.

#### 3. Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/HeshithaSandeepa/game-descovery-website.git](https://github.com/HeshithaSandeepa/game-descovery-website.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd game-descovery-website
    ```

3.  **Install NPM packages:**

    ```bash
    npm install
    ```

4.  **Create your environment file:**
    - Create a new file named `.env.local` in the root of the project.
    - Add your RAWG API key to this file:

    ```env
    VITE_RAWG_API_KEY="YOUR_API_KEY_GOES_HERE"
    ```

    _(The `VITE_` prefix is necessary because this project uses Vite.)\_

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

6.  Open [http://localhost:5173](http://localhost:5173) (or the address shown in your terminal) in your browser to see the app.

---
