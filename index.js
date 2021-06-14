const wordBreak = require("word-break-trie");
const trie = require("trie-prefix-tree");
const fileSync = require("fs");
const dictionaryPath = require.resolve("thai-typo-check/dictionary/dict.txt");

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

function thaiTypoCheck(inputText, customWords) {
  const ret = thaiTypoCheckWords(inputText, customWords);
  return ret === undefined;
}

function thaiTypoCheckWords(inputText, customWords) {
  // skip if input is empty string, null, or undefined
  if (!inputText) return undefined;

  const text = fileSync.readFileSync(dictionaryPath, {
    encoding: "UTF-8"
  });
  const dictArray = text.split("\n");
  if (!!customWords) {
    dictArray.push(...customWords);
  }
  const longestWordLength = dictArray[0].length;
  const currentTrie = trie(dictArray);
  const inputs = sentenceSplit(correctContent(inputText));

  for (let input of inputs) {
    if (THAI_REGEX.test(input)) {
      let ret = wordBreak(input, currentTrie.hasWord, longestWordLength);
      let last = ret.pop();
      if (!currentTrie.hasWord(last)) {
        return `${ret}>>${last}<<`;
      }
    }
  }

  // return true when pass all validation
  return undefined;
}

module.exports = {
  thaiTypoCheck,
  thaiTypoCheckWords
};
