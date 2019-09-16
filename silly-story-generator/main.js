//<input> text entered by user
let customName = document.getElementById('customname');
//<button> with class="randomize"
let randomize = document.querySelector('.randomize');
//<p> element with class="story"
let story = document.querySelector('.story');

//text variables
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//randomize is a javacript variable that contains a reference to a <button> by using querySelector to select the class.
randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

  if(customName.value !== '') {
    var name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}