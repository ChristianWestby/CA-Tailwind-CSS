import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired"); // Bekrefter at DOM er lastet
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    console.log("loginForm found"); // Bekrefter at login-formen finnes
    const loginButton = loginForm.querySelector("button");
    loginButton.onclick = login; // Kaller login-funksjonen ved klikk
  } else {
    console.log("loginForm not found"); // Vises hvis formen ikke finnes
  }
});