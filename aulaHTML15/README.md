# Aula 15 - JavaScript aplicado a Formulários

## Objetivo
Criar um formulário de cadastro e utilizar JavaScript para capturar o envio, acompanhar a digitação e validar os dados antes de concluir o cadastro.

## Arquivos
- `index.html`: estrutura do formulário.
- `style.css`: aparência e organização visual.
- `script.js`: eventos, validações e mensagens.

## Como executar
1. Extraia a pasta `Aula15_Cadastro`.
2. Abra a pasta no Visual Studio Code.
3. Abra o arquivo `index.html` no navegador.

## O que foi utilizado
- `addEventListener("submit", cadastrar)`: chama a função quando o formulário é enviado.
- `event.preventDefault()`: impede o recarregamento automático da página.
- `addEventListener("input", ...)`: acompanha a digitação em tempo real.
- `trim()`: remove espaços extras no começo e no fim do texto.
- Validação customizada: verifica se todos os campos foram preenchidos e se o e-mail tem um formato válido.
- `textContent`: mostra a mensagem de sucesso ou de erro no topo do formulário.

## Resultado esperado
Ao preencher os campos corretamente e clicar em **Cadastrar**, aparece no topo do formulário a mensagem “Cadastrado com sucesso!” junto com o nome informado.
