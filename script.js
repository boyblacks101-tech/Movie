const shows = [
  {
    id: "amphibia",
    title: "Amphibia",
    level: "A2",
    type: "animation",
    typeLabel: "Animation",
    watch: "dub",
    watchLabel: "English dub",
    difficulty: "easy",
    icon: "🐸",
    colors: ["#22c55e", "#0891b2"],
    description:
      "Clear dialogue and everyday vocabulary. Great for beginners.",
    note:
      "Try the English dub with English subtitles."
  },

  {
    id: "digimon-beatbreak",
    title: "Digimon Beatbreak",
    level: "A2",
    type: "anime",
    typeLabel: "Anime",
    watch: "dub",
    watchLabel: "English dub",
    difficulty: "easy",
    icon: "⚡",
    colors: ["#2563eb", "#7c3aed"],
    description:
      "A beginner-friendly anime with fairly clear dialogue.",
    note:
      "The English dub is easier than English subtitles."
  },

  {
    id: "demon-slayer",
    title: "Demon Slayer",
    level: "A2",
    type: "anime",
    typeLabel: "Anime",
    watch: "dub",
    watchLabel: "English dub",
    difficulty: "easy",
    icon: "⚔️",
    colors: ["#ef4444", "#7c3aed"],
    description:
      "Understandable English dub with fantasy and combat vocabulary.",
    note:
      "Start with the English dub."
  },

  {
    id: "dota",
    title: "Dota: Dragon's Blood",
    level: "B1",
    type: "animation",
    typeLabel: "Animation",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🐉",
    colors: ["#dc2626", "#1e293b"],
    description:
      "Original English with fantasy, magic and battle vocabulary.",
    note:
      "English subtitles are recommended at B1."
  },

  {
    id: "wolverine",
    title: "The Wolverine",
    year: "2013",
    level: "B1",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🐺",
    colors: ["#f59e0b", "#475569"],
    description:
      "An action movie with fairly clear and standard dialogue.",
    note:
      "A good bridge from A2 to B1."
  },

  {
    id: "forever-my-girl",
    title: "Forever My Girl",
    year: "2018",
    level: "B1",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🎸",
    colors: ["#ec4899", "#f97316"],
    description:
      "Everyday and emotional conversations with an American accent.",
    note:
      "Useful for natural conversational English."
  },

  {
    id: "electric-state",
    title: "The Electric State",
    year: "2025",
    level: "B1",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🤖",
    colors: ["#0ea5e9", "#6366f1"],
    description:
      "Standard English dialogue with some science-fiction vocabulary.",
    note:
      "A manageable B1 science-fiction movie."
  },

  {
    id: "jurassic-world",
    title: "Jurassic World Rebirth",
    year: "2025",
    level: "B1",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🦖",
    colors: ["#15803d", "#92400e"],
    description:
      "Adventure dialogue with some scientific vocabulary.",
    note:
      "English subtitles are useful at B1."
  },

  {
    id: "insidious-key",
    title: "Insidious: The Last Key",
    year: "2018",
    level: "B1",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "easy",
    icon: "🔑",
    colors: ["#334155", "#7f1d1d"],
    description:
      "Mostly general English with a horror atmosphere.",
    note:
      "A good starter horror movie."
  },

  {
    id: "chained-soldier",
    title: "Chained Soldier",
    level: "B1",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "⛓️",
    colors: ["#7c3aed", "#be123c"],
    description:
      "Not extremely complex, but some scenes are fast.",
    note:
      "Use English subtitles."
  },

  {
    id: "clevatess",
    title: "Clevatess",
    level: "B1",
    type: "anime",
    typeLabel: "Anime",
    watch: "dub",
    watchLabel: "English dub",
    difficulty: "medium",
    icon: "👹",
    colors: ["#9333ea", "#0f172a"],
    description:
      "A monster becomes human and enters the human world.",
    note:
      "The English dub is the easier option."
  },

  {
    id: "sweet-home",
    title: "Sweet Home",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🏢",
    colors: ["#475569", "#991b1b"],
    description:
      "Everyday Korean dialogue with English subtitles.",
    note:
      "Emergency scenes can be faster."
  },

  {
    id: "duty-after-school",
    title: "Duty After School",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🎒",
    colors: ["#2563eb", "#475569"],
    description:
      "School conversations with some military vocabulary.",
    note:
      "A good B1 series with English subtitles."
  },

  {
    id: "pyramid-game",
    title: "Pyramid Game",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🔺",
    colors: ["#db2777", "#7c3aed"],
    description:
      "School and social vocabulary with tense dialogue.",
    note:
      "Keep English subtitles on."
  },

  {
    id: "off-campus",
    title: "Off Campus",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🏫",
    colors: ["#14b8a6", "#2563eb"],
    description:
      "Original English with everyday relationship conversations.",
    note:
      "Some slang and fast dialogue may be challenging."
  },

  {
    id: "stranger-things",
    title: "Stranger Things",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🚲",
    colors: ["#be123c", "#1e1b4b"],
    description:
      "Teen slang, jokes and everyday American English.",
    note:
      "The early seasons are easier."
  },

  {
    id: "walking-dead",
    title: "The Walking Dead",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🧟",
    colors: ["#365314", "#292524"],
    description:
      "Everyday conversations with emotional dialogue and accents.",
    note:
      "Start with the early seasons."
  },

  {
    id: "punisher",
    title: "The Punisher",
    level: "B1",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "💀",
    colors: ["#0f172a", "#64748b"],
    description:
      "Crime and military vocabulary with different accents.",
    note:
      "Better after The Walking Dead."
  },

  {
    id: "silo",
    title: "Silo",
    level: "B2",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🏗️",
    colors: ["#475569", "#0f766e"],
    description:
      "General English mixed with technical and mysterious dialogue.",
    note:
      "Use English subtitles."
  },

  {
    id: "gorge",
    title: "The Gorge",
    year: "2025",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🏔️",
    colors: ["#0f766e", "#1e293b"],
    description:
      "A movie about a valley and snipers with military vocabulary.",
    note:
      "More comfortable at B2."
  },

  {
    id: "odd-thomas",
    title: "Odd Thomas",
    year: "2013",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "👁️",
    colors: ["#6366f1", "#312e81"],
    description:
      "Narration-heavy with supernatural vocabulary and irony.",
    note:
      "Good for learning descriptive narration."
  },

  {
    id: "vox-machina",
    title: "The Legend of Vox Machina",
    level: "B2",
    type: "animation",
    typeLabel: "Animation",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "medium",
    icon: "🧙",
    colors: ["#7c3aed", "#b91c1c"],
    description:
      "Fast jokes, adult humor, slang and fantasy vocabulary.",
    note:
      "Use English subtitles at first."
  },

  {
    id: "witch-beast",
    title: "The Witch and the Beast",
    level: "B2",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🧙‍♀️",
    colors: ["#334155", "#9333ea"],
    description:
      "Formal narration with magic-related vocabulary.",
    note:
      "English subtitles are recommended."
  },

  {
    id: "heavenly-delusion",
    title: "Heavenly Delusion",
    level: "B2",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🌌",
    colors: ["#0f766e", "#1e3a8a"],
    description:
      "Natural but sometimes philosophical and ambiguous dialogue.",
    note:
      "Good for upper-intermediate learners."
  },

  {
    id: "hells-paradise",
    title: "Hell's Paradise",
    level: "B2",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "medium",
    icon: "🔥",
    colors: ["#ea580c", "#7f1d1d"],
    description:
      "Historical, fantasy and combat vocabulary.",
    note:
      "Try it after Demon Slayer."
  },

  {
    id: "rick-morty",
    title: "Rick and Morty",
    level: "B2",
    type: "animation",
    typeLabel: "Animation",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🧪",
    colors: ["#22c55e", "#0891b2"],
    description:
      "Fast speech, science jokes, slang and cultural references.",
    note:
      "Do not start without English subtitles."
  },

  {
    id: "deadpool-2",
    title: "Deadpool 2",
    year: "2018",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🔴",
    colors: ["#dc2626", "#111827"],
    description:
      "Packed with jokes, irony, slang and cultural references.",
    note:
      "The story is easy, but the language is difficult."
  },

  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: "2024",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🟥",
    colors: ["#dc2626", "#f59e0b"],
    description:
      "Very fast jokes, sarcasm, slang and references.",
    note:
      "Watch after Deadpool 2."
  },

  {
    id: "the-witcher",
    title: "The Witcher",
    level: "B2",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🐺",
    colors: ["#475569", "#0f172a"],
    description:
      "Fantasy language, accents and old-fashioned vocabulary.",
    note:
      "English subtitles are recommended."
  },

  {
    id: "game-of-thrones",
    title: "Game of Thrones",
    level: "B2",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🐉",
    colors: ["#7f1d1d", "#1c1917"],
    description:
      "Accents, formal speech and political vocabulary.",
    note:
      "Start with English subtitles."
  },

  {
    id: "house-of-dragon",
    title: "House of the Dragon",
    level: "C1",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🔥",
    colors: ["#991b1b", "#1e293b"],
    description:
      "Formal speech, British accents and political dialogue.",
    note:
      "Better for advanced learners."
  },

  {
    id: "from",
    title: "From",
    level: "B2",
    type: "series",
    typeLabel: "Series",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🌲",
    colors: ["#166534", "#1e1b4b"],
    description:
      "Different accents, natural dialogue and an ambiguous story.",
    note:
      "A good B2-to-C1 challenge."
  },

  {
    id: "lost-translation",
    title: "Lost in Translation",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "original",
    watchLabel: "Original English",
    difficulty: "hard",
    icon: "🌃",
    colors: ["#be185d", "#1e3a8a"],
    description:
      "Natural conversations, irony and subtle meaning.",
    note:
      "The implied meaning can be harder than the vocabulary."
  },

  {
    id: "in-spectre",
    title: "In/Spectre",
    level: "B2",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "hard",
    icon: "🔍",
    colors: ["#4338ca", "#0f172a"],
    description:
      "Long explanations, arguments and analytical dialogue.",
    note:
      "Useful for advanced vocabulary practice."
  },

  {
    id: "dear-x",
    title: "Dear X",
    level: "B2",
    type: "series",
    typeLabel: "Series",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "hard",
    icon: "💔",
    colors: ["#be123c", "#7c2d12"],
    description:
      "A psychological Korean drama with complex relationships.",
    note:
      "More suitable for B2 and above."
  },

  {
    id: "sex-doll",
    title: "Sex Doll",
    year: "2016",
    level: "B2",
    type: "movie",
    typeLabel: "Movie",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "hard",
    icon: "🎭",
    colors: ["#831843", "#1e293b"],
    description:
      "A French thriller-drama set around a London escort.",
    note:
      "Contains relationship and adult vocabulary."
  },

  {
    id: "black-torch",
    title: "Black Torch",
    level: "B2",
    type: "anime",
    typeLabel: "Anime",
    watch: "sub",
    watchLabel: "English subtitles",
    difficulty: "hard",
    icon: "🖤",
    colors: ["#111827", "#4c1d95"],
    description:
      "Action and supernatural vocabulary.",
    note:
      "The exact difficulty may change with the final release."
  },

  {
    id: "daemons",
    title: "Daemons of the Shadow Realm",
    level: "C1",
    type: "manga",
    typeLabel: "Manga",
    watch: "sub",
    watchLabel: "English translation",
    difficulty: "hard",
    icon: "👤",
    colors: ["#1e1b4b", "#312e81"],
    description:
      "Fantasy manga with complex narration and vocabulary.",
    note:
      "Better for advanced English reading."
  }
];

const state = {
  search: "",
  level: "all",
  type: "all",
  watch: "all",
  sort: "recommended",
  quick: "all",
  favorites: JSON.parse(
    localStorage.getItem("movieLingoFavorites") || "[]"
  )
};

const $ = selector => document.querySelector(selector);

function getLevelKey(show) {
  return show.level.startsWith("C")
    ? "C1"
    : show.level.startsWith("B2")
      ? "B2"
      : show.level.startsWith("B1")
        ? "B1"
        : "A2";
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function saveFavorites() {
  localStorage.setItem(
    "movieLingoFavorites",
    JSON.stringify(state.favorites)
  );
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

function toggleFavorite(id) {
  if (isFavorite(id)) {
    state.favorites = state.favorites.filter(item => item !== id);
    showToast("Removed from favorites");
  } else {
    state.favorites.push(id);
    showToast("Added to favorites");
  }

  saveFavorites();
  render();
}

function matchesFilters(show) {
  const searchText = `
    ${show.title}
    ${show.year || ""}
    ${show.typeLabel}
    ${show.description}
  `.toLowerCase();

  const searchMatch = searchText.includes(
    state.search.toLowerCase()
  );

  const levelMatch =
    state.level === "all" ||
    getLevelKey(show) === state.level;

  const typeMatch =
    state.type === "all" ||
    show.type === state.type;

  const watchMatch =
    state.watch === "all" ||
    show.watch === state.watch;

  let quickMatch = true;

  if (state.quick === "easy") {
    quickMatch = show.difficulty === "easy";
  }

  if (state.quick === "medium") {
    quickMatch = show.difficulty === "medium";
  }

  if (state.quick === "hard") {
    quickMatch = show.difficulty === "hard";
  }

  if (state.quick === "favorites") {
    quickMatch = isFavorite(show.id);
  }

  return searchMatch && levelMatch && typeMatch && watchMatch && quickMatch;
}

function getFilteredShows() {
  const result = shows.filter(matchesFilters);

  if (state.sort === "name") {
    result.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (state.sort === "level") {
    const levels = {
      A2: 1,
      B1: 2,
      B2: 3,
      C1: 4
    };

    result.sort((a, b) =>
      levels[getLevelKey(a)] - levels[getLevelKey(b)]
    );
  }

  if (state.sort === "favorites") {
    result.sort((a, b) =>
      Number(isFavorite(b.id)) - Number(isFavorite(a.id))
    );
  }

  return result;
}

function createCard(show) {
  const favorite = isFavorite(show.id);

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
          data-favorite="${show.id}"
          aria-label="Toggle favorite"
        >
          ${favorite ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-body">
        <h3 class="card-title">
          ${show.title}${show.year ? ` (${show.year})` : ""}
        </h3>

        <div class="tags">
          <span class="tag">${show.typeLabel}</span>
          <span class="tag">${show.watchLabel}</span>
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
            data-details="${show.id}"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function updateStats() {
  $("#totalCount").textContent = shows.length;

  $("#movieCount").textContent = shows.filter(
    show => show.type === "movie"
  ).length;

  $("#seriesCount").textContent = shows.filter(
    show =>
      show.type === "series" ||
      show.type === "anime" ||
      show.type === "animation"
  ).length;

  $("#favoriteCount").textContent = state.favorites.length;
}

function render() {
  const filteredShows = getFilteredShows();

  $("#cardsGrid").innerHTML = filteredShows
    .map(createCard)
    .join("");

  $("#resultCount").textContent =
    `${filteredShows.length} results`;

  $("#cardsGrid").classList.toggle(
    "hidden",
    filteredShows.length === 0
  );

  $("#emptyState").classList.toggle(
    "hidden",
    filteredShows.length !== 0
 
