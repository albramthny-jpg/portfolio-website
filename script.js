const text = "AI Engineering Student | Python Developer | Future ML Engineer";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

/* Scroll Reveal */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .card, .timeline-item, .project-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});