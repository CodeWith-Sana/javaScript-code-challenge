// console.log("Hello World!");
// let a = "sana";
// a= 12;
// console.log(a);
// console.log(typeof(a))  
// const object={
//     "one":123,
//     "two":"sana"
// }
// console.log(object["one"]);
// object["three"]= 1234; //to add new key value to object;
// // alos object.four =  value4
// object.four = "Sana"
// console.log(object);
// const dictionary ={
//     "mango": "fruits" ,
//     "carrot" : "vegetable" ,
//     "fish" :"meat",
//     "apple" : "fruits"
// }


//  var age = 20;
// if(age > 10 && age <=20)
//     console.log("your age is in between 10 and 20");
// // var name = prompt("What is your name?");
// // var age = prompt("How old are you?");

// if (age > 18) {
//     alert("Hello " + name + ", you are an adult.");
// } else {
//     alert("Hello " + name + ", you are a minor.");
// }


const num = [9 ,14 ,3, 4,10 ,6,]
// let r =  num.shift()  //retruns frist array ele and remove it from the array
// console.log(r)
// let x =  num.unshift(23)
// console.log(x , num)
// console.log(typeof num)
// delete num[0]            //delete will remove the value at indx but leaft ahole at that place undefined.
// console.log(num.length , num)
// let r =  num.sort()
// console.log(r)
// console.log(num)
// console.log(num.sort((a,b)=>(a-b)));
let deleted =  num.splice(3 , 2, 100 , 200)
console.log(deleted , num)
let newarr =  num.slice(2,5)
console.log(newarr , num)
