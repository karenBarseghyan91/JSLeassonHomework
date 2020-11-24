////////TASK 1/////////
function largerNumbers(arr,b){
    let myNewArr=[];
    for(let num of arr){        
        if(num > b){
            myNewArr.push(num)
        }
    }
    if (myNewArr.length === 0){
        console.log('Such values do not exist')
    }
    return myNewArr;
}
///////task 2 ///////
function evenNumbers(a,b){  
    let myArr=[];
    let min=a;
    let max=b;
    if (a>b){
        min=b;
        max=a;   ////colage input numbers//
    }
    for(i=min;i<=max; i++){
        if (i%2==0){               ////founs even number between min and max ////
            let absolutI=Math.abs(i);        //// for negative numbers
            let myString=absolutI.toString();    ////  number to string
            let arrFromSrt=myString.split('');  //// string to array
            let value=true;                    
            for(let index of arrFromSrt){
                if (index % 2 !==0){         //// chek numbers digit even or not ////
                    value=false;
                }
            }
            if(value == true){
                myArr.push(i);    //// creat new aray with even numbers////
            }            
        }
    }    
    if (myArr.length === 0 ){
        console.log('"Such values do not exist"')
        }else {
            console.log(myArr.join(','));
        }
    }
//////task 3////////
function violatedIndex(arr){
    let a;
    for(let i = 0 ; i<arr.length ; i++ ){
        if(arr[i] > arr[i+1]){
            a=arr[i];
        }
    }
    return arr.indexOf(a);
}



/////task 4//// solution with index showing
function largestPair(arr){
    let max=arr[0]+arr[1];
    let index='the largest index '+0+' and '+1;
    for(let i=0;i<=arr.length-2;i++){
        let a=arr[i]+arr[i+1];
        let b='the largest index '+i+' and '+(i+1);
        if(a>max){ 
            max=a;
            index=b;
        }
    } 
    return index+' = '+max;
}          

//////task 4 //// solution with new array and without index showing
    function largestPair2(arr){
        let newArr=[];
        for (let i =0; i< arr.length-1;i++){
            let a=arr[i]+arr[i+1];
            newArr.push(a);
        }
        let max=newArr[0];
        for(let i=0;i < newArr.length-1; i++) {
            if (newArr[i]>max){
                max=newArr[i];
            }
        }
        return max;
    }

///task 5/////
function integersSequence(arr){
    let min=arr[0];
    let max=arr[0];
    for(let i=0;i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i] >max){
            max=arr[i];
        } 
    }
    console.log(min,max);
    let newArr=[];
    for(let i=min;i<max;i++){
       if( arr.indexOf(i)==-1){
        newArr.push(i);
       }
    }
    return newArr.join();
}
/////task 6////////
function arraysNUmberSum(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let arrSum=0;
        for(j=0;j<arr[i].length;j++){
            arrSum+=arr[i][j];
        }
        newArr.push(arrSum);
    }
    return newArr;
}
/////task 7 ///////
function deleteEvenNumbers(arr){
    let newArr=[];
    let resultArr=[];
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2 !== 0){
            newArr.push(arr[i]);
        }
    }
    for(let i=0;i<newArr.length; i++){
        resultArr.push(newArr[i]*newArr.length);
    }
    
    return resultArr;
}





///////////work home///
function nearNumber([arr],number){
    let result=Math.abs(arr[0]-number);
    for(let i=0; i<arr.lenght; i++){
      let distance=Math.abs(arr[i]-number)
      if(result<distance){
        result=distance;
        
      }
    }
    return result;
  }