let regex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function email(){
    var x = document.getElementById('form2Example1');
    if(regex.test(x.value)){
        error1.innerText='Email is valid';
        error1.style.color='green';
        return true;
    }
    else{
        error1.innerText='Email is invalid';
        error1.style.color='red';
        return false;
    }
}
function password(){
    var  y=document.getElementById('form2Example2');
    let regex1=/^([A-Za-z-0-9\-_@#.]{6,14})$/
    if(regex1.test(y.value)){
        error2.innerText='password is valid';
        error2.style.color='green';
        return true;
    }
    else{
        error2.innerText='Password is invalid';
        error2.style.color='red';
        return false; 
    }
}
function userName(){
    var uName=document.getElementById('form3Example1c');
    let nameRegex = /^([a-zA-Z]{4,20})$/
    if(nameRegex.test(uName.value)){
        error3.innerText.style.color='red'
        error3.innerText='Email is valid';
        error3.style.color='green';
        return true;
    }
    else{
        error3.innerText='Email is invalid';
        error3.style.color='red';
        return false;
    }
}
function pwd(){
    var  z=document.getElementById('form2Example3');
    let regex1=/^([A-Za-z-0-9\-_@#.]{6,14})$/
    if(regex1.test(z.value)){
        error2.innerText='password is valid';
        error2.style.color='green';
        return true;
    }
    else{
        error2.innerText='Password is invalid';
        error2.style.color='red';
        return false; 
    }
}
function pwd1(){
    var  m=document.getElementById('form2Example4');
    let regex1=/^([A-Za-z-0-9\-_@#.]{6,14})$/
    if(regex1.test(m.value)){
        error2.innerText='password is valid';
        error2.style.color='green';
        return true;
    }
    else{
        error2.innerText='Password is invalid';
        error2.style.color='red';
        return false; 
    }
}
function matching(){
    if(m.value==z.value){
        mismatch.innerText='Password Matches';
        missmatch.style.color='green';
        return true;
    }
    else{
        mismatch.innerText='Password Does Not Matches';
        missmatch.style.color='red';
        return false;
    }
}
function nmber(){
    var n=document.getElementById('form2Example5');
    let numbRegex=/^([0-9 -.]{3}+)([0-9] -.{3}+)([0-9] -.{4})$/
    if(numbRegex.test(n.value)){
        error5.innerText='Number is valid';
        error5.style.color='green';
        return true;
    }
    else{
        error5.innerText='Number is invalid';
        error5.style.color='red';
        return false; 
    }
    
}
function verify(){
    if(n=="" || m=="" || z=="" || uName=="" || y=="" || x==""){
        alert('Input fields cannot be empty');
    }
    else{
        return 0;
    }
}
