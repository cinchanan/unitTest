import { Say } from "../fizzbuzz";
describe("fizzbuzz", () => {
  it("should be say", () => {
    const expectedResult = "fizz buzz ";
    const result = Say(180);
    //ตัวที่หาร 15 ลงตัว ถึงผ่าน
    expect(result).toBe(expectedResult);
  });

  test.each([
    {
      num: 1,
      expectedResult: 1,
    },
    {
      num: 3,
      expectedResult: "fizz",
    },
    {
      num: 5,
      expectedResult: "buzz",
    },
    {
      num: 15,
      expectedResult: "fizz buzz",
    },
  ])(
    "should be say $num when input $expectedResult($num ,$expectedResult)",
    ({ num, expectedResult }) => {
      expect(Say(num)).toBe(expectedResult);
    }
  );
});
