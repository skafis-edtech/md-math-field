export function createButton(
  text: string,
  onClick: () => void
): HTMLButtonElement {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}
