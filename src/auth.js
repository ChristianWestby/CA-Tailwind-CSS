// src/auth.js

// Funksjon for å logge inn og navigere til feed-siden
 export function login() {
    localStorage.setItem('authToken', 'dummyToken');
    window.location.href = '/feed/index.html';
  }
  
  // Funksjon for å sjekke autentisering
   export function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Hvis token ikke finnes, naviger tilbake til innloggingssiden
      window.location.href = '/index.html';
    }
  }