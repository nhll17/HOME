// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNzH9Ybtb4TUbUgHBI9Uv3f_o2S8ioaco",
    authDomain: "home-ff487.firebaseapp.com",
    projectId: "home-ff487",
    storageBucket: "home-ff487.appspot.com",
    messagingSenderId: "1042502575422",
    appId: "1:1042502575422:web:5fe53e404e3d5c0dd8f86f",
    measurementId: "G-WS7CHSE4NV"
};

// Initialize Firebase (compatibility mode)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle Form Submission
document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const messageElement = document.getElementById("message");

    try {
        // Add Data to Firestore
        await db.collection("volunteers").add({
            name: name,
            age: age,
            gender: gender,
            phone: phone
            password: password // Save the password in Firestore

        });

        messageElement.style.color = "green";
        messageElement.innerText = "Signup successful! Volunteer added to database.";
        document.getElementById("signup-form").reset();
    } catch (error) {
        console.error("Firestore Error:", error);
        messageElement.style.color = "red";
        messageElement.innerText = "Error: " + error.message;
    }
});
