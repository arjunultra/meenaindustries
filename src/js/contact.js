const EMAIL_TO = "ahilnandankabilan@gmail.com"; // replace with your business inbox when ready

export function initContact() {
  const form = document.querySelector("#contact-form");
  const errors = document.querySelector("#contact-errors");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSubmit();
  });

  function handleSubmit() {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const problems = [];
    if (!name) problems.push("Please enter your name.");
    if (!isValidPhone(phone))
      problems.push("Please enter a valid phone number.");
    if (!isValidEmail(email))
      problems.push("Please enter a valid email address.");
    if (!message) problems.push("Please enter a message.");

    if (problems.length) return showErrors(problems);
    hideErrors();

    const subject = `Website enquiry from ${name}`;
    const body =
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10;
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
}
