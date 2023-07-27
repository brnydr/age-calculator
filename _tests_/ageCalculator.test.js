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
    expect(newAgeCalculator.calculatePlanetAge("mercury")).toEqual("154.17");
    expect(newAgeCalculator.calculatePlanetAge("venus")).toEqual("59.68");
    expect(newAgeCalculator.calculatePlanetAge("earth")).toEqual("37.00");
    expect(newAgeCalculator.calculatePlanetAge("mars")).toEqual("19.68");
    expect(newAgeCalculator.calculatePlanetAge("jupiter")).toEqual("3.12");

  });

  test("should correctly calculate the number of years passed on a planet since a past birthday", () => {
    expect(newAgeCalculator.calculateYearsPassed(36, "mercury")).toEqual("4.17");
    expect(newAgeCalculator.calculateYearsPassed(33, "venus")).toEqual("6.45");
    expect(newAgeCalculator.calculateYearsPassed(30, "earth")).toEqual("7.00");
    expect(newAgeCalculator.calculateYearsPassed(27, "mars")).toEqual("5.32");
    expect(newAgeCalculator.calculateYearsPassed(24, "jupiter")).toEqual("1.10");
  });

  test("should correctly calculate the number of years on a planet until a future birthday", () => {
    expect(newAgeCalculator.calculateYearsUntil(40, "mercury")).toEqual("0.72");
    expect(newAgeCalculator.calculateYearsUntil(42, "venus")).toEqual("3.10");
    expect(newAgeCalculator.calculateYearsUntil(44, "earth")).toEqual("7.00");
    expect(newAgeCalculator.calculateYearsUntil(46, "mars")).toEqual("16.92");
    expect(newAgeCalculator.calculateYearsUntil(48, "jupiter")).toEqual("40.74");

  });

});