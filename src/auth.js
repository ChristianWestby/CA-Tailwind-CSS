
export function login() {
  localStorage.setItem('authToken', 'dummyToken');
  window.location.href = '/src/feed/index.html';
}

// Funksjon for å sjekke autentisering
export function checkAuth() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/index.html';
  }
}