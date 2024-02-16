// Pega os elementos dos botões de adicionar e remover
const addButtons = document.querySelectorAll(".add");
const removeButtons = document.querySelectorAll(".remove");

// Adiciona um listener de clique para os botões de adicionar
addButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Botão Adicionar Produto clicado");
        // Lógica para adicionar um produto aqui
    });
});

// Adiciona um listener de clique para os botões de remover
removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("Botão Remover Produto clicado");
        // Lógica para remover um produto aqui
    });
});

// Ações ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Atualiza o nome de usuário exibido
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("username-display").textContent = `Bem-vindo, ${username}`;
    }

    // Adiciona um listener de clique ao botão "Sair"
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => {
        // Limpa o nome de usuário do localStorage e redireciona para a página de login
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });
});
