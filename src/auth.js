
export function login() {
  localStorage.setItem('authToken', 'dummyToken');
  window.location.href = '/src/feed/index.html';
}
export function checkAuth() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = '/index.html';
  }
}