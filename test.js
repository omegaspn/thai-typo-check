const thaiTypoCheck = require(".");

describe("thaiTypoCheck", () => {
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];

  it("should return true when no typo", () => {
    expect(thaiTypoCheck("ฉันอยากกินข้าว", dict)).toBe(true);
    expect(thaiTypoCheck("ฉัน อยากกิน   ข้าว", dict)).toBe(true);
  });

  it("should return false when found typos", () => {
    expect(thaiTypoCheck("ฉนอยากกินข้าว", dict)).toBe(false);
    expect(thaiTypoCheck("ฉันอยากกินข้าววว", dict)).toBe(false);
  });

  it("should skip and return true when inputText is null or empty", () => {
    expect(thaiTypoCheck("", dict)).toBe(true);
    expect(thaiTypoCheck(null, dict)).toBe(true);
    expect(thaiTypoCheck(undefined, dict)).toBe(true);
  });
});
