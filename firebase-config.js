import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDtCA-Yf8Ne31ENI6oG3fHsQt8VFZaY_nQ",
    authDomain: "tohfa-database.firebaseapp.com",
    projectId: "tohfa-database",
    storageBucket: "tohfa-database.appspot.com",
    messagingSenderId: "187759309382",
    appId: "1:187759309382:web:8113dbe86334cc28ead047",
    measurementId: "G-J3PT8QFLSS"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);