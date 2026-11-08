/**
 * DevCook - Smart Recipe Manager
 * Lógica de Interface & Interações Culinárias
 */

// Base de Dados de Receitas (Inspirada nas telas do Stitch e API do TheMealDB)
const DEVCOOK_RECIPES = [
  {
    id: 1,
    title: "Classic Roman Carbonara",
    category: "Massas",
    badge: "Clássico Italiano",
    rating: 4.9,
    reviews: 184,
    calories: 650,
    prepTime: 25,
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80",
    description: "Autêntico preparo romano com guanciale tostado, gemas aveludadas e pimenta-do-reino moída na hora. Sem creme de leite.",
    ingredients: [
      "350g Spaghetti de sêmola de trigo grano duro",
      "150g Guanciale (ou pancetta artesanal) cortado em cubos",
      "4 Gemas de ovos caipiras frescos + 1 ovo inteiro",
      "80g Queijo Pecorino Romano ralado finamente",
      "Pimenta-do-reino preta em grãos moída na hora",
      "Sal grosso marinho para a água da massa"
    ],
    instructions: [
      "Coloque uma panela grande com água para ferver com pouco sal (o queijo e o guanciale já são salgados).",
      "Em uma frigideira média, doure o guanciale em fogo baixo até ficar crocante por fora e soltar a gordura. Reserve fora do fogo.",
      "Em uma tigela de vidro, bata as gemas, o ovo inteiro e o Pecorino Romano até formar um creme espesso.",
      "Cozinhe o spaghetti até ficar al dente (1 minuto a menos que a instrução do pacote).",
      "Transfira a massa diretamente para a frigideira com o guanciale morno. Adicione 1 concha da água do cozimento.",
      "Despeje o creme de gemas e queijo mexendo vigorosamente fora do fogo para emulsificar sem talhar os ovos.",
      "Sirva imediatamente finalizando com bastante pimenta-do-reino e mais Pecorino."
    ],
    nutrition: { carbs: "78g", protein: "28g", fat: "24g", sodium: "620mg" },
    dietary: ["Alta Proteína"]
  },
  {
    id: 2,
    title: "Roasted Sweet Potato Bowl",
    category: "Vegano",
    badge: "Saudável",
    rating: 4.7,
    reviews: 92,
    calories: 420,
    prepTime: 40,
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Batata-doce caramelizada com especiarias, grão-de-bico crocante, abacate fresco e emulsão aveludada de tahine e limão.",
    ingredients: [
      "2 Batatas-doces médias cortadas em cubos",
      "1 xícara de Grão-de-bico cozido e escorrido",
      "1 Abacate maduro fatiado",
      "1 xícara de Repolho roxo fatiado fininho",
      "2 colheres de sopa de Tahine integral",
      "Suco de 1 limão tahiti e azeite extravirgem",
      "Sementes de gergelim tostadas para decorar"
    ],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Tempere a batata-doce e o grão-de-bico com azeite, páprica defumada, cominho e sal.",
      "Asse por 30 minutos até ficarem dourados e crocantes.",
      "Misture o tahine com limão, água morna e sal para criar o molho cremoso.",
      "Monte a tigela dividindo os ingredientes em seções e regue com o molho."
    ],
    nutrition: { carbs: "58g", protein: "14g", fat: "16g", sodium: "310mg" },
    dietary: ["Vegano", "Sem Glúten", "Baixa Caloria"]
  },
  {
    id: 3,
    title: "Sea Salt Chocolate Tart",
    category: "Sobremesas",
    badge: "Gourmet",
    rating: 5.0,
    reviews: 310,
    calories: 540,
    prepTime: 80,
    difficulty: "Difícil",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    description: "Torta de ganache 70% cacau de textura acetinada com cristais de flor de sal Maldon sobre crosta crocante de amêndoas.",
    ingredients: [
      "200g Farinha de amêndoas",
      "40g Cacau em pó 100%",
      "50g Manteiga sem sal gelada",
      "250g Chocolate amargo 70% picado",
      "200ml Creme de leite fresco",
      "1 colher de chá de Flor de sal Maldon",
      "Framboesas frescas para decorar"
    ],
    instructions: [
      "Processe a farinha de amêndoas, o cacau e a manteiga até formar uma massa homogênea.",
      "Forre uma forma de fundo falso e asse a 180°C por 12 minutos. Deixe esfriar.",
      "Aqueça o creme de leite e verta sobre o chocolate picado, emulsionando suavemente.",
      "Despeje o ganache sobre a massa fria e leve à geladeira por 3 horas.",
      "Finalize com cristais de flor de sal e framboesas antes de servir."
    ],
    nutrition: { carbs: "36g", protein: "9g", fat: "42g", sodium: "140mg" },
    dietary: ["Sobremesas"]
  },
  {
    id: 4,
    title: "Salmão Grelhado com Aspargos",
    category: "Pratos Principais",
    badge: "Low-Carb",
    rating: 4.8,
    reviews: 76,
    calories: 380,
    prepTime: 20,
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    description: "Filé de salmão fresco selado com pele crocante, aspargos salteados na manteiga de ervas e redução de limão siciliano.",
    ingredients: [
      "2 Filés de salmão com pele (aprox. 180g cada)",
      "1 maço de Aspargos frescos higienizados",
      "2 dentes de Alho picados",
      "2 colheres de sopa de Manteiga clarificada (Ghee)",
      "Ramos de Dill fresco e rodelas de limão siciliano",
      "Sal e pimenta-do-reino moída"
    ],
    instructions: [
      "Seque a pele do salmão com papel toalha e tempere com sal e pimenta.",
      "Aqueça uma frigideira de ferro com azeite até soltar leve fumaça.",
      "Coloque o salmão com a pele voltada para baixo e pressione por 10 segundos. Cozinhe por 4 minutos até a pele ficar crocante.",
      "Vire o salmão e adicione a manteiga, alho e os aspargos na mesma frigideira por mais 3 minutos.",
      "Regue o peixe com a manteiga derretida e sirva com dill e limão siciliano."
    ],
    nutrition: { carbs: "6g", protein: "38g", fat: "22g", sodium: "380mg" },
    dietary: ["Low-Carb", "Alta Proteína", "Baixa Caloria", "Sem Glúten"]
  },
  {
    id: 5,
    title: "Risoto de Cogumelos Selvagens",
    category: "Massas",
    badge: "Vegetariano",
    rating: 4.9,
    reviews: 142,
    calories: 490,
    prepTime: 35,
    difficulty: "Médio",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    description: "Arroz arbóreo lentamente cozido em caldo de legumes aromático, cogumelos shimeji e paris dourados com manteiga trufada.",
    ingredients: [
      "1 xícara de Arroz Arbóreo ou Carnaroli",
      "200g de Cogumelos Shimeji e Paris frescos fatiados",
      "1/2 xícara de Vinho branco seco",
      "1 Litro de Caldo de legumes caseiro fervente",
      "1/2 Cebola finamente picada",
      "50g Queijo Parmesão ralado na hora",
      "2 colheres de sopa de Manteiga gelada",
      "Azeite trufado para finalizar"
    ],
    instructions: [
      "Em uma frigideira quente, salteie os cogumelos com azeite e sal até dourarem. Reserve metade para decorar.",
      "Na panela do risoto, refogue a cebola no azeite até ficar translúcida.",
      "Adicione o arroz e toste (tostatura) por 2 minutos.",
      "Deglaceie com o vinho branco e mexa até evaporar o álcool.",
      "Adicione o caldo de legumes fervente concha por concha, mexendo constantemente por cerca de 18 minutos.",
      "Desligue o fogo, incorpore a manteiga gelada, o parmesão e os cogumelos (mantecatura).",
      "Tampe por 2 minutos e sirva imediatamente com gotas de azeite trufado."
    ],
    nutrition: { carbs: "64g", protein: "12g", fat: "18g", sodium: "490mg" },
    dietary: ["Vegetariano"]
  },
  {
    id: 6,
    title: "Tacos de Frango com Guacamole",
    category: "Pratos Principais",
    badge: "Rápido",
    rating: 4.6,
    reviews: 88,
    calories: 350,
    prepTime: 15,
    difficulty: "Fácil",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    description: "Tortilhas de milho recheadas com peito de frango desfiado temperado com páprica, guacamole fresco e pico de gallo.",
    ingredients: [
      "6 Tortilhas pequenas de milho",
      "250g Peito de frango cozido e desfiado",
      "1 Abacate amassado com limão e sal (Guacamole)",
      "1 Tomate picadinho com cebola roxa e coentro",
      "1 colher de chá de Páprica defumada e cominho",
      "Fatias de limão e molho de pimenta a gosto"
    ],
    instructions: [
      "Aqueça o frango desfiado em uma frigideira com páprica, azeite e cominho.",
      "Aqueça as tortilhas em fogo alto por 30 segundos de cada lado.",
      "Espalhe uma camada generosa de guacamole no fundo de cada tortilha.",
      "Adicione o frango temperado e cubra com pico de gallo fresco.",
      "Sirva com rodelas de limão e molho de pimenta."
    ],
    nutrition: { carbs: "32g", protein: "29g", fat: "11g", sodium: "410mg" },
    dietary: ["Alta Proteína", "Baixa Caloria"]
  }
];

// Estado da Aplicação
const appState = {
  activePantry: ["Tomate maduro", "Ovos caipiras", "Alho laminado", "Parmesão curado"],
  selectedCategory: "Todas",
  maxTime: 120,
  selectedDifficulty: "Todas",
  selectedDiets: [],
  searchTerm: "",
  favorites: new Set([1])
};

// Renderização dos Cards de Receitas
function renderRecipes() {
  const container = document.getElementById("recipesGrid");
  if (!container) return;

  const filtered = DEVCOOK_RECIPES.filter(recipe => {
    // Filtro por Categoria
    if (appState.selectedCategory !== "Todas" && recipe.category !== appState.selectedCategory) {
      return false;
    }
    // Filtro por Tempo
    if (recipe.prepTime > appState.maxTime) {
      return false;
    }
    // Filtro por Dificuldade
    if (appState.selectedDifficulty !== "Todas" && recipe.difficulty !== appState.selectedDifficulty) {
      return false;
    }
    // Filtro por Restrições Alimentares
    if (appState.selectedDiets.length > 0) {
      const hasAllDiets = appState.selectedDiets.every(diet => recipe.dietary && recipe.dietary.includes(diet));
      if (!hasAllDiets) return false;
    }
    // Busca por Texto ou Ingrediente
    if (appState.searchTerm.trim() !== "") {
      const term = appState.searchTerm.toLowerCase();
      const inTitle = recipe.title.toLowerCase().includes(term);
      const inDesc = recipe.description.toLowerCase().includes(term);
      const inIng = recipe.ingredients.some(i => i.toLowerCase().includes(term));
      if (!inTitle && !inDesc && !inIng) return false;
    }
    return true;
  });

  document.getElementById("recipeCountLabel").textContent = `${filtered.length} receitas encontradas`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 py-5 text-center">
        <div class="p-5 bg-white rounded-4 border">
          <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
          <h4 class="fw-bold text-dark">Nenhuma receita encontrada</h4>
          <p class="text-muted mb-3">Tente relaxar os filtros de tempo ou remover alguns ingredientes da despensa.</p>
          <button class="btn btn-chef-outline px-4" onclick="resetAllFilters()">Resetar Filtros</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(recipe => {
    const isFav = appState.favorites.has(recipe.id);
    return `
      <div class="col-12 col-md-6 col-xl-4">
        <article class="recipe-card shadow-sm">
          <div class="recipe-card-img-wrap">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-card-img" loading="lazy">
            <button class="btn-favorite-star ${isFav ? 'favorited' : ''}" onclick="toggleFavorite(${recipe.id}, event)" title="Favoritar receita">
              <i class="bi ${isFav ? 'bi-star-fill text-warning' : 'bi-star'}"></i>
            </button>
            <span class="recipe-category-tag">${recipe.badge}</span>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1 justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="d-flex align-items-center gap-1 text-warning fw-bold small">
                  <i class="bi bi-star-fill"></i> ${recipe.rating}
                  <span class="text-muted fw-normal">(${recipe.reviews})</span>
                </span>
                <span class="recipe-meta-pill"><i class="bi bi-fire me-1 text-danger"></i>${recipe.calories} kcal</span>
              </div>
              <h4 class="fw-bold text-dark mb-2">${recipe.title}</h4>
              <p class="text-muted small mb-3 text-truncate-2">${recipe.description}</p>
            </div>
            <div>
              <div class="d-flex justify-content-between align-items-center bg-surface-elevated p-2 rounded-3 mb-3 font-mono small text-secondary">
                <span><i class="bi bi-clock me-1 text-chef-orange"></i>${recipe.prepTime} min</span>
                <span><i class="bi bi-bar-chart me-1"></i>${recipe.difficulty}</span>
              </div>
              <button class="btn btn-chef-outline w-100 py-2 d-flex align-items-center justify-content-center gap-2" onclick="openRecipeDetailModal(${recipe.id})">
                <span>Ver Modo de Preparo</span>
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      </div>
    `;
  }).join("");
}

// Renderização dos Badges de Ingredientes da Despensa
function renderPantryBadges() {
  const container = document.getElementById("activePantryRail");
  if (!container) return;

  if (appState.activePantry.length === 0) {
    container.innerHTML = `<span class="text-muted small fst-italic">Sua despensa está vazia. Digite ingredientes acima para adicioná-los.</span>`;
    return;
  }

  container.innerHTML = appState.activePantry.map((ing, idx) => `
    <span class="ingredient-badge animate__animated animate__fadeIn">
      <i class="bi bi-check-circle-fill"></i>
      <span>${ing}</span>
      <button class="btn-remove" onclick="removeIngredient(${idx})" title="Remover"><i class="bi bi-x"></i></button>
    </span>
  `).join("");
}

// Ações de Ingredientes
function addIngredient(name) {
  const clean = name.trim();
  if (clean && !appState.activePantry.includes(clean)) {
    appState.activePantry.push(clean);
    renderPantryBadges();
    showToast(`"${clean}" adicionado à despensa!`);
  }
}

function removeIngredient(index) {
  appState.activePantry.splice(index, 1);
  renderPantryBadges();
}

function clearPantry() {
  appState.activePantry = [];
  renderPantryBadges();
  showToast("Despensa limpa!");
}

// Favoritar Receita
function toggleFavorite(recipeId, event) {
  if (event) event.stopPropagation();
  if (appState.favorites.has(recipeId)) {
    appState.favorites.delete(recipeId);
    showToast("Receita removida dos favoritos.");
  } else {
    appState.favorites.add(recipeId);
    showToast("Receita adicionada aos favoritos! ⭐");
  }
  renderRecipes();
}

// Modal de Detalhes da Receita
function openRecipeDetailModal(recipeId) {
  const recipe = DEVCOOK_RECIPES.find(r => r.id === recipeId);
  if (!recipe) return;

  document.getElementById("modalRecipeTitle").textContent = recipe.title;
  document.getElementById("modalRecipeImage").src = recipe.image;
  document.getElementById("modalRecipeImage").alt = recipe.title;
  document.getElementById("modalRecipeDesc").textContent = recipe.description;
  document.getElementById("modalRecipeTime").textContent = `${recipe.prepTime} min`;
  document.getElementById("modalRecipeCalories").textContent = `${recipe.calories} kcal`;
  document.getElementById("modalRecipeDifficulty").textContent = recipe.difficulty;
  document.getElementById("modalRecipeCategory").textContent = recipe.category;

  // Ingredientes
  const ingList = document.getElementById("modalRecipeIngredients");
  ingList.innerHTML = recipe.ingredients.map(ing => `
    <li class="list-group-item d-flex align-items-center gap-3 border-0 px-0 py-2">
      <input class="form-check-input mt-0" type="checkbox">
      <span>${ing}</span>
    </li>
  `).join("");

  // Instruções
  const instList = document.getElementById("modalRecipeInstructions");
  instList.innerHTML = recipe.instructions.map((step, idx) => `
    <div class="d-flex align-items-start gap-3 mb-3">
      <span class="badge bg-chef-orange rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;">${idx + 1}</span>
      <p class="mb-0 text-secondary">${step}</p>
    </div>
  `).join("");

  // Nutrição
  document.getElementById("modalNutriCarbs").textContent = recipe.nutrition.carbs;
  document.getElementById("modalNutriProtein").textContent = recipe.nutrition.protein;
  document.getElementById("modalNutriFat").textContent = recipe.nutrition.fat;
  document.getElementById("modalNutriSodium").textContent = recipe.nutrition.sodium;

  const modalEl = document.getElementById("recipeDetailModal");
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

// Resetar Filtros
function resetAllFilters() {
  appState.selectedCategory = "Todas";
  appState.maxTime = 120;
  appState.selectedDifficulty = "Todas";
  appState.selectedDiets = [];
  appState.searchTerm = "";

  document.getElementById("timeRangeSlider").value = 120;
  document.getElementById("sliderTimeLabel").textContent = "120 min";
  document.querySelectorAll(".quick-filter-pill").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".category-checkbox").forEach(c => c.checked = false);
  document.querySelectorAll(".diet-checkbox").forEach(c => c.checked = false);
  document.querySelectorAll(".btn-difficulty").forEach(b => {
    b.classList.remove("btn-chef-primary");
    b.classList.add("btn-chef-outline");
  });
  const allDiffBtn = document.querySelector('.btn-difficulty[data-diff="Todas"]');
  if (allDiffBtn) {
    allDiffBtn.classList.add("btn-chef-primary");
    allDiffBtn.classList.remove("btn-chef-outline");
  }

  renderRecipes();
}

// Toast Notifier
function showToast(message) {
  const toastEl = document.getElementById("devcookToast");
  const toastMsg = document.getElementById("toastMessage");
  if (!toastEl || !toastMsg) return;

  toastMsg.textContent = message;
  const toast = new bootstrap.Toast(toastEl, { delay: 2800 });
  toast.show();
}

// Inicialização de Eventos
document.addEventListener("DOMContentLoaded", () => {
  renderPantryBadges();
  renderRecipes();

  // Adicionar ingrediente via input
  const ingInput = document.getElementById("pantryInput");
  const addBtn = document.getElementById("btnAddIngredient");
  if (ingInput && addBtn) {
    const handleAdd = () => {
      if (ingInput.value.trim()) {
        addIngredient(ingInput.value);
        ingInput.value = "";
      }
    };
    addBtn.addEventListener("click", handleAdd);
    ingInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleAdd();
    });
  }

  // Limpar stack
  const clearBtn = document.getElementById("btnClearPantry");
  if (clearBtn) clearBtn.addEventListener("click", clearPantry);

  // Slider de tempo
  const slider = document.getElementById("timeRangeSlider");
  const sliderLabel = document.getElementById("sliderTimeLabel");
  if (slider && sliderLabel) {
    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      sliderLabel.textContent = `${val} min`;
      appState.maxTime = val;
      renderRecipes();
    });
  }

  // Quick category pills
  document.querySelectorAll(".quick-filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const cat = pill.dataset.category;
      if (appState.selectedCategory === cat) {
        appState.selectedCategory = "Todas";
        pill.classList.remove("active");
      } else {
        document.querySelectorAll(".quick-filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        appState.selectedCategory = cat;
      }
      renderRecipes();
    });
  });

  // Botões de Dificuldade
  document.querySelectorAll(".btn-difficulty").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-difficulty").forEach(b => {
        b.classList.remove("btn-chef-primary");
        b.classList.add("btn-chef-outline");
      });
      btn.classList.add("btn-chef-primary");
      btn.classList.remove("btn-chef-outline");
      appState.selectedDifficulty = btn.dataset.diff;
      renderRecipes();
    });
  });

  // Checkboxes de Restrições
  document.querySelectorAll(".diet-checkbox").forEach(chk => {
    chk.addEventListener("change", () => {
      const selected = Array.from(document.querySelectorAll(".diet-checkbox:checked")).map(c => c.value);
      appState.selectedDiets = selected;
      renderRecipes();
    });
  });

  // Campo de busca do Navbar
  const searchInput = document.getElementById("navSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchTerm = e.target.value;
      renderRecipes();
    });
  }

  // Formulário de Nova Receita
  const newRecipeForm = document.getElementById("newRecipeForm");
  if (newRecipeForm) {
    newRecipeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("newRecipeTitle").value;
      const category = document.getElementById("newRecipeCategory").value;
      const time = parseInt(document.getElementById("newRecipeTime").value, 10) || 30;
      const calories = parseInt(document.getElementById("newRecipeCalories").value, 10) || 400;
      const desc = document.getElementById("newRecipeDesc").value;

      const newRecipe = {
        id: DEVCOOK_RECIPES.length + 1,
        title,
        category,
        badge: "Autoral",
        rating: 5.0,
        reviews: 1,
        calories,
        prepTime: time,
        difficulty: "Médio",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80",
        description: desc,
        ingredients: ["Ingredientes cadastrados no DevCook"],
        instructions: ["Instruções salvas com sucesso no banco de dados local."],
        nutrition: { carbs: "45g", protein: "20g", fat: "15g", sodium: "400mg" },
        dietary: []
      };

      DEVCOOK_RECIPES.unshift(newRecipe);
      renderRecipes();
      const modalEl = document.getElementById("newRecipeModal");
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
      newRecipeForm.reset();
      showToast(`Receita "${title}" cadastrada com sucesso! 🎉`);
    });
  }
});
