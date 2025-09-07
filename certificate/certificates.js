const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const certificates = [
  {
    id: "projectmanagement",
    title: "Google Project Management",
    org: "Course/Project",
    issued: "2025",
    tags: ["Agile", "Scrum", "Project Initiation", "Project Planning", "Project Analysis", "Project Exacution"],
    file: "certificates/Certification-Project-Management.pdf",
    description: "Built interactive dashboards with DAX measures, report pages, and drill-through analysis."
  },
  {
    id: "pspo1",
    title: "Professional Scrum Product Owner (PSPO I)",
    org: "Scrum.org",
    issued: "2024",
    tags: ["Agile", "Scrum", "Product ownership"],
    file: "certificates/Certification-PSPO.pdf",
    description: "Validated knowledge of Product Ownership, value delivery, and backlog management (pass ≥85%)."
  },
  {
    id: "agile",
    title: "Aplied Scrum for Agile Project",
    org: "Course/Project",
    issued: "2025",
    tags: ["Agile", "Scrum", "Extreme Programming"],
    file: "certificates/Certification-agile2.pdf",
    description: "Built interactive dashboards with DAX measures, report pages, and drill-through analysis."
  },

  {
    id: "logistics",
    title: "Transport and Logistics",
    org: "Course/Project",
    issued: "2025",
    tags: ["Power BI", "DAX", "Analytics"],
    file: "certificates/Certification-logistics.pdf",
    description: "Built interactive dashboards with DAX measures, report pages, and drill-through analysis."
  },
 
  {
    id: "logistics",
    title: "Logistics",
    org: "Course/Project",
    issued: "2025",
    tags: ["Power BI", "DAX", "Analytics"],
    file: "certificates/Certification-logistics.pdf",
    description: "Built interactive dashboards with DAX measures, report pages, and drill-through analysis."
  }
];

const listEl = document.getElementById("certList");
const titleEl = document.getElementById("certTitle");
const metaEl = document.getElementById("certMeta");
const descEl = document.getElementById("certDesc");
const tagsEl = document.getElementById("certTags");
const frameEl = document.getElementById("pdfFrame");
const btnOpen = document.getElementById("btnOpenPDF");
const btnDownload = document.getElementById("btnDownloadPDF");

function renderList(items){
  listEl.innerHTML = items.map(c => `
    <li class="cert-item" data-id="${c.id}" tabindex="0" aria-label="Open ${c.title}">
      <div>
        <div><strong>${c.title}</strong></div>
        <div class="muted">${c.org} · Issued ${c.issued}</div>
        <div class="badge">${c.tags.join(" · ")}</div>
      </div>
    </li>
  `).join("");
}
renderList(certificates);

function showCert(id){
  const c = certificates.find(x => x.id === id) || certificates[0];
  if (!c) return;
  titleEl.textContent = c.title;
  metaEl.textContent = `${c.org} · Issued ${c.issued}`;
  descEl.textContent = c.description;
  tagsEl.innerHTML = c.tags.map(t => `<span>${t}</span>`).join("");
  frameEl.src = c.file;
  btnOpen.href = c.file;
  btnDownload.href = c.file;
}

showCert(certificates[0].id);

listEl.addEventListener("click", (e) => {
  const item = e.target.closest(".cert-item");
  if (!item) return;
  showCert(item.dataset.id);
});
listEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const item = e.target.closest(".cert-item");
    if (!item) return;
    showCert(item.dataset.id);
  }
});
