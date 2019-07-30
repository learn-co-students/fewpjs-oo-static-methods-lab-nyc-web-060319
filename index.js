class Formatter {
  static capitalize(string) {
    const newFirstLetter = string[0].toUpperCase();
    return newFirstLetter + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArray = string.split(' ')
    for (let i = 0; i < newArray.length; i++) {
      if (i === 0 || !exceptions.includes(newArray[i]))
        newArray[i] = this.capitalize(newArray[i])
    }
    return newArray.join(' ')
  }
}