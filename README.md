# thai-typo-check

utils for check Thai typo

## TypeScript

```ts
import thaiTypoCheck from "thai-typo-check";

test("thaiTypoCheck", () => {
  const input = "ฉันอยากกินข้าว";
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];
  expect(thaiTypoCheck(input, dict).toBe(true));
});
```
