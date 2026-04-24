const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
elements.forEach(el => observer.observe(el));
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("mousemove", (e) => {
    const rect = project.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    project.style.setProperty("--x", `${x}px`);
    project.style.setProperty("--y", `${y}px`);
  });
});