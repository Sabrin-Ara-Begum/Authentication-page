const API_URL = "http://localhost:4000/api/auth";

function myMenuFunction() {
  var i = document.getElementById("navMenu");
  i.className = i.className === "nav-menu" ? "nav-menu responsive" : "nav-menu";
}

var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}

// REGISTER
async function registerUser() {
  const name =
    document.getElementById("firstName").value +
    " " +
    document.getElementById("lastName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) login();
  } catch (err) {
    alert("Registration failed");
  }
}

// LOGIN
async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert("Login failed");
  }
}
