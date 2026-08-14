const shows = [
  {
    title: "Amphibia",
    year: "",
    level: "A2",
    type: "Animation",
    method: "English dub",
    difficulty: "easy",
    icon: "🐸",
    description: "Clear dialogue and everyday vocabulary. Great for beginners."
  },

  {
    title: "Chained Soldier",
    year: "",
    level: "B1",
    type: "Anime",
    method: "English subtitles",
    difficulty: "medium",
    icon: "⛓️",
    description: "Fantasy action anime with fairly simple dialogue."
  },

  {
    title: "Demon Slayer",
    year: "",
    level: "A2",
    type: "Anime",
    method: "English dub",
    difficulty: "easy",
    icon: "⚔️",
    description: "A fantasy action anime with understandable English dubbing."
  },

  {
    title: "Dota: Dragon's Blood",
    year: "",
    level: "B1",
    type: "Animation",
    method: "Original English",
    difficulty: "easy",
    icon: "🐉",
    description: "Fantasy vocabulary with original English dialogue."
  },

  {
    title: "In/Spectre",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "hard",
    icon: "🔍",
    description: "Long explanations, deductions and analytical conversations."
  },

  {
    title: "Off Campus",
    year: "",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🏫",
    description: "Original English series with relationship and everyday dialogue."
  },

  {
    title: "Overlord",
    year: "",
    level: "B1",
    type: "Anime",
    method: "English dub",
    difficulty: "medium",
    icon: "💀",
    description: "Fantasy anime with English dubbing and world-building vocabulary."
  },

  {
    title: "The Punisher",
    year: "",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "💀",
    description: "Crime, military and action vocabulary."
  },

  {
    title: "Rick and Morty",
    year: "",
    level: "B2",
    type: "Animation",
    method: "Original English",
    difficulty: "hard",
    icon: "🧪",
    description: "Fast speech, science jokes, slang and cultural references."
  },

  {
    title: "Spectre",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "hard",
    icon: "👻",
    description: "Anime title with fantasy and supernatural vocabulary."
  },

  {
    title: "Stranger Things",
    year: "",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🚲",
    description: "Teen conversations, American English and everyday slang."
  },

  {
    title: "The Legend of Vox Machina",
    year: "",
    level: "B2",
    type: "Animation",
    method: "Original English",
    difficulty: "medium",
    icon: "🧙",
    description: "Fantasy vocabulary, fast jokes, slang and adult humor."
  },

  {
    title: "The Walking Dead",
    year: "",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🧟",
    description: "Everyday conversations, emotional dialogue and different accents."
  },

  {
    title: "Deadpool 2",
    year: "2018",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🔴",
    description: "Lots of jokes, sarcasm, slang and cultural references."
  },

  {
    title: "Deadpool & Wolverine",
    year: "2024",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🟥",
    description: "Very fast jokes, sarcasm, slang and pop-culture references."
  },

  {
    title: "Jurassic World Rebirth",
    year: "2025",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "easy",
    icon: "🦖",
    description: "Adventure dialogue with some scientific vocabulary."
  },

  {
    title: "Office Romance",
    year: "2026",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "💼",
    description: "American office romance series starring Jennifer Lopez."
  },

  {
    title: "The Wolverine",
    year: "2013",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "easy",
    icon: "🐺",
    description: "Action movie with fairly clear and standard dialogue."
  },

  {
    title: "The Electric State",
    year: "2025",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "easy",
    icon: "🤖",
    description: "Science-fiction movie with standard English dialogue."
  },

  {
    title: "Triple Threat",
    year: "2019",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "💥",
    description: "Action movie with simple dialogue and many action scenes."
  },

  {
    title: "Black Torch",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "hard",
    icon: "🖤",
    description: "Action and supernatural vocabulary."
  },

  {
    title: "Clevatess",
    year: "",
    level: "B1",
    type: "Anime",
    method: "English dub",
    difficulty: "medium",
    icon: "👹",
    description: "A monster becomes human and enters the human world."
  },

  {
    title: "Daemons of the Shadow Realm",
    year: "",
    level: "C1",
    type: "Manga",
    method: "English translation",
    difficulty: "hard",
    icon: "👤",
    description: "Fantasy manga with complex narration and vocabulary."
  },

  {
    title: "Dear X",
    year: "",
    level: "B2",
    type: "Series",
    method: "English subtitles",
    difficulty: "hard",
    icon: "💔",
    description: "Psychological Korean drama with complex relationships."
  },

  {
    title: "Digimon Beatbreak",
    year: "",
    level: "A2",
    type: "Anime",
    method: "English dub",
    difficulty: "easy",
    icon: "⚡",
    description: "Beginner-friendly anime with relatively clear dialogue."
  },

  {
    title: "Duty After School",
    year: "",
    level: "B1",
    type: "Series",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🎒",
    description: "School conversations mixed with military vocabulary."
  },

  {
    title: "From",
    year: "",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "🌲",
    description: "Natural dialogue, different accents and an ambiguous story."
  },

  {
    title: "Game of Thrones",
    year: "",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "🐉",
    description: "Formal speech, accents and political fantasy vocabulary."
  },

  {
    title: "House of the Dragon",
    year: "",
    level: "C1",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "🔥",
    description: "Formal speech, British accents and political dialogue."
  },

  {
    title: "Heavenly Delusion",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "hard",
    icon: "🌌",
    description: "Natural, philosophical and sometimes ambiguous dialogue."
  },

  {
    title: "Hell's Paradise",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🔥",
    description: "Historical, fantasy and combat vocabulary."
  },

  {
    title: "Backrooms",
    year: "2026",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🚪",
    description: "Horror project set in the mysterious Backrooms environment."
  },

  {
    title: "The Black Phone",
    year: "2025",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "☎️",
    description: "Crime and horror dialogue with some accent-related difficulty."
  },

  {
    title: "Colony",
    year: "2026",
    level: "B2",
    type: "Movie",
    method: "English subtitles",
    difficulty: "hard",
    icon: "🧟",
    description: "New zombie-related Asian movie project."
  },

  {
    title: "Forever My Girl",
    year: "2018",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "easy",
    icon: "🎸",
    description: "Everyday emotional conversations with an American accent."
  },

  {
    title: "Ghost Train",
    year: "2024",
    level: "B1",
    type: "Movie",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🚂",
    description: "Horror movie with difficulty depending on the available version."
  },

  {
    title: "Insidious: The Last Key",
    year: "2018",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "easy",
    icon: "🔑",
    description: "General English with a supernatural horror atmosphere."
  },

  {
    title: "Insidious: The Red Door",
    year: "2023",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "🚪",
    description: "General English with emotional and horror dialogue."
  },

  {
    title: "Little Brother",
    year: "2026",
    level: "B1",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "👊",
    description: "New movie starring John Cena."
  },

  {
    title: "Lost in Translation",
    year: "",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🌃",
    description: "Natural conversations, irony and subtle implied meaning."
  },

  {
    title: "Obsession",
    year: "2026",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🌀",
    description: "A psychological story about love, desire and obsession."
  },

  {
    title: "Odd Thomas",
    year: "2013",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "👁️",
    description: "Narration-heavy movie with supernatural vocabulary."
  },

  {
    title: "Sex Doll",
    year: "2016",
    level: "B2",
    type: "Movie",
    method: "English subtitles",
    difficulty: "hard",
    icon: "🎭",
    description: "French thriller-drama with English subtitles."
  },

  {
    title: "The Gorge",
    year: "2025",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "medium",
    icon: "🏔️",
    description: "A movie about a valley and snipers with military vocabulary."
  },

  {
    title: "Pyramid Game",
    year: "",
    level: "B1",
    type: "Series",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🔺",
    description: "School and social vocabulary with tense dialogue."
  },

  {
    title: "Silo",
    year: "",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🏗️",
    description: "Technical, mysterious and science-fiction dialogue."
  },

  {
    title: "Sweet Home",
    year: "",
    level: "B1",
    type: "Series",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🏢",
    description: "Everyday Korean dialogue with English subtitles."
  },

  {
    title: "The Witcher",
    year: "",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "⚔️",
    description: "Fantasy language, accents and old-fashioned vocabulary."
  },

  {
    title: "Tomb Raider King",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🏺",
    description: "Fantasy adventure with action and historical vocabulary."
  },

  {
    title: "The Witch and the Beast",
    year: "",
    level: "B2",
    type: "Anime",
    method: "English subtitles",
    difficulty: "medium",
    icon: "🧙‍♀️",
    colors: ["#334155", "#9333ea"],
    description: "Formal narration with magic-related vocabulary."
  }
];

const colors = [
  ["#22c55e", "#0891b2"],
  ["#2563eb", "#7c3aed"],
  ["#dc2626", "#7f1d1d"],
  ["#ec4899", "#f97316"],
  ["#0f766e", "#1e293b"],
  ["#9333ea", "#1e1b4b"],
  ["#f59e0b", "#475569"]
];

shows.forEach((show, index) => {
  show.colors = show.colors || colors[index % colors.length];
});

const state = {
  search: "",
  level: "all",
  type: "all",
  method: "all",
  sort: "recommended",
  quick: "all",
  favorites: JSON.parse(
    localStorage.getItem("movieLingoFavorites") || "[]"
  )
};

const $ = selector => document.querySelector(selector);

function isFavorite(title) {
  return state.favorites.includes(title);
}

function toggleFavorite(title) {
  if (isFavorite(title)) {
    state.favorites = state.favorites.filter(
      item => item !== title
    );
    showToast("Removed from favorites");
  } else {
    state.favorites.push(title);
    showToast("Added to favorites");
  }

  localStorage.setItem(
    "movieLingoFavorites",
    JSON.stringify(state.favorites)
  );

  render();
}

function matches(show) {
  const searchText = `
    ${show.title}
    ${show.year}
    ${show.type}
    ${show.level}
    ${show.method}
    ${show.description}
  `.toLowerCase();

  const searchMatch = searchText.includes(
    state.search.toLowerCase()
  );

  const levelMatch =
    state.level === "all" ||
    show.level === state.level;

  const typeMatch =
    state.type === "all" ||
    show.type.toLowerCase() === state.type;

  const methodMatch =
    state.method === "all" ||
    (
      state.method === "sub"
        ? show.method.toLowerCase().includes("subtitle")
        : state.method === "dub"
          ? show.method.toLowerCase().includes("dub")
          : show.method === "original"
            ? show.method.toLowerCase().includes("original")
            : true
    );

  let quickMatch = true;

  if (state.quick !== "all") {
    if (state.quick === "favorites") {
      quickMatch = isFavorite(show.title);
    } else {
      quickMatch = show.difficulty === state.quick;
    }
  }

  return searchMatch && levelMatch && typeMatch && methodMatch && quickMatch;
}

function getFilteredShows() {
  const result = shows.filter(matches);

  if (state.sort === "name") {
    result.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (state.sort === "level") {
    const order = {
      A2: 1,
      B1: 2,
      B2: 3,
      C1: 4
    };

    result.sort((a, b) =>
      order[a.level] - order[b.level]
    );
  }

  if (state.sort === "favorites") {
    result.sort((a, b) =>
      Number(isFavorite(b.title)) -
      Number(isFavorite(a.title))
    );
  }

  return result;
}

function createCard(show) {
  const favorite = isFavorite(show.title);

  return `
    <article class="show-card">
      <div
        class="card-cover"
        style="
          --cover-one: ${show.colors[0]};
          --cover-two: ${show.colors[1]};
        "
      >
        <span class="cover-icon">${show.icon}</span>

        <span class="level-badge">${show.level}</span>

        <button
          class="favorite-button ${favorite ? "active" : ""}"
          data-favorite="${show.title}"
        >
          ${favorite ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-body">
        <h3 class="card-title">
          ${show.title}${show.year ? ` (${show.year})` : ""}
        </h3>

        <div class="tags">
          <span class="tag">${show.type}</span>
          <span class="tag">${show.method}</span>
        </div>

        <p class="card-description">
          ${show.description}
        </p>

        <div class="card-footer">
          <span class="difficulty">
            ${
              show.difficulty === "easy"
                ? "Beginner friendly"
                : show.difficulty === "medium"
                  ? "Intermediate"
                  : "Advanced"
            }
          </span>

          <button
            class="details-button"
            data-details="${show.title}"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const filtered = getFilteredShows();

  $("#cardsGrid").innerHTML = filtered
    .map(createCard)
    .join("");

  $("#resultCount").textContent =
    `${filtered.length} results`;

  $("#cardsGrid").classList.toggle(
    "hidden",
    filtered.length === 0
  );

  $("#emptyState").classList.toggle(
    "hidden",
    filtered.length !== 0
  );

  $("#totalCount").textContent = shows.length;

  $("#movieCount").textContent = shows.filter(
    show => show.type === "Movie"
  ).length;

  $("#seriesCount").textContent = shows.filter(
    show =>
      show.type === "Series" ||
      show.type === "Anime" ||
      show.type === "Animation"
  ).length;

  $("#favoriteCount").textContent =
    state.favorites.length;

  $("#clearSearch").style.display =
    state.search ? "block" : "none";
}

function openDetails(title) {
  const show = shows.find(item => item.title === title);

  if (!show) return;

  const difficulty =
    show.difficulty === "easy"
      ? "Beginner friendly"
      : show.difficulty === "medium"
        ? "Intermediate"
        : "Advanced";

  $("#modalContent").innerHTML = `
    <span class="modal-level">${show.level}</span>

    <h2>
      ${show.title}${show.year ? ` (${show.year})` : ""}
    </h2>

    <p>${show.description}</p>

    <p>
      <strong>Viewing tip:</strong>
      Use ${show.method.toLowerCase()} for a better experience.
    </p>

    <div class="modal-info">
      <div class="info-box">
        <span>Format</span>
        <strong>${show.type}</strong>
      </div>

      <div class="info-box">
        <span>Viewing method</span>
        <strong>${show.method}</strong>
      </div>

      <div class="info-box">
        <span>Difficulty</span>
        <strong>${difficulty}</strong>
      </div>

      <div class="info-box">
        <span>Favorite</span>
        <strong>
          ${isFavorite(show.title) ? "Saved ♥" : "Not saved"}
        </strong>
      </div>
    </div>
  `;

  $("#modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modal").classList.add("hidden");
  document.body.style.overflow = "";
}

function showToast(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function resetFilters() {
  state.search = "";
  state.level = "all";
  state.type = "all";
  state.method = "all";
  state.sort = "recommended";
  state.quick = "all";

  $("#searchInput").value = "";
  $("#levelFilter").value = "all";
  $("#typeFilter").value = "all";
  $("#watchFilter").value = "all";
  $("#sortFilter").value = "recommended";

  updateQuickButtons();
  render();
}

function updateQuickButtons() {
  document.querySelectorAll(".quick-filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.quick === state.quick
    );
  });
}

function randomPick() {
  const list = getFilteredShows();
  const source = list.length ? list : shows;

  const selected =
    source[Math.floor(Math.random() * source.length)];

  openDetails(selected.title);
  showToast(`Random pick: ${selected.title}`);
}

$("#searchInput").addEventListener("input", event => {
  state.search = event.target.value.trim();
  render();
});

$("#clearSearch").addEventListener("click", () => {
  $("#searchInput").value = "";
  state.search = "";
  render();
});

$("#levelFilter").addEventListener("change", event => {
  state.level = event.target.value;
  state.quick = "all";
  updateQuickButtons();
  render();
});

$("#typeFilter").addEventListener("change", event => {
  state.type = event.target.value;
  state.quick = "all";
  updateQuickButtons();
  render();
});

$("#watchFilter").addEventListener("change", event => {
  state.method = event.target.value;
  state.quick = "all";
  updateQuickButtons();
  render();
});

$("#sortFilter").addEventListener("change", event => {
  
