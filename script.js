// ===== Portfolio Script (vanilla JS only) =====

// -- Project Data --
// Edit this array to add or update your projects.
const projects = [
//   {
//     id: "pmis",
//     title: "Port Management Information System (PMIS)",
//     categories: ["Backend", "Power BI", "Data"],
//     year: 2024,
//     image: "assets/backend.svg",
//     short: "Event-driven .NET APIs + SQL with Power BI dashboards for cargo, vessel, and yard KPIs.",
//     long: `Designed core services (C#, .NET, SQL Server) with event streaming (Kafka) and
// Power BI dashboards for real-time operations. Owned backlog, data contracts, and
// integration specs with Railway, Customs, and Finance systems.`,
//     tech: [".NET", "C#", "SQL Server", "Kafka", "Power BI"],
//     github: "#",
//     demo: "#"
//   },
  {
    id: "pmis",
    title: "Port Management Information System (PMIS) — Digitalization Initiative",
    categories: ["Backend", "Product", "Power BI", "Data"],
    year: 2024,
    image: "assets/pmis-modules.png", // or keep your existing: "assets/backend.svg"
    short: "Digital platform that centralizes and automates port operations at the Port of Baku: cargo, vessels, yard, and control room dashboards.",
    long: `
      <h4>🔍 Project Overview</h4>
      <p>The Port Management Information System (PMIS) is a flagship <strong>digital transformation</strong> at the Port of Baku. 
      It replaces paper workflows with a centralized platform that automates <em>cargo, vessel, and yard</em> operations. 
      At its core is a <strong>Port Community System (PCS)</strong>—a single-window where data is entered once and reused across modules. 
      PMIS integrates with <strong>Customs</strong>, <strong>ADY Railway</strong>, and partner ports, and powers <strong>real-time dashboards</strong> for decisions.</p>
      <h4>🎯 Objectives</h4>
      <ul>
        <li>Digitize and automate operations to reduce delays and manual errors.</li>
        <li>Provide real-time visibility of vessel, cargo, and yard activities via dashboards.</li>
        <li>Enable integrations with external partners (Customs, ADY Railway, partner ports).</li>
        <li>Support mobile access for field teams to remove redundant paperwork.</li>
        <li>Align with the Smart Port vision; position Baku as a digital hub in the Caspian Corridor.</li>
      </ul>
      <h4>🌍 Goals & Strategic Alignment</h4>
      <ul>
        <li><strong>Operational Excellence:</strong> Faster vessel turnaround and cargo clearance.</li>
        <li><strong>Data-Driven Decisions:</strong> KPIs, analytics, and predictive insights.</li>
        <li><strong>Regional Growth:</strong> Scalable architecture for partner ports.</li>
        <li><strong>Stakeholder Engagement:</strong> Collaboration across port, customs, railway, shipping lines.</li>
      </ul>
      <h4>🛠️ Tools & Methods</h4>
      <ul>
        <li><strong>Project Management:</strong> Hybrid—Agile (PCS, Mobile), Waterfall (Weighbridge), XP (critical modules).</li>
        <li><strong>BA &amp; PO Deliverables:</strong> BRD, FRD, BPMN flows, personas, stakeholder maps, comms plans.</li>
        <li><strong>Backend:</strong> .NET Core, SQL Server, <em>Kafka</em> for integrations.</li>
        <li><strong>Frontend:</strong> React / Angular portals; SPA workaround where needed.</li>
        <li><strong>Data &amp; Integrations:</strong> JSON/XML schemas, REST APIs, Control Tower connectivity.</li>
        <li><strong>Visualization:</strong> Control Room dashboards, role-based KPIs (Power BI).</li>
        <li><strong>Collaboration:</strong> JIRA (backlog/sprints), Confluence (docs), Lucidchart/Visio (BPMN).</li>
      </ul>

      <h4>📦 Covered Areas</h4>
      <ul>
        <li><strong>Project Management:</strong> SOW, WBS, risk plan, change requests.</li>
        <li><strong>Product Ownership:</strong> Roadmap, backlog prioritization, vendor evaluations (DBA, Solvo, Albayrak).</li>
        <li><strong>Business Analysis:</strong> FRDs, use cases, BPMN diagrams, data flows.</li>
        <li><strong>Stakeholder Management:</strong> Stakeholder map, escalation templates, release comms.</li>
        <li><strong>Technical Design:</strong> System architecture, message schemas, Control Tower integration.</li>
      </ul>

      <h4>🚀 Outcomes & Impact</h4>
      <ul>
        <li>~60% reduction in manual paperwork; faster customs clearance and yard planning.</li>
        <li>Real-time Control Room dashboards improved operational awareness.</li>
        <li>Mobile access enabled digital gate/yard operations.</li>
        <li>Strategic workaround with ADY Control Tower ensured data continuity.</li>
        <li>Positioned Port of Baku as a regional leader in port digitalization (scalable to Caspian partners).</li>
      </ul>

      <h4>🔗 Resources</h4>
      <ul>
        <li>📁 Source Materials (Docs/Slides): <a href="https://drive.google.com/drive/u/2/folders/1VCv7g1yrxa6mGcc23bcbvV-WTVxmDve0" target="_blank" rel="noopener">Google Drive folder</a></li>
      </ul>
    `,
    tech: [".NET Core", "SQL Server", "Kafka", "React/Angular", "Power BI", "JIRA", "Confluence", "BPMN"],
    github: "#",
    demo: "#"
  },
   {
    id: "sales-sql-python",
    title: "Sales Management: SQL + Python",
    categories: ["Jupyter", "Data"],
    year: 2025,
    image: "assets/sales-management.png",
    short: "SQL schema + Python (pyodbc/pandas) analytics with charts and insights.",
    long: `
      <h4>📊 Introduction</h4>
      <p>Designed a <strong>sales management database in SQL Server</strong>, filled it with sample customer, order, and product data, then connected with <strong>Python (pyodbc)</strong> to run queries and visualize insights with Pandas + Matplotlib.</p>
      
      <h4>🗄 Step 1 — Database Setup</h4>
      <p>Created <code>sales_management</code> database with 5 tables: <em>SalesPerson, State, Customer, Order, OrderDetail</em>. Inserted realistic sample data (DDL + DML in repo).</p>
      
      <h4>🐍 Step 2 — Python Integration</h4>
      <p>Connected to SQL Server with <code>pyodbc</code>, queried sales data, and pulled results into Pandas DataFrames for analysis.</p>
      
      <h4>📊 Step 3 — Sales by Customer</h4>
      <p>Aggregated order totals per customer. Highlighted high-value customers with color-coded bar charts in Matplotlib.</p>
      
      <h4>🌍 Step 4 — Sales by State</h4>
      <p>Grouped sales revenue by U.S. state to compare regional performance. Used visual cues (colors + labels) for clarity.</p>
      
      <h4>📑 Step 5 — Key Takeaways</h4>
      <ul>
        <li>SQL + Python = powerful combo for reporting</li>
        <li>Views & joins simplify queries</li>
        <li>Visualization makes trends clear to stakeholders</li>
        <li>Presenting results (slides) is as important as code</li>
      </ul>
      
      <h4>🚀 Why It Matters</h4>
      <p>Demonstrates <strong>SQL schema design</strong>, <strong>analytics queries</strong>, <strong>Python integration</strong>, <strong>visualization</strong>, and <strong>communication</strong> — exactly what analysts and data engineers do in real companies.</p>
      
      <h4>🔗 Resources</h4>
      <ul>
        <li>📂 SQL schema: <code>sales_management.sql</code></li>
        <li>🐍 Python notebook: <code>Pythontosql.ipynb</code></li>
        <li>📑 Slides: <code>Lab3_Presentation.pptx</code></li>
        <li>💻 GitHub Repo: <a href="https://github.com/kamranss/python-sql-sales-analysis" target="_blank">View on GitHub</a></li>
        <li>📝 Medium Post: <a href="https://medium.com/@mr.kamran.suleyman/sales-management-data-project-sql-python-for-analysis-44d6b1220124" target="_blank">Read Article</a></li>
      </ul>
      
      <h4>✨ Next Steps</h4>
      <ul>
        <li>Automate reporting with scheduled Python jobs</li>
        <li>Extend to dashboards in Power BI/Tableau</li>
        <li>Explore predictive analytics on customer sales trends</li>
      </ul>
    `,
    tech: ["SQL Server", "Python", "pandas", "matplotlib"],
    github: "https://github.com/kamranss/python-sql-sales-analysis",
    demo: "#"
  },
  {
  id: "monte-carlo",
  title: "Monte Carlo Simulation",
  categories: ["Jupyter", "Data", "Python", "Google Colab"],
  year: 2025,
  image: "assets/monte-carlo.png",
  short: "Stochastic portfolio simulation (AAPL, MSFT, AMZN, GOOG, TSLA) with risk bounds & efficient frontier.",
  long: `
    <h4>📊 Introduction</h4>
    <p>Financial markets are uncertain. I used a Monte Carlo simulation to model a 5-stock tech portfolio (<strong>AAPL, MSFT, AMZN, GOOG, TSLA</strong>) based on ~5 years of daily data.</p>

    <h4>🧰 What I used</h4>
    <ul>
      <li><strong>Libraries:</strong> numpy, pandas, yfinance, matplotlib</li>
      <li><strong>Tickers:</strong> AAPL, MSFT, AMZN, GOOG, TSLA</li>
      <li><strong>Horizon:</strong> ~5 years of daily prices</li>
    </ul>

    <h4>1) Setup & Libraries</h4>
    <pre><code>pip install numpy pandas yfinance matplotlib
  import numpy as np
  import pandas as pd
  import yfinance as yf
  import matplotlib.pyplot as plt</code></pre>

    <h4>2) Download Prices (5 Years)</h4>
    <pre><code>stocks = ['AAPL','MSFT','AMZN','GOOG','TSLA']
  endDate = pd.to_datetime('today')
  startDate = endDate - pd.DateOffset(years=5)
  getData = yf.download(stocks, start=startDate, end=endDate)
  stockData = getData['Close'].dropna()</code></pre>

    <h4>3) Returns, Means, Covariance</h4>
    <pre><code>returns = stockData.pct_change().dropna()
  returnsAvg = returns.mean()
  covMatrix = returns.cov()</code></pre>

    <h4>4) 🎲 Monte Carlo — Portfolio Paths</h4>
    <ul>
      <li>1,000 simulations over ~252 trading days</li>
      <li>Random weights per run (normalized to 1.0)</li>
      <li>Daily returns ~ MVN(returnsAvg, covMatrix)</li>
      <li>Track cumulative value of $10,000 initial portfolio</li>
    </ul>

    <h4>5) 📉 Risk Summary (95% Interval)</h4>
    <ul>
      <li>Mean final value across simulations</li>
      <li>5th percentile (worst 95%) and 95th percentile (best 95%)</li>
    </ul>

    <h4>6) 📈 Efficient Frontier (Random Portfolios)</h4>
    <ul>
      <li>Sample 1,000 weight vectors</li>
      <li>Annualized return &amp; volatility from simulated daily returns</li>
      <li>Sharpe = return / volatility; pick the max-Sharpe portfolio</li>
    </ul>

    <h4>Sample Results (example run)</h4>
    <ul>
      <li><strong>Weights (approx):</strong> AAPL ~32%, MSFT ~17%, AMZN ~31%, GOOG ~10%, TSLA ~9%</li>
      <li><strong>Annualized Return:</strong> ~0.65%</li>
      <li><strong>Volatility:</strong> ~17.0%</li>
      <li><strong>Sharpe:</strong> ~0.04</li>
    </ul>

    <h4>Key Takeaways</h4>
    <ul>
      <li>Monte Carlo shows ranges, not point predictions</li>
      <li>5th/95th percentiles frame downside/upside</li>
      <li>Efficient frontier visualizes risk/return; Sharpe picks best risk-adjusted point</li>
    </ul>

    <h4>🔗 Links</h4>
    <ul>
      <li>💻 GitHub: <a href="https://github.com/kamranss/monte-carlo-simulation" target="_blank" rel="noopener">kamranss/monte-carlo-simulation</a></li>
      <li>📝 Medium: <a href="https://medium.com/@mr.kamran.suleyman/monte-carlo-simulation-for-stock-portfolio-optimization-using-python-1161bae76430" target="_blank" rel="noopener">full write-up</a></li>
    </ul>
`,
    tech: ["Python", "NumPy", "pandas", "matplotlib", "yfinance"],
    github: "https://github.com/kamranss/monte-carlo-simulation",
    medium: "https://medium.com/@mr.kamran.suleyman/monte-carlo-simulation-for-stock-portfolio-optimization-using-python-1161bae76430",
    demo: "https://github.com/kamranss/monte-carlo-simulation/blob/main/Monte%20Carlo%20simulation.ipynb"
  },
  {
    id: "powerbi-priceco",
    title: "PriceCo Retail Dashboard (Power BI)",
    categories: ["Power BI", "Data"],
    year: 2025,
    image: "assets/powerbi.svg",
    short: "Interactive BI with DAX measures and report pages for tickets, cities, and product lines.",
    long: `Modeled data, authored DAX for KPIs, and built drill-through visuals to uncover
city and membership drivers of average ticket size and margin.`,
    tech: ["Power BI", "DAX"],
    github: "#",
    demo: "#"
  },
  {
    id: "frontend-portfolio",
    title: "Frontend Portfolio UI",
    categories: ["Frontend"],
    year: 2025,
    image: "assets/Programming.jpg",
    short: "A clean, responsive UI kit in vanilla HTML/CSS/JS—cards, filters, and modal drawer.",
    long: `This very site! Focus on accessible, semantic HTML; CSS variables and grid; and a
zero-dependency JavaScript drawer/filters pattern.`,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
  id: "sales-ticket-insights",
  title: "Visual Insights on Average Sales Ticket",
  categories: ["Power BI", "Data"],
  year: 2025,
  image: "assets/productline-impact.png", // or swap for a PNG screenshot you have
  short: "City, membership, and product-line analysis to raise the average sales ticket.",
  long: `
    <h4>🎯 Goal</h4>
    <p>Design visuals that reveal <strong>what drives the average sales ticket</strong> so decision-makers can raise per-purchase value.</p>

    <h4>👥 Audience</h4>
    <ul>
      <li><strong>Executives</strong> – high-level direction</li>
      <li><strong>Store Managers</strong> – operational adjustments</li>
      <li><strong>Ops Teams</strong> – execute on trends</li>
      <li><strong>Analysts/Engineers</strong> – convert findings into data products</li>
    </ul>

    <h4>📊 Research Questions</h4>
    <ul>
      <li>Does <strong>city</strong> impact the average sales ticket?</li>
      <li>Does <strong>membership type</strong> impact the average sales ticket?</li>
      <li>Does <strong>product line</strong> impact the average sales ticket?</li>
    </ul>

    <h4>🔍 Visual Analysis</h4>
    <h5>📍 Visual 1 — City of Purchase</h5>
    <p><em>Guadalajara</em> shows the highest average ticket (~5.7K) vs. Monterrey (~5.4K) and Mexico DF (~5.3K). 
    Consider replicating Guadalajara’s <strong>promotions</strong>, <strong>assortment</strong>, or <strong>customer mix</strong> in other cities.</p>

    <h5>🏷️ Visual 2 — Membership Type</h5>
    <p><strong>Plus members</strong> spend more per transaction (~5.56K) than Normal (~5.39K). 
    Run <strong>upgrade campaigns</strong> and perks that nudge Normal → Plus.</p>

    <h5>📦 Visual 3 — Product Line</h5>
    <p><em>Home & Lifestyle</em> (~5.7K) and <em>Sports & Travel</em> (~5.6K) lead; <em>Fashion Accessories</em> (~5.2K) lags. 
    <strong>Promote</strong> leaders and <strong>bundle</strong> lower performers with premium items.</p>

    <h4>📑 Conclusions</h4>
    <ul>
      <li><strong>City:</strong> Use Guadalajara as a playbook for other locations.</li>
      <li><strong>Membership:</strong> Upgrades to Plus directly lift ticket size.</li>
      <li><strong>Product Line:</strong> Prioritize strong categories; bundle weaker ones.</li>
    </ul>
    <p>Together these suggest a practical roadmap: replicate best-performing city tactics, promote Plus memberships, and optimize assortment to grow average ticket.</p>

    <h4>🔗 Resources</h4>
    <ul>
      <li>💻 GitHub: <a href="https://github.com/kamranss/sales-ticket-insights" target="_blank" rel="noopener">kamranss/sales-ticket-insights</a></li>
      <li>📝 Medium: <a href="https://medium.com/@mr.kamran.suleyman/visual-insights-on-average-sales-ticket-city-membership-and-product-line-impact-3b6e5d2bb7c8" target="_blank" rel="noopener">article</a></li>
    </ul>
  `,
  tech: ["Power BI", "DAX", "Python", "Pandas", "Matplotlib"],
  github: "https://github.com/kamranss/sales-ticket-insights",
  demo: "https://medium.com/@mr.kamran.suleyman/visual-insights-on-average-sales-ticket-city-membership-and-product-line-impact-3b6e5d2bb7c8"
},
  {
    id: "mobile-app",
    title: "Mobile Stock Tracker (Prototype)",
    categories: ["Mobile", "Frontend"],
    year: 2024,
    image: "assets/mobile.svg",
    short: "Lightweight prototype for managing watchlists and portfolios.",
    long: `Mobile-first UI prototype exploring list virtualization and card details for stock data.`,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    id: "devops-ci",
    title: "CI/CD Pipeline Showcase",
    categories: ["DevOps", "Backend"],
    year: 2024,
    image: "assets/devops.svg",
    short: "Sample GitHub Actions pipeline for building, testing, and linting multi-service apps.",
    long: `Authored reusable workflows and artifact caching to speed up builds; smoke tests and
branch protections for reliable releases.`,
    tech: ["GitHub Actions", "Docker", "YAML"],
    github: "#",
    demo: "#"
  },
  
];


// -- Render logic --
const grid = document.getElementById("projectGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function cardTemplate(p) {
  const cats = p.categories.map(c => `<span>${c}</span>`).join("");
  return `
    <article class="card" data-id="${p.id}" tabindex="0" aria-label="Open details for ${p.title}">
      <div class="card-media">
        <img src="${p.image}" alt="" style="max-width:60%; height:auto;" />
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="badges">${cats}</div>
      </div>
      <div class="card-footer">
        <a href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        <button class="btn ghost open-details" data-id="${p.id}">Details</button>
      </div>
    </article>
  `;
}

function renderProjects(list) {
  grid.innerHTML = list.map(cardTemplate).join("");
}

function filterProjects(cat) {
  if (cat === "All") return projects;
  return projects.filter(p => p.categories.includes(cat));
}

// Initial render
renderProjects(projects);

// Filter interactions
let activeFilter = "All";
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderProjects(filterProjects(activeFilter));
  });
});

// Drawer (detail tab ~ half screen)
const overlay = document.getElementById("overlay");
const drawer = document.getElementById("detailDrawer");
const closeBtn = drawer.querySelector(".drawer-close");

const elTitle = document.getElementById("drawerTitle");
const elShort = document.getElementById("drawerShort");
const elYear  = document.getElementById("drawerYear");
const elCats  = document.getElementById("drawerCats");
const elTech  = document.getElementById("drawerTech");
const elLong  = document.getElementById("drawerLong");
const elImage = document.getElementById("drawerImage");
const elGit   = document.getElementById("drawerGit");
const elDemo  = document.getElementById("drawerDemo");

function openDrawer(projectId) {
  const p = projects.find(x => x.id === projectId);
  if (!p) return;

  // elTitle.textContent = p.title;
  // elShort.textContent = p.short;
  // elYear.textContent  = p.year ?? "";
  // elCats.textContent  = p.categories.join(", ");
  // elTech.textContent  = p.tech.join(", ");
  // elLong.textContent  = p.long;
  // elImage.src = p.image;
  // elImage.alt = p.title + " preview image";
  // elGit.href  = p.github || "#";
  // elDemo.href = p.demo  || "#";

  // overlay.classList.add("open");
  // overlay.setAttribute("aria-hidden", "false");
  // drawer.classList.add("open");
  // drawer.setAttribute("aria-hidden", "false");
  // // trap focus to drawer for accessibility
  // closeBtn.focus();

  
  elTitle.textContent = p.title;
  elShort.textContent = p.short;
  elYear.textContent  = p.year ?? "";
  elCats.textContent  = p.categories.join(", ");
  elTech.textContent  = p.tech.join(", ");

  // ⬇️ render the Medium-style HTML content
  elLong.innerHTML    = p.long;

  elImage.src = p.image;
  elImage.alt = p.title + " preview image";
  elGit.href  = p.github || "#";
  elDemo.href = p.demo  || "#";

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  closeBtn.focus();
}

function closeDrawer() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", (e) => {
  const detailBtn = e.target.closest(".open-details");
  const card = e.target.closest(".card");
  if (detailBtn) {
    openDrawer(detailBtn.dataset.id);
  } else if (card && e.target.tagName !== "A" && !e.target.closest(".open-details")) {
    // clicking anywhere on the card (except links) opens details
    openDrawer(card.dataset.id);
  }
});

overlay.addEventListener("click", closeDrawer);
closeBtn.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();



// // THEME: OS preference first, then saved choice
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const saved = localStorage.getItem('theme');
// const theme = saved || (prefersDark ? 'dark' : 'light');
// document.documentElement.classList.toggle('theme-dark', theme === 'dark');
// document.documentElement.classList.toggle('theme-light', theme === 'light');

// const btnTheme = document.getElementById('themeToggle');
// if (btnTheme) {
//   btnTheme.textContent = document.documentElement.classList.contains('theme-dark') ? '🌙' : '☀️';
//   btnTheme.addEventListener('click', () => {
//     const dark = !document.documentElement.classList.contains('theme-dark');
//     document.documentElement.classList.toggle('theme-dark', dark);
//     document.documentElement.classList.toggle('theme-light', !dark);
//     localStorage.setItem('theme', dark ? 'dark' : 'light');
//     btnTheme.textContent = dark ? '🌙' : '☀️';
//   });


  
// }

//   const toggle = document.getElementById('skills-toggle');
//   const panel  = document.getElementById('more-skills');

//   toggle?.addEventListener('click', () => {
//     const isHidden = panel.hasAttribute('hidden');
//     if (isHidden) {
//       panel.removeAttribute('hidden');
//       toggle.setAttribute('aria-expanded', 'true');
//       toggle.textContent = 'Hide extra skills';
//     } else {
//       panel.setAttribute('hidden', '');
//       toggle.setAttribute('aria-expanded', 'false');
//       toggle.textContent = 'Show more skills';
//     }
//   });








// delete it
// ===== THEME (works across all pages) =====
// (function () {
//   const KEY = 'theme'; // 'dark' | 'light'
//   const html = document.documentElement;

//   function setTheme(t) {
//     html.classList.toggle('theme-dark', t === 'dark');
//     html.classList.toggle('theme-light', t === 'light');
//     localStorage.setItem(KEY, t);
//     const btn = document.getElementById('themeToggle');
//     if (btn) btn.textContent = (t === 'dark') ? '🌙' : '☀️';
//   }

//   function getInitial() {
//     const saved = localStorage.getItem(KEY);
//     if (saved === 'dark' || saved === 'light') return saved;
//     const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//     return prefersDark ? 'dark' : 'light';
//   }

//   // Initialize after DOM is ready
//   const init = () => setTheme(getInitial());
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//   } else {
//     init();
//   }

//   // Click handler (delegated so it works on every page)
//   document.addEventListener('click', (e) => {
//     const btn = e.target.closest('#themeToggle');
//     if (!btn) return;
//     e.preventDefault();
//     const current = html.classList.contains('theme-dark') ? 'dark' : 'light';
//     setTheme(current === 'dark' ? 'light' : 'dark');
//   });

//   // Keep tabs/pages in sync
//   window.addEventListener('storage', (e) => {
//     if (e.key === KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
//       setTheme(e.newValue);
//     }
//   });
// })();


/* =========================
   THEME (works on every page)
   ========================= */
(function () {
  const KEY = 'theme'; // 'dark' | 'light'
  const html = document.documentElement;

  function setTheme(t) {
    html.classList.toggle('theme-dark', t === 'dark');
    html.classList.toggle('theme-light', t === 'light');
    localStorage.setItem(KEY, t);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = (t === 'dark') ? '🌙' : '☀️';
  }

  function getInitial() {
    const saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  // Initialize after DOM ready
  const init = () => setTheme(getInitial());
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Delegated click handler (works even if button is added later)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#themeToggle');
    if (!btn) return;
    e.preventDefault();
    const current = html.classList.contains('theme-dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Cross-tab/page sync
  window.addEventListener('storage', (e) => {
    if (e.key === KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
      setTheme(e.newValue);
    }
  });
})();
