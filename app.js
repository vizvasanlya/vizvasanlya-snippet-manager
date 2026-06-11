const cards = [{"label": "Snippets", "value": "214", "delta": "+33"}, {"label": "Languages", "value": "12", "delta": "+2"}, {"label": "Copies", "value": "5.6K", "delta": "+24%"}, {"label": "Favorites", "value": "48", "delta": "+7"}];
const rows = [{"title": "Debounce utility", "status": "JavaScript", "detail": "Reusable input throttling helper."}, {"title": "FastAPI health route", "status": "Python", "detail": "Minimal service readiness endpoint."}, {"title": "Git reset safety", "status": "Shell", "detail": "Command checklist for local branch recovery."}, {"title": "Auth middleware", "status": "Node", "detail": "Token validation pattern for APIs."}];
const insights = ["Tagged snippets reduce search time.", "Favorite count highlights high-value utilities.", "Language filters improve team reuse."];
const storageKey = 'vizvasanlya-snippet-manager-items';
let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
let filter = 'all';

const statsEl = document.querySelector('#stats');
const listEl = document.querySelector('#list');
const insightsEl = document.querySelector('#insights');
const form = document.querySelector('#add-item');
const input = document.querySelector('#itemInput');

function renderStats() {
  statsEl.innerHTML = cards.map((item) => `
    <article class="metric">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <em>${item.delta}</em>
    </article>
  `).join('');
}

function renderList() {
  const visible = rows.filter((row) => filter === 'all' || row.status.includes(filter));
  if (!visible.length) {
    listEl.innerHTML = '<p class="empty">No items match this filter yet.</p>';
    return;
  }
  listEl.innerHTML = visible.map((row) => `
    <article class="row">
      <div>
        <h3>${row.title}</h3>
        <p>${row.detail}</p>
      </div>
      <span class="badge">${row.status}</span>
    </article>
  `).join('');
}

function renderInsights() {
  insightsEl.innerHTML = insights.map((item) => `<li>${item}</li>`).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  saved.unshift({ title: value, status: 'Active', detail: 'Added from the quick capture form.' });
  localStorage.setItem(storageKey, JSON.stringify(saved.slice(0, 10)));
  input.value = '';
  renderList();
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderList();
  });
});

renderStats();
renderList();
renderInsights();
