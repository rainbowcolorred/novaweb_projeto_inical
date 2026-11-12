// Seleciona os elementos do formulário.
const formulario = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoTelefone = document.getElementById("telefone");
const campoCidade = document.getElementById("cidade");
const digitando = document.getElementById("digitando");

// Captura o que está sendo digitado em tempo real.
formulario.addEventListener("input", function (evento) {
    const campo = evento.target;

    if (campo.name) {
        digitando.textContent = "Você está preenchendo: " + campo.labels[0].textContent;
    }
});

// Função executada quando o formulário é enviado.
function cadastrar(evento) {
    // Impede que a página seja recarregada automaticamente.
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const telefone = campoTelefone.value.trim();
    const cidade = campoCidade.value.trim();

    // Valida os campos antes de concluir o cadastro.
    if (!nome || !email || !telefone || !cidade) {
        mostrarMensagem("Preencha todos os campos antes de cadastrar.", "erro");
        return;
    }

    // Validação simples do formato do e-mail.
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        mostrarMensagem("Digite um e-mail válido.", "erro");
        campoEmail.focus();
        return;
    }

    // Exibe a confirmação no topo do formulário com um dado informado.
    mostrarMensagem("Cadastrado com sucesso! Nome: " + nome, "sucesso");

    formulario.reset();
    digitando.textContent = "Preencha seus dados para começar.";
}

// Exibe mensagens de sucesso ou de validação.
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = "mensagem " + tipo;
}

// O evento submit chama a função cadastrar.
formulario.addEventListener("submit", cadastrar);
