# 🎬 CinemaHub – Movie Discovery & Trivia App

Welcome to **CinemaHub**, your personal movie companion.  
Browse popular, trending, and classic movies, build your favorites list, create watchlists, and dive into movie trivia, all in one place. Whether you’re a cinephile or just love casual movie browsing, CinemaHub is here to make your movie experience simple and fun.

---

## Table of Contents

- [🎬 CinemaHub – Movie Discovery \& Trivia App](#-cinemahub--movie-discovery--trivia-app)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [How It Works](#how-it-works)
    - [Movie API Integration](#movie-api-integration)
    - [Authentication](#authentication)
    - [Movie Context (State Management)](#movie-context-state-management)
    - [Protected Routes](#protected-routes)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

---

## Project Overview

CinemaHub is a React-based web app that connects to The Movie Database (TMDb) API to fetch movie data. It offers a seamless experience to discover, search, and organize movies you love. Users can create personalized watchlists and favorites that persist across sessions using local storage.

---

## Features

- Browse popular, trending, and now-playing movies.
- Search movies by title or director.
- Explore movies by decade.
- View detailed movie information.
- Save movies to your favorites or watchlist.
- Update watchlist movie details.
- User authentication with signup and login.
- Protected routes to restrict access to authenticated users.
- Persistent data using `localStorage`.

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- TMDb API key (sign up at [TMDb](https://www.themoviedb.org))

### Installation

1. Clone the repo:

    ```bash
   git clone https://github.com/Moringa-SDF-PT10/group-05-project.git

    ```

2. Install dependencies:

    ```bash
    cd group-05-project
    npm install
    ```

3. Create a `.env` file in the root and add your TMDb API key:

    ```env
    VITE_TMDB_API_KEY=your_api_key_here
    ```

4. Run the app:

    ```bash
    npm run dev
    ```

---

## Folder Structure

group-05-project/

│

├── public/ 

├── src/

│   ├── api/   

│   │   └── Api.js

│   ├── components/    
    

│   ├── context/            

│   ├── pages/             

│   ├── styles/             

│   ├── App.jsx             

│   └── main.jsx           

├── .env                    

├── package.json

├── README.md

└── LICENSE 



---

## How It Works

### Movie API Integration

We use TMDb API to fetch movie data including popular movies, trending, and movie details. This is handled in `/api/api.js`, which provides clean async functions like `getPopularMovies`, `searchMovies`, and `getMovieDetails`. API keys are stored securely using environment variables.

### Authentication

User authentication is a simple email-password system using React Context (`AuthContext`). User data is saved in `localStorage` to persist login state. The app provides `signup`, `login`, and `logout` functionality.

### Movie Context (State Management)

The `MovieContext` manages the favorites and watchlist data. It uses React’s Context API combined with `useState` and `useEffect` to persist user lists in `localStorage`. It exposes methods to add, remove, check, and update movies in both favorites and watchlists.

### Protected Routes

`ProtectedRoute` component wraps around routes that require authentication. If a user is not logged in, they get redirected to the login page automatically, enhancing security and user experience.

---

## Usage

After running the app:

- Navigate to **Home** to explore popular and trending movies.
- Use the search bar to find movies.
- Click on any movie card to view detailed info.
- Add movies to your **Favorites** or **Watchlist**.
- Visit your **Watchlist** page to see saved movies, remove items, or clear the list.
- Sign up or log in to save your preferences.
- Access protected pages only if authenticated.

---

## Technologies Used

- React 18  
- React Router DOM  
- React Bootstrap  
- TMDb API  
- Vite (Build tool)  
- JavaScript (ES6+)  
- CSS  

---

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions and bug fixes. Please follow the existing code style and add comments where necessary.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Contact

This project is a collaborative effort by ***Moringa-SDF-PT10 Group 05***

