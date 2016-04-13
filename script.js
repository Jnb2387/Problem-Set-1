// capitalize first letter
var letterCapitalize = function(string){
    return string[0].toUpperCase() + string.substring(1)
};
console.log(letterCapitalize("jellos"));

var capitalize = function(string){
    var scap = string[0].toUpperCase() + string.substring(1)
    return scap
}
console.log(capitalize("thisone"));

//functions parameter is returned by an index or picking a character in the parameter[0],[1],[2],[3] to capitalize, then the ,substring 
// is added to the picked character by picking the indexes or characters to include(1,till the length of the string)

var caps = function(something){
    return something.substring(0,3) + something[3].toUpperCase()+something.substring(4);
}
document.write(caps("itsyourbirthday"));

// use map instead of a for loop to cycle through array to capitalize a letter and then add the rest with .substring
var many = ["yeh", "yeah", "yes","yup"]
function all(huh, which){
    return huh[0].toUpperCase()+huh.substring(1)
}
var capss= many.map(all)
console.log(capss)

var array=['jeff', 'court', 'kara', 'jill', 'scott', 'marge'];
var capArray = function(){
    var newArray = array[i].toUpperCase();
    for(var i = 1; i < newArray.length; i++)
    return newArray}
console.log(capArray());





// finds the total number of words.
function wordCount(string){
    return string.split(" ").length;
}
console.log(wordCount("hello world jeez"));

// finds the total number of characters.
function wordCounter(string){
    return string.length;
}
console.log(wordCounter("hello world jeez"));

// prime number
function primeTimes(x) {
     var primeTimes = true;
    for (var i = 2; i <= 100; i++){
      if (x % i === 0) {primeTimes= false}
    }
        return primeTimes;
}

console.log(primeTimes(71));


function primeTime(n){
    var primeTime = true;
    for(var i = 2; i < Math.pow(2, 16); i++){
        if(n % i === 0) {primeTime = false}
    }
    return primeTime;
}
console.log(primeTime(3));
