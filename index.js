const NO_CAPITALIZE = [
  "t",
  "the",
  "a",
  "an",
  "but",
  "of",
  "and",
  "for",
  "at",
  "by",
  "from"
];

function returnCapitalizedWord(word) {
  if (NO_CAPITALIZE.includes(word)) {
    return word;
  }
  let newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}

class Formatter {
  //add static methods here

  static capitalize(text) {
    let newText = text[0].toUpperCase() + text.slice(1);
    // newtext.append()
    return newText;
  }

  static sanitize(text) {
    // let reg = new RegExp("[\w|\s|\-||!']*")
    let removeNonWord = new RegExp("[^a-zA-Z0-9 ' -]");
    let nonalpha = text.replace(removeNonWord,'');
    // console.log("nonalpha: " + nonalpha);
    let removeAtSign = new RegExp("[@\{]");
    let noAtSign = nonalpha.replace(removeAtSign, '');
    let removePound = new RegExp("[#\(]");
    let nearlyDone = noAtSign.replace(removePound, "");
    // let removeCaret = new RegExp("\^");
    let newText = nearlyDone.replace("^", "");
    // console.log("sanitized text: " + newText);
    return newText;
  }

  static titleize(text) {
    let words = text.split(' ');
    let newText = '';
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        newText += (words[i][0].toUpperCase() + words[i].slice(1));
      }
      else {
        newText += (' ' + returnCapitalizedWord(words[i]));

      }
    }
    return newText;
  }
}