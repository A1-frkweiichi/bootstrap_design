function toggleStrikethrough(event) {
  const targetElement = event.target;
  targetElement.classList.toggle("text-decoration-line-through");
}

// 関数をグローバルに公開
window.toggleStrikethrough = toggleStrikethrough;
