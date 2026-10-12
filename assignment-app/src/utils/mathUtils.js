export function calculateAverage(data, key) {
  if (!data || data.length === 0) return 0;
  const sum = data.reduce(
    (accumulator, record) => accumulator + parseFloat(record[key] || 0),
    0,
  );
  return sum / data.length;
}

export function calculateMedian(data, key) {
  if (!data || data.length === 0) return 0;
  const values = data
    .map((record) => parseFloat(record[key]))
    .filter((value) => !isNaN(value))
    .sort((a, b) => a - b);

  if (values.length === 0) return 0;

  const middle = Math.floor(values.length / 2);
  if (values.length % 2 !== 0) {
    return values[middle];
  } else {
    return (values[middle - 1] + values[middle]) / 2;
  }
}
