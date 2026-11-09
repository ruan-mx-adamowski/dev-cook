## 📊 Checklist de Indicadores de Desempenho (IDs)

> **Nota:** Marque com `[x]` apenas os itens que foram efetivamente implementados na aplicação e que você domina para explicação na defesa técnica.

### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

* [x] **ID01:** Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de IA (Stitch) e/ou design (Figma).
* [x] **ID02:** Implementa layout responsivo com Framework CSS (Bootstrap) usando Flexbox ou Grid do próprio framework.
* [x] **ID03:** Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
* [x] **ID04:** Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
* [x] **ID05:** Cria layout fluido usando unidades relativas (`vw`, `vh`, `%`, `em`, `rem`) no lugar de unidades fixas (`px`).
* [x] **ID06:** Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
* [ ] **ID07:** Utiliza Sass (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
* [x] **ID08:** Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (`clamp()` + unidades relativas).
* [x] **ID09:** Aplica técnicas de responsividade de imagens usando CSS (`object-fit`, containers com unidades relativas).
* [ ] **ID10:** Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (`srcset`, `picture`).

### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente

* [x] **ID11:** Implementa validação HTML nativa (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
* [ ] **ID12:** Aplica expressões regulares (REGEX) para validações customizadas (e-mail, tempo de preparo, CEP).
* [x] **ID13:** Utiliza elementos de seleção em formulários (`checkbox`, `radio`, `select`) para coleta de dados.
* [ ] **ID14:** Implementa leitura e escrita no Web Storage (`localStorage`/`sessionStorage`) para persistir dados localmente no cliente (favoritos/preferências).

### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web

* [x] **ID15:** Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
* [x] **ID16:** Utiliza boas práticas de versionamento no Git / GitHub (branch `main`, uso de `.gitignore`).
* [x] **ID17:** Mantém um `README.md` padronizado, conforme template da disciplina, com checklist preenchido.
* [ ] **ID18:** Organiza arquivos do projeto de forma modular, seguindo padrão de exemplo fornecido (`/docs`, `/public`, `/src`).
* [ ] **ID19:** Configura linters e formatadores (ESLint, Prettier) para manter qualidade e padronização do código.

### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade

* [ ] **ID20:** Utiliza jQuery para manipulação do DOM e interatividade (eventos, animações, filtros dinâmicos).
* [ ] **ID21:** Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin) para aplicar máscaras nos campos de entrada.

### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas

* [ ] **ID22:** Realiza requisições assíncronas para uma API fake (JSON Server) para persistir dados de um formulário (`POST`).
* [ ] **ID23:** Realiza requisições assíncronas para uma API fake para exibir e remover dados na página (`GET`, `DELETE`).
* [ ] **ID24:** Realiza requisições assíncronas para APIs públicas reais (ViaCEP, TheMealDB, Open Food Facts), exibindo os dados e tratando erros com `fetch` ou `$.ajax`.

