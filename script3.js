function MAP() {
    location.href = 'index31.html';
}

function TG() {
    location.href = 'index32.html';
}

function c() {
    location.href = 'index.html';
}

// Verifica se a URL tem o parâmetro correto
const params = new URLSearchParams(window.location.search);
if (!params.has("auth") || params.get("auth") !== "true") {
    window.location.href = "index10.html";
}

function logout() {
    window.location.href = "index10.html";
}

