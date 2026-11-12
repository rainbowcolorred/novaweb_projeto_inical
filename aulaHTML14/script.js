// Aula 14: habilita o campo ao clicar e desabilita quando ele perde o foco.
const botoes = document.querySelectorAll(".habilitar");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    // data-target informa qual campo este botão controla.
    const campo = document.getElementById(botao.dataset.target);

    campo.disabled = false; // Habilita o input.
    campo.focus();           // Coloca o cursor dentro do input.
  });
});

const campos = document.querySelectorAll("#formulario input");

campos.forEach((campo) => {
  campo.addEventListener("blur", () => {
    campo.disabled = true; // Desabilita novamente ao perder o foco.
  });
});
