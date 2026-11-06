import { PRODUCTS } from "../data/products.js";

const DOOR_AREA = 21; // 7 × 3 ft, sq ft
const WINDOW_AREA = 12; // 4 × 3 ft, sq ft
const WHATSAPP_NUMBER = "919843052486";

export function initCalculator() {
  const form = document.querySelector("#calculator-form");
  const productSelect = document.querySelector("#calc-product");
  const result = document.querySelector("#calc-result");
  const errors = document.querySelector("#calc-errors");

  // Build the product dropdown from the same data file as the Products section
  PRODUCTS.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = `${p.brand} — ${p.name}`;
    productSelect.append(opt);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleCalculate();
  });

  function handleCalculate() {
    const length = Number(form.length.value);
    const width = Number(form.width.value);
    const height = Number(form.height.value);
    const doors = Number(form.doors.value);
    const windows = Number(form.windows.value);
    const coats = Number(form.coats.value);
    const includeCeiling = form.ceiling.checked;
    const productId = productSelect.value;

    const problems = [];
    if (!(length > 0)) problems.push("Enter a room length greater than 0.");
    if (!(width > 0)) problems.push("Enter a room width greater than 0.");
    if (!(height > 0)) problems.push("Enter a wall height greater than 0.");
    if (doors < 0) problems.push("Number of doors cannot be negative.");
    if (windows < 0) problems.push("Number of windows cannot be negative.");
    if (!productId) problems.push("Choose a product.");

    if (problems.length) return showErrors(problems);

    const grossWallArea = 2 * (length + width) * height;
    const openingsArea = doors * DOOR_AREA + windows * WINDOW_AREA;

    if (openingsArea > grossWallArea) {
      return showErrors([
        "Your doors and windows add up to more area than the walls themselves — check the counts.",
      ]);
    }

    hideErrors();

    let paintableArea = grossWallArea - openingsArea;
    if (includeCeiling) paintableArea += length * width;

    const product = PRODUCTS.find((p) => p.id === productId);
    const quantityNeeded = (paintableArea * coats) / product.coverage.rate;
    const packSizes = parsePackSizes(product.packs);
    const combo = suggestPacks(quantityNeeded, packSizes);

    renderResult({
      paintableArea,
      coats,
      includeCeiling,
      product,
      quantityNeeded,
      combo,
    });
  }

  function showErrors(list) {
    errors.replaceChildren();
    const heading = document.createElement("p");
    heading.className = "font-semibold text-accent";
    heading.textContent =
      list.length === 1 ? "Please fix this:" : "Please fix these:";
    errors.append(heading);

    const ul = document.createElement("ul");
    ul.className = "mt-1 list-disc pl-5";
    list.forEach((msg) => {
      const li = document.createElement("li");
      li.textContent = msg;
      ul.append(li);
    });
    errors.append(ul);
    errors.classList.remove("hidden");
    errors.focus();
  }

  function hideErrors() {
    errors.replaceChildren();
    errors.classList.add("hidden");
  }

  function renderResult({
    paintableArea,
    coats,
    includeCeiling,
    product,
    quantityNeeded,
    combo,
  }) {
    result.classList.remove("border-dashed");
    result.replaceChildren();

    const summary = document.createElement("p");
    summary.className = "text-body";
    summary.textContent = `Paintable area${includeCeiling ? " (walls + ceiling)" : ""}: ${round1(paintableArea)} sq ft × ${coats} coat${coats > 1 ? "s" : ""}`;
    result.append(summary);

    const qty = document.createElement("p");
    qty.className = "mt-3 font-display text-3xl font-bold text-heading";
    qty.textContent = `${round1(quantityNeeded)} ${product.coverage.unit}`;
    result.append(qty);

    const productLine = document.createElement("p");
    productLine.className = "text-sm text-body";
    productLine.textContent = `of ${product.brand} ${product.name}`;
    result.append(productLine);

    const comboLine = document.createElement("p");
    comboLine.className = "mt-4 text-body";
    comboLine.textContent = combo.length
      ? `Suggested packs: ${combo.map((c) => `${c.count} × ${c.size} ${product.coverage.unit}`).join(" + ")}`
      : "Ask us for the right pack combination.";
    result.append(comboLine);

    const note = document.createElement("p");
    note.className = "mt-4 text-xs text-body";
    note.textContent =
      "Estimate only. Actual coverage varies with surface texture, porosity and application method — please confirm with your dealer before buying.";
    result.append(note);

    const link = document.createElement("a");
    link.className = "btn-whatsapp mt-6";
    link.target = "_blank";
    link.rel = "noopener";
    const message = `Hi, I calculated that I need about ${round1(quantityNeeded)} ${product.coverage.unit} of ${product.name} for roughly ${Math.round(paintableArea)} sq ft. Can you confirm pack sizes and price?`;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.textContent = "Confirm on WhatsApp";
    result.append(link);
  }
}

// "4 L" -> 4, "20 kg" -> 20 — sorted largest first
function parsePackSizes(packs) {
  return packs.map((p) => parseFloat(p)).sort((a, b) => b - a);
}

// Greedy: use the biggest packs first; round up rather than leaving the customer short
function suggestPacks(amountNeeded, sizes) {
  if (!sizes.length) return [];
  let remaining = amountNeeded;
  const combo = [];

  for (const size of sizes) {
    const count = Math.floor(remaining / size);
    if (count > 0) {
      combo.push({ size, count });
      remaining -= count * size;
    }
  }

  if (remaining > 0.01) {
    const smallest = sizes[sizes.length - 1];
    const last = combo[combo.length - 1];
    if (last && last.size === smallest) last.count += 1;
    else combo.push({ size: smallest, count: 1 });
  }

  return combo;
}

function round1(n) {
  return Math.round(n * 10) / 10;
}
