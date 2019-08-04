class Formatter {
  //add static methods here

  //An example of a class whose instances don't matter, but rather contains a bunch of associated methods
  
  // Write a method static capitalize that takes in a string and capitalizes the first letter.
  // Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
  // Write a method static titleize that takes in a string and capitalizes
  //  all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.

  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g , "")
  }

  static titleize(string){
    const doNotCapitalize = ["the", "a","an", "but","of", "and", "for", "at","by", "from"]
    let newString = string.split(" ").map(word => {
      if (doNotCapitalize.includes(word)){
        return word
      } else {
      return word[0].toUpperCase() + word.slice(1)
      }
    }).join(" ")
    return newString[0].toUpperCase() + newString.slice(1)
  } 

}