function getLevenshteinDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, () =>
    Array(a.length + 1).fill(0),
  );

  for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = b[i - 1] === a[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }
  return matrix[b.length][a.length];
}

export default function isMatchWithTypos(targetStr, query) {
  const safeTarget = String(targetStr ?? "").toLowerCase();
  const trimmedQuery = String(query ?? "")
    .trim()
    .toLowerCase();
  if (!trimmedQuery) return true;
  if (safeTarget.includes(trimmedQuery)) return true;

  const words = safeTarget.split(/\s+/);
  const maxAllowedErrors = trimmedQuery.length > 5 ? 2 : 1;

  return words.some((word) => {
    if (Math.abs(word.length - trimmedQuery.length) > maxAllowedErrors)
      return false;
    return getLevenshteinDistance(word, trimmedQuery) <= maxAllowedErrors;
  });
}
