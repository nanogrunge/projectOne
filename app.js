console.log('working js');
let form = document.getElementById('loginForm');
let log =document.getElementById('logBtn');
let userName = document.getElementById('userName');
let name= userName.value;
form.addEventListener('submit', logu);
function logu(e){
    e.preventDefault();
    console.log('the user name is ' + userName.value);
};