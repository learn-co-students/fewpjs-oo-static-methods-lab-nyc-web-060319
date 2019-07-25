class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let array = string.split(" ")
    array[0] = Formatter.capitalize(array[0])
    let newArray = []
    array.forEach(function(word){
      if (word != 'a' && word != 'an' && word != 'but' && word != 'of'&& word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from'  && word != 'the')
      {
        newArray.push(Formatter.capitalize(word))
      }
      else {
        newArray.push(word)
      }
    })
    return newArray.join(" ")
  }
}

// let test = "this is a test"
// console.log(Formatter.titleize(test))
