class Formatter {
  static capitalize(string) {
    const newFirstLetter = string[0].toUpperCase()
    return newFirstLetter + string.slice(1)
  }

  static sanitize(string) {
    const alphaNum = /[A-Za-z0-9]/
    for (let i = 0; i < string.length; i++) {
      if (!alphaNum.test(string[i]) && string[i] != '-' && string[i] != "'" && string[i] != ' ') {
        string = string.slice(0, i) + string.slice(i + 1)
        i--
      }
    }
    return string
  }

  static titleize(string) {
    const strArray = string.split(' ')
    for (let i = 0; i < strArray.length; i++) {
      if (i === 0 || !['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(strArray[i]))
        strArray[i] = this.capitalize(strArray[i])
    }
    return strArray.join(' ')
  }
}