document.addEventListener('DOMContentLoaded', function() {
    parent = document.querySelector("article");
    const h1 = document.querySelector("h1");
    console.log(h1);
    const p = document.querySelectorAll("p");
    parent.removeChild(p[3]);
    const h2 = document.querySelector("h2");
    h2.addEventListener('click', function() {
        this.style.backgroundColor = "red";
    })
    const h3 = document.querySelector("h3");
    h3.addEventListener("click", function(){
        this.style.display = 'none';
    })
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", function(){
        const everything = document.querySelectorAll("*");
        everything.forEach(el => {
            el.style.fontWeight = "bold";
        })
    })
    h2.addEventListener("mouseenter", function(){
        this.style.fontSize = Math.floor(Math.random() * 100) + "px";
    })
    p[1].addEventListener("mouseenter", function(){
        this.style.transition = "opacity 0.5s ease"
        this.style.opacity = "0"
    })
    p[1].addEventListener("mouseleave", function(){
        this.style.opacity = "1";
    })
})