// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmm7yG4g8A6pfKslPU7FEj2y27kaT8ixI",
  authDomain: "data-collection-2de3e.firebaseapp.com",
  projectId: "data-collection-2de3e",
  databaseURL: "https://data-collection-2de3e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
