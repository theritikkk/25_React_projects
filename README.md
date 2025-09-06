
# React Projects Collection

A collection of React projects showcasing multiple components, hooks, and feature flags demonstrating modern React patterns including hooks (`useState`, `useEffect`, `useCallback`), custom hooks, component composition, and deployment readiness.


---


## Production Deployment

This project is deployed on Render and accessible at:

[https://your-render-app-name.onrender.com](https://your-render-app-name.onrender.com)

You can visit this URL to see the live production version of the React Projects.


---



## Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Build & Deployment](#build--deployment)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

This project contains multiple React component examples such as:

- Accordion, Modal Popup, Custom Tabs
- Feature Flags system
- GitHub Profile Finder using REST API
- Image Slider with pagination
- Light-Dark Mode with localStorage
- Load More Data with infinite scrolling
- QR Code Generator
- Random Color Generator
- Scroll indicators and smooth scrolling examples
- Star Rating component
- TreeView navigation
- Reusable custom hooks (fetching, window resize, outside click detection)

It demonstrates practical React development skills including state management, effect hooks, performance optimizations, and deployment workflows.

---

## Features

- Modern React with functional components and hooks
- API integration with fetch and custom hooks
- Responsive UI components with CSS styling
- Deployment-ready build using Create React App
- ESLint and hook dependency best practices applied
- Ready for deployment on platforms like Vercel or Render

---

## Prerequisites

Make sure you have installed the following tools:

- [Node.js](https://nodejs.org/en/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

---

## Installation

Clone this repository:

```
git clone https://github.com/theritikkk/25_React_projects.git
cd 25_React_projects
```



Install dependencies:
```
npm install
```

---

## Running Locally

Run the development server:
```
npm start
```

Open `http://localhost:3000` in your browser to view the projects.

---

## Build & Deployment

To create a production build:
```
npm run build
```

This will create a `build` folder with optimized static files.

### Deploying on Vercel or Render

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Install command:** `npm install`

Make sure to **not commit `node_modules` or `build`** folders. Use `.gitignore` to exclude these.

---

## Folder Structure

src/
├── components/
│ ├── accordian/
│ ├── custom-modal-popup/
│ ├── custom-tabs/
│ ├── feature-flag/
│ ├── github-profile-finder/
│ ├── image-slider/
│ ├── light-dark-mode/
│ ├── load-more-data/
│ ├── qr-code-generator/
│ ├── random-color/
│ ├── scroll-indicator/
│ ├── scroll-to-top-and-bottom/
│ ├── search-autocomplete-with-api/
│ ├── star-rating/
│ ├── tree-view/
│ └── use-fetch/
├── hooks/
│ ├── useOutsideClick/
│ ├── useWindowResize/
│ └── ...
├── App.js
├── index.js
└── ...



Each component folder contains related JSX and CSS files demonstrating clean separation of concerns.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

Please ensure your code adheres to existing style and passes linting checks.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feedback, please reach out to:

- GitHub: [theritikkk](https://github.com/theritikkk)
- Email: your-email@example.com

---

*Thank you for checking out this project!*


