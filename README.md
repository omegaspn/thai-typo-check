# thai-typo-check

utils for check Thai typo

## TypeScript

```ts
import { thaiTypoCheck, thaiTypoCheckWords } from "thai-typo-check";

const goodSentence = "ฉันอยากกินยำ";
const typoSentence = "ฉันอยากกินผฟใก่ร์";

test("thaiTypoCheck", () => {
  const sentenceIncludesCustomWords = "ฉันอยากกินยำซี้ดพัทยา";

  expect(thaiTypoCheck(goodSentence)).toBe(true);
  expect(thaiTypoCheck(typoSentence)).toBe(false);
  expect(thaiTypoCheck(sentenceIncludesCustomWords, ["ซี้ด", "พัทยา"])).toBe(
    true
  ); // second parameter is the list of custom words
});

test("thaiTypoCheckWords", () => {
  expect(thaiTypoCheckWords(goodSentence)).toBe(undefined);
  expect(thaiTypoCheckWords(typoSentence)).toEqual("ฉัน,อยาก,กิน>>ผฟใก่ร์<<");
});
```

## License

MIT
