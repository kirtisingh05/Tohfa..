var firebaseConfig = {
    apiKey: "AIzaSyDtCA-Yf8Ne31ENI6oG3fHsQt8VFZaY_nQ",
    authDomain: "tohfa-database.firebaseapp.com",
    projectId: "tohfa-database",
    storageBucket: "tohfa-database.appspot.com",
    messagingSenderId: "187759309382",
    appId: "1:187759309382:web:8113dbe86334cc28ead047",
    measurementId: "G-J3PT8QFLSS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Authentication
firebase.auth().onAuthStateChanged((user) => {
    const loginButtonContainer = document.querySelector('.form-inline');

    if (user) {
        loginButtonContainer.innerHTML = `
            <button class="btn btn-outline-light my-2 my-sm-0" id="logoutBtn" type="button">Log Out</button>
        `;

        document.getElementById('logoutBtn').addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
                window.location.href = 'index.html';
            }).catch((error) => {
                console.error('Error logging out:', error);
            });
        });
    } else {
        loginButtonContainer.innerHTML = `
            <a href="Signup.html">
                <button class="btn btn-outline-light my-2 my-sm-0" type="button">Sign Up</button>
            </a>
        `;
    }
});