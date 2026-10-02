# 🍽️ Blog Mesa Posta

## Descrição do Projeto
O Blog Mesa Posta é um site a ser desenvolvido para compartilhar receitas culinárias de forma organizada e intuitiva. O projeto será criado utilizando HTML e CSS, visando oferecer uma navegação "simples" entre as páginas de receitas e contato.

## 👤 DEV.
- Juliana Magalhães de Assis Dias

## Estrutura Analítica do Projeto (EAP)
Código |	       Etapa	        |           Atividades
1.0	   |Projeto Mesa Posta	        |   Desenvolvimento e organização do site
1.1    |Estrutura do projeto	    |   Criação da estrutura de pastas
1.2    |Desenvolvimento das páginas	|   Criação das páginas HTML
1.2.1  |Página inicial	            |   Organização do layout HOME
1.2.2  |Página de receitas	        |   Adic. e organizar receitas e categorias
1.2.3  |Página de contato	        |   Criar e revisar formulário de contato
1.2.4  |Página Sobre	            |   Criar página “SOBRE”
1.3	   |Conteúdo e ident. visual	|   Escolha de imagens, receitas e logo
1.3.1  |Receitas	                |   Adicionar receitas e separar categorias
1.3.2  |Imagens	                    |   Escolher imagens para o projeto
1.3.3  |Identidade visual	        |   Logo do projeto
1.4	   |Navegação	                |   Ajustar a navegação entre as páginas
1.5	   |Estilização	                |   Desenvolvimento do CSS
1.6	   |Documentação	            |   Atualização do README
1.7	   |Testes e revisão	        |   Testar links e revisar formulário
1.8	   |Finalização	                |   Revisão geral e conclusão do projeto

### Estrutura do Site
- Página Inicial (index.html)
- Página de Receitas (conteúdo)
- Página de Contato

### Estilização
- Definição de cores e tipografia
- Organização do layout
- Seleção de imagens, ícones etc.
- Desenvolvimento do CSS

### Conteúdo
- Inserção de receitas
- Adição de imagens
- Organização das informações
- Meios de contato e divulgação

### Documentação
- README.md
- Organização da estrutura de pastas
- /docs/wireframes

## Softwares Utilizados

- HTML
- CSS
- Visual Studio Code
- Git
- GitHub

## Estrutura de Pastas

📂 novaweb-projeto-inicial
├───blog-mesa-posta
│   ├───assets
│   │   ├───css
│   │   ├───icons
│   │   │   ├───buttons
│   │   │   ├───contact
│   │   │   ├───decor
│   │   │   ├───divisores
│   │   │   ├───icons-receitas
│   │   │   └───nav
│   │   └───images
│   │       ├───backgrounds
│   │       └───receitas
│   ├───js
│   ├───pages
│   └───src
└───docs
    └───wireframes
    |_____ NOTAS_ESTUDOS.md
    |_____README.md


## Requisitos do Sistema
- Git instalado
- Terminal
- Editor de código

## Wireframes

### 🏡 Página Inicial
[Visualizar Wireframe da Página Inicial](docs/wireframes/home.png)

### 🍰 Página de Receitas
[Visualizar Wireframe de Receitas](docs/wireframes/conteúdo.png)

### 💌 Página de Contato
[Visualizar Wireframe de Contato](docs/wireframes/contato.png)

## Cronograma

| Status | Tarefa |
-------------------------------------------- 📋
| Backlog | Adicionar receitas |
| Backlog | Criar página "SOBRE" |
| Backlog | Desenvolver CSS|
| Backlog | Adicionar icons à página de navegação |
| A fazer | Ajustar página de navegação |
| A fazer | Criar formulário de contato |
| Em andamento | Desenvolver index.html |
| Em teste/Revisão | Testar links entre as páginas |
| Em teste/Revisão | Revisar formulário de contato |
| Concluído | Estrutura de pastas criada |
| Concluído | index.html |
| Concluído | receitas.html |
| Concluído | contato.html |
| Concluído | Logo do projeto |
| Concluído | Escolher imagens e receitas |
| Concluído | Organizar layout HOME |
| Concluído | Atualizar README |
| Concluído | Separar categorias de receitas |

--------------------------------------------------------------------------------------------------
# Projeto Nova-Web — Especificações de UI/UX
## Tela de Login

Este documento apresenta as especificações de UI/UX utilizadas no desenvolvimento da tela de login do projeto Nova-Web, considerando princípios de usabilidade, validação de formulários e acessibilidade.

---

## 1. Conceitos de Usabilidade em Formulários

### 1.1 Labels vs. Placeholders

A **label** identifica permanentemente a finalidade de um campo do formulário. Ela deve estar associada ao campo correspondente por meio dos atributos `for` e `id`.

Exemplo:

```html
<label for="email">E-mail</label>
<input type="email" id="email" name="email">
```

O uso de labels facilita a compreensão do formulário e também contribui para a acessibilidade, pois leitores de tela conseguem identificar a finalidade de cada campo.

O **placeholder** apresenta uma dica ou exemplo dentro do campo antes que o usuário digite alguma informação. Ele deve ser utilizado como complemento da label e não como substituto.

Exemplo:

```html
<label for="email">E-mail</label>
<input 
    type="email" 
    id="email" 
    name="email"
    placeholder="exemplo@email.com"
>
```

### Diretriz adotada

No projeto, serão utilizadas **labels visíveis em todos os campos**. Os placeholders serão utilizados somente para apresentar exemplos ou orientações complementares.

---

### 1.2 Hierarquia Visual

A hierarquia visual organiza os elementos de acordo com seu nível de importância, facilitando a compreensão e a utilização da tela.

#### Primary Button

O **Primary Button** representa a ação principal da tela.

Na tela de login, a ação principal será:

> **Entrar**

O botão terá maior destaque visual através de sua cor, tamanho e posicionamento.

#### Secondary Button / Secondary Action

As ações secundárias terão menor destaque visual para não competir com a ação principal.

Exemplos:

- Esqueci minha senha
- Cadastre-se

Essas ações serão apresentadas como links ou elementos secundários.

### Diretriz adotada

A hierarquia visual da tela será organizada da seguinte forma:

1. **Entrar** — ação principal.
2. **Esqueci minha senha** — ação secundária.
3. **Cadastre-se** — ação secundária.

---

# 2. Estados de Validação dos Campos de Entrada

Os campos de entrada terão diferentes estados visuais para fornecer feedback ao usuário durante o preenchimento.

## 2.1 Default — Padrão

Representa o campo em sua condição normal.

**Características:**

- Borda em cor neutra;
- Fundo claro;
- Label visível;
- Texto legível;
- Espaçamento adequado.

---

## 2.2 Focus — Foco

Representa o momento em que o usuário seleciona um campo para realizar a digitação.

**Características:**

- Alteração da cor da borda;
- Destaque visual ao redor do campo;
- Indicação clara de qual campo está selecionado;
- Manutenção do contraste adequado.

Exemplo:

```css
input:focus {
    border-color: #c98282;
    outline: none;
}
```

---

## 2.3 Error — Erro

Representa uma situação em que o usuário inseriu uma informação incorreta ou deixou um campo obrigatório vazio.

**Características:**

- Borda em tom vermelho;
- Mensagem explicativa abaixo do campo;
- Mensagem objetiva e clara;
- Indicação do problema que precisa ser corrigido.

Exemplo:

```text
E-mail

[ usuario@ ]

E-mail inválido.
```

---

## 2.4 Success — Sucesso

Representa o preenchimento correto de um campo.

**Características:**

- Indicador visual positivo;
- Borda em uma cor que represente sucesso;
- Possibilidade de utilizar um símbolo de confirmação;
- Manutenção da legibilidade.

Exemplo:

```text
E-mail

[ usuario@email.com     ✓ ]
```

---

## 2.5 Disabled — Desabilitado

Representa um campo que está temporariamente indisponível para interação.

**Características:**

- Contraste visual reduzido;
- Fundo diferenciado;
- Texto menos destacado;
- Ausência de interação enquanto estiver desabilitado.

---

# 3. Padrões de Acessibilidade

## 3.1 Contraste de Cores

Os textos devem possuir contraste suficiente em relação ao fundo para facilitar a leitura.

De acordo com as diretrizes WCAG, para o nível AA:

- Textos comuns devem possuir contraste mínimo de **4,5:1**;
- Textos grandes devem possuir contraste mínimo de **3:1**.

No projeto, os textos principais serão utilizados em tons escuros sobre fundos claros, buscando manter uma boa legibilidade.

---

## 3.2 Navegação por Teclado

A tela deverá permitir a navegação utilizando o teclado, principalmente através da tecla **Tab**.

A navegação deverá seguir uma ordem lógica entre os elementos interativos:

1. Campo de e-mail;
2. Campo de senha;
3. Link "Esqueci minha senha";
4. Botão "Entrar";
5. Link "Cadastre-se".

Os elementos selecionados deverão apresentar um destaque visual para indicar ao usuário onde está o foco.

---

## 3.3 Leitores de Tela

Os campos deverão possuir labels corretamente associadas aos seus respectivos inputs.

Exemplo:

```html
<label for="email">E-mail</label>
<input type="email" id="email" name="email">
```

Essa associação facilita a identificação dos campos por tecnologias assistivas.

As mensagens de erro também deverão ser claras e indicar ao usuário qual informação precisa ser corrigida.

---

# 4. Diretrizes Aplicadas ao Projeto

Com base nos conceitos pesquisados, a tela de login do projeto Nova-Web seguirá as seguintes diretrizes:

- Utilização de labels visíveis;
- Uso de placeholders apenas como complemento;
- Destaque visual para o botão principal "Entrar";
- Menor destaque para ações secundárias;
- Diferenciação visual entre os estados dos campos;
- Mensagens claras para situações de erro;
- Indicadores visuais para preenchimento correto;
- Contraste adequado entre texto e fundo;
- Navegação através do teclado;
- Estrutura adequada para leitores de tela;
- Interface simples, organizada e fácil de utilizar.

A identidade visual seguirá o conceito do blog culinário **Mesa Posta**, utilizando uma estética rústica, acolhedora e delicada, com tons de creme, marrom e rosado.

---

# 5. Referências

- [W3Schools — HTML Forms](https://www.w3schools.com/html/html_forms.asp)
- [W3Schools — HTML Form Elements](https://www.w3schools.com/html/html_form_elements.asp)
- [W3Schools — HTML Form Attributes](https://www.w3schools.com/html/html_form_attributes.asp)
- [W3Schools — HTML Input Attributes](https://www.w3schools.com/html/html_form_attributes.asp)
- [W3Schools — HTML/CSS Forms and Validation](https://www.w3schools.com/htmlcss/htmlcss_forms.asp)
- [W3C — WCAG: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)
---------------------------------------------------------------------------------------------------

## Aula 12 - Introdução aos Formulários Web

Nesta aula foi desenvolvido um formulário de login utilizando HTML, CSS e JavaScript.

O projeto apresenta uma tela de login inspirada na identidade visual do blog culinário **Mesa Posta**, utilizando uma estética rústica, acolhedora e delicada, com tons de creme, marrom e rosado.

### Funcionalidades

- Campo para inserção de e-mail;
- Campo de senha com conteúdo oculto;
- Link para recuperação de senha;
- Link para cadastro de usuário;
- Botão de entrada;
- Validação dos campos utilizando JavaScript;
- Mensagens de erro para dados inválidos ou campos não preenchidos;
- Estilização da interface utilizando CSS;
- Utilização da tag `<form>` e do método `POST`.

### Arquivos

- `login.html` - estrutura da tela e formulário de login;
- `login.css` - estilização e identidade visual da página;
- `login.js` - validação dos dados preenchidos no formulário.

## SEM BACK-END
