🎬 MovieExplorer

A modern and responsive Movie & TV Show Explorer built with React. MovieExplorer allows users to browse TV shows, search for specific titles, and view detailed information through an interactive modal.

The project uses the TVMaze API for real-time show data and is designed with reusable React components and responsive Tailwind CSS styling.

✨ Features

🏠 Home Page

Modern hero section

Movie/show-focused branding

Call-to-action button

Responsive navigation bar

Footer with copyright information

🎬 Movie & TV Show Listing

Fetches shows from the TVMaze API

Responsive card-based grid

Show poster/image

Show title

Rating

Premiere year

Reusable movie card component

🔍 Search

Search shows by title

Dynamic API-based search results

Search using button or Enter key

Empty-result handling

🎞️ Details Modal

Large show image

Title

Rating

Premiere year

Runtime

Genres

Summary/overview

Close button

Click-outside-to-close interaction

📱 Responsive Design

Mobile-first layout

Responsive navigation menu

Responsive search bar

1–4 column responsive grid

Mobile-friendly modal

⚡ User Experience

Loading state

Error handling

No-results state

Hover and transition effects

🛠️ Technology Stack

Frontend

React

JavaScript

React Router DOM

Tailwind CSS

Vite

API

TVMaze API

Development

npm

Git & GitHub

🌐 API

MovieExplorer uses the free TVMaze API.

Get All Shows

GET https://api.tvmaze.com/shows

Search Shows

GET https://api.tvmaze.com/search/shows?q={query}

The API integration is handled inside:

src/services/movieApi.js

📁 Project Structure

movie-explorer/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   └── MovieModal.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Movies.jsx
│   │
│   ├── services/
│   │   └── movieApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

🚀 Getting Started

Follow these steps to run MovieExplorer locally.

1. Clone the repository

git clone <YOUR_GITHUB_REPOSITORY_URL>

2. Navigate to the project

cd movie-explorer

3. Install dependencies

npm install

4. Start the development server

npm run dev

The application will be available at the local URL provided by Vite, usually:

http://localhost:5173

🏗️ Production Build

To create a production-ready build:

npm run build

To preview the production build locally:

npm run preview

🧩 Component Architecture

MovieExplorer follows a reusable component-based architecture.

App
│
├── Navbar
│
├── Routes
│   ├── Home
│   │
│   └── Movies
│       ├── SearchBar
│       ├── MovieGrid
│       │   └── MovieCard
│       │
│       └── MovieModal
│
└── Footer

Data Flow

TVMaze API
    ↓
movieApi.js
    ↓
Movies.jsx
    ↓
MovieGrid
    ↓
MovieCard
    ↓
MovieModal

🔍 Search Flow

User enters a title
        ↓
SearchBar
        ↓
Movies.jsx
        ↓
searchShows(query)
        ↓
TVMaze Search API
        ↓
Search Results
        ↓
MovieGrid
        ↓
Movie Cards

🎞️ Details Modal Flow

User clicks "See Details"
        ↓
MovieCard
        ↓
setSelectedShow()
        ↓
MovieModal
        ↓
Show Details

The modal can be closed using:

✕ close button

Close button

Clicking outside the modal

📱 Responsive Breakpoints

The movie grid adapts to different screen sizes:

Screen Size

Layout

Mobile

1 column

Small screens

2 columns

Medium screens

3 columns

Large screens

4 columns

The navigation and search interface also adapt for smaller screens.

🎨 Design

MovieExplorer uses a dark, cinematic visual style with:

Dark background

Red accent color

Gradient hero section

Rounded cards

Hover transitions

Responsive spacing and typography


🔮 Future Improvements

Possible future enhancements include:

Pagination

Advanced filtering by genre

Sorting by rating or release date

Favorites/watchlist

Dark/light theme switcher

Debounced search

Skeleton loading cards

Infinite scrolling

User authentication

Personalized recommendations
👨‍💻 Author

Your Name

GitHub: https://github.com/FerdousMunmun

Portfolio: https://ferdous-devfolio.vercel.app/

LinkedIn: https://www.linkedin.com/in/jannatul-ferdous-web/

📜 License

This project is created for educational and portfolio purposes.

Show data is provided by the TVMaze API.
