// Typing effect: types a word, waits, deletes it, then types the next
const words = ["Web Development", "Python", "Cybersecurity", "Linux", "Ethical Hacking"];
const typingEl = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];
  charIndex += deleting ? -1 : 1;
  typingEl.textContent = word.substring(0, charIndex);

  let delay = deleting ? 50 : 100;

  if (!deleting && charIndex === word.length) {
    delay = 1500;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// Fade-in on scroll: adds the "visible" class when a section enters the screen
const sections = document.querySelectorAll("section:not(#home)");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});