let openFrontEnd = document.getElementById("open-FrontEnd")
let openBackend = document.getElementById("open-backend")
let openFlutter = document.getElementById("open-flutter")
let frontendModal = document.getElementById("frontend-modal")
let backendModal = document.getElementById("backend-modal")
let fluterModal = document.getElementById("flutter-modal")
let closeFrontEnd = document.getElementById("close-frontend")
let closebackEnd = document.getElementById("close-backend")
let closeFlutter = document.getElementById("close-flutter")
openFrontEnd.addEventListener("click", ()=>{
  setTimeout(()=>{
    frontendModal.style.display='flex'
    frontendModal.classList.add("open")
  },0.1)
})
frontendModal.addEventListener("click", (e)=>{
  if(e.target===frontendModal){
    frontendModal.style.display='none'
  }
})
closeFrontEnd.addEventListener('click', ()=>{
  frontendModal.style.display='none'
})
openBackend.addEventListener("click", ()=>{
  setTimeout(()=>{
    backendModal.style.display='flex'
    backendModal.classList.add("open")
  },0.5)
})
backendModal.addEventListener("click", (e)=>{
  if(e.target === backendModal){
    backendModal.style.display='none'
  }
})
closebackEnd.addEventListener("click", ()=>{
  backendModal.style.display='none'
})
// OPEN FLUTTER
openFlutter.addEventListener("click", ()=>{
  setTimeout(()=>{
    fluterModal.style.display='flex'
    fluterModal.classList.add("open")
  },0.5)
})
closeFlutter.addEventListener("click", ()=>{
  fluterModal.style.display='none'
})
fluterModal.addEventListener("click", (e)=>{
  if(e.target===fluterModal){
    fluterModal.style.display='none'
  }
})