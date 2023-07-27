import AgeCalculator from ".././src/ageCalculator.js";

describe("AgeCalculator", () => {
  let newAgeCalculator;

beforeEach(() => {
  newAgeCalculator = new AgeCalculator(37);
  return newAgeCalculator;
});

  test("should correctly create an AgeCalculator object with an age property", () => {
    expect(newAgeCalculator.age).toEqual(37);
  });

  test("should correctly create an AgeCalculator object with a age property and planet years property", () => {
    expect(newAgeCalculator.planetYears.mercury).toEqual(.24);
  });

  test("should correctly calculate the age of a person in Mercury years", () => {
    expect(newAgeCalculator.calculatePlanetAge("mercury")).toEqual("8.88");
  });

 
});