class Formatter {
  //add static methods here

  static capitalize(text) {
    let newText = text[0].toUpperCase() + text.slice(1);
    // newtext.append()
    return newText;
  }

  static sanitize(text) {
    let reg = new RegExp("[\W^\(-)'\s]*")
    let newText = text.replace(reg, '');
    return newText;
  }
}