// const getInputValueById=(id)=>{
// let value=document.querySelector(id).value;
// return value;
// }

// const getSelectedValues=(propertyValue)=>{
// let allItems=document.querySelectorAll(propertyValue);
// let selItems=[];
// allItems.forEach(item=>{
// if(item.checked) 
// selItems.push(item.value);
// });
// return selItems;
// }

window.addEventListener("DOMContentLoaded",(event)=>{
    const fullName = document.querySelector('#full-name');
    const textError = document.querySelector(".text-error");   
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}[ ][A-Z]{1}[a-zA-Z]{2,}$");      
    validateEntry(fullName,nameRegex,textError);

    const phoneNumber = document.querySelector('#tel');
    const phoneError = document.querySelector(".phone-error");
    let phoneRegex = RegExp("((^\\+?)(([0-9]{2,3})(\\s))?)[1-9]{1}[0-9]{9}$");
    validateEntry(phoneNumber,phoneRegex,phoneError);

    const address = document.querySelector('#address');
    const addressError = document.querySelector(".address-error");
    let addressRegex = RegExp("^([A-Za-z0-9/,-]{3,}[ ]?)+$");
    validateEntry(address,addressRegex,addressError);

    function validateEntry(entry,regex,errorField){
        entry.addEventListener('input',function(){
            if(regex.test(entry.value)||entry.value.length==0)
                errorField.textContent="";
            else 
                errorField.textContent="Invalid entry";
        });
    }
});