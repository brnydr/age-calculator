export class AgeCalculator {
  constructor(age) {
    this.age = age;
    this.planetYears = {
      "mercury": .24,
      "venus": .62,
      "earth": 1,
      "mars": 1.88,
      "jupiter": 11.86
    };
  }

  calculatePlanetAge(planet) {
   let planetAge = this.age / this.planetYears[planet];
   return planetAge.toFixed(2);
 }

  calculateYearsPassed(otherAge, planet) {
    if (otherAge > this.age) {
      let planetYearsPassed = (otherAge - this.age) / this.planetYears[planet];
      return planetYearsPassed.toFixed(2);
    } else if (otherAge < this.age) {
      let planetYearsPassed = (this.age - otherAge) / this.planetYears[planet];
      return planetYearsPassed.toFixed(2);
    } else if (otherAge === this.age) {
      return "0";
    }
  }

}