let itens = [["Luger","luger.png",200],["M1911","m1911.png",150]];
const header = document.getElementById('header');
const logo = document.getElementById('logo');
const logoBg = document.getElementById('logoBg');
const pageNav = document.getElementById('pageNav');

logo.addEventListener('mousedown',()=>{
    window.scrollTo(0, 0);
})

document.addEventListener('scroll', ()=>{
    if (window.scrollY<3900){
        if (window.scrollY>=100){
            header.style.opacity = "1";
            logoBg.style.opacity = "1";
            logo.style.top = String(window.scrollY+110);
        }else{
            header.style.opacity = "0";
            logoBg.style.opacity = "1";
            logo.style.top = String(window.scrollY+110);
        }
        header.style.top = String(window.scrollY);
        logoBg.style.top = String(window.scrollY+100);
        pageNav.style.top = String(window.scrollY+42);
    }  
})
