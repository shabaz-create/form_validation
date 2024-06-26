let register=document.querySelector("#register");
let formContainer=document.querySelector(".form-container");
let emptyField=document.querySelectorAll(".empty-field");
// console.log(emptyField[0].classList)
let errorMessage=document.querySelectorAll(".error-message");
let passwordField=document.getElementById("password");
let checkbox=document.getElementById("password-visibility");
// console.log(errorMessage[0].classList)
let firstName, lastName, email,date,password;

let fFlag,lFlag,eFlag,dFlag,pFlag;
let  nameRegex=/^[A-Za-z]*$/i;
let  emailRegex= /^[A-Za-z]+[.-]?[a-zA-Z0-9]*@[a-z]+[.]com$/i;
let  passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/i;

    

// extracting input data
formContainer.addEventListener("input",(event)=>{
    event.preventDefault();
    let key=event.target.dataset.key;
    let value=event.target.value;
    // console.log(value);
    switch (key){
        case "fName":
            firstName=value;
        break;
        case "lName":
            lastName=value;
        break;
        case "date":
            date=value;
        break;
        case "email":
            email=value;
        break;
        case "password":
            password=value;
        break;
        default:
            firstName=lastName=date=email=password="";
        break;
    }
})


//Logic to check if every field is filled appropriately
register.addEventListener("click",(event)=>{
    event.preventDefault();
    // console.log(firstName,lastName,date,email,password);
    
    if(firstName){
        emptyField[0].classList.add("hide");
        if(!(nameRegex).test(firstName)){
            errorMessage[0].classList.remove("hide");
        }else{
            fFlag=true;
        }
    }else{
        emptyField[0].classList.remove("hide");
        fFlag=false;
    }


    if(lastName){
        emptyField[1].classList.add("hide");
        if(!(nameRegex).test(lastName)){
            errorMessage[1].classList.remove("hide");
        }else{
            lFlag=true;
        }

    }else{
        emptyField[1].classList.remove("hide");
        lFlag=false;
    }


    if(date){
        dFlag=true;
        
    }else{
        emptyField[2].classList.remove("hide");
        dFlag=false;
    }


    if(email){
        emptyField[3].classList.add("hide");
        if(!(emailRegex).test(email)){
            errorMessage[3].classList.remove("hide");
        }else{
            eFlag=true;
        }
    }else{
        emptyField[3].classList.remove("hide");
        eFlag=false;
    }


    if(password){
        emptyField[4].classList.add("hide");
        if(!(passwordRegex).test(password)){
            errorMessage[4].classList.remove("hide");
        }else{
            pFlag=true;
        }
    }else{
        emptyField[4].classList.remove("hide");
        pFlag=false;
    }



    //if every field is filled appropriately continue to success page
    if(fFlag && lFlag && dFlag && eFlag && pFlag){
    console.log("success")
    event.preventDefault();
    window.location.href="/success.html"
    }
})


//adding toggle functionality for password visibility
checkbox.addEventListener("click",(event)=>{
    event.preventDefault();
    if(passwordField.type=="password"){
        passwordField.setAttribute("type","text");
    }else{
        passwordField.setAttribute("type","password");
        
    }
})