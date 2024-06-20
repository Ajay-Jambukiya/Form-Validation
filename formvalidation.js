nameerror=true // this is global vaiable (its called as flag)
                // initialy true it mean k submit button par click karo tyare username box empty hase to error show thase 
emailerror=true 
mobileerror=true
doberror=true
generror=true
hobbyerror=true
cityerror=true
passworderror=true
confirmpassworderror=true

function checkname(){
    let uname=document.getElementById("username").value;
    let msg=document.getElementById("msg");
    let pattern=/^[A-Z]+[A-Za-z]+$/
    // console.log(uname)
    if(uname==""){
        msg.innerHTML="username is requried"
        nameerror=true  // true it mean k username empty hoy to error show karo
    }else if(!pattern.test(uname)){
        msg.innerHTML="alphabet only"
        nameerror=true
    }else{
        msg.innerHTML=" "
        nameerror=false // false it mean k username filled hoy to error show thase nai
    }
}

function checkmail(){
    let emel=document.getElementById('email').value;
    let msg_one=document.getElementById('msg1');
    let pattern=/^([a-z0-9_\!\#\$\%\^\&\*\?\.]+)([0-9]+)\@([A-Za-z0-9]+)\.([A-Za-z]{2,3})$/
    // console.log(emel)
    if(emel==""){
        msg_one.innerHTML="email id is requried"
        emailerror=true
    }else if(!pattern.test(emel)){
        msg_one.innerHTML="follow this pattern"
        emailerror=true
    }else{
        msg_one.innerHTML=' '
        emailerror=false
    }
}

function checkmobile(){
    let mo_number=document.getElementById('mnumber').value;
    let msg_two=document.getElementById('msg2');
    let pattern=/^([+]?[9]?[1]?)([9,8,7,6]+)([0-9]{9})$/    // /^[\d{10,10}]$/  // input ma maxlength set kareli hovathi vadhare number lakhi sakase nai
    // console.log(mo_number)
    if(mo_number==""){
        msg_two.innerHTML="mobile number is requried"
        mobileerror=true
    }else if(!pattern.test(mo_number)){
        msg_two.innerHTML="invalid mobile number"
        mobileerror=true
    }else{
        msg_two.innerHTML=' '
        mobileerror=false
    }
}

function checkdob(){
    let dbday=document.getElementById('dob').value;
    let msg_three=document.getElementById('msg3');
    let adate=new Date(dbday);
    let cdate=new Date();
    if(cdate.getFullYear()-adate.getFullYear()<18 || dbday=="")
        msg_three.innerHTML="not eligible"
    else if(cdate.getFullYear()-adate.getFullYear()==18){
        if(cdate.getMonth()<adate.getMonth())
            msg_three.innerHTML="not eligible"
        else if(cdate.getMonth()==adate.getMonth()){
            if(cdate.getDate()<=adate.getDate())
                msg_three.innerHTML="not eligible"
            else
            msg_three.innerHTML="eligible"
        }else
        msg_three.innerHTML="eligible"
    }
    else
    msg_three.innerHTML="eligible"
}

function checkgender(){
    let gen=document.getElementsByName('gender');
    // console.log(gen[0].checked)
    let msg_four=document.getElementById('msg4');
    let has_check=false,data='' // agar gender check nai kiya hai to false // data it mean gender value hold karva mate
    // console.log(gen)
    for(let i=0; i<gen.length;i++){
        if(gen[i].checked==true){
            has_check=true  // agar gender check kiya hai to true
            data=(gen[i].value)
        }
    }
    if(has_check==false){
        msg_four.innerHTML="pls select gender"
        generror=true
    }else{
        msg_four.innerHTML=""
        generror=false
    }
}

function checkhobbies(){
    let hobby=document.getElementsByName('hobbies');
    // console.log(gen[0].checked)
    let msg_five=document.getElementById('msg5');
    let has_check=false,data1='' // agar gender check nai kiya hai to false // data it mean gender value hold karva mate
    for(let i=0; i<hobby.length;i++){
        if(hobby[i].checked==true){
            has_check=true  // agar gender check kiya hai to true
            data1+=`${hobby[i].id} `
        }
    }
    if(has_check==false){
        msg_five.innerHTML="pls select hobby"
        hobbyerror=true
    }else{
        msg_five.innerHTML=data1
        hobbyerror=false
    }
}

function checkcities(){
    let citi=document.getElementById('city').value;
    let msg_six=document.getElementById('msg6');
    if(citi=="select"){
        msg_six.innerHTML="select city"
        cityerror=true
        document.getElementById('othercity').style.display='none'
    }else if(citi=='other'){
        let ocity=document.getElementById('othercity')
        ocity.style.display='inline'
        ocity.focus()
        ocity.onblur=()=>{
            if(ocity.value==''){
                msg_six.innerHTML="pls enter city name";
                cityerror=true
            }else{
                msg_six.innerHTML="";
                cityerror=false
            }
        }
    }else{
        document.getElementById('othercity').style.display='none';
        msg_six.innerHTML=" ";
        cityerror=false

    }
}

function checkpassword(){
    let pwd=document.getElementById("password").value;
    let msg_seven=document.getElementById("msg7");
    let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\!\$\#\%\^\&\*\+\=]).{8,10}$/    // input ma minlength-maxlength set kareli hovathi vadhare k ochha number lakhi sakase nai
    if(pwd==''){
        msg_seven.innerHTML="password is requried"
        passworderror=true  // true it mean k username empty hoy to error show karo
    }else if(!pattern.test(pwd)){
        msg_seven.innerHTML="1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol, Min 8 and Max 12 Charecter"
        passworderror=true
    }else{
        msg_seven.innerHTML=''
        passworderror=false // false it mean k username filled hoy to error show thase nai
    }
}

function checkconfirmpassword(){
    let pwd=document.getElementById("password").value;
    let cpwd=document.getElementById('cpassword').value;
    let msg_eight=document.getElementById('msg8');
    if(cpwd==""){
        msg_eight.innerHTML="password is requried";
        confirmpassworderror=true
    }else if(pwd!=cpwd){
        msg_eight.innerHTML="password doesn't match";
        confirmpassworderror=true
    }else{
        msg_eight.innerHTML="";
        confirmpassworderror=false
    }
}

document.getElementById('showhide').onclick=()=>{
    let password=document.getElementById('password')
    // console.log(pwd1)
    if(password.type=='password'){
        password.type='text'
        document.getElementById('showhide').innerHTML=`<i class="bi bi-eye"></i>`
    }else{
        password.type='password'
        document.getElementById('showhide').innerHTML=`<i class="bi bi-eye-slash"></i>`
    }
}

document.getElementById('username').onblur=(event)=>{
    // console.log(event)
    console.log(event.target.value)
    checkname()
}
document.getElementById('email').onblur=checkmail
document.getElementById('mnumber').onblur=checkmobile
document.getElementById('dob').onblur=checkdob

document.getElementById('male').onchange=checkgender
document.getElementById('male').onblur=checkgender
document.getElementById('female').onchange=checkgender
document.getElementById('female').onblur=checkgender
document.getElementById('other').onchange=checkgender
document.getElementById('other').onblur=checkgender

document.getElementById('traveling').onblur=checkhobbies
document.getElementById('traveling').onchange=checkhobbies
document.getElementById('badminton').onblur=checkhobbies
document.getElementById('badminton').onchange=checkhobbies
document.getElementById('cricket').onblur=checkhobbies
document.getElementById('cricket').onchange=checkhobbies
// document.getElementById('banking').onblur=checkhobbies
// document.getElementById('banking').onchange=checkhobbies

document.getElementById('city').onchange=checkcities
document.getElementById('password').onblur=checkpassword
document.getElementById('cpassword').onblur=checkconfirmpassword

document.getElementById('submit').onclick=(e)=>{
    checkname(); checkmail(); checkmobile(); checkpassword(); checkconfirmpassword(); checkdob(); checkgender(); checkhobbies(); checkcities();
    if(nameerror==true || emailerror==true || mobileerror==true || doberror==true || generror==true || hobbyerror==true || cityerror==true || passworderror==true || confirmpassworderror==true){    // || it mean akha form mathi koi ek error pan hase to aa preventdefault 
        // console.log(e.target.value,e.target.name)
        // console.log(e)
        e.preventDefault()  // it mean i don't want send details through submit button without fill the form 
    }else{
        alert("Data Submitted")
    }
}