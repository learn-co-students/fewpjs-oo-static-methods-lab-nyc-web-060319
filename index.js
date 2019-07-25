class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  static titleize(string){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(" ")
    let titleized = []
    words.forEach(function(word){
      if(exceptions.includes(word)){
        titleized.push(word)
      }else{
        titleized.push(word.charAt( 0 ).toUpperCase() + word.slice( 1 ))
      }
    })
    return titleized.join(" ").charAt( 0 ).toUpperCase()+titleized.join(" ").slice(1)
    
    // for ( let i = 0; i < words.length; i++ ){
    //   if(i === 0){
    //     titleized.push()
    //   }
    // }

  }
}