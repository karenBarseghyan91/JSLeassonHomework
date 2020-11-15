////////////////task 1//
function numType(myNum){
    if(myNum % 2 == 0){
    console.log('even');
    }
    else if(myNum % 2 == 1 ){
        console.log('odd');
    }
}
    //////////////task 2 //
       function numAverage(num1,num2,num3,num4,num5){
            let result = (num1+num2+num3+num4+num5) / 5;
            console.log('the average of numbers = '+ result);
    }
    ////////// task 3//
    function lastDigit(intNum){
        if (intNum != Math.floor(intNum)){    
            console.log('it is not integer number');
        }
        else if (intNum % 10 == 0 || intNum < 10){
            console.log(intNum)
        }else {
            console.log((intNum % 10) +''+   Math.floor(intNum / 10) )
        }
    }
    //////task4//////
    function multipleNumbers(num){
        let result;
        if (num%3==0 && num%5==0 && num%7==0 ){
            result = num + " is a multiple of 3,5 and 7"
        }else if(num%3==0 && num%5==0){
            result = num + " is a multiple of 3 and 5"
        }else if(num%3==0 && num%7==0){
            result = num + " is a multiple of 3 and 7"
        }else if(num%5==0 && num%7==0){
            result = num + " is a multiple of 5 and 7"
        }else if(num%3==0 ){
            result = num + " is a multiple of 3"
        }else if(num%5==0 ){
            result = num + " is a multiple of 5"
        }else if(num%7==0 ){
            result = num + " is a multiple of 7"
        }else {
            result = num + " is not multiple of 3,5 or 7"
        }
        console.log(result);
    }
    //////task 5//////////

    function drowX(size, form = '*' ){
        let res='';
        for(let i=0; i < size; i++ ){
            let row='';
            for(let j=0; j<size; j++){
                if (j==i || j==size-i-1){       
                    row=row+form;
                }else{
                    row = row+" ";
                }                
            }
            row = row + '\n';
            res = res+ row;            
        }
        console.log(res);
    }

    //////task 6///////
    function calculator(a){
        if (a===Infinity){
            console.log('Can`t divide by 0'); 
        }else{
            console.log(+a);
        }
            }
    ////////task 6 variant 2/////
    function calc(a,b,c){
        if (b === '/'&& c===0){
            console.log('Can`t divide by 0');
              }else if(b=== '-'){
                console.log(a-c)
              }else if(b=== '+'){
                console.log(a+c);
              }else if(b=== '/'){
                  console.log(a/c);
              }else if(b=== '*'){
                  console.log(a*c);
              }
        }

        ////////////task 7///////
        function inBounds(a,b,c){
            if(a!=Math.floor(a)){
                return false;   
            }else if(a>b && a<c || a<b && a>c){
                return true;
            }else {
                return false;
            }
        }
    ///////////task 8////////
    function hasKey(a,b){
        let res;
        let myObj=a;
        for(key in myObj){
            if (key === b){
                res = true;
                continue;
            }else{res = false}
        }
        return res; 
    }
///////////task 9 ///////////
    let add={
        ly : (a)=>{return a+'ly'},
        less : (a)=>{return a+"less"}
    }