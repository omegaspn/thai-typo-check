const thaiCheckTypo = require(".");

describe("thaiCheckTypo", () => {
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];

  it("should return true when no typo", () => {
    expect(thaiCheckTypo("ฉันอยากกินข้าว", dict)).toBe(true);
    expect(thaiCheckTypo("ฉัน อยากกิน   ข้าว", dict)).toBe(true);
  });

  it("should return false when found typos", () => {
    expect(thaiCheckTypo("ฉนอยากกินข้าว", dict)).toBe(false);
    expect(thaiCheckTypo("ฉันอยากกินข้าววว", dict)).toBe(false);
  });

  it("should skip and return true when inputText is null or empty", () => {
    expect(thaiCheckTypo("", dict)).toBe(true);
    expect(thaiCheckTypo(null, dict)).toBe(true);
    expect(thaiCheckTypo(undefined, dict)).toBe(true);
  });
});
