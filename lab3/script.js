(function () {
  const names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();

(function () {
  console.log("\n Додатковий функціонал: Селекція за сумою ASCII-кодів ");

  const threshold = 500;
  const moreNames = ["Zack", "Amy", "Jonathan", "Eve", "Christopher"];

  moreNames.forEach(function (name) {
    const asciiSum = name
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);

    if (asciiSum >= threshold) {
      console.log(" Strong Name: " + name + " (ASCII Sum: " + asciiSum + ")");
    } else {
      console.log(" Weak Name: " + name + " (ASCII Sum: " + asciiSum + ")");
    }
  });
})();

  
  