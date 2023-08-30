//function to check palindrome
//input abcd dcba
//result : The given string is Palindrome
function checkPalindrome(str) {
    
    // applying split, revere and join
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
}
