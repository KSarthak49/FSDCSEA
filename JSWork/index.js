// console.log("Hello World");
//-----------------------var is used to define the variable in the global scope-----------------------------------
var a=500
// const a=100
//----------------------------const is used to define the variable in the global scope and is used to fix the value of variable-------------------- 
// console.log("A ="+ a);
if(a>=52){
    //-------------------let deifne the variable in the block scope----------------
    let x=100
    // console.log("A is greater than 52");
}
// console.log(x);
hi();
 function hi(str="gdvfd"){
    // console.log(str);
 }
 hi(12);
 let d=function gg(str="kfjhrfuyfvr"){
    // console.log("shfbwrbfrh"+str);

 }
 d();

 //---------------------------------------------
 function sum(a,b,c=132){
    return a+b+c;
 }
 let total=sum(5,6,100);
//  console.log("Total = "+total);
 //-------CallBack Function---------------

function cComplier(){
    let c =200;
    return c;

}
function javaCompiler(cComplier){
    console.log(cComplier);
    return "Jsvs Complier Selected"
// }
// function selectLanguage(clbk,h){
//  console.log("Hi you have selected "+clbk(cComplier()));
//  console.log("Hi you have selected "+h(cComplier()));
}
// selectLanguage(cComplier);
// selectLanguage(javaCompiler,cComplier);

// let arr =[[1,2],[3,4],[5,6]];
// let af=[];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         af.push(arr[i][j]);
//     }
// }
console.log(af);
// flat function is used to convert the 2D array into 1D array
console.log(arr.flat());
// Dom is the Document obejct model which is used to manipulate the html elements
// dom tree root element is document and there childer is html and css
console.log(document);
const div=document.getElementsByClassName("parent")
console.log(div);
// div[0].innerText="ABES Engineering College";\
div[0].innerHTML="<h2 style=color : red >ABES Engineering College</h2>";
const h1=document.createElement("h1");
h1.innerText="Elemnt is created by Dom fucntion"
h1.style.backgroundColor="cyan";
h1.style.color="red";
div[0].appendChild(h1);
// div[1].appendChild(h1);
console.log(h1);
const img=document.createElement("img");
// Set the source of the image to 'cat.jpeg'
img.src='cat.jpeg';
img.setAttribute("height","200px");
console.log(img);
div[0].appendChild(img)



const gg=document.getElementById("btn");
console.log(gg);
const display=document.getElementById("disp");
console.log(display);
getData=()=>{
console.log("Calling getdata fucntion");
display.innerHTML="<h3 style=color:pink>Welcome to CSE Depratment</h3>";
}
gg.addEventListener("click",getData);


//-----------creating the promise ----------------

// const promise1=new Promise(
// (resolve,reject)=>{
//     let a=Math.random()*200;
//     if(a>50&&a<200){
//         resolve("value of a is resolved");
//     }
// else {
//     reject("a is rejected");
// }

// }

// );

// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been closed")})



















// const promise2=new Promise(
// (resolve,reject)=>{
// resolve({name:"Amit",branch:"CSE"});

// }




// );
// promise2.then((msg)=>{console.log(msg.name)})
// .catch(error=>{console.log(error)});


//-----------fetch API-----------------

const res=fetch('https://dummyjson.com/products');
res.then(data=>{
    console.log(data);
    data.json().then(res=>{
        let ag=[];
        ag.push(res.products[1].title);
        ag.push(res.products[3].title);
        ag.push(res.products[4].title);
        ag.push(res.products[5].title);
        ag.push(res.products[6].title);
            document.write(ag);
        // console.log(res.products[11].title+" "+res.products[3].title)
    })
})
// const response=fetch("https://dummyjson.com/products");
// response.then(data=>{
//     console.log(data);
//     data.json().then(res=>{
//         let list=[];
//         for(let i=0;i<5;i++)
//         {
//             list.push(res.products[i].id,res.products[i].title)
//         }
//         document.write(list);
//     })
// })
