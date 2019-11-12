const thaiCheckTypo = require(".");

describe("thaiCheckTypo", () => {
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];

  const testCases = [
    ["ฉันอยากกินข้าว", true],
    ["ฉนอยากกินข้าว", false],
    ["ฉันอยากกินข้าววว", false]
  ];
  testCases.map(tc => {
    const [input, output] = tc;

    it("should return true when can correct all typo, else return false ", () => {
      expect(thaiCheckTypo(input, dict)).toBe(output);
    });
  });

  it("should skip and return true if inputText is null or undefined", () => {
    expect(thaiCheckTypo("", dict)).toBe(true);
    expect(thaiCheckTypo(null, dict)).toBe(true);
    expect(thaiCheckTypo(undefined, dict)).toBe(true);
  });
});
