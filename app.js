console.log('working js');
const form = document.getElementById('loginForm');
let errorElement =document.getElementById('error');
const userName = document.getElementById('userName');
const password =document.getElementById('password');

form.addEventListener('submit', logu);
function logu(e){
   let messages =[];
    if(password.value.length <= 6){
        messages.push('password must be longer than 6 characteres');
    }
   if(messages.length > 0){
    e.preventDefault();
    userName.value="";
    errorElement.style.display = 'block';
    errorElement.innerHTML =messages.join(',');
    }
};