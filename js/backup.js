// setTimeout(function(){ alert("Hello"); }, 3000);
// window.setTimeout(function(){location.reload()},3000)
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

        document.getElementById("mark1").disabled = true;
        document.getElementById("mark2").disabled = true;
        document.getElementById("mark3").disabled = true;
        document.getElementById("mark4").disabled = true;
        document.getElementById("mark5").disabled = true;
        document.getElementById("mark6").disabled = true;
        document.getElementById("mark7").disabled = true;
        document.getElementById("mark8").disabled = true;
        document.getElementById("mark9").disabled = true;

        window.alert(`Player ${defaultPlayer == 1 ? 'X' : '0'} Win!`);

    }


    // if((mark1 == mark2) && (mark1 == mark3) && (mark1 != "")){
    //     document.getElementById("print").innerHTML = `Player ${defaultPlayer == 1 ? '1' : '0'} Win!`;

    //     // document.getElementById("print").innerHTML = `Player ${mark1} Win!`;

    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert(`Player ${mark1} Win!`);
    // }else if((mark1 == mark4) && (mark1 == mark7) && (mark1 != "")){
    //     // document.getElementById("print").innerHTML = `Player ${mark1} Win!`;
    //     document.getElementById("print").innerHTML = `Player ${defaultPlayer == 1 ? '1' : '0'} Win!`;

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert(`Player ${mark1} Win!`);
    // }
    // else if((mark7 == mark8) && (mark7 == mark9) && (mark7 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark7} Win!`;

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;

    //     window.alert(`Player ${mark7} Win!`);
    // }else if((mark3 == mark6) && (mark3 == mark9) && (mark3 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark3} Win!`;

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert(`Player ${mark3} Win!`);
    // }else if((mark1 == mark5) && (mark1 == mark9) && (mark1 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark1} Win!`;

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert(`Player ${mark1} Win!`);
    // }
    // else if((mark3 == mark5) && (mark3 == mark7) && (mark3 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark3} Win!`;

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert(`Player ${mark3} Win!`);
    // }
    // else if((mark2 == mark5) && (mark2 == mark8) && (mark2 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark2} Win!`;

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert(`Player ${mark2} Win!`);
    // }
    // else if((mark4 == mark5) && (mark4 == mark6) && (mark4 != "")){
    //     document.getElementById("print").innerHTML = `Player ${mark4} Win!`;

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert(`Player ${mark4} Win!`);
    // }
    
    // 1,2,3
    // if((mark1 == "x" || mark1 == "X") && ((mark2 == "x") || (mark2 == "X")) && ((mark3 == "x") || (mark3 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!";
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player X Won!");
    //     // setTimeout(function(){ alert("Hello"); }, 3000);
    //     // ResetData();
    // }
    // 1,4,7
    // else if((mark1 == "x" || mark1 == "X") && ((mark4 == "x") || (mark4 == "X")) && ((mark7 == "x") || (mark7 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!";

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 7,8,9
    // else if((mark7 == "x" || mark7 == "X") && ((mark8 == "x") || (mark8 == "X")) && ((mark9 == "x") || (mark9 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 3,6,9
    // else if((mark3 == "x" || mark3 == "X") && ((mark6 == "x") || (mark6 == "X")) && ((mark9 == "x") || (mark9 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 1,5,9
    // else if((mark1 == "x" || mark1 == "X") && ((mark5 == "x") || (mark5 == "X")) && ((mark9 == "x") || (mark9 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 3,5,7
    // else if((mark3 == "x" || mark3 == "X") && ((mark5 == "x") || (mark5 == "X")) && ((mark7 == "x") || (mark7 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 2,5,8
    // else if((mark2 == "x" || mark2 == "X") && ((mark5 == "x") || (mark5 == "X")) && ((mark8 == "x") || (mark8 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player X Won!");
    // }
    // 4,5,6
    // else if((mark4 == "x" || mark4 == "X") && ((mark5 == "x") || (mark5 == "X")) && ((mark6 == "x") || (mark6 == "X"))){
    //     document.getElementById("print").innerHTML = "Player X Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player X Won!");
    // }


    // // For Player 0
    // // 1,2,3
    // if((mark1 == "0" || mark1 == "0") && ((mark2 == "0") || (mark2 == "0")) && ((mark3 == "0") || (mark3 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 1,4,7
    // else if((mark1 == "0" || mark1 == "0") && ((mark4 == "0") || (mark4 == "0")) && ((mark7 == "0") || (mark7 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 7,8,9
    // else if((mark7 == "0" || mark7 == "0") && ((mark8 == "0") || (mark8 == "0")) && ((mark9 == "0") || (mark9 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark6").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 3,6,9
    // else if((mark3 == "0" || mark3 == "0") && ((mark6 == "0") || (mark6 == "0")) && ((mark9 == "0") || (mark9 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark5").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 1,5,9
    // else if((mark1 == "0" || mark1 == "0") && ((mark5 == "0") || (mark5 == "0")) && ((mark9 == "0") || (mark9 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 3,5,7
    // else if((mark3 == "0" || mark3 == "0") && ((mark5 == "0") || (mark5 == "0")) && ((mark7 == "0") || (mark7 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 2,5,8
    // else if((mark2 == "0" || mark2 == "0") && ((mark5 == "0") || (mark5 == "0")) && ((mark8 == "0") || (mark8 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark4").disabled = true;
    //     document.getElementById("mark6").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player O Won!");
    // }
    // // 4,5,6
    // else if((mark4 == "0" || mark4 == "0") && ((mark5 == "0") || (mark5 == "0")) && ((mark6 == "0") || (mark6 == "0"))){
    //     document.getElementById("print").innerHTML = "Player O Won!"

    //     document.getElementById("mark1").disabled = true;
    //     document.getElementById("mark2").disabled = true;
    //     document.getElementById("mark3").disabled = true;
    //     document.getElementById("mark7").disabled = true;
    //     document.getElementById("mark8").disabled = true;
    //     document.getElementById("mark9").disabled = true;

    //     window.alert("Player O Won!");
    // }

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
        window.alert("Match is Tie..");
    }
    else{
        if(defaultPlayer == 1){
            document.getElementById("print").innerHTML = "Player X Turn";
        }
        else{
            document.getElementById("print").innerHTML = "Player 0 Turn";
        }
    }
}

function ResetData(){
    window.setTimeout(function(){location.reload()},1000)
    document.getElementById("mark1").innerHTML = "";
    document.getElementById("mark2").innerHTML = "";
    document.getElementById("mark3").innerHTML = "";
    document.getElementById("mark4").innerHTML = "";
    document.getElementById("mark5").innerHTML = "";
    document.getElementById("mark6").innerHTML = "";
    document.getElementById("mark7").innerHTML = "";
    document.getElementById("mark8").innerHTML = "";
    document.getElementById("mark9").innerHTML = "";
}

defaultPlayer = 1;
function mark1Function(event) {
    if(defaultPlayer == 1){
        event.target.value = "X";
        event.target.disabled = true;
        commonFunction();
        defaultPlayer = 0;
    }else{
        event.target.value = "0";
        event.target.disabled = true;
        commonFunction();
        defaultPlayer = 1;
    }
}


// var leftGun = document.getElementById("left-gun");
// var rightGun = document.getElementById("right-gun");
// function leftGunAppearance(){
//     leftGun.classList.remove("div-hide");
//     rightGun.classList.add("div-hide");

//     setTimeout(() => {
//         leftGun.classList.add("div-hide");
//         rightGun.classList.remove("div-hide");
//     }, 500);        
// }

// function rightGunAppearance(){
//     leftGun.classList.add("div-hide");
//     rightGun.classList.remove("div-hide");

//     setTimeout(() => {
//         leftGun.classList.remove("div-hide");
//         rightGun.classList.add("div-hide");
//     }, 500);            
// }

// Custom Cursor as Bullet
// const cursorX = document.querySelector(".customCursor");
// const cursorEvent = document.getElementById("cusCur");

// document.addEventListener('mousemove', (e) => {
//     cursorX.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// })

// document.addEventListener("click", (e) => {
//     cursorEvent.classList.remove("div-hide");
//     cursorEvent.classList.add("click-bullet-animation");
//     const bulletSound = document.getElementById("audioSound2");
//     bulletSound.pause();
//     bulletSound.play();

//     setTimeout(() => {
//         cursorEvent.classList.remove("click-bullet-animation");
//         cursorEvent.classList.add("div-hide");

//     }, 500);
// })