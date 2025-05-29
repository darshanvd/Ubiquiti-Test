// Utility function to generate product image URL with optimal resolution
export function getImageUrl(
  icon: string | undefined,
  id: string,
  resolutions?: number[][],
  displaySize: number = 512
): string {
  if (!icon || !id) return '';
  let size = displaySize;
  if (resolutions && resolutions.length > 0) {
    // Find the smallest resolution >= displaySize
    const sorted = resolutions.map(([w, h]) => Math.max(w, h)).sort((a, b) => a - b);
    size = sorted.find((s) => s >= displaySize) || sorted[sorted.length - 1];
  }
  return `https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimages%2F${id}%2Fdefault%2F${icon}.png&w=${size}&q=75`;
}

// Utility function to generate srcSet for responsive images
export function getImageSrcSet(
  icon: string | undefined,
  id: string,
  resolutions?: number[][]
): string {
  if (!icon || !id || !resolutions) return '';
  return resolutions
    .map(([w]) => `${getImageUrl(icon, id, resolutions, w)} ${w}w`)
    .join(', ');
}
