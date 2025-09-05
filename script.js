// ===== Portfolio Script (vanilla JS only) =====

// -- Project Data --
// Edit this array to add or update your projects.
const projects = [
  {
    id: "pmis",
    title: "Port Management Information System (PMIS)",
    categories: ["Backend", "Power BI", "Data"],
    year: 2024,
    image: "assets/backend.svg",
    short: "Event-driven .NET APIs + SQL with Power BI dashboards for cargo, vessel, and yard KPIs.",
    long: `Designed core services (C#, .NET, SQL Server) with event streaming (Kafka) and
Power BI dashboards for real-time operations. Owned backlog, data contracts, and
integration specs with Railway, Customs, and Finance systems.`,
    tech: [".NET", "C#", "SQL Server", "Kafka", "Power BI"],
    github: "#",
    demo: "#"
  },
  {
    id: "sales-sql-python",
    title: "Sales Management: SQL + Python",
    categories: ["Jupyter", "Data"],
    year: 2025,
    image: "assets/jupyter.svg",
    short: "SQL schema + Python (pyodbc/pandas) analytics with charts and insights.",
    long: `Built a sales DB schema, seeded realistic data, and used Python to query,
aggregate, and visualize trends (customer segments, state performance, salespeople).`,
    tech: ["SQL Server", "Python", "pandas", "matplotlib"],
    github: "https://github.com/kamranss/python-sql-sales-analysis",
    demo: "#"
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
  {
  id: "monte-carlo",
  title: "Monte Carlo Simulation",
  categories: ["Jupyter", "Data", "Python", "Google Colab"],
  year: 2025,
 image: "assets/montecarlo1.png",
  short: "Stochastic portfolio simulation (AAPL, MSFT, AMZN, GOOG, TSLA) with risk bounds & efficient frontier.",
  long: `Introduction
Financial markets are uncertain. I used a Monte Carlo simulation to model a 5-stock tech portfolio (AAPL, MSFT, AMZN, GOOG, TSLA), based on ~5 years of daily data.

What I used
• Libraries: numpy, pandas, yfinance, matplotlib
• Tickers: AAPL, MSFT, AMZN, GOOG, TSLA
• Horizon: ~5 years of daily prices

1) Setup & Libraries
pip install numpy pandas yfinance matplotlib
import numpy as np
import pandas as pd
import yfinance as yf
import matplotlib.pyplot as plt

2) Download Prices (5 Years)
stocks = ['AAPL','MSFT','AMZN','GOOG','TSLA']
endDate = pd.to_datetime('today'); startDate = endDate - pd.DateOffset(years=5)
getData = yf.download(stocks, start=startDate, end=endDate)
stockData = getData['Close'].dropna()

3) Returns, Means, Covariance
returns = stockData.pct_change().dropna()
returnsAvg = returns.mean()
covMatrix = returns.cov()

4) Monte Carlo — Portfolio Paths
• 1,000 simulations over ~252 trading days
• Random weights per run (normalized to 1.0)
• Daily returns ~ MVN(returnsAvg, covMatrix)
• Track cumulative value of $10,000 initial portfolio

5) Risk Summary (95% Interval)
• Mean final value across simulations
• 5th percentile (worst 95%) and 95th percentile (best 95%)

6) Efficient Frontier (Random Portfolios)
• Sample 1,000 weight vectors
• For each: annualized return & volatility from simulated daily returns
• Compute Sharpe = return / volatility
• Pick the max-Sharpe portfolio

Sample Results (example run)
• Optimal weights (approx): AAPL ~32%, MSFT ~17%, AMZN ~31%, GOOG ~10%, TSLA ~9%
• Annualized Return: ~0.65%
• Volatility: ~17.0%
• Sharpe: ~0.04

Key Takeaways
• Monte Carlo shows ranges, not point predictions
• 5th/95th percentiles frame downside/upside
• Efficient frontier visualizes risk/return; Sharpe picks best risk-adjusted point

Links
• GitHub: kamranss/monte-carlo-simulation
• Medium: Monte Carlo Simulation for Stock Portfolio Optimization (full write-up)`,
  tech: ["Python", "NumPy", "pandas", "matplotlib", "yfinance"],
  github: "https://github.com/kamranss/monte-carlo-simulation",
  medium: "https://medium.com/@mr.kamran.suleyman/monte-carlo-simulation-for-stock-portfolio-optimization-using-python-1161bae76430",
  demo: "https://medium.com/@mr.kamran.suleyman/monte-carlo-simulation-for-stock-portfolio-optimization-using-python-1161bae76430"
}
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

  elTitle.textContent = p.title;
  elShort.textContent = p.short;
  elYear.textContent  = p.year ?? "";
  elCats.textContent  = p.categories.join(", ");
  elTech.textContent  = p.tech.join(", ");
  elLong.textContent  = p.long;
  elImage.src = p.image;
  elImage.alt = p.title + " preview image";
  elGit.href  = p.github || "#";
  elDemo.href = p.demo  || "#";

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  // trap focus to drawer for accessibility
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
