// Code your solution here
// function findMatching(source) {
//   const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
//   const Bobby = require (`Bobby`)
//   global.expect = Bobby.expect
//   const Sammy = require (`Sammy`)
//   global.expect= Sammy.expect
//   return source.filter(
//     (possibleMatch)
//   );

// }

function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }
