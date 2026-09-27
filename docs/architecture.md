# 🏛️ Arquitetura e Especificação Técnica (Architecture.md)

Este documento especifica a arquitetura técnica, versionamento de tecnologias, contratos de APIs e a modelagem de dados do projeto **DevCook**.

---

## 📌 Especificação de Versões (Tecnologias & Dependências)

Para garantir reprodutibilidade e consistência no desenvolvimento (humano e por assistentes de IA), as tecnologias devem seguir estritamente as versões mapeadas abaixo:

| Tecnologia / Lib | Versão Exata | Função no Sistema |
| :--- | :--- | :--- |
| **HTML5** | W3C Standard | Estrutura semântica dos documentos |
| **CSS3** | W3C Standard | Customização de layout e temas |
| **Bootstrap** | `v5.3.8` | Grid responsivo, modais, formulários e cards |
| **jQuery** | `v3.7.1` | Manipulação do DOM e requisições AJAX |
| **Spoonacular API** | `v1 REST API` | Busca por ingredientes e dados nutricionais |
| **JSON Server** | `v0.17.4` | Backend fake / Mock REST local (`db.json`) |
| **ViaCEP API** | REST / JSON | Consulta e autopreenchimento de CEP |
| **Node.js** | `v20.x LTS` | Ambiente de execução para JSON Server |
| **npm** | `v10.x` | Gerenciador de pacotes do projeto |

---

## 🗄️ Modelo de Dados (Diagrama ER)

Diagrama de Entidade-Relacionamento do sistema para dados locais persididos via **JSON Server** ou **LocalStorage**.

### 📐 Diagrama de Relacionamento (Mermaid)

```mermaid
erDiagram
    USUARIO ||--o{ RECEITA : "cadastra"
    USUARIO ||--o{ FAVORITO : "marca"
    CATEGORIA ||--o{ RECEITA : "classifica"
    RECEITA ||--o{ FAVORITO : "é favoritada em"

    USUARIO {
        int id PK
        string nome
        string email
        string senha
        string cep
        string logradouro
        string bairro
        string cidade
        string uf
    }

    CATEGORIA {
        int id PK
        string nome
        string icone
    }

    RECEITA {
        int id PK
        int usuario_id FK
        int categoria_id FK
        string titulo
        string modo_preparo
        string tempo_preparo
        string url_imagem
        string tags_dieteticas
        string nivel_dificuldade
    }

    FAVORITO {
        int id PK
        int usuario_id FK
        int receita_id FK
        string data_adicao
    }
```

---

## 🔀 Fluxo de Integração de APIs

```
+-----------------------------------------------------------------------+
|                            FRONTEND (DevCook)                         |
|                 (Bootstrap 5.3 + jQuery 3.7.1 / JS ES6+)              |
+--------------------+----------------------------------+---------------+
                     |                                  |
    (Requisição AJAX)|                                  |(Requisição Fetch/AJAX)
                     v                                  v
+--------------------+--------+               +---------+---------------------+
|      JSON Server v0.17.4    |               |       Spoonacular API v1      |
|    (Receitas Autorais /     |               | (Receitas Globais / Busca por |
|      Usuários / Favs)       |               | Ingredientes / Nutrição)    |
+-----------------------------+               +-------------------------------+
```

### Estratégia de Consumo das Receitas:
1. **Catálogo Unificado:** O frontend executará chamadas assíncronas concorrentes (`Promise.all` ou múltiplos `$.ajax`) para consumir:
   - As receitas cadastradas pelos usuários locais via **JSON Server**.
   - As receitas globais fornecidas pela **Spoonacular API** (`https://api.spoonacular.com/recipes/findByIngredients`).
2. **Preenchimento de Endereço:** Utilização da **ViaCEP API** (`https://viacep.com.br/ws/{cep}/json/`) disparada no evento `blur` do campo de CEP.
3. **Módulo de Nutrição (Futuro):** Consumo do endpoint `/recipes/{id}/nutritionWidget.json` da Spoonacular API para cálculo automático de macronutrientes e calorias.

### 1. Entidade: USUARIO (Users)
-Guarda as informações de cadastro e autenticação das pessoas que acessam o sistema.

- *id (Inteiro, Chave Primária): Identificador único do usuário.*

 - *nome (Texto): Nome completo.*

- *email (Texto): E-mail para acesso/login.*

- *senha (Texto): Senha criptografada/validada com (REGEX).*

- *cep, logradouro, bairro, cidade, uf (Texto): Dados do endereço preenchidos via API do ViaCEP.*

### 2. Entidade: CATEGORIA (Categories)
-Guarda as categorias disponíveis para classificação dos pratos.

- *id (Inteiro, Chave Primária): Identificador único da categoria.*

- *nome (Texto): Nome da categoria (ex.: Massas, Sobremesas, Saladas, Bebidas).*

- *icone (Texto): Classe do ícone ou imagem da categoria.*

### 3. Entidade: RECEITA (Recipes)
-Guarda todas as receitas cadastradas pelos usuários no banco fake (db.json do JSON Server).

- *id (Inteiro, Chave Primária): Identificador único da receita.*

- *usuario_id (Inteiro, Chave Estrangeira): ID do usuário autor da receita.*

- *categoria_id (Inteiro, Chave Estrangeira): ID da categoria à qual pertence.*

- *titulo (Texto): Nome do prato.*

- *modo_preparo (Texto): Instruções passo a passo.*

- *tempo_preparo (Texto): Duração formatada por máscara (ex.: 00:45).*

- *url_imagem (Texto): Caminho da imagem (otimizada em WebP).*

- *tags_dieteticas (Texto): Seleção de opções (ex.: Vegano, Sem Glúten, Low-Carb).*

- *nivel_dificuldade (Texto): Opção selecionada em botão de rádio (Fácil, Médio, Difícil).*

### 4. Entidade: FAVORITO (Favorites)
-Associa os usuários às receitas que eles marcaram com estrela (persistido no localStorage do navegador ou via JSON Server).

- *id (Inteiro, Chave Primária): Identificador do registro.*

- *usuario_id (Inteiro, Chave Estrangeira): ID do usuário que favoritou.*

- *receita_id (Inteiro, Chave Estrangeira): ID da receita favoritada.*

- *data_adicao (Texto): Data em que a receita foi gravada nos favoritos.*
