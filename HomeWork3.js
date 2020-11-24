/////Task 1 ///Given an array of numbers Write a function to separate odd and even numbers in different arrays///
function seperateOddEvenNumbers(arr){
    let oddArr=[];
    let evenArr=[];
    for(let i = 0 ; i < arr.length ; i++ ){
        if ( arr[i] % 2 === 0 ){
            evenArr.push(arr[i]);
        } else if(arr[i] === 1){            
                    oddArr.push(arr[i]);
               }
    }
    return '[' + oddArr + ']' + '\n' + '[' + evenArr + ']'
}
/////Task 1 ///Given an array of numbers Write a function to separate odd and even numbers in different arrays///
///// with conditional branching ///////
function seperateOddEvenNumbers2(arr){
    let oddArr=[];
    let evenArr=[];
    for(let i in arr){
        (arr[i] %2 == 0) ? evenArr.push ( arr[i] ) : ( arr[i] % 2 === 1 ) ? oddArr.push(arr[i]) : '' ;
    }
    return '[' + oddArr + ']' + '\n' + '[' + evenArr + ']'
}
///// Task 2 // Write a function filterRange(arr, a, b) that gets an array,
///// looks for elements between a and b in it and returns an array of them.//\
function filterRange(arr,a,b){
    let resultArr=[];
    for(let i in arr ){
       (arr[i] > a && arr[i] < b || arr[i] <a && arr[i] >b) ? resultArr.push(arr[i]) : '';
   }
   return '[' + resultArr + ']'
}
///// Task 3 // Write a function which finds corresponding object by it’s id and print it. Elsewhere it
// should print error message.
// У меня не получилось вывести по другому . результат выводиться через массив, что по-моему не соответствует заданию
// И еще функция не работала, когда я использовал For(let i in arr).
function findById(arr, b){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]['id'].indexOf(b)!= -1){
            result.push(arr[i]);
        }        
    } 
    if(result[0] === undefined){
        console.log('No data');
    }else console.log(result[0]);   
}
////// task 4 // Write a function which generates object containing index and info from given array
function generate(arr){
    let result=[];
    for (let i in arr){
        result.push({ title: arr[i],idx : i})
    }
    return result;
}
////// task 5 // Write a function which removes all the words from array starting by a given letter
function removeByLetter(arr,letter){
    let result=[];
   for(let i in arr){
       (arr[i].indexOf(letter) === -1) ? result.push(arr[i]): '' ;
    }
   return result;
}
////// task 6 // Write a function that repeats the shorter string until it is equal to the length of the
// longer string.
//- Both strings will differ in length.
//- Both strings will contain at least one character.
//- Either of the two strings could be the shortest in length.
function lengthen(str1,str2){
let min='';
let max='';
let count = 2;
let result='';
if(str1.length < str2.length){
    min = str1, max= str2;
} else if(str1 > str2){
    min=str2, max=str1;
}
while(result.length <= max.length){
    result = min.repeat(count);
    count= count+ 1;
}
    return result.slice(0,max.length);
}