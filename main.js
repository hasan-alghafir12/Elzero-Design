let myLink = document.querySelector(".list-1");
let myList = document.getElementById("list-11");
let myScroll = document.querySelector(".scroll-to-up")
let header = document.querySelector(".header");
let myBox1 = document.querySelectorAll(".box-1-1"); 
let boxLeft = document.getElementById("box-left")
let boxRight = document.getElementById("box-right")
let boxMiddle = document.getElementById("box-middle");
let imageTest = document.querySelectorAll(".box-3 img");
let skillsSection = document.querySelector(".skills");
let rateSkills = document.querySelectorAll(".rate-skill");


// Variable For Stats Section
let states = document.querySelectorAll(".stats p");
let statsSection = document.querySelector(".stats");
let start = false;

// Variable For Events Section








myLink.addEventListener("click", function() {
    myList.classList.toggle("tests");
})

window.onscroll = function(event) {
    // Fox Scroll Top
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        myScroll.style.cssText = "opacity: 1; bottom: 30px; position: fixed; z-index: 100"
    } else {
        myScroll.style.cssText = "opacity: 0; z-index: -500";
    }
   
    // For Gallery Section
    if(window.scrollY >= 1900) {
        for(let i = 0; i < myBox1.length; i++) {
            myBox1[i].style.cssText = "opacity: 1; transform: translatey(0)";
        }
    } else if(window.scrollY <= 1200) {
        for(let i = 0; i < myBox1.length; i++) {
            myBox1[i].style.cssText = "opacity: 0; transform: translatey(-90px)"
        }
    }

    // For Features Section
    if(window.scrollY >= 3000) {
        boxLeft.style.cssText = "opacity: 1; transform: translatex(0)";
        boxRight.style.cssText = "opacity: 1; transform: translatex(0)";
        boxMiddle.style.cssText = "opacity: 1; transform: translatey(0)";
    } else if(window.scrollY <= 2400) {
        boxLeft.style.cssText = "opacity: 0; transform: translatex(-150px)";
        boxRight.style.cssText = "opacity: 0; transform: translatex(150px)";
        boxMiddle.style.cssText = "opacity: 0; transform: translatey(100px)";
    }

    // For Team Member Section
    if(document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300) {
        for(let j = 0; j < imageTest.length; j++) {
            imageTest[j].style.cssText = "width: calc(100% - 60px)"
        }
    } else if(document.body.scrollTop < 3200 || document.documentElement.sscrollTop < 3200) {
        for(let j = 0; j < imageTest.length; j++) {
            imageTest[j].style.cssText = "width: 0"
        }
    }

    if(window.scrollY >= skillsSection.offsetTop - 200) {
        rateSkills.forEach((ele) => {
            ele.style.width = ele.dataset.progress
        })
    } 

    if(window.scrollY >= statsSection.offsetTop - 200) {
        if(!start) {
            states.forEach((ele) => startCount(ele));
        }
        start = true;
    }

    // For Stats Section  
   
    
}




function startCount (el) {
    let rate = el.dataset.rate;
    let counters = setInterval(() => {
        el.textContent++;
        if(el.textContent === rate) {
            clearInterval(counters);
        }
    }, 2000 / rate)
}




myScroll.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}


let myElement = document.querySelector(".box-opacity > h1");
let myElement2 = document.querySelector(".box-opacity > p");

window.onload = function() {
    myElement.style.cssText = "opacity: 1; transform: translatey(0)";
    myElement2.style.cssText = "opacity: 1; transform: translatey(0)";
}




let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 *24));

    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));

    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector(".days").innerHTML = days < "10" ? `0${days}` : `${days}`;
    document.querySelector(".hours").innerHTML = hours < "10" ? `0${hours}` : `${hours}`;
    document.querySelector(".minutes").innerHTML = minutes < "10" ? `0${minutes}` : `${minutes}`
    document.querySelector(".seconds").innerHTML = seconds < "10" ? `0${seconds}` : `${seconds}`;

})



