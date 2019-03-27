function longestConsecutive(listOfWords, k) {
  if (listOfWords == [] || k > listOfWords.length) {
    return ""
  }
  else {
    newList = []
    for (var i = 0; i < (listOfWords.length-k+1); i++) {
      tempWord = ""
      for (var j = i; j < i+k; j++) {
        tempWord += listOfWords[j]
      }
      newList[i] = tempWord;
    }
    newList.sort(function(a,b) {
      return b.length - a.length
    })
    return newList[0];
  }
}

console.log(longestConsecutive([], 3))
console.log(longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3)); // -> 'marblesmittensbye'
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)); // --> "abigailtheta"
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], -1));
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 5));
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 8));
console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 9));
