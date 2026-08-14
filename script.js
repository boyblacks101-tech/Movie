const shows = [
  {
    "title": "Amphibia",
    "year": "",
    "level": "A2",
    "type": "Animation",
    "method": "English dub",
    "difficulty": "easy",
    "icon": "🐸",
    "description": "Clear dialogue and everyday vocabulary. Great for beginners."
  },
  {
    "title": "Chained Soldier",
    "year": "",
    "level": "B1",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "⛓️",
    "description": "Fantasy action anime with fairly simple dialogue."
  },
  {
    "title": "Demon Slayer",
    "year": "",
    "level": "A2",
    "type": "Anime",
    "method": "English dub",
    "difficulty": "easy",
    "icon": "⚔️",
    "description": "A fantasy action anime with understandable English dubbing."
  },
  {
    "title": "Dota: Dragon's Blood",
    "year": "",
    "level": "B1",
    "type": "Animation",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🐉",
    "description": "Fantasy vocabulary with original English dialogue."
  },
  {
    "title": "In/Spectre",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "🔍",
    "description": "Long explanations, deductions and analytical conversations."
  },
  {
    "title": "Off Campus",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🏫",
    "description": "Original English series with relationship and everyday dialogue."
  },
  {
    "title": "Overlord",
    "year": "",
    "level": "B1",
    "type": "Anime",
    "method": "English dub",
    "difficulty": "medium",
    "icon": "💀",
    "description": "Fantasy anime with English dubbing and world-building vocabulary."
  },
  {
    "title": "The Punisher",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "💀",
    "description": "Crime, military and action vocabulary."
  },
  {
    "title": "Rick and Morty",
    "year": "",
    "level": "B2",
    "type": "Animation",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🧪",
    "description": "Fast speech, science jokes, slang and cultural references."
  },
  {
    "title": "Spectre",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "👻",
    "description": "Anime title with fantasy and supernatural vocabulary."
  },
  {
    "title": "Stranger Things",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🚲",
    "description": "Teen conversations, American English and everyday slang."
  },
  {
    "title": "The Legend of Vox Machina",
    "year": "",
    "level": "B2",
    "type": "Animation",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🧙",
    "description": "Fantasy vocabulary, fast jokes, slang and adult humor."
  },
  {
    "title": "The Walking Dead",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🧟",
    "description": "Everyday conversations, emotional dialogue and different accents."
  },
  {
    "title": "Deadpool 2",
    "year": "2018",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🔴",
    "description": "Lots of jokes, sarcasm, slang and cultural references."
  },
  {
    "title": "Deadpool & Wolverine",
    "year": "2024",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🟥",
    "description": "Very fast jokes, sarcasm, slang and pop-culture references."
  },
  {
    "title": "Jurassic World Rebirth",
    "year": "2025",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🦖",
    "description": "Adventure dialogue with some scientific vocabulary."
  },
  {
    "title": "Office Romance",
    "year": "2026",
    "level": "B2",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "💼",
    "description": "American office romance series starring Jennifer Lopez."
  },
  {
    "title": "The Wolverine",
    "year": "2013",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🐺",
    "description": "Action movie with fairly clear and standard dialogue."
  },
  {
    "title": "The Electric State",
    "year": "2025",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🤖",
    "description": "Science-fiction movie with standard English dialogue."
  },
  {
    "title": "Triple Threat",
    "year": "2019",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "💥",
    "description": "Action movie with simple dialogue and many action scenes."
  },
  {
    "title": "Black Torch",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "🖤",
    "description": "Action and supernatural vocabulary."
  },
  {
    "title": "Clevatess",
    "year": "",
    "level": "B1",
    "type": "Anime",
    "method": "English dub",
    "difficulty": "medium",
    "icon": "👹",
    "description": "A monster becomes human and enters the human world."
  },
  {
    "title": "Daemons of the Shadow Realm",
    "year": "",
    "level": "C1",
    "type": "Manga",
    "method": "English translation",
    "difficulty": "hard",
    "icon": "👤",
    "description": "Fantasy manga with complex narration and vocabulary."
  },
  {
    "title": "Dear X",
    "year": "",
    "level": "B2",
    "type": "Series",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "💔",
    "description": "Psychological Korean drama with complex relationships."
  },
  {
    "title": "Digimon Beatbreak",
    "year": "",
    "level": "A2",
    "type": "Anime",
    "method": "English dub",
    "difficulty": "easy",
    "icon": "⚡",
    "description": "Beginner-friendly anime with relatively clear dialogue."
  },
  {
    "title": "Duty After School",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🎒",
    "description": "School conversations mixed with military vocabulary."
  },
  {
    "title": "From",
    "year": "",
    "level": "B2",
    "type": "Series",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🌲",
    "description": "Natural dialogue, different accents and an ambiguous story."
  },
  {
    "title": "Game of Thrones",
    "year": "",
    "level": "B2",
    "type": "Series",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🐉",
    "description": "Formal speech, accents and political fantasy vocabulary."
  },
  {
    "title": "House of the Dragon",
    "year": "",
    "level": "C1",
    "type": "Series",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🔥",
    "description": "Formal speech, British accents and political dialogue."
  },
  {
    "title": "Heavenly Delusion",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "🌌",
    "description": "Natural, philosophical and sometimes ambiguous dialogue."
  },
  {
    "title": "Hell's Paradise",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🔥",
    "description": "Historical, fantasy and combat vocabulary."
  },
  {
    "title": "Backrooms",
    "year": "2026",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🚪",
    "description": "Horror project set in the mysterious Backrooms environment."
  },
  {
    "title": "The Black Phone",
    "year": "2025",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "☎️",
    "description": "Crime and horror dialogue with some accent-related difficulty."
  },
  {
    "title": "Colony",
    "year": "2026",
    "level": "B2",
    "type": "Movie",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "🧟",
    "description": "New zombie-related Asian movie project."
  },
  {
    "title": "Forever My Girl",
    "year": "2018",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🎸",
    "description": "Everyday emotional conversations with an American accent."
  },
  {
    "title": "Ghost Train",
    "year": "2024",
    "level": "B1",
    "type": "Movie",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🚂",
    "description": "Horror movie with difficulty depending on the available version."
  },
  {
    "title": "Insidious: The Last Key",
    "year": "2018",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "easy",
    "icon": "🔑",
    "description": "General English with a supernatural horror atmosphere."
  },
  {
    "title": "Insidious: The Red Door",
    "year": "2023",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🚪",
    "description": "General English with emotional and horror dialogue."
  },
  {
    "title": "Little Brother",
    "year": "2026",
    "level": "B1",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "👊",
    "description": "New movie starring John Cena."
  },
  {
    "title": "Lost in Translation",
    "year": "",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🌃",
    "description": "Natural conversations, irony and subtle implied meaning."
  },
  {
    "title": "Obsession",
    "year": "2026",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "🌀",
    "description": "A psychological story about love, desire and obsession."
  },
  {
    "title": "Odd Thomas",
    "year": "2013",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "👁️",
    "description": "Narration-heavy movie with supernatural vocabulary."
  },
  {
    "title": "Sex Doll",
    "year": "2016",
    "level": "B2",
    "type": "Movie",
    "method": "English subtitles",
    "difficulty": "hard",
    "icon": "🎭",
    "description": "French thriller-drama with English subtitles."
  },
  {
    "title": "The Gorge",
    "year": "2025",
    "level": "B2",
    "type": "Movie",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🏔️",
    "description": "A movie about a valley and snipers with military vocabulary."
  },
  {
    "title": "Pyramid Game",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🔺",
    "description": "School and social vocabulary with tense dialogue."
  },
  {
    "title": "Silo",
    "year": "",
    "level": "B2",
    "type": "Series",
    "method": "Original English",
    "difficulty": "medium",
    "icon": "🏗️",
    "description": "Technical, mysterious and science-fiction dialogue."
  },
  {
    "title": "Sweet Home",
    "year": "",
    "level": "B1",
    "type": "Series",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🏢",
    "description": "Everyday Korean dialogue with English subtitles."
  },
  {
    "title": "The Witcher",
    "year": "",
    "level": "B2",
    "type": "Series",
    "method": "Original English",
    "difficulty": "hard",
    "icon": "⚔️",
    "description": "Fantasy language, accents and old-fashioned vocabulary."
  },
  {
    "title": "Tomb Raider King",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🏺",
    "description": "Fantasy adventure with action and historical vocabulary."
  },
  {
    "title": "The Witch and the Beast",
    "year": "",
    "level": "B2",
    "type": "Anime",
    "method": "English subtitles",
    "difficulty": "medium",
    "icon": "🧙‍♀️",
    "description": "Formal narration with magic-related vocabulary."
  }
];

const palette = [
  ["#7c3aed", "#ec4899"],
  ["#2563eb", "#06b6d4"],
  ["#dc2626", "#7f1d1d"],
  ["#16a34a", "#0891b2"],
  ["#f97316", "#db2777"],
  ["#4f46e5", "#9333ea"]
];

const state = {
  search: "",
  level: "all",
  type: "all",
  method: "all",
  sort: "recommended",
  quick: "all",
  favorites: JSON.parse(localStorage.getItem("movieLingoFavorites") || "[]")
};

const elements = {
  cardsGrid: document.querySelector("#cardsGrid"),
  emptyState: document.querySelector("#emptyState"),
  resultCount: document.querySelector("#resultCount"),
  totalCount: document.querySelector("#totalCount"),
  movieCount: document.querySelector("#movieCount"),
  seriesCount: document.querySelector("#seriesCount"),
  favoriteCount: document.querySelector("#favoriteCount"),
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  levelFilter: document.querySelector("#levelFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  watchFilter: document.querySelector("#watchFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  resetButton: document.querySelector("#resetButton"),
  emptyResetButton: document.querySelector("#emptyResetButton"),
  startButton: document.querySelector("#startButton"),
  randomButton: document.querySelector("#randomButton"),
  themeButton: document.querySelector("#themeButton"),
  themeIcon: document.querySelector("#themeIcon"),
  modal: document.querySelector("#modal"),
  modalContent: document.querySelector("#modalContent"),
  modalClose: document.querySelector("#modalClose"),
  toast: document.querySelector("#toast")
};

shows.forEach((show, index) => {
  show.colors = palette[index % palette.length];
});

function isFavorite(title) {
  return state.favorites.includes(title);
}

function saveFavorites() {
  localStorage.setItem("movieLingoFavorites", JSON.stringify(state.favorites));
}

function getDifficultyText(difficulty) {
  if (difficulty === "easy") return "Beginner friendly";
  if (difficulty === "medium") return "Intermediate";
  return "Advanced";
}

function matchesFilters(show) {
  const searchableText = `
    ${show.title} ${show.year} ${show.level} ${show.type}
    ${show.method} ${show.difficulty} ${getDifficultyText(show.difficulty)}
    ${show.description}
  `.toLowerCase();

  const searchMatch = searchableText.includes(state.search.toLowerCase());
  const levelMatch = state.level === "all" || show.level === state.level;
  const typeMatch = state.type === "all" || show.type.toLowerCase() === state.type;

  let methodMatch = true;
  if (state.method === "dub") methodMatch = show.method === "English dub";
  if (state.method === "sub") methodMatch = show.method === "English subtitles";
  if (state.method === "original") methodMatch = show.method === "Original English";
  if (state.method === "translation") methodMatch = show.method === "English translation";

  let quickMatch = true;
  if (state.quick === "favorites") {
    quickMatch = isFavorite(show.title);
  } else if (state.quick !== "all") {
    quickMatch = show.difficulty === state.quick;
  }

  return searchMatch && levelMatch && typeMatch && methodMatch && quickMatch;
}

function getFilteredShows() {
  const result = shows.filter(matchesFilters);

  if (state.sort === "name") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (state.sort === "level") {
    const order = { A2: 1, B1: 2, B2: 3, C1: 4 };
    result.sort((a, b) => order[a.level] - order[b.level] || a.title.localeCompare(b.title));
  }

  if (state.sort === "favorites") {
    result.sort((a, b) =>
      Number(isFavorite(b.title)) - Number(isFavorite(a.title)) ||
      a.title.localeCompare(b.title)
    );
  }

  return result;
}

function createCard(show, index) {
  const favorite = isFavorite(show.title);
  const [colorA, colorB] = show.colors;

  return `
    <article class="movie-card">
      <div class="cover" style="--cover-a:${colorA};--cover-b:${colorB}">
        <button
          class="favorite-button ${favorite ? "active" : ""}"
          data-action="favorite"
          data-title="${encodeURIComponent(show.title)}"
          type="button"
          aria-label="${favorite ? "Remove" : "Add"} ${escapeHtml(show.title)} ${favorite ? "from" : "to"} favorites"
          aria-pressed="${favorite}"
          title="${favorite ? "Remove from favorites" : "Add to favorites"}"
        >${favorite ? "♥" : "♡"}</button>
        <div class="cover-icon" aria-hidden="true">${show.icon}</div>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <h3 class="card-title">${escapeHtml(show.title)}</h3>
          ${show.year ? `<span class="year">${escapeHtml(show.year)}</span>` : ""}
        </div>

        <div class="meta">
          <span class="badge level-badge">${escapeHtml(show.level)}</span>
          <span class="badge">${escapeHtml(show.type)}</span>
          <span class="badge">${escapeHtml(show.method)}</span>
        </div>

        <p class="description">${escapeHtml(show.description)}</p>

        <div class="card-footer">
          <button
            class="details-button"
            data-action="details"
            data-index="${index}"
            type="button"
            aria-label="View details for ${escapeHtml(show.title)}"
          >View details</button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const filtered = getFilteredShows();

  elements.cardsGrid.innerHTML = filtered
    .map((show) => createCard(show, shows.indexOf(show)))
    .join("");

  elements.resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "title" : "titles"}`;
  elements.emptyState.hidden = filtered.length !== 0;
  elements.cardsGrid.hidden = filtered.length === 0;

  updateStats();
  updateQuickButtons();
}

function updateStats() {
  elements.totalCount.textContent = shows.length;
  elements.movieCount.textContent = shows.filter((show) => show.type === "Movie").length;
  elements.seriesCount.textContent = shows.filter((show) =>
    ["Series", "Anime", "Animation"].includes(show.type)
  ).length;
  elements.favoriteCount.textContent = state.favorites.length;
}

function updateQuickButtons() {
  document.querySelectorAll("[data-quick]").forEach((button) => {
    button.classList.toggle("active", button.dataset.quick === state.quick);
  });
}

function setFilters(nextState = {}) {
  Object.assign(state, nextState);
  syncControls();
  render();
}

function syncControls() {
  elements.searchInput.value = state.search;
  elements.levelFilter.value = state.level;
  elements.typeFilter.value = state.type;
  elements.watchFilter.value = state.method;
  elements.sortFilter.value = state.sort;
}

function resetFilters() {
  state.search = "";
  state.level = "all";
  state.type = "all";
  state.method = "all";
  state.sort = "recommended";
  state.quick = "all";
  syncControls();
  render();
  showToast("Filters cleared");
}

function toggleFavorite(title) {
  const index = state.favorites.indexOf(title);

  if (index === -1) {
    state.favorites.push(title);
    showToast("Added to favorites");
  } else {
    state.favorites.splice(index, 1);
    showToast("Removed from favorites");
  }

  saveFavorites();
  render();
}

function openModal(show) {
  const [colorA, colorB] = show.colors;

  elements.modalContent.innerHTML = `
    <div class="modal-cover" style="--cover-a:${colorA};--cover-b:${colorB}">
      <div class="cover-icon" aria-hidden="true">${show.icon}</div>
    </div>
    <div class="modal-body">
      <span class="modal-kicker">${escapeHtml(show.type)} · ${escapeHtml(show.level)}</span>
      <h2 id="modalTitle">${escapeHtml(show.title)}${show.year ? ` <span class="year">(${escapeHtml(show.year)})</span>` : ""}</h2>
      <p class="modal-description">${escapeHtml(show.description)}</p>

      <div class="detail-list">
        <div class="detail-item">
          <span>Language level</span>
          <strong>${escapeHtml(show.level)}</strong>
        </div>
        <div class="detail-item">
          <span>Difficulty</span>
          <strong>${escapeHtml(getDifficultyText(show.difficulty))}</strong>
        </div>
        <div class="detail-item">
          <span>Format</span>
          <strong>${escapeHtml(show.type)}</strong>
        </div>
        <div class="detail-item">
          <span>Viewing method</span>
          <strong>${escapeHtml(show.method)}</strong>
        </div>
      </div>
    </div>
  `;

  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
  elements.modalClose.focus();
}

function closeModal() {
  elements.modal.hidden = true;
  document.body.style.overflow = "";
}

function pickRandom() {
  const pool = getFilteredShows();
  if (!pool.length) {
    showToast("No titles match your current filters");
    return;
  }

  const show = pool[Math.floor(Math.random() * pool.length)];
  openModal(show);
}

let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 1900);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("movieLingoTheme", theme);
  const isLight = theme === "light";
  elements.themeIcon.textContent = isLight ? "🌙" : "☀️";
  elements.themeButton.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
  elements.themeButton.title = isLight ? "Switch to dark theme" : "Switch to light theme";
}

function initializeTheme() {
  const saved = localStorage.getItem("movieLingoTheme");
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
    return;
  }

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");
}

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  render();
});

elements.clearSearch.addEventListener("click", () => {
  state.search = "";
  elements.searchInput.value = "";
  render();
  elements.searchInput.focus();
});

elements.levelFilter.addEventListener("change", (event) => {
  setFilters({ level: event.target.value, quick: "all" });
});

elements.typeFilter.addEventListener("change", (event) => {
  setFilters({ type: event.target.value });
});

elements.watchFilter.addEventListener("change", (event) => {
  setFilters({ method: event.target.value });
});

elements.sortFilter.addEventListener("change", (event) => {
  setFilters({ sort: event.target.value });
});

document.addEventListener("click", (event) => {
  const quickButton = event.target.closest("[data-quick]");
  if (quickButton) {
    if (quickButton.dataset.level) {
      setFilters({ level: quickButton.dataset.level, quick: "all" });
    } else {
      setFilters({ quick: quickButton.dataset.quick });
    }
    return;
  }

  const favoriteButton = event.target.closest('[data-action="favorite"]');
  if (favoriteButton) {
    toggleFavorite(decodeURIComponent(favoriteButton.dataset.title));
    return;
  }

  const detailsButton = event.target.closest('[data-action="details"]');
  if (detailsButton) {
    const show = shows[Number(detailsButton.dataset.index)];
    if (show) openModal(show);
  }
});

elements.resetButton.addEventListener("click", resetFilters);
elements.emptyResetButton.addEventListener("click", resetFilters);

elements.startButton.addEventListener("click", () => {
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});

elements.randomButton.addEventListener("click", pickRandom);

elements.modalClose.addEventListener("click", closeModal);

elements.modal.addEventListener("click", (event) => {
  if (event.target === elements.modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !elements.modal.hidden) {
    closeModal();
  }
});

elements.themeButton.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
  showToast(`${current === "dark" ? "Light" : "Dark"} theme enabled`);
});

initializeTheme();
render();
