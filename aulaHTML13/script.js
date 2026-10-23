const form = document.querySelector("#formPerfil");
const mensagem = document.querySelector("#mensagem");
const biografia = document.querySelector("#biografia");
const totalCaracteres = document.querySelector("#totalCaracteres");
const telefone = document.querySelector("#telefone");

function mostrarErro(id, texto) {
    document.querySelector(`#${id}`).textContent = texto;
}

function limparErros() {
    document.querySelectorAll(".erro").forEach((campo) => {
        campo.textContent = "";
    });
    mensagem.hidden = true;
    mensagem.classList.remove("erro-geral");
}

function atualizarContador() {
    totalCaracteres.textContent = biografia.value.length;
}

biografia.addEventListener("input", atualizarContador);

// Efeito simples: formata o telefone enquanto a pessoa digita.
telefone.addEventListener("input", () => {
    let numeros = telefone.value.replace(/\D/g, "").slice(0, 11);

    if (numeros.length > 10) {
        telefone.value = numeros.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (numeros.length > 6) {
        telefone.value = numeros.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (numeros.length > 2) {
        telefone.value = numeros.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        telefone.value = numeros;
    }
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    limparErros();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const cargo = document.querySelector("#cargo").value;
    const turno = document.querySelector('input[name="turno"]:checked');
    const interesses = document.querySelectorAll('input[name="interesses"]:checked');
    const confirmacao = document.querySelector("#confirmacao").checked;

    let valido = true;

    if (nome.length < 3) {
        mostrarErro("erroNome", "Digite seu nome completo (mínimo de 3 caracteres).");
        valido = false;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        mostrarErro("erroEmail", "Digite um e-mail válido.");
        valido = false;
    }

    if (!turno) {
        mostrarErro("erroTurno", "Selecione um turno.");
        valido = false;
    }

    if (interesses.length === 0) {
        mostrarErro("erroInteresses", "Marque pelo menos uma área de interesse.");
        valido = false;
    }

    if (!cargo) {
        mostrarErro("erroCargo", "Selecione um cargo ou função.");
        valido = false;
    }

    if (!confirmacao) {
        mostrarErro("erroConfirmacao", "Marque a confirmação antes de salvar.");
        valido = false;
    }

    if (!valido) {
        mensagem.textContent = "Revise os campos destacados antes de salvar.";
        mensagem.classList.add("erro-geral");
        mensagem.hidden = false;
        return;
    }

    const dadosPerfil = {
        nome,
        email,
        telefone: telefone.value.trim(),
        turno: turno.value,
        interesses: Array.from(interesses).map((item) => item.value),
        cargo,
        biografia: biografia.value.trim()
    };

    mensagem.classList.remove("erro-geral");
    mensagem.textContent = `Perfil de ${dadosPerfil.nome} validado com sucesso! (Esta atividade não envia dados para um servidor.)`;
    mensagem.hidden = false;
});

form.addEventListener("reset", () => {
    // O reset do navegador ocorre depois deste evento; limpamos mensagens em seguida.
    setTimeout(() => {
        limparErros();
        atualizarContador();
        telefone.value = "";
    }, 0);
});
