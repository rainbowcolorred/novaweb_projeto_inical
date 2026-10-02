// Seleciona o formulário
const formulario = document.getElementById("loginForm");

// Seleciona os campos
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// Seleciona o espaço da mensagem
const mensagem = document.getElementById("mensagem");


// Quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede o envio padrão do formulário
    event.preventDefault();

    // Verifica se o e-mail está vazio
    if (email.value.trim() === "") {

        mensagem.textContent = "Digite seu e-mail.";
        mensagem.style.color = "red";

        return;
    }


    // Verifica se o e-mail possui um formato válido
    if (!email.value.includes("@")) {

        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";

        return;
    }


    // Verifica se a senha está vazia
    if (senha.value.trim() === "") {

        mensagem.textContent = "Digite sua senha.";
        mensagem.style.color = "red";

        return;
    }


    // Caso tudo esteja preenchido corretamente
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

});