// const mydiv = document.getElementById('dd');
// const but = document.querySelectorAll('button');


// const arrayData = [
//     '1',
//     '2',
//     '3',
//     '4',    
// ]

// but.forEach((button,index) => {
//     button.onclick = function(){
//         mydiv.textContent =arrayData[index];
//     };
// });


// const myButton = document.querySelector("button");

// window.onscroll =()=>{
//     if(window.scrollY >100){
//         myButton.style.display='block';
//     }else{
//         myButton.style.display  = 'none';
//     }
// };

// myButton.addEventListener('click',()=>{
//     window.scrollTo(0,0);
// })


// const myButton = document.querySelector("button");
// const myDiv = document.querySelector("div");

// let lang ='en';


// const langs = {
//     ar:{
//         buttonText:'en',
//         divText:"سلامات ي غالي"
//     },
//     en: {
//         buttonText:'عربي',
//         divText:"Hello ya ward"
//     }
// };

// const toggelLang = ()=>{
//     if(lang === 'en'){
//         myButton.textContent=langs.ar.buttonText;
//         myDiv.textContent=langs.ar.divText;
//         lang='ar';
//     }else{
//         myButton.textContent=langs.en.buttonText;
//         myDiv.textContent=langs.en.divText;
//         lang='en';
//     }
//     window.localStorage.setItem("lang",lang);
// }

// myButton.onclick = toggelLang;


const xhr= new XMLHttpRequest();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4){
        console.log(xhr);
    }
};

xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();

