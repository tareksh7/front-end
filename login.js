document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Recuperar a lista de logins do localStorage
        const listaDeLogins = JSON.parse(localStorage.getItem("listaLogins")) || [];

        // Verificar as credenciais na lista de logins
        const loginEncontrado = listaDeLogins.find(login => login.username === username && login.password === password);

        if (loginEncontrado) {
            console.log("Login bem-sucedido!");
            alert("Login bem-sucedido!");

            // Armazenar o nome de usuário no localStorage
            localStorage.setItem("username", username);

            // Redirecionar para a página index.html após o login bem-sucedido
            window.location.href = "home.html";
        } else {
            console.log("Credenciais inválidas. Tente novamente.");
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
/* 
1. O código adiciona um evento listener ao evento DOMContentLoaded, 
que é disparado quando o documento HTML é carregado e analisado.
2. O cóogin usando seu ID e adiciona um evento listener a ele.
3. Quando o formulário é submetido, o evento listener previne o comportamento padrão 
digo então seleciona o elemento da forma de l(que seria enviar o formulário para o servidor) 
e recupera os valores do nome de usuário e senha dos campos de entrada.
4. O código então recupera a lista de logins do localStorage usando o método getItem e a 
analisa como JSON. Se a lista estiver vazia ou não existir, ela é inicializada como 
um array vazio.
5. O código então usa o método find para pesquisar por um objeto de login na lista que 
tenha uma propriedade de nome de usuário que corresponda ao nome de usuário inserido e uma 
propriedade de senha que corresponda à senha inserida. Se uma correspondência for encontrada,
o código registra uma mensagem de sucesso no console e exibe uma mensagem de alerta para 
o usuário. O código então armazena o nome de usuário no localStorage 
usando o método setItem e redireciona o usuário para a página inicial (index.html) 
usando a propriedade window.location.href.
6. Se nenhuma correspondência for encontrada, o código registra uma mensagem de erro no 
console e exibe uma mensagem de alerta para o usuário. O usuário pode então tentar novamente 
inserindo suas credenciais.
*/

/* 
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
  <form id="login-form" onsubmit="login()">
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>

  <script>
    function login() {
      // Get the username and password from the form.
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Check if the username and password are valid.
      if (username === "" || password === "") {
        alert("Please enter a username and password.");
        return;
      }

      // Authenticate the user.
      const response = fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Handle the response.
      response.then(response => response.json())
        .then(data => {
          if (data.success) {
            // Store the username in localStorage.
            localStorage.setItem("username", username);

            // Redirect the user to the homepage.
            window.location.href = "index.html";
          } else {
            alert(data.message);
          }
        })
        .catch(error => console.error(error));
    }
  </script>
</body>
</html>
*/