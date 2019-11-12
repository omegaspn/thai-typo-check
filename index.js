const wordBreak = require("./word-break");
const trie = require("trie-prefix-tree");

const THAI_REGEX = /([\u0E00-\u0E7F]{2,})/;
const longestWordLength = 5;
const dictionary = ["อยาก", "กิน", "ข้าว", "มาก", "ฉัน"];
const currentTrie = trie(dictionary);

const sentenceSplit = sentence => {
  return sentence
    .replace(/([\u0E00-\u0E7F]+)/g, "~$1~")
    .split("~")
    .filter(Boolean);
};

const correctContent = content => {
  return content.replace(/ํา/g, "ำ");
};

function thaiCheckTypo(inputText, sep) {
  const inputs = sentenceSplit(correctContent(inputText));
  let outputs = [];

  for (let input of inputs) {
    if (THAI_REGEX.test(input)) {
      let ret = wordBreak(input, currentTrie.hasWord, longestWordLength);
      outputs.push(ret.join(sep));
    } else {
      outputs.push(input);
    }
    console.log(outputs);
  }
}

thaiCheckTypo("ฉันอยากกินข้าวเพราะหิวมากveryหิวเลย", "|");
module.exports = thaiCheckTypo;
