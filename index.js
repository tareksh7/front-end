document.addEventListener("DOMContentLoaded", function() {
    const userInfo = document.getElementById("user-info");
    const usernameDisplay = document.getElementById("username-display");
    const logoutButton = document.getElementById("logout-button");
    const welcomeMessage = document.getElementById("welcome-message");
    
    // Recuperar o nome de usuário do localStorage
    const username = localStorage.getItem("username");

    if (username) {
        // Exibir o nome de usuário se ele foi recuperado com sucesso do localStorage
        userInfo.style.display = "flex"; // Exibir o bloco de informações do usuário
        usernameDisplay.textContent = `Usuário: ${username}`;
        welcomeMessage.textContent = `Olá, ${username}! Bem-vindo à Página Inicial.`;
    } else {
        userInfo.style.display = "none"; // Ocultar o bloco de informações do usuário
        welcomeMessage.textContent = "Bem-vindo à Página Inicial";
    }

    // Adicionar estilos ao botão de saída
    logoutButton.addEventListener("click", function() {
        // Remover as credenciais do localStorage
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        // Redirecionar o usuário para a página de login
        window.location.href = "login.html";
    });
});
