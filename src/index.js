import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {AgeCalculator} from "./ageCalculator.js";

function createResetButton() {
  const resultDiv = document.getElementById("result");
  const resetButton = document.createElement("button");
  resetButton.innerText = "Enter some new ages!";
  resetButton.classList.add("btn", "btn-primary");
  resetButton.addEventListener("click", function() {
    location.reload();
  });
  resultDiv.before(resetButton);
}

function handleFormSubmission(e) {
  e.preventDefault();
  const resultDiv = document.getElementById("result");
  const age = document.getElementById("age").value;
  const pastAge = document.getElementById("pastAge").value;
  const futureAge = document.getElementById("futureAge").value;
  const newAge = new AgeCalculator(age);
  const venusAge = document.querySelector("#venusAge");
  const venusPast = document.querySelector("#venusPast");
  const venusFuture = document.querySelector("#venusFuture");
  const mercuryAge = document.querySelector("#mercuryAge");
  const mercuryPast = document.querySelector("#mercuryPast");
  const mercuryFuture = document.querySelector("#mercuryFuture");
  const marsAge = document.querySelector("#marsAge");
  const marsPast = document.querySelector("#marsPast");
  const marsFuture = document.querySelector("#marsFuture");
  const jupiterAge = document.querySelector("#jupiterAge");
  const jupiterPast = document.querySelector("#jupiterPast");
  const jupiterFuture = document.querySelector("#jupiterFuture");
  document.querySelectorAll(".pastAge").forEach(function(element) {
    element.innerText = pastAge;
  })
  document.querySelectorAll(".futureAge").forEach(function(element) {
    element.innerText = futureAge;
  })
  venusAge.innerText = newAge.calculatePlanetAge("venus");
  venusPast.innerText = newAge.calculateYearsPassed(pastAge, "venus");
  venusFuture.innerText = newAge.calculateYearsPassed(futureAge, "venus");
  mercuryAge.innerText = newAge.calculatePlanetAge("mercury");
  mercuryPast.innerText = newAge.calculateYearsPassed(pastAge, "mercury");
  mercuryFuture.innerText = newAge.calculateYearsPassed(futureAge, "mercury");
  marsAge.innerText = newAge.calculatePlanetAge("mars");
  marsPast.innerText = newAge.calculateYearsPassed(pastAge, "mars");
  marsFuture.innerText = newAge.calculateYearsPassed(futureAge, "mars");
  jupiterAge.innerText = newAge.calculatePlanetAge("jupiter");
  jupiterPast.innerText = newAge.calculateYearsPassed(pastAge, "jupiter");
  jupiterFuture.innerText = newAge.calculateYearsPassed(futureAge, "jupiter");
  resultDiv.classList.add("slow-fade-in");
  resultDiv.classList.remove("hidden");
  createResetButton();
  }

  window.addEventListener('load', function() {
    const form = document.getElementById("ageForm");
    form.addEventListener("submit", handleFormSubmission);
  })