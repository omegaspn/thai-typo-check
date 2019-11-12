# thai-check-typo

utils for check Thai typo

## TypeScript

```ts
import thaiCheckTypo from "thai-check-typo";

test("thaiCheckTypo", () => {
  const input = "ฉันอยากกินข้าว";
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];
  expect(thaiCheckTypo(input, dict).toBe(true));
});
```
