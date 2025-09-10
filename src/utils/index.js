// Returns black or white text depending on background color
export function getContrastColor(bgColor) {
  // Convert named colors (like "red") to hex if needed
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = bgColor;
  const hex = ctx.fillStyle; // gives hex format

  // Convert hex → RGB
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? "black" : "white";
}
