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
    expect(newAgeCalculator.calculatePlanetAge("venus")).toEqual("22.94");
    expect(newAgeCalculator.calculatePlanetAge("earth")).toEqual("37.00");
    expect(newAgeCalculator.calculatePlanetAge("mars")).toEqual("69.56");
    expect(newAgeCalculator.calculatePlanetAge("jupiter")).toEqual("438.82");

  });

  test("should correctly calculate the number of years passed on a planet since a past birthday", () => {
    expect(newAgeCalculator.calculateYearsPassed(36, "mercury")).toEqual("0.24");
    expect(newAgeCalculator.calculateYearsPassed(33, "venus")).toEqual("2.48");
    expect(newAgeCalculator.calculateYearsPassed(30, "earth")).toEqual("7.00");
    expect(newAgeCalculator.calculateYearsPassed(27, "mars")).toEqual("18.80");
    expect(newAgeCalculator.calculateYearsPassed(24, "jupiter")).toEqual("154.18");
  });

});