const tail = function(array) {
    return array.slice(1);
  };

  const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅  Assertion passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
      }
    

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!