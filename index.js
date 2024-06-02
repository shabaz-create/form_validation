let register=document.querySelector("#register");
let formContainer=document.querySelector(".form-container");
let emptyField=document.querySelectorAll(".empty-field");
// console.log(emptyField[0].classList)
let errorMessage=document.querySelectorAll(".error-message");
// console.log(errorMessage[0].classList)
let firstName, lastName, email,date,password;

let fFlag,lFlag,eFlag,dFlag,pFlag;
let  nameRegex=/^[A-Za-z]*$/i;
let  emailRegex= /^[A-Za-z]+[.-]?[a-zA-Z0-9]*@[a-z]+[.]com$/i;
let  passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/i;

    

// console.log((password).test("$ha1376baZ"));
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


//on success
register.addEventListener("click",(event)=>{
    event.preventDefault();
    // console.log(firstName,lastName,date,email,password);
    
    if(firstName){

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

        if(!(passwordRegex).test(password)){
            errorMessage[4].classList.remove("hide");
        }else{
            pFlag=true;
        }
    }else{
        emptyField[4].classList.remove("hide");
        pFlag=false;
    }




    if(fFlag && lFlag && dFlag && eFlag && pFlag){
    console.log("success")
    event.preventDefault();
    window.location.href="/success.html"
    }
})