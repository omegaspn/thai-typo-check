# thai-typo-check

utils for check Thai typo

## TypeScript

```ts
import thaiTypoCheck from "thai-typo-check";

test("thaiTypoCheck", () => {
  const goodSentence = "ฉันอยากกินยำ";
  const typoSentence = "ฉันอยากกินผฟใก่ร์";
  const sentenceIncludesCustomWords = "ฉันอยากกินยำซี้ดพัทยา";

  expect(thaiTypoCheck(goodSentence)).toBe(true);
  expect(thaiTypoCheck(typoSentence)).toBe(false);
  expect(thaiTypoCheck(sentenceIncludesCustomWords, ["ซี้ด", "พัทยา"])).toBe(
    true
  ); // second parameter is the list of custom words
});
```
