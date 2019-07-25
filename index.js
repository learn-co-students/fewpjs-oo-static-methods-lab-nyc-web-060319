class Formatter {
  //add static methods here
  static capitalize(str){
    let s = str.charAt(0).toUpperCase();
    return s + str.slice(1)
    return s;
  }

  static sanitize (str){
    //return str.replace(/[^A-Za-z0-9-']+/g, '');
    return str.replace(/([.?!@#%*&+^$[\]\\(){}|])/g, "");
  }

  static titleize(str){
    let string_array = str.split(' ');
    const dontCaps = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the", "A", "An", "Of", "And", "But", "The", "For"];


      string_array.forEach( st => {
      if (dontCaps.indexOf(st) == -1) {   // && (dontCaps == st)  ) {
        console.log (dontCaps.indexOf(st) )
        let temp = st.charAt(0).toUpperCase();
        string_array[string_array.indexOf(st)] = ( temp + st.slice(1) );
        console.log("St is --- ", st)

      } else {
        st
      }

      })
      // switch(st){
      //   // case (  dontCaps.includes(st) ):
      //   case (  (dontCaps.indexOf(st) == -1) && (dontCaps == st)  ):
      //       console.log("-----")
      //       let temp = st.charAt(0).toUpperCase();
      //       st = ( temp + st.slice(1) );
      //       break;
      //     // console.log ("dontCaps.indexOf(st) is:", dontCaps.indexOf(st))
      //     // break;
      //   default:
      //       st;
      //     // console.log ("dontCaps.indexOf(st) is:", dontCaps.indexOf(st))

      //     // console.log("-----")
      //     //  let temp = st.charAt(0).toUpperCase();
      //     //  return temp + st.slice(1);
      // }
      console.log(string_array)
    

    string_array[0] = string_array[0].charAt(0).toUpperCase() + string_array[0].slice(1);
    
    return string_array.join(' ');

  }

}