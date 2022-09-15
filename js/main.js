const navbar = document.querySelector('#navbar');
const links = document.querySelectorAll('.links a');
const linksDiv = document.querySelector('.links');
const name = document.querySelector('.name h3');
window.addEventListener('scroll',()=>{
    if(this.scrollY > 200) {
        navbar.classList.add('nav');
        for(let i =0 ; i<links.length;i++){
            links[i].style.cssText ="color:white"
        }
        menu.style.cssText='color:white'
        name.style.cssText='color:white';
    }else {
        navbar.classList.remove('nav');
        for(let i =0 ; i<links.length;i++){
            links[i].style.cssText ="color:black"
        }
        name.style.cssText='color:black';
        menu.style.cssText='color:#e51050'
    }
})
// menu and close 
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const home = document.getElementById('home');
const about = document.getElementById('about');
const img = document.getElementById('img');
const contact = document.getElementById('contact');
const me = document.getElementById('me');
const myName  =document.getElementById('name');
const cont = document.querySelector('.navbar .container');
let arr = [home,about,img,contact,me,myName];
function menuClick() {
    close.classList.toggle('heddin')
    menu.classList.toggle('heddin');
    for(let a = 0 ; a < arr.length ; a++) {
        arr[a].style.cssText='display:none'
    }
    navbar.style.cssText='box-shadow:none;background-color:#e51050;height:100vh;'
    cont.style.cssText='diplay:flex;flex-direction:column;justify-content:space-around'
    linksDiv.style.cssText='display:block;display:flex;justify-content:center:aling-items:center;flex-direction:column;width:100%;'
    for(let f = 0 ; f<links.length; f++) {
        links[f].style.cssText='width:100%;margin-bottom:100px;font-size:40px;border-bottom:1px solid white;color:white'
    }
    close.style.cssText='margin-right:-300px; color:white;font-size:40px;'
}
menu.addEventListener('click',menuClick);
close.addEventListener('click',closeClick)
function closeClick() {
    linksDiv.style.cssText='diplay:none';
    for(let a = 0 ; a<arr.length; a++) {
        arr[a].style.cssText='display:block';
    }
    navbar.style.cssText='box-shadow: 3px 3px 5px -1px rgb(0 0 0 / 40%);background-color:white;height:65px;' ;
    close.classList.toggle('heddin');
    menu.classList.toggle('heddin');
    cont.style.cssText='displa:flex,justify-content:space-between;';

}
for(let i = 0 ; i< links.length;i++) {
    links[i].addEventListener('click',function() {
        linksDiv.style.cssText='diplay:none';
        for(let a = 0 ; a<arr.length; a++) {
            arr[a].style.cssText='display:block';
        }
        navbar.style.cssText='box-shadow: 3px 3px 5px -1px rgb(0 0 0 / 40%);background-color:white;height:65px;' ;
        close.classList.toggle('heddin');
        menu.classList.toggle('heddin');
        cont.style.cssText='displa:flex,justify-content:space-between;';

    })
}
