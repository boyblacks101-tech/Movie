const shows = [
  {
    title: "Amphibia",
    level: "A2",
    type: "Animation",
    method: "English dub",
    difficulty: "easy",
    icon: "🐸",
    description: "Clear dialogue and everyday vocabulary."
  },
  {
    title: "Demon Slayer",
    level: "A2",
    type: "Anime",
    method: "English dub",
    difficulty: "easy",
    icon: "⚔️",
    description: "Fantasy action anime with understandable dialogue."
  },
  {
    title: "The Walking Dead",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🧟",
    description: "Everyday conversations with emotional dialogue."
  },
  {
    title: "Stranger Things",
    level: "B1",
    type: "Series",
    method: "Original English",
    difficulty: "medium",
    icon: "🚲",
    description: "Teen conversations, slang and American English."
  },
  {
    title: "Deadpool 2",
    level: "B2",
    type: "Movie",
    method: "Original English",
    difficulty: "hard",
    icon: "🔴",
    description: "Jokes, sarcasm, slang and cultural references."
  },
  {
    title: "Game of Thrones",
    level: "B2",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "🐉",
    description: "Formal speech, accents and political vocabulary."
  },
  {
    title: "House of the Dragon",
    level: "C1",
    type: "Series",
    method: "Original English",
    difficulty: "hard",
    icon: "🔥",
    description: "Formal speech, British accents and political dialogue."
  }
];

const cardsGrid = document.querySelector("#cardsGrid");
const resultCount = document.querySelector("#resultCount");
const totalCount = document.querySelector("#totalCount");
const movieCount = document.querySelector("#movieCount");
const seriesCount = document.querySelector("#seriesCount");
const favoriteCount = document.querySelector("#favoriteCount");
const emptyState = document.querySelector("#emptyState");

let favorites = JSON.parse(
  localStorage.getItem("movieLingoFavorites") || "[]"
);

function isFavorite(title) {
  return favorites.includes(title);
}

function createCard(show) {
  return `
    <article class="show-card">
      <div
        class="card-cover"
        style="
          --cover-one: #7c3aed;
          --cover-two: #ec4899;
        "
      >
        <span class="cover-icon">${show.icon}</span>
        <span class="level-badge">${show.level}</span>

        <button
          class="favorite-button ${isFavorite(show.title) ? "active" : ""}"
          data-favorite="${show.title}"
        >
          ${isFavorite(show.title) ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-body">
        <h3 class="card-title">${show.title}</h3>

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

          <button class="details-button">
            Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function render() {
  cardsGrid.innerHTML = shows.map(createCard).join("");

  resultCount.textContent = `${shows.length} results`;
  totalCount.textContent = shows.length;

  movieCount.textContent = shows.filter(
    show => show.type === "Movie"
  ).length;

  seriesCount.textContent = shows.filter(
    show =>
      show.type === "Series" ||
      show.type === "Anime" ||
      show.type === "Animation"
  ).length;

  favoriteCount.textContent = favorites.length;

  emptyState.classList.add("hidden");
  cardsGrid.classList.remove("hidden");
}

cardsGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-favorite]");

  if (!button) return;

  const title = button.dataset.favorite;

  if (favorites.includes(title)) {
    favorites = favorites.filter(item => item !== title);
  } else {
    favorites.push(title);
  }

  localStorage.setItem(
    "movieLingoFavorites",
    JSON.stringify(favorites)
  );

  render();
});

render();
