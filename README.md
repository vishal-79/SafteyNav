SafetyNav 🚦
SafetyNav is a React Native application built without Expo, designed to provide safer navigation routes by analyzing crime data and avoiding high-risk areas. This project is part of the GDSC Solutions Challenge 2025 by team Iconic 227.

Features
Crime Data Heatmap: Dynamically rendered heatmap based on crime data from the San Francisco Government API.

Safe Route Optimization: Calculates and visualizes the safest route between two points, avoiding high-crime areas.

Dynamic Search: Integrated search bars for Origin and Destination using Google Places Autocomplete.

User Location Rendering: Displays the user's real-time location on the map.

Responsive UI/UX: Enhanced visuals with animations, clean design, and seamless user interaction.

Dynamic Data Fetching: Fetches crime data based on the user's current location to provide localized safety analysis.

Route Safety Analysis: Compares route points against crime heatmap data and identifies risky segments.

Technologies Used
React Native (without Expo)

Google Maps API

Google Directions API

Google Places Autocomplete

San Francisco Government API (for crime data)

React Native Maps

TailwindCSS (for styling)

Getting Started
Prerequisites
Node.js & npm installed

React Native CLI

Android Studio / Xcode for emulator testing

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/YourUsername/SafetyNav.git
Navigate to the project directory:

bash
Copy
Edit
cd SafetyNav
Install dependencies:

bash
Copy
Edit
npm install
Running the App
Start the Metro server:

bash
Copy
Edit
npx react-native start
Run the app on Android:

bash
Copy
Edit
npx react-native run-android
Run the app on iOS:

bash
Copy
Edit
npx react-native run-ios
Project Structure
bash
Copy
Edit
SafetyNav/
│
├── index.tsx              # Main entry point of the app
├── app/                   # Contains all screens and components
├── components/            # Reusable UI components
├── services/              # API integration and data processing logic
├── assets/                # Images, fonts, and other static assets
├── utils/                 # Utility functions and helpers
├── styles/                # Styling and Tailwind configuration
└── README.md              # Project documentation
To-Do List
 Implement heatmap rendering based on crime data.

 Integrate Google Maps Directions API for route calculation.

 Add search bars for Origin and Destination.

 Optimize route calculation to avoid high-crime areas.

 Enhance UI with animations and improved visuals.

 Add user notification system for high-risk alerts.

 Improve performance and reduce data fetch size.

 Implement real-time location tracking.

 Finalize UI/UX polish.

Contributions
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Authors
Vishal - Project Lead & Developer
Vikashini - Project Designer and UI Developer

Team Iconic 227 - GDSC Solutions Challenge 2025
