function palindrome(str){
    let str1=str.split().reverse().join();
    if(str1==str){
      console.log("Palindrome")
    }
    else{
      console.log("Not palindrome")
    }
    }
    palindrome("racecar");