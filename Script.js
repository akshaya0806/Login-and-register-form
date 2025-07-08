function showRegister() {
  document.getElementById('login-box').classList.add('hidden');
  document.getElementById('register-box').classList.remove('hidden');
}

function showLogin() {
  document.getElementById('register-box').classList.add('hidden');
  document.getElementById('login-box').classList.remove('hidden');
}

// Simulated user database
const users = [];

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Welcome back, ${user.name}!`);
  } else {
    alert('Invalid login credentials.');
  }
}

function register() {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirm = document.getElementById('register-confirm').value;
  const termsAccepted = document.getElementById('terms').checked;

  if (!termsAccepted) {
    alert("Please accept the terms & conditions.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  const existing = users.find(u => u.email === email);
  if (existing) {
    alert("User already exists.");
    return;
  }

  users.push({ name, email, password });
  alert("Registration successful! You can now login.");
  showLogin();
}
