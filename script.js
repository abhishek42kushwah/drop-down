const from = document.querySelector("form")
const fileInput = from.querySelector(".file-input")
progressArea = document.querySelector(".progress-area")
uploadArea = document.querySelector(".uploaded-area")

from.addEventListener("click",()=>{
    fileInput.click()
})

fileInput.onchange= ({target}) =>{
    const file = target.files[0];
    if(file){
        fileName= file.name;
        console.log(fileName);
    }
}