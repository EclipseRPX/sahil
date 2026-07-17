// =============================
// Birthday Password Gate
// Secret Code: 2026
// =============================

const PASSWORD = "ziya";

const input = document.getElementById("password");
const button = document.getElementById("unlockBtn");
const error = document.getElementById("error");
const loader = document.getElementById("loader");
const card = document.querySelector(".glass-card");

// Unlock Function
function unlockWebsite(){

    const value = input.value.trim();

    // Correct Password
    if(value === PASSWORD){

        error.style.display = "none";

        // Mobile vibration
        if(navigator.vibrate){
            navigator.vibrate([150,100,150]);
        }

        // Button Animation
        button.innerHTML = "🎉 Access Granted 🎉";
        button.disabled = true;

        // Show Loader
        setTimeout(()=>{

            loader.classList.add("show");

        },500);

        // Redirect
        setTimeout(()=>{

            window.location.href="https://eclipserpx.github.io/Birthday1.2/";

        },2500);

    }

    // Wrong Password
    else{

        error.style.display="block";

        card.classList.add("shake");

        input.value="";

        input.focus();

        if(navigator.vibrate){
            navigator.vibrate(300);
        }

        setTimeout(()=>{

            card.classList.remove("shake");

        },500);

    }

}

// Button Click
button.addEventListener("click",unlockWebsite);

// Press Enter
input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

// Auto Focus
window.onload=()=>{

    input.focus();

};


// =============================
// Floating Stars
// =============================

for(let i=0;i<35;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(3+Math.random()*5)+"s";

    document.body.appendChild(star);

}


// =============================
// Confetti Effect
// =============================

function confetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        piece.style.animationDuration=
        (2+Math.random()*2)+"s";

        document.body.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4000);

    }

}

// Run Confetti on Success
button.addEventListener("click",()=>{

    if(input.value.trim()===PASSWORD){

        confetti();

    }

});