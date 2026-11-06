import { PRODUCTS, CATEGORIES, BRAND_COLOUR } from "../data/products.js";

const WHATSAPP_NUMBER = "919843052486"; // country code + number, digits only

export function initProducts() {
  const filterBar = document.querySelector("#product-filters");
  const grid = document.querySelector("#product-grid");
  const empty = document.querySelector("#product-empty");

  let activeCategory = "all";

  // ---------- Build filter pills ----------
  CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "filter-pill";
    btn.textContent = cat.label;
    btn.dataset.category = cat.id;
    btn.setAttribute("aria-pressed", String(cat.id === "all"));
    btn.addEventListener("click", () => setCategory(cat.id));
    filterBar.append(btn);
  });

  function setCategory(categoryId) {
    activeCategory = categoryId;
    filterBar.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.setAttribute(
        "aria-pressed",
        String(btn.dataset.category === categoryId),
      );
    });
    renderGrid();
  }

  // ---------- Build cards ----------
  function renderGrid() {
    const list =
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);

    grid.replaceChildren(...list.map(buildCard));
    empty.classList.toggle("hidden", list.length > 0);
  }

  function buildCard(product) {
    const accent = BRAND_COLOUR[product.brand] ?? "accent";

    const article = document.createElement("article");
    article.className = `product-card rounded-2xl border-t-4 bg-card p-6 shadow-sm border-${accent}`;

    const tag = document.createElement("p");
    tag.className = `text-xs font-bold uppercase tracking-wide text-${accent}`;
    tag.textContent = product.brand;
    article.append(tag);

    const title = document.createElement("h3");
    title.className = "mt-2 font-display text-lg font-semibold text-heading";
    title.textContent = product.name;
    article.append(title);

    const blurb = document.createElement("p");
    blurb.className = "mt-2 text-sm text-body";
    blurb.textContent = product.blurb;
    article.append(blurb);

    const packList = document.createElement("ul");
    packList.setAttribute("aria-label", "Available pack sizes");
    packList.className = "mt-4 flex flex-wrap gap-2";
    product.packs.forEach((pack) => {
      const li = document.createElement("li");
      li.className =
        "rounded-full border border-line px-3 py-1 text-xs font-medium text-body";
      li.textContent = pack;
      packList.append(li);
    });
    article.append(packList);

    const link = document.createElement("a");
    link.className = "btn-whatsapp mt-5";
    link.href = buildWhatsAppLink(product.name);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Ask Price on WhatsApp";
    article.append(link);

    return article;
  }

  function buildWhatsAppLink(productName) {
    const message = `Hi, I'd like to know the price and availability of ${productName}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  renderGrid();
}
