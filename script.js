function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === page) link.classList.add("active");
  });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("show");
  });
}

function renderMiniProfile() {
  const img = document.querySelector("[data-profile-photo]");
  if (img) img.src = BIODATA.foto;

  const name = document.querySelector("[data-profile-name]");
  if (name) name.textContent = BIODATA.nama;
}

function renderAbout() {
  const foto = document.querySelector("#fotoSaya");
  if (foto) foto.src = BIODATA.foto;

  const fields = {
    nama: BIODATA.nama,
    alamat: BIODATA.alamat,
    lahir: BIODATA.lahir,
    wa: BIODATA.wa,
    ig: BIODATA.ig,
    fb: BIODATA.fb,
    email: BIODATA.email
  };

  Object.keys(fields).forEach(key => {
    const el = document.querySelector(`[data-bio="${key}"]`);
    if (el) el.textContent = fields[key];
  });
}

function createAwardCard(item) {
  return `
    <article class="award-card">
      <img class="award-image" src="${item.foto}" alt="${item.nama}" onclick="openModal('${item.foto}')">
      <div class="award-body">
        <h3>${item.nama}</h3>
        <span class="year">${item.tahun}</span>
      </div>
    </article>
  `;
}

function renderAwards(type) {
  const grid = document.querySelector("#awardGrid");
  if (!grid) return;

  const data = type === "keahlian" ? PRESTASI_KEAHLIAN : PRESTASI_EKSTRAKURIKULER;

  if (!data.length) {
    grid.innerHTML = `<p class="empty-note">Belum ada data prestasi. Tambahkan dulu di file data.js.</p>`;
    return;
  }

  grid.innerHTML = data.map(createAwardCard).join("");
}

function openModal(src) {
  const modal = document.querySelector("#modal");
  const modalImage = document.querySelector("#modalImage");
  if (!modal || !modalImage) return;

  modalImage.src = src;
  modal.classList.add("active");
}

function closeModal() {
  const modal = document.querySelector("#modal");
  if (modal) modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  setupMenu();
  renderMiniProfile();
  renderAbout();
});
