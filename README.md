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
# Projeto Nova-Web — Especificações de UI/UX -- AULA 08
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
# Projeto Nova-Web - UI/UX Design

## Aula 09: UX de Tabelas de Dados e Telas de Perfil

Esta atividade tem como objetivo aplicar conceitos de UX (User Experience) no desenvolvimento de interfaces para sistemas corporativos, considerando a organização das informações, facilidade de navegação, consistência visual e usabilidade.

---

# 1. Pesquisa Teórica - UX para Tabelas Corporativas

## 1.1 Alinhamento de Dados

O alinhamento das informações em uma tabela deve facilitar a leitura, comparação e identificação dos dados apresentados.

- **Textos:** devem ser alinhados à esquerda, pois esse formato facilita a leitura de informações textuais.
- **Números e valores monetários:** devem ser alinhados à direita, facilitando a comparação entre diferentes valores.
- **Status:** podem ser centralizados ou apresentados por meio de badges/pills para facilitar a identificação visual.
- **Ações rápidas:** podem ser centralizadas ou alinhadas à direita, mantendo os ícones de ação organizados.

A utilização de alinhamentos consistentes evita uma aparência desorganizada e facilita a localização das informações.

---

## 1.2 Filtros e Busca

Os recursos de pesquisa e filtragem devem estar posicionados em locais de fácil acesso.

- O campo de pesquisa principal deve ficar na parte superior da tabela.
- Um ícone de lupa pode ser utilizado para indicar visualmente a função de busca.
- Filtros por categoria ou status podem ser organizados em menus suspensos (dropdowns).
- Os filtros devem possuir nomes claros e objetivos.
- A organização dos filtros deve evitar excesso de elementos na tela.

A busca permite localizar rapidamente registros específicos, enquanto os filtros ajudam a reduzir a quantidade de informações exibidas.

---

## 1.3 Hierarquia Visual

A hierarquia visual organiza os elementos de acordo com sua importância, permitindo que o usuário compreenda a interface com mais facilidade.

Para tabelas extensas, podem ser utilizados:

- **Cabeçalhos fixos (sticky header):** mantêm os nomes das colunas visíveis durante a rolagem.
- **Zebra striping:** utilização de cores alternadas nas linhas para facilitar a leitura horizontal.
- **Bordas sutis:** ajudam a separar as informações sem deixar a interface visualmente carregada.
- **Cabeçalhos destacados:** diferenciam os títulos das colunas dos dados apresentados.
- **Badges de status:** facilitam a identificação rápida da situação de cada registro.

A hierarquia visual deve destacar as informações importantes sem utilizar elementos desnecessários.

---

# 2. Especificação do Protótipo no Figma

## 2.1 Link do Projeto

**Link do Projeto no Figma:**  
[Cole o link do projeto aqui]

---

## 2.2 Nome do Arquivo

O arquivo desenvolvido no Figma foi nomeado como:

**Nova-Web - UI/UX Dashboard**

---

# 3. Tela de Perfil do Usuário

A primeira tela desenvolvida apresenta as informações de um usuário e permite consultar ou editar seus dados.

## 3.1 Header / Topo

O cabeçalho apresenta:

- Foto de perfil (avatar);
- Nome do usuário;
- Cargo ou papel no sistema;
- Status do usuário;
- Identificação visual do sistema.

O status é apresentado de forma visual para facilitar a identificação de usuários ativos ou inativos.

---

## 3.2 Informações Pessoais

A área de informações pessoais apresenta os principais dados do usuário.

Os campos utilizados são:

- Nome completo;
- E-mail;
- Telefone;
- Perfil de acesso.

Os campos podem ser apresentados como editáveis ou somente para leitura (Read-only), dependendo da permissão do usuário.

---

## 3.3 Aba de Segurança

A aba de segurança concentra funcionalidades relacionadas à proteção da conta.

Foram consideradas as seguintes opções:

- Alteração de senha;
- Autenticação em duas etapas;
- Configurações relacionadas à segurança da conta.

A separação dessas informações em uma aba própria evita que a tela principal fique sobrecarregada.

---

## 3.4 Ações

A tela possui dois tipos principais de ações:

### Botão Primário

**Salvar Alterações**

É utilizado para confirmar e salvar as modificações realizadas pelo usuário.

### Botão Secundário

**Cancelar**

Permite cancelar as alterações realizadas sem utilizar a ação principal.

A diferenciação visual entre os botões estabelece uma hierarquia de ações.

---

# 4. Área de Consulta - Tabela de Dados

A segunda tela desenvolvida apresenta uma área para consulta e gerenciamento de usuários.

---

## 4.1 Barra Superior de Controle

A parte superior da tabela apresenta ferramentas para facilitar a consulta e o gerenciamento dos registros.

Foram utilizados:

- **Campo de busca:** permite pesquisar usuários.
- **Ícone de lupa:** identifica visualmente a função de pesquisa.
- **Filtro por status:** permite visualizar usuários de acordo com sua situação.
- **Exportação:** permite representar ações para exportação dos dados em PDF ou CSV.
- **Adicionar Novo:** botão utilizado para iniciar o cadastro de um novo usuário.

A organização desses controles facilita o acesso às principais funções da tabela.

---

# 5. Estrutura da Tabela

A tabela foi estruturada para apresentar informações de maneira organizada.

## 5.1 Cabeçalho

As colunas utilizadas são:

| Coluna | Função |
|---|---|
| ID | Identificação do usuário |
| Nome | Nome completo do usuário |
| E-mail | Endereço de e-mail |
| Função | Cargo ou função no sistema |
| Status | Situação atual do usuário |
| Ações | Operações disponíveis para o registro |

---

## 5.2 Linhas de Dados

A tabela possui pelo menos cinco registros simulados.

Exemplo:

| ID | Nome | E-mail | Função | Status | Ações |
|---|---|---|---|---|---|
| 001 | Ana Souza | ana@email.com | Administrador | Ativo | Visualizar / Editar / Excluir |
| 002 | João Silva | joao@email.com | Operador | Ativo | Visualizar / Editar / Excluir |
| 003 | Maria Santos | maria@email.com | Analista | Inativo | Visualizar / Editar / Excluir |
| 004 | Pedro Oliveira | pedro@email.com | Operador | Ativo | Visualizar / Editar / Excluir |
| 005 | Lucas Costa | lucas@email.com | Analista | Inativo | Visualizar / Editar / Excluir |

Os registros são utilizados apenas para representar o funcionamento visual da interface.

---

# 6. Componentes de Status

Os status dos usuários são apresentados por meio de badges/pills.

### Usuário Ativo

O status **Ativo** utiliza uma identificação visual em verde para facilitar sua localização.

### Usuário Inativo

O status **Inativo** utiliza uma identificação visual em cinza.

A utilização de badges facilita a identificação do estado de cada usuário sem a necessidade de ler informações adicionais.

---

# 7. Ações por Linha

Cada registro possui ações rápidas para gerenciamento dos usuários.

Foram consideradas três ações:

- **Visualizar:** permite consultar os dados do usuário.
- **Editar:** permite alterar as informações do usuário.
- **Excluir:** representa a ação de remoção do registro.

Os ícones são utilizados para economizar espaço e manter a tabela organizada.

---

# 8. Rodapé da Tabela

O rodapé apresenta informações sobre a quantidade de registros e controles de navegação.

Foi utilizado o texto:

**Mostrando 1-10 de 50 resultados**

Também foram adicionados controles de paginação:

- **Anterior**
- **Próximo**

A paginação permite dividir grandes quantidades de registros em páginas menores, facilitando a navegação.

---

# 9. Princípios de UX Aplicados

## 9.1 Usabilidade

A interface foi organizada para que o usuário consiga localizar informações e executar ações com facilidade.

A utilização de busca, filtros e paginação reduz a dificuldade de encontrar registros em tabelas com muitos dados.

---

## 9.2 Consistência

Os componentes seguem padrões visuais consistentes.

São utilizados padrões semelhantes para:

- Botões;
- Campos de entrada;
- Abas;
- Badges;
- Ícones;
- Espaçamentos;
- Tipografia;
- Cores.

A consistência ajuda o usuário a compreender o funcionamento da interface.

---

## 9.3 Hierarquia Visual

Os elementos foram organizados de acordo com seu nível de importância.

Títulos, cabeçalhos, botões principais e status possuem destaque visual para facilitar a identificação.

---

## 9.4 Feedback Visual

Os componentes podem apresentar diferentes estados para informar ao usuário o resultado de suas ações.

Exemplos:

- Campo em foco;
- Botão em estado de interação;
- Status ativo ou inativo;
- Mensagens de confirmação;
- Mensagens de erro.

O feedback visual ajuda o usuário a compreender o que está acontecendo no sistema.

---

## 9.5 Acessibilidade

A interface deve considerar princípios de acessibilidade, como:

- Contraste adequado entre texto e fundo;
- Tamanho legível das informações;
- Áreas de clique adequadas;
- Identificação clara dos campos;
- Navegação por teclado;
- Uso de textos e rótulos compreensíveis.

Esses cuidados permitem que diferentes usuários consigam utilizar o sistema com maior facilidade.

---

# 10. Organização do Projeto no Figma

O arquivo foi organizado em duas telas principais:

1. **Perfil de Usuário**
2. **Área de Consulta - Tabela de Dados**

Também foram utilizados componentes reutilizáveis para manter a consistência da interface.

A utilização de componentes facilita futuras alterações e permite que elementos semelhantes mantenham o mesmo padrão visual.

---

# 11. Conclusão

A atividade permitiu aplicar conceitos de UX no desenvolvimento de uma interface voltada para sistemas corporativos.

A organização das informações em tabelas, a utilização de busca, filtros, paginação, badges de status e ações rápidas contribuem para uma interface mais organizada e fácil de utilizar.

O desenvolvimento da tela de perfil também permitiu trabalhar com formulários, abas, permissões e ações de usuário.

As decisões realizadas no Figma foram baseadas em princípios de usabilidade, consistência, hierarquia visual e acessibilidade, buscando criar uma interface clara, organizada e adequada para diferentes necessidades de utilização.

---

## 12. Versionamento

Após a criação e atualização da documentação, foram utilizados os seguintes comandos Git para registrar as alterações:

```bash
git add README.md

git commit -m "docs: adiciona conceitos de UX de tabelas e perfil no README"

git push origin main
--------------------------------------------------------------------------------------------------
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
