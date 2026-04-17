// Typing
const text = "AI Engineer | Python Developer";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typing-text").textContent += text[i];
        i++;
        setTimeout(type, 50);
    }
}
type();

// Dark Mode
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Active Nav
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let id = sec.getAttribute("id");

        if (top >= offset) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
});