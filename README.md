# thai-typo-check

utils for check Thai typo

## TypeScript

```ts
import thaiTypoCheck from "thai-typo-check";

test("thaiTypoCheck", () => {
  const goodSentence = "ฉันอยากกินยำ";
  const typoSentence = "ฉันอยากกินผฟใก่ร์";

  expect(thaiTypoCheck(goodSentence)).toBe(true);
  expect(thaiTypoCheck(typoSentence)).toBe(false);
});
```
