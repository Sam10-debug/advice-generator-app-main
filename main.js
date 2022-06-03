const adviceNumber= document.querySelector("span")
const message= document.querySelector("#advice")
const button=document.querySelector("div")

function getMessage(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(data=>{
        message.textContent=data.slip.advice
        adviceNumber.textContent=data.slip.id
    })
    .catch(err=>{
        console.log(err)
    })
}
button.addEventListener("click",getMessage)
