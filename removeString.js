function removeFirstOccurrence(str, searchString) {
    return str.replace(searchString, '');
  }
  
  // Contoh pemanggilan fungsi
  console.log(removeFirstOccurrence("Hello world", "ell")); // output: Ho world
  