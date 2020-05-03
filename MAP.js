//Deatails: Map -> https://www.geeksforgeeks.org/map-in-javascript/
 
//(Normal way to double array Element)
// const input=[2,3,4,5,6];
// const output=[];
// for(let i=0;i<input.length;i++)
// {
//     const a =input[i];
//     const double=a*a;
//     output.push(double);
// }
// console.log(output);




////(Normal Function)
// function Square(element)
// {
//    return element*element;
// }

////(Arraow Function:)
//const Square=element=>element*element;



// const input=[2,3,4,5,6];
// const result =input.map(function(element){
// return element*element;
// })
// console.log(result);




const input=[2,3,4,5,6];
const result =input.map(element=>element*element)

console.log(result);