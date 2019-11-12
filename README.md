# thai-typo-check

utils for check Thai typo

## TypeScript

```ts
import thaiTypoCheck from "thai-typo-check";

test("thaiTypoCheck", () => {
  const wordBreakableInput = "ฉันอยากกินยำ";
  const wordUnBreakableInput = "ฉันอยากกินผฟใก่ร์";
  expect(thaiTypoCheck(wordBreakableInput).toBe(true));
  expect(thaiTypoCheck(wordUnBreakableInput).toBe(false));
});
```
