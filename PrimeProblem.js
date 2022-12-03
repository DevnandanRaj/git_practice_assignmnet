function prime(Num){
    let count=0;
    for(let x=0;x<=Num;x++){
      if(Num%x==0){
        count++;
      }
    }
    if(count==2){
      console.log(Num,"is prime");
    }
    else{
      console.log(Num,"is not prime");
    }
  }
  prime(2)