
export function login() {
    console.log("Login function called");
    localStorage.setItem('authToken', 'dummyToken');
    window.location.href = '/src/feed/index.html';
}

export function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/index.html';
    }
}