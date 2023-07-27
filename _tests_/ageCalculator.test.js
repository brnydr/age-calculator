import AgeCalculator from ".././src/ageCalculator.js";

describe("AgeCalculator", () => {
  test("should correctly create an AgeCalculator object with an age property", () => {
    const newAgeCalculator = new AgeCalculator(37);
    expect(newAgeCalculator.age).toEqual(37);
  });
});