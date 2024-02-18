// script.js

// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// RAW TEXT STRINGS
const storyText = [
  "It was :temp: fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. :bob: saw the whole thing, but was not surprised — :insertx: weighs :weight: pounds, and it was a hot day.",
];

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

const ukWeight = Math.round(300 * 0.071429); // Convert pounds to stones
const ukTemperature = Math.round((94 - 32) * (5 / 9)); // Convert Fahrenheit to Celsius

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = randomValueFromArray(storyText);
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const name = customName.value;

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);
  newStory = newStory.replace(/:bob:/g, name || 'Bob');

  if (document.getElementById('uk').checked) {
    newStory = newStory.replace(/:temp:/g, ukTemperature + " centigrade");
    newStory = newStory.replace(/:weight:/g, ukWeight + " stones");
  } else {
    newStory = newStory.replace(/:temp:/g, "94 fahrenheit");
    newStory = newStory.replace(/:weight:/g, "300 pounds");
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
