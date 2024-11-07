// src/utils.js

// src/utils.js

// Login function
export function login() { // Eksport direkte fra funksjonen
    console.log("Login function called");
    localStorage.setItem('authToken', 'dummyToken');
    window.location.href = '/src/feed/index.html';
}

// Check authentication function
export function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/index.html';
    }
}