// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`
const insertx = `Willy the Goblin
Big Daddy
Father Christmas`.split("\n");
const inserty = `the soup kitchen
Disneyland
the White House`.split('\n');

const insertz = `spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away`.split('\n');

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

const insertxLiteral = ":insertx:";
const insertyLiteral = ":inserty:";
const insertzLiteral = ":insertz:";
const bobName = "Bob";

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory = newStory.replaceAll(insertxLiteral, xItem);
    newStory = newStory.replaceAll(insertyLiteral, yItem);
    newStory = newStory.replaceAll(insertzLiteral, zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll(bobName, name)
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + ' stone';
        const temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
        newStory = newStory.replace("94 fahrenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}