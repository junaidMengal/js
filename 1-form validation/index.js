// const form = document.getElementById('form');
// const userName = document.getElementById('username');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password-2');
// const email = document.getElementById('email');


// // functions-----------
// // for Error
// function showError(inpt, msg) {
//     const formControl = inpt.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = msg;

// }
// // for success
// function showSuccess(inpt) {
//     const formControl = inpt.parentElement;
//     formControl.className = "form-control success"
// }
// // to chech required feild
// function checkRequired(inpt) {
//     inpt.forEach(function (i) {
//         if (i.value === '') {
//             showError(i, `${i.id.charAt(0).toUpperCase() + i.id.slice(1).toLowerCase()} is required`);
//         } else {
//             showSuccess(i);
//         }
//     })
// }
// //  check length of field
// function checkLength(inpt, min, max) {
//      if (inpt.value === ""){
//         showError(inpt, `${inpt.id.charAt(0).toUpperCase() + inpt.id.slice(1).toLowerCase()} is required`);
//     }
//     else if (inpt.value.length < min) {
//         showError(inpt, `${inpt.id.charAt(0).toUpperCase() + inpt.id.slice(1).toLowerCase()} should be at least ${min} characters`)
//     } else if (inpt.value.length > max) {
//         showError(inpt, `${inpt.id.charAt(0).toUpperCase() + inpt.id.slice(1).toLowerCase()} should be less than ${max} characters`)
//     }
// }
// // confirm password
// function matchPassword(inpt1, inpt2) {
//     if (inpt1.value !== inpt2.value) {
//         showError(inpt2, "Password don't match")
//     }else if (inpt2.value === ""){
//         showError(inpt2, `password is required`);
//     }
// }

// // Events ------------
// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     checkRequired([userName, email, password, password2])
//     checkLength(userName, 3, 10);
//     checkLength(password, 6, 15)
//     matchPassword(password, password2)

// })
// ------------------------------------------------------
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password-2')

// functions-----

// check input
function checkInput(inpt){
    inpt.forEach(function(data){
        if(data.value === ''){
            showError(data,`${data.id.charAt(0).toUpperCase() + data.id.slice(1).toLowerCase()} is required`)
        }else{
            showSuccess(data)
        }
    })
}
// show error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}
// check length
function checkLength(input,min,max){
    if (input.value ===''){
        showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()} is required`)
    } else if (input.value.length < min){
        showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()} should be at least ${min} characters`)
    }else if (input.value.length > max){
        showError(input,`${input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()} should be less than ${max} characters`)
    }
}
// confirm password

function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input1,`password does not match`)
    }else if (input1.value === ''){
        showError(input1,'Password is required')
    }
}

// chech email
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input,"Email is not valid")
  }
}

// events------
form.addEventListener('submit',function(e){
    e.preventDefault()
    checkInput([username,email,password,password2])
    checkLength(username,3,15)
    checkLength(password,6,12)
    checkPassword(password2,password)
    checkEmail(email);
})

// ********************************

