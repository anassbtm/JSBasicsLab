
export const isNumberEven = (i) => {
  // i will be an integer.

  // Return true if it's even, and false if it isn't.
if( i % 2==0) return true ;
else return false ;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
var maListe = str.split('.');

    if(maListe.length <= 1) {

        return false;
    } else {

        return maListe[maListe.length - 1];
    }
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array

var res="";
var i;
    
    for (i=0; i<arr.length;i++){
    
        if (arr[i].length> res.length  && typeof arr[i]==='string')
	
	   res = arr[i];
    }
 
	return res;

};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
var reversed;
	
reversed = str.split("").reverse().join("");
return reversed;
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
var i, sum =0;
    for (i=0;i<arr.length;i++){
	if (Array.isArray(arr[i])){
		sum+=nestedSum(arr[i]);
        }else if(Number.isInteger(arr[i]))
	   sum+=arr[i];
    }
return sum;
};
