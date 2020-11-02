const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // => check to ensure orginal array is not modified

const empty = [];
assertEqual(empty.length, 0); // => should remain the same

const oneElement = ["Hello"];
assertEqual(tail(oneElement).length, 0); // => should be true;
