import './styles/main.scss';
import { login } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      login();
    });
  }
});

export function logout() {
  localStorage.removeItem('authToken');
  window.location.href = '/index.html';
}