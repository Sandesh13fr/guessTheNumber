let min =1
let max =10

document.querySelector("#submit").addEventListener("click",()=>{
    let Userchoice = document.querySelector("#choice").value;

    if (Userchoice == (Math.floor(Math.random()*(max-min))+1) ) {
        document.querySelector("#result").textContent = "Correct guess!!"
        confetti();
        
    } else {
        document.querySelector("#result").textContent = "Wrong guess!!"
    }
})


