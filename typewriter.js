const sentence = "hello there from lighthouse labs";

let time = 0; // => assign a variable to store time count
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);//=> will print each character
  }, time);
  time += 50;  // => with delay of 'time' between each character
}
setTimeout(() => { //=> it will start console wrom the new line.
  process.stdout.write("\n");
}, time);
