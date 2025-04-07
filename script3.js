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
    window.location.href = "https://robsonsantos3795.github.io/Secretaria-da-Educacao/index10.html?auth=true";
}

function logout() {
    window.location.href = "https://robsonsantos3795.github.io/Secretaria-da-Educacao/index10.html?auth=true";
}

