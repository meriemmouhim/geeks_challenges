document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');
    const storyTemplates = [
      (noun, adjective, person, verb, place) => 
        `Once upon a time, a ${adjective} ${noun} named ${person} decided to ${verb} all the way to ${place}. What an adventure!`,
      
      (noun, adjective, person, verb, place) => 
        `${person} had a ${adjective} ${noun} that loved to ${verb}. One day, they took it to ${place} and everyone was amazed!`,
      
      (noun, adjective, person, verb, place) => 
        `In the land of ${place}, ${person} found a ${adjective} ${noun}. Without thinking, they decided to ${verb} it, which was probably a mistake.`,
      
      (noun, adjective, person, verb, place) => 
        `"Stop!" cried ${person} as the ${adjective} ${noun} began to ${verb} uncontrollably toward ${place}.`,
      
      (noun, adjective, person, verb, place) => 
        `The ${noun} was so ${adjective} that ${person} had no choice but to ${verb} all the way to ${place}.`
    ];
    let currentValues = {};
    let currentStoryIndex = 0;
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const noun = document.getElementById('noun').value.trim();
      const adjective = document.getElementById('adjective').value.trim();
      const person = document.getElementById('person').value.trim();
      const verb = document.getElementById('verb').value.trim();
      const place = document.getElementById('place').value.trim();
      if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields!');
        return;
      }
      currentValues = { noun, adjective, person, verb, place };
      currentStoryIndex = Math.floor(Math.random() * storyTemplates.length);
      const story = storyTemplates[currentStoryIndex](noun, adjective, person, verb, place);
      storySpan.textContent = story;
    });
    document.getElementById('shuffle-button').addEventListener('click', function() {
      if (!currentValues.noun) {
        alert('Please generate a story first!');
        return;
      }
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * storyTemplates.length);
      } while (storyTemplates.length > 1 && newIndex === currentStoryIndex);
      currentStoryIndex = newIndex;
      const story = storyTemplates[currentStoryIndex](
        currentValues.noun, 
        currentValues.adjective, 
        currentValues.person, 
        currentValues.verb, 
        currentValues.place
      );
      storySpan.textContent = story;
    });
  });