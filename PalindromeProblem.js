function palindrome(str){
    let bag=str.split().reverse().join();
    if(bag==str){
      console.log("Palindrome")
    }
    else{
      console.log("Not palindrome")
    }
    }
    palindrome("naman");