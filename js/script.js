const cusGun = document.querySelector(".guns-left");
const mainDiv = document.getElementById("newGame");
var defalutPlayer;

let lastPosition = 0;
let currentPosition = 0;

document.addEventListener("mousemove", (e) => {
    currentPosition = e.clientX + e.clientY; 
    const totalWidth = document.body.offsetWidth;
    const currPosition = e.screenX;
    const rotateAngle = Math.floor((currPosition * 190) / totalWidth);
    cusGun.setAttribute("style", "left: "+ (e.pageX - 200) + "px; transform: rotateY(" + (rotateAngle) + "deg);");
})

window.onload = () =>{
    setInterval(()=> {
        if(currentPosition !== lastPosition){
            mainDiv.classList.add("back-ani");
            // cusGun.classList.add("gunShakeAni");
            lastPosition = currentPosition;
            // console.log("last");
        }else{
            mainDiv.classList.remove("back-ani");
            // cusGun.classList.remove("gunShakeAni");
            // console.log("stop");
        }
    }, 200);
}


// document.addEventListener("click", (e) => {  
//     bull1Animation();
// })

function commonFunction(){

    var mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9;
    mark1 = document.getElementById("mark1").value;
    mark2 = document.getElementById("mark2").value;
    mark3 = document.getElementById("mark3").value;
    mark4 = document.getElementById("mark4").value;
    mark5 = document.getElementById("mark5").value;
    mark6 = document.getElementById("mark6").value;
    mark7 = document.getElementById("mark7").value;
    mark8 = document.getElementById("mark8").value;
    mark9 = document.getElementById("mark9").value;


    if(((mark1 == mark2) && (mark1 == mark3) && (mark1 != "")) || 
    ((mark1 == mark4) && (mark1 == mark7) && (mark1 != "")) || 
    ((mark7 == mark8) && (mark7 == mark9) && (mark7 != "")) || 
    ((mark3 == mark6) && (mark3 == mark9) && (mark3 != "")) || 
    ((mark1 == mark5) && (mark1 == mark9) && (mark1 != "")) ||
    ((mark3 == mark5) && (mark3 == mark7) && (mark3 != "")) ||
    ((mark2 == mark5) && (mark2 == mark8) && (mark2 != "")) ||
    ((mark4 == mark5) && (mark4 == mark6) && (mark4 != ""))){

        document.getElementById("print").innerHTML = `Player ${defaultPlayer == 1 ? 'X' : '0'} Win!`;
        document.getElementById("block-disable").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("popup-block").classList.remove("div-none");
            document.getElementById("newGame").classList.add("div-none");
            document.getElementById("newMainGameDiv").classList.add("div-none");
            document.getElementById("resulttxt").innerHTML = "Congratulations!";
            document.getElementById("wintxt").innerHTML = `Player ${defaultPlayer != 1 ? 'X' : '0'} `
            // window.alert(`Player ${defaultPlayer != 1 ? 'X' : '0'} Win!`);
        }, 800);
    }
    else if(((mark1 == "X") || (mark1 =="0")) &&
    ((mark2 == "X") || (mark2 =="0")) &&
    ((mark3 == "X") || (mark3 =="0")) &&
    ((mark4 == "X") || (mark4 =="0")) &&
    ((mark5 == "X") || (mark5 =="0")) &&
    ((mark6 == "X") || (mark6 =="0")) &&
    ((mark7 == "X") || (mark7 =="0")) &&
    ((mark8 == "X") || (mark8 =="0")) &&
    ((mark9 == "X") || (mark9 =="0"))){
        document.getElementById("print").innerHTML = "Match is Tie..";
        setTimeout(() => {
            document.getElementById("popup-block").classList.remove("div-none");
            document.getElementById("newGame").classList.add("div-none");
            document.getElementById("newMainGameDiv").classList.add("div-none");
            document.getElementById("resulttxt").innerHTML = "Sorry..!";
            document.getElementById("wintxt").innerHTML = "Match is Tie..";
        }, 800);
    }
}

function ResetData(){
    const x = document.querySelectorAll("input[type=text]");
    for(let i=0; i<x.length; i++){
        x[i].classList.remove("broken-X-div", "broken-O-div");
        x[i].value = null;
        x[i].disabled = false;
    }
    
    const y = document.querySelectorAll("input[type=radio]");
    y.forEach(element => {
        element.disabled = true;
    }); 
    
    const z  = document.querySelectorAll(".players");
    z.forEach(element => {
        element.style.visibility = "visible";
    });

    document.getElementById("print").innerHTML= "Please Choose player..";
}

function playasPlayerX(){
    document.getElementById("block-disable").style.pointerEvents = "auto";
    defaultPlayer = 1;
    var x  = document.querySelectorAll(".players");
    setTimeout(() => {
        x.forEach(element => {
            element.style.visibility = "hidden";
        });
    }, 500);
    document.getElementById("print").innerHTML= "Player X Turn";
    return defaultPlayer; 
}

function playasPlayerO(){
    document.getElementById("block-disable").style.pointerEvents = "auto";
    defaultPlayer = 0;
    var x  = document.querySelectorAll(".players");
    setTimeout(() => {
        x.forEach(element => {
            element.style.visibility = "hidden";
        });
    }, 500);
    document.getElementById("print").innerHTML= "Player O Turn";
    return defaultPlayer;
}

function mark1Function(event) {
    if(defaultPlayer === 1){
        // leftGunAppearance();
        event.target.classList.add("broken-X-div");
        event.target.value = "X";
        event.target.disabled = true;
        document.getElementById("0turn").checked = true;
        document.getElementById("print").innerHTML = "Player 0 Turn";
        bull1Animation();
        commonFunction();
        defaultPlayer = 0;
    }else{
        // rightGunAppearance();
        event.target.classList.add("broken-O-div");
        event.target.value = "0";
        event.target.disabled = true;
        document.getElementById("Xturn").checked = true;
        document.getElementById("print").innerHTML = "Player X Turn";
        bull1Animation();
        // bull2Animation();
        commonFunction();
        defaultPlayer = 1;
    }
}

function bull1Animation(){
    var x = document.getElementById("bulletAni1");

    x.classList.remove("div-hide");
    x.classList.add("bullet1-animation");
    const bulletSound = document.getElementById("audioSound1");
    bulletSound.pause();
    bulletSound.play();
    setTimeout(() => {
        x.classList.remove("bullet1-animation");
    }, 800);
}

function bull2Animation(){
    var y = document.getElementById("bulletAni2");

    y.classList.remove("div-hide");
    y.classList.add("bullet2-animation");
    const bulletSound = document.getElementById("audioSound2");
    bulletSound.pause();
    bulletSound.play();
    setTimeout(() => {
        y.classList.remove("bullet2-animation");
    }, 800);
}

function startAgain(){
    document.getElementById("popup-block").classList.add("div-none");
    document.getElementById("newGame").classList.remove("div-none");
    document.getElementById("newMainGameDiv").classList.remove("div-none");
    
    ResetData();
}