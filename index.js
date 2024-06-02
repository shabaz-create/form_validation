let register=document.querySelector("#register");









//on success
register.addEventListener("click",(event)=>{
    console.log("success")
    event.preventDefault();
    window.location.href="/success.html"
})