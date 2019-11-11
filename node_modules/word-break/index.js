function wordBreak(s, dict, longestWordLength) {
  const size = s.length;
  if (size === 0) return [];

  const max = longestWordLength || size;
  for (let i = max; i >= 1; i--) {
    const word = s.substring(0, i);
    const found = dict.includes(word);
    if (found) {
      const ret = [word];

      const end = i === s.length;
      const words = !end ? wordBreak(s.substring(i), dict, max) : [];
      ret.push(...words);
      return ret;
    }
  }
  return [s];
}

module.exports = wordBreak;
