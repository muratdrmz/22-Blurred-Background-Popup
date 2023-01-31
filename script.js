const containerEl=document.querySelector(".container")
const btnEl=document.querySelector(".btn")
const popupcontainerEl=document.querySelector(".popup-container")
const closeIconEl=document.querySelector(".close-icon")


btnEl.addEventListener('click',toggle)
closeIconEl.addEventListener("click", toggle);

function toggle(){
 containerEl.classList.toggle('active');
 popupcontainerEl.classList.toggle('active')
}

