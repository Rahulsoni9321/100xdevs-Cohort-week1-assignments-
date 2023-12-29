/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let newstr="";
  for (let i=0;i<str.length;i++){
    if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
      newstr+=str[i];
    }
  }
  for(let i=0;i<newstr.length;i++){
    if (newstr[i]!=newstr[newstr.length-i-1]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
