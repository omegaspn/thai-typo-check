# word-break

word-break util using a given dictionary

## TypeScript

```ts
import wordBreak from "word-break";

test("wordBreak", () => {
  const dict = ["samsung", "like", "i"];
  const list = wordBreak(input, dict);
  expect(list.join("|")).toBe("i|like|samsung");
});
```
