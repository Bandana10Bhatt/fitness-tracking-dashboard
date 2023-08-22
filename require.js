
let data;
let a,b,c,d;

let mydiv=document.getElementById("mydiv");


// async function ro(){
//  const response=await fetch("http://localhost:3000/images");
//   data=await response.json();
//   data.map(e => {
//     let iii = document.createElement("iframe");
//     iii.style.marginLeft="22px"
//     iii.style.width="340px"
//     iii.style.height="280px"
//     iii.src = e.url;
//     mydiv.appendChild(iii);
// });
//  }
//  ro()
 
// this function will work when the data in json file is in the form of array
async function abc(){
const response=await fetch("goal.json");
data=await response.json();
// console.log(data);
data.map(e => {
      let iii = document.createElement("iframe");
      iii.style.marginLeft="22px"
      iii.style.width="340px"
      iii.style.height="280px"
      iii.src = e.url;
      mydiv.appendChild(iii);
  });
}
abc();


function getdata(){
    mydiv.replaceChildren();
 let gd=   document.getElementById("sel").value
 console.log(gd)
 a= data.filter((e)=>{
    if(e.key==gd)
    return e;
})

console.log(a)
 a.map((item)=>{
  let iii=document.createElement("iframe")
  iii.style.marginLeft="22px"
    iii.style.width="340px"
    iii.style.height="280px"
  iii.src=item.url;
  mydiv.appendChild(iii)
 })
}
