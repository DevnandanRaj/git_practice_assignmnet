function prime(Num){
    let count=0;
    for(let x=0;x<=Num;x++){
      if(Num%x==0){
        count++;
      }
    }
    if(count==2){
      console.log(Num,"IT IS  Prime");
    }
    else{
      console.log(Num,"IT IS NOT  Prime");
    }
  }
  prime(13)