// src/auth.js

// src/auth.js

export function login() {
    console.log("Login function called"); // Bekreftelse på at funksjonen blir kalt
    localStorage.setItem('authToken', 'dummyToken');
    console.log("Token set in localStorage"); // Bekrefter at token er lagret
    console.log("Attempting to navigate to /src/feed/index.html"); // Log før navigering
    window.location.href = `${window.location.origin}/src/feed/index.html`;
  }
  
  // Funksjon for å sjekke autentisering
   export function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Hvis token ikke finnes, naviger tilbake til innloggingssiden
      window.location.href = '/index.html';
    }
  }