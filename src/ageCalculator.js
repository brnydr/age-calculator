
export default class AgeCalcuator {
  constructor(age) {
    this.age = age;
    this.planetYears = {
      "mercury": .24,
      "venus": .62,
      "earth": 1,
      "mars": 1.88,
      "jupiter": 11.86
    };
  };

  calculatePlanetAge(planet) {
   let planetAge = this.age / this.planetYears[planet];
   return planetAge.toFixed(2);
 };

  calculateYearsPassed(pastAge, planet) {
    let yearsPassed = this.age - pastAge;
    let planetYearsPassed = yearsPassed * this.planetYears[planet];
    return planetYearsPassed.toFixed(2);
    
  }

  calculateYearsUntil(futureAge, planet) {
   
  }
};