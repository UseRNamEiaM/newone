

// 💖 Floating White & Red Hearts
const heartsContainer = document.getElementById("hearts");

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const colors = ["❤️","🤍"];
    heart.innerHTML = colors[Math.floor(Math.random()*colors.length)];

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (Math.random()*20 + 15) + "px";
    heart.style.animationDuration = (Math.random()*5 + 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,500);


// 💖 Love Counter
const loveDate = new Date("2020-02-14");
function updateCountdown(){
    const now = new Date();
    let diff = now - loveDate;
    let days = Math.floor(diff/(1000*60*60*24));
    let years = Math.floor(days/365);
    let months = Math.floor((days%365)/30);
    let remainingDays = days%30;
    document.getElementById("countdown").innerHTML =
    `Together for 💖 ${years} Years ${months} Months ${remainingDays} Days`;
}
setInterval(updateCountdown,1000);
updateCountdown();


// ✨ Typing Love Letter
const text="From the moment you came into my life, everything became special . I choose you today, tomorrow, and forever babai ❤️";
let i=0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typeText").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,30);
    }
}
typeWriter();


// 😏 Smooth NO escape
const noBtn=document.getElementById("noBtn");
function moveNo(){
    const x=Math.random()*(window.innerWidth-120);
    const y=Math.random()*(window.innerHeight-60);
    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
}
noBtn.addEventListener("mouseover",moveNo);
noBtn.addEventListener("touchstart",moveNo);


// 💎 Cinematic YES transition
function sayYes(){
    document.body.style.background="radial-gradient(circle,#ff0066,#400020)";
    document.getElementById("mainPage").style.opacity="0";

    setTimeout(()=>{
        document.getElementById("mainPage").style.display="none";
        const lovePage=document.getElementById("lovePage");
        lovePage.style.display="flex";
        lovePage.style.opacity="1";
        createSparkles();
        playMusic();
    },700);
}


// ✨ Golden Sparkles
function createSparkles(){
    let count=0;
    const interval=setInterval(()=>{
        const s=document.createElement("div");
        s.className="sparkle";
        s.style.left=Math.random()*window.innerWidth+"px";
        s.style.bottom="0px";
        document.body.appendChild(s);
        setTimeout(()=>s.remove(),3000);
        count++;
        if(count>40) clearInterval(interval);
    },150);
}


// 📸 Slideshow
const images=["photo1.jpeg"];
let index=0;
const slideImage=document.getElementById("slideImage");

setInterval(()=>{
    slideImage.style.opacity=0;
    setTimeout(()=>{
        index=(index+1)%images.length;
        slideImage.src=images[index];
        slideImage.style.opacity=1;
    },500);
},4000);


// 🎵 Music
function playMusic(){
    const music=document.getElementById("bgMusic");
    music.volume=0.5;
    music.play();
}


