function escapeRegex(str) {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/; // Default delimiters: comma or newline
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].substring(2);

    if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
      // Handle multiple or long delimiters
      const delimiters = customDelimiter
        .match(/\[(.*?)\]/g) // Match all delimiters inside [ ]
        .map((d) => escapeRegex(d.slice(1, -1))); // Remove brackets and escape
      delimiter = new RegExp(delimiters.join("|")); // Join delimiters with |
    } else {
      delimiter = new RegExp(escapeRegex(customDelimiter)); // Single custom delimiter
    }

    numbers = parts.slice(1).join("\n");
  }

  const numArray = numbers
    .split(delimiter)
    .map(Number)
    .filter((num) => num <= 1000); // Ignore numbers > 1000

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
