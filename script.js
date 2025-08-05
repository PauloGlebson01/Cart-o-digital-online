function toggleMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");

  // Atualiza o localStorage com o novo tema
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;

  // Define o tema salvo ou mantém o padrão
  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
