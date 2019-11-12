const wordBreak = require("word-break-trie");
const trie = require("trie-prefix-tree");
const fileSync = require("fs");

const THAI_REGEX = /([\u0E00-\u0E7F]{2,})/;

const sentenceSplit = sentence => {
  return sentence
    .replace(/([\u0E00-\u0E7F]+)/g, "~$1~")
    .split("~")
    .filter(Boolean);
};

const correctContent = content => {
  return content.replace(/ํา/g, "ำ");
};

function thaiTypoCheck(inputText) {
  // return true when input is empty string, null, or undefined
  if (!inputText) return true;

  const dict = fileSync.readFileSync("./dictionary/dict.txt", {
    encoding: "UTF-8"
  });

  const dictArray = dict.split("\n");

  const longestWordLength = dictArray[0].length;
  const currentTrie = trie(dictArray);
  const inputs = sentenceSplit(correctContent(inputText));

  for (let input of inputs) {
    if (THAI_REGEX.test(input)) {
      let ret = wordBreak(input, currentTrie.hasWord, longestWordLength);
      let last = ret.pop();
      if (!currentTrie.hasWord(last)) return false;
    }
    // return true when pass all validation
    return true;
  }
}

module.exports = thaiTypoCheck;
