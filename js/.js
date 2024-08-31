// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
    // some code here
    // return results;
  }
  
  function main() {
    console.log("Main function started.");
    // the code that makes everything happen
  }
  function sortingHat(str) {
    var length = str.length;
    var mod = length%4;
    if (mod== 0){
        return "Gryffindor";
    }
    else if (mod==1){
        return "Ravenclaw";
    }
    else if (mod==2){
        return "Syltherin";
    }
    else {
        return "Hufflepuff";
    }
}
var input = document.getElementById("button");
input.addEventListener("click", function(){
    inputValue= document.getElementById("input").value;
    var sortedHouse=sortingHat(inputValue);
    var text = "<p>The Sorting Hat has sorted you into " + sortedHouse +"<p>"
    document.getElementById("output").innerHTML= text;
  });
  // let's get this party started
  main();
 