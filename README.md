# HERO.IO - App Marketplace

## Description
HERO.IO is a premium web application that serves as an App Marketplace. It allows users to browse trending applications, search and sort through the full catalog, view detailed app statistics including dynamic ratings charts, and virtually "install" apps to their local dashboard.

## Features
- **Responsive Design:** Pixel-perfect layout matching the provided UI across mobile, tablet, and desktop devices.
- **App Catalog:** Interactive grid of applications with live search and sorting by download count.
- **Detailed App Views:** Dedicated pages for each app featuring comprehensive stats, descriptive content, and a `recharts`-powered rating breakdown.
- **Local Storage Integration:** Users can "install" apps. The installation state is persisted across reloads via `localStorage`, and managed on a dedicated Installation dashboard where they can also be uninstalled.
- **Notifications:** Built-in `react-toastify` alerts for installation and uninstallation events.
- **Error Handling:** Custom 404 and "App Not Found" pages for seamless UX when navigating to invalid routes.

## Tech Stack
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Recharts
- React Toastify
- Lucide React (Icons)
- LocalStorage API

## Live Link
- [Insert Live Deployment URL Here]

## Local Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open the application on your local development port.
