// console.log("hello");
// console.log("o'zgaruvchi");
// var age = 20;
// var a = 20;
// var b = 10;
// var c = a + b;
// var g = "Salooooom!";
// var f = "Salom dunyo";
// console.log("c + c");
// console.log("f");
// console.log(f + " " + g);
// var age = +"10";
// var agee = +"10";
// console.log(age + agee);
// var j = 8;
// var n = 9;
// console.log(j + n);
// var i = "salom";
// var m = "dunya";
// console.log(i + " "+ m);
// var q = +"30";
// var w = +"1";
// console.log(q + w);
// var m = 80;
// var k = 30;


// var ism = prompt("Familiyangizni kiriting")//
// console.log("Salom" + " " + ism);//



// var reslut = prompt("Enter name");//
// console.log("Assalomu alaykum" + " " + reslut);//

// var reslutt = prompt("Enter name").trim();
//console.log("Result length:" + reslutt.lenth);//
// var for_age = prompt("yoshingizni kiriting");
// if(for_age < 60 && for_age > 18){
//     console.log("Sotib olishingiz mumkin!");
// }
// else{   
//     console.log("Sizga energetik sotilmaydi!");
// }
// var name = prompt("Ismingizni kiriting")
// if( namelength = 10){
//     console.log(army);
// }
// else{
//     console.log("yoq");
// }

// var army = prompt("Yoshingizni kiriting"). trim();
// if ( army > 18 && army < 28) {
//     console.log("yaxshi");
    
// }
// else {
//     console.log( "Yoshingiz to'g'ri kelmaydi!" );
// }

// var gender = prompt("Jinsingizni kiriting")
// if (gender == "erkak") {  
//     console.log("Yaxshi");
      
// }
// else{
//     console.log( "Faqat erkaklar armiyaga boradi" );
// }

// var goarmy = prompt("Oldin armiyaga borganmisiz")
// var  noarmy = "Siz armiyaga bora olmaysiz"
// if ( goarmy == "ha") {
//     console.log("Armiyaga borishingiz shart emas");
    
// }
// else{
//     console.log("Siz armiyaga ertadan borasiz");
    
// }
// if ( goarmy == "yoq") {
//     console.log("Siz armiyaga ertadan borasiz");
// }
// else{
//     console.log("Armiyaga borishingiz shart emas");
    
// }


// if(for_age < 60) {
//     console.log("Sotib olishingiz mumkin!");
// }
// else{
//     console.log("Sizga energetik sotilmaydi!");
// }


//  
// var phone = prompt("Enter your phone").trim();
// var city = prompt("Enter your liked city").trim();
// console.log(
// `Siz 
//     ${phone} 
//     shundan
//      foydalanasiz,  
//       va
//        ${city}
//         borgiz
//          keladi
//           `);

//           let broken = "Hello \uD800";

// let fixed = broken.toWellFormed();
// console.log(fixed);
// // "Hello �"
// function safeText(text) {
//   return text.isWellFormed() ? text : text.toWellFormed();
// }

// console.log(safeText("Salom 😄"));
// console.log(safeText("Salom \uD800"));



var kalkuliyator1 = +prompt("Birinchi raqamni kiriting").trim();

var kalkuliyator2 = prompt("Amalni kritin? Misol uchun: +, -, *, /").trim();

var kalkuliyator3 = +prompt("Endi 2-raqamini kiriting").trim()

var result;
if( kalkuliyator2 === "+"){
  result = kalkuliyator1 + kalkuliyator3;
} else if ( kalkuliyator2 === "-"){
  result = kalkuliyator1 - kalkuliyator3;
} else if ( kalkuliyator2 === "*"){
  result = kalkuliyator1 * kalkuliyator3;
} else if( kalkuliyator2 === "/"){
  result = kalkuliyator1 / kalkuliyator3;
} else{
  alert("Bu xato faqat sonlardi kiritish kerek")
}

if (result !== undefined) {
  alert("Javobi: " + result);
}
