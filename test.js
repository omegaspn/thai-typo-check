const { thaiTypoCheck, thaiTypoCheckWords } = require(".");

describe("thaiTypoCheck", () => {
  it("should return true when no typo", () => {
    expect(thaiTypoCheck("ฉันอยากกินยำ   ")).toBe(true);
    expect(thaiTypoCheck("ฉัน อยากกิน   ยำ")).toBe(true);
  });

  it("should support custom words", () => {
    expect(thaiTypoCheck("ฉันอยากกินยำซี้ดพัทยา", ["ซี้ด", "พัทยา"])).toBe(
      true
    );
  });

  it("should return false when found typos", () => {
    expect(thaiTypoCheck("ฉนอยากกินยำ")).toBe(false);
    expect(thaiTypoCheck("ฉันอยากกินยำา")).toBe(false);
    expect(thaiTypoCheck("ฉัน อยากกินยำมาก กกกกก")).toBe(false);
  });

  it("should skip and return true when inputText is null or empty", () => {
    expect(thaiTypoCheck("")).toBe(true);
    expect(thaiTypoCheck(null)).toBe(true);
    expect(thaiTypoCheck(undefined)).toBe(true);
  });
});

describe("thaiTypoCheckWords", () => {
  it("should return undefined when no typos", () => {
    expect(thaiTypoCheckWords("มา")).toBe(undefined);
  });

  it("returns array of typos if any", () => {
    const expectedArray = ["ผผผผ", "ฝฝฝฝ"];
    expect(thaiTypoCheckWords("มาผผผผtestมาฝฝฝฝ")).toEqual(expectedArray);
  });
});
