const thaiCheckTypo = require(".");

describe("thaiCheckTypo", () => {
  const dict = ["อยาก", "ข้าว", "มาก", "กิน", "ฉัน"];

  const testCases = [
    ["ฉันอยากกินข้าว", true],
    ["ฉนอยากกินข้าว", false],
    ["ฉันอยากกินข้าววว", false],
    ["", true]
  ];
  testCases.map(tc => {
    const [input, output] = tc;

    it("should return true when can correct all typo, else return false ", () => {
      expect(thaiCheckTypo(input, dict)).toBe(output);
    });
  });
});
