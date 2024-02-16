document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        // Recuperar a lista de logins do localStorage (ou inicializar uma lista vazia)
        const listaDeLogins = JSON.parse(localStorage.getItem("listaLogins")) || [];

        // Adicionar o novo login à lista
        listaDeLogins.push({ username, password });

        // Armazenar a lista atualizada no localStorage
        localStorage.setItem("listaLogins", JSON.stringify(listaDeLogins));

        console.log(`Cadastro de ${username} salvo no localStorage.`);
        alert(`Cadastro de ${username} salvo no localStorage. Agora você pode fazer login.`);

        // Redirecionar para a página de login após o cadastro
        window.location.href = "login.html";
    });
});
