const $ = (id) => document.getElementById(id);
const state = { type: "all", q: "", gh: {} };

const TYPES = {
  ecole:     { label: "École 42",  cls: "t-ecole" },
  hackathon: { label: "Hackathon", cls: "t-hack" },
  perso:     { label: "Personnel", cls: "t-perso" }
};

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ── En-tête ──
function header(user) {
  const name = CONFIG.displayName || user?.name || CONFIG.username;
  $("name").textContent = name;
  $("footname").textContent = name;
  document.title = `${name} · Portfolio`;
  $("tagline").textContent = CONFIG.tagline || "";
  $("bio").textContent = CONFIG.bio || user?.bio || "";
  $("ghlink").href = `https://github.com/${CONFIG.username}`;
  const av = $("avatar");
  av.src = user?.avatar_url || `https://github.com/${CONFIG.username}.png`;
  av.alt = name; av.hidden = false;
  if (CONFIG.email) { $("mail").href = "mailto:" + CONFIG.email; $("mail").hidden = false; }
  if (CONFIG.linkedin) { $("linkedin").href = CONFIG.linkedin; $("linkedin").hidden = false; }

  const n = (t) => PROJECTS.filter((p) => p.type === t).length;
  $("stats").innerHTML = [
    [PROJECTS.length, "projet", "projets"], [n("ecole"), "à l'école 42", "à l'école 42"],
    [n("hackathon"), "hackathon", "hackathons"], [n("perso"), "personnel", "personnels"]
  ].filter(([v]) => v).map(([v, one, many]) => `<li><strong>${v}</strong> ${v > 1 ? many : one}</li>`).join("");
}

// ── Filtres ──
function filters() {
  const opts = [["all", "Tous"], ...Object.entries(TYPES).filter(([k]) => PROJECTS.some((p) => p.type === k)).map(([k, v]) => [k, v.label])];
  $("filters").innerHTML = opts.map(([k, l]) =>
    `<button class="chip${k === state.type ? " active" : ""}" data-type="${k}" aria-pressed="${k === state.type}">${esc(l)}</button>`
  ).join("");
}

// ── Cartes ──
function card(p) {
  const t = TYPES[p.type] || TYPES.perso;
  const gh = state.gh[p.repo.toLowerCase()];
  const url = gh?.html_url || `https://github.com/${CONFIG.username}/${p.repo}`;
  const demo = p.demo || gh?.homepage;
  const badges = [
    `<span class="badge ${t.cls}">${t.label}</span>`,
    p.score ? `<span class="badge score" title="Note obtenue à 42">${esc(p.score)}</span>` : "",
    p.status ? `<span class="badge ${p.status === "En cours" ? "wip" : "neutral"}">${esc(p.status)}</span>` : "",
    p.team ? `<span class="badge neutral" title="Réalisé en équipe">👥 Équipe</span>` : ""
  ].join("");
  const feats = (p.features || []).length
    ? `<ul class="feats">${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : "";
  const stack = (p.stack || []).map((s) => `<span class="tag">${esc(s)}</span>`).join("");
  const stars = gh?.stargazers_count ? `<span>★ ${gh.stargazers_count}</span>` : "";
  return `
    <article class="card${p.featured ? " big" : ""}">
      <div class="badges">${badges}</div>
      <h3><a href="${esc(url)}" target="_blank" rel="noopener">${esc(p.title)}</a></h3>
      <p class="desc">${esc(p.summary)}</p>
      ${feats}
      <div class="tags">${stack}</div>
      <div class="meta">
        ${stars}<span class="spacer"></span>
        ${demo ? `<a href="${esc(demo)}" target="_blank" rel="noopener">Démo ↗</a>` : ""}
        <a href="${esc(url)}" target="_blank" rel="noopener">Code ↗</a>
      </div>
    </article>`;
}

function render() {
  const q = state.q.trim().toLowerCase();
  const list = PROJECTS.filter((p) =>
    (state.type === "all" || p.type === state.type) &&
    (!q || [p.title, p.repo, p.summary, ...(p.features || []), ...(p.stack || [])].join(" ").toLowerCase().includes(q))
  );
  const feat = list.filter((p) => p.featured), rest = list.filter((p) => !p.featured);
  $("featured").innerHTML = feat.map(card).join("");
  $("others").innerHTML = rest.map(card).join("");
  $("featured-wrap").hidden = !feat.length;
  $("others-wrap").hidden = !rest.length;
  $("empty").hidden = list.length > 0;
}

// ── Expériences ──
function experiences() {
  const list = typeof EXPERIENCES !== "undefined" ? EXPERIENCES : [];
  $("experience-wrap").hidden = !list.length;
  $("experience").innerHTML = list.map((x) => `
    <li class="exp">
      <div class="exp-head">
        <h3>${esc(x.role)} · <span class="company">${esc(x.company)}</span></h3>
        <span class="badge neutral">${esc(x.contract)}</span>
        <span class="period">${esc(x.period)}</span>
      </div>
      ${x.missions.map((m) => `
        <div class="mission">
          ${m.name ? `<h4>${esc(m.name)}</h4>` : ""}
          <ul class="feats">${m.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          <div class="tags">${(m.stack || []).map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
        </div>`).join("")}
    </li>`).join("");

  const edu = typeof EDUCATION !== "undefined" ? EDUCATION : [];
  $("education-wrap").hidden = !edu.length;
  $("education").innerHTML = edu.map((e) => `
    <li class="exp">
      <div class="exp-head">
        <h3><span class="company">${esc(e.school)}</span></h3>
        <span class="period">${esc(e.period)}</span>
      </div>
      <div class="mission">
        <h4>${esc(e.degree)}</h4>
        <ul class="feats">${(e.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="tags">${(e.stack || []).map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </div>
    </li>`).join("");
}

$("search").addEventListener("input", (e) => { state.q = e.target.value; render(); });
$("filters").addEventListener("click", (e) => {
  const b = e.target.closest("[data-type]");
  if (!b) return;
  state.type = b.dataset.type; filters(); render();
});

// ── Démarrage : le contenu s'affiche tout de suite, l'API GitHub ajoute avatar, étoiles et liens de démo ──
$("year").textContent = new Date().getFullYear();
header(null); experiences(); filters(); render();

(async () => {
  try {
    const u = CONFIG.username;
    const [ur, rr] = await Promise.all([
      fetch(`https://api.github.com/users/${u}`),
      fetch(`https://api.github.com/users/${u}/repos?per_page=100`)
    ]);
    if (ur.ok) header(await ur.json());
    if (rr.ok) {
      for (const r of await rr.json()) state.gh[r.name.toLowerCase()] = r;
      render();
    }
  } catch { /* hors ligne ou limite d'API : le contenu local suffit */ }
})();
