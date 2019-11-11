// import wordBreak from "word-break";
import { wordBreak } from "./utils/word-break";
import trie from "trie-prefix-tree";

const THAI_REGEX = /([\u0E00-\u0E7F]{2,})/;
const longestWordLength = 22;
const dictionary = ["ฉัน", "อยาก", "กิน", "ข้าว", "มาก"];
// const currentTrie = trie(dictionary);

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
  var outputs;
  console.log(inputs);

  for (let input of inputs) {
    if (THAI_REGEX.test(input)) {
      let ret = wordBreak(input, dictionary, longestWordLength);

      for (const formatter of formatters) {
        ret = formatter(ret);
      }

      outputs.push(ret.join(sep));
    } else {
      outputs.push(he.encode(input));
    }
  }
}

thaiCheckTypo("ฉํนอยากกินข้าวเพราะหิวมากveryหิวเลย", "|");
module.exports = thaiCheckTypo;
