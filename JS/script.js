console.log('Question 1');
function getOnlyEvens(arr) {
    let result=[];
    for (let i=0; i<arr.length; i+=2){
        if (arr[i]% 2===0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}
getOnlyEvens([1,2,3,6,4,8]);
getOnlyEvens([0,1,2,3,4]);
console.log('Question 2');
function reverseCompare(num){
    let tens=Math.floor(num/10);
    let ones=num%10;
    let reversed=ones*10+tens;
    if(num>reversed){
        console.log("Ok");
    } else{
        console.log("Not Ok");
    }
}
reverseCompare(72);
reverseCompare(23);
console.log('Question 3');
function returnFactorial(num){
    let result=1;
    for(let i=1; i<=num; i++){
        result=result*i;
    }
    return result;
}
console.log(returnFactorial(5));
console.log(returnFactorial(6));
console.log(returnFactorial(0));
console.log('Question 4');
function checkMeera(arr){
    for (let i=0;
         i<arr.length;
          i++) {
        let n=arr[i];
         if (arr.includes(n*2)) {
            console.log("I am Not a Meera array");
            return;
        }
    }
    console.log("I am a Meera array");
}
checkMeera([10,4,0,5]);
checkMeera([7,4,9]);
checkMeera([1,-6,4,-3]);
console.log('Question 5');
function isDual(arr){
    let counts={};
    for (let i=0; i<arr.length; i++) {
        let value=arr[i];
        if (counts[value]===undefined) {
            counts[value]=1;
        }else {
            counts[value]++;
        }
    }
    for (let value in counts) {
        if (counts[value] !==2) {
            return 0;
        }
    }
    return 1;
}
console.log(isDual([1,2,1,3,3,2]));
console.log(isDual([2,5,2,5,5]));
console.log(isDual([3,1,1,2,2]));
console.log('Question 6');
function digitalClock(seconds){
    let hours= Math.floor(seconds/3600);
    let remainingSeconds=seconds%3600;let minutes=Math.floor(remainingSeconds/60);
    let secs=remainingSeconds%60;
    let hh= String(hours).padStart(2,"0");
    let mm= String(minutes).padStart(2,"0");
    let ss= String(secs).padStart(2, "0");
    return hh+":"+ss;
    }
    console.log(digitalClock(5025));
    console.log(digitalClock(61201));
     console.log(digitalClock(87000));