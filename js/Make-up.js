let closeBtn=document.querySelector('.closeNav');
let openBtn=document.querySelector('.openNav');
//global array
let allData=[];
let nowPlaying=document.querySelector('.nowPlaying');
let Popular=document.querySelector('.Popular');
let topRated=document.querySelector('.topRated');
let Upcoming=document.querySelector('.Upcoming');
let backTop=document.querySelector('.backTop');

//inputs
let nameInput=document.querySelector('#nameInput');
let emailInput=document.querySelector('#emailInput');
let phoneInput=document.querySelector('#phoneInput');
let ageInput=document.querySelector('#ageInput');
let passwordInput=document.querySelector('#passwordInput');
let reEnterInput=document.querySelector('#reEnterInput');
//button submit
let addBtn=document.querySelector('#addBtn');



//scroll
$(window).scroll(function()
{
    let top=$(window).scrollTop();
    console.log(top);
    if(top>100)
    {
        $(backTop).removeClass('d-none')
    }
    else{
        $(backTop).addClass('d-none')
    }

})

//open-side-nav
$('.nav-menu').click(function()
{
$('.side-nav').animate({left:0},800);
$('.small-nav').animate({left:'240px'},800);
openBtn.classList.replace('fa-bars','fa-xmark');
})


//close-side-nav
$('.fa-xmark').click(function()
{
    $('.side-nav').animate({left:'-240px'},800); 
    $('.small-nav').animate({left:0},800);
    closeBtn.classList.replace('fa-xmark','fa-bars') 
})


async function getData()
{
    let myData=await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let response= await myData.json();
    console.log(response.results);
    allData=response.results;
    displayData();
}
getData()

function displayData()
{
let cartona='';

for(let i=0;i<allData.length;i++)
{
    cartona+=`
     <div class="col-md-6 col-lg-4 col-sm-12 ">
                <div class="item position-relative overflow-hidden">
                    <div class="cardImg overflow-hidden">
                        <img class="w-100" src="photos/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt="logo">
                    </div>
                    <div class="layer position-absolute h-100 w-100  top-0 start-0">
                        <h1 class="text-center">${allData[i].title}
                            </h2>
                            <p>${allData[i].overview}</p>
                           
                            <p>Release Date: ${allData[i].release_date} </p>
                            
                            <h3>
                                <i class="fa-solid fa-star text-warning fs-6 m-0"></i>
                                <i class="fa-solid fa-star text-warning fs-6 m-0"></i>
                                <i class="fa-solid fa-star text-warning fs-6 m-0"></i>
                                <i class="fa-solid fa-star-half-stroke text-warning fs-6 m-0"></i>
                            </h3>
                            <h3 class="Rating">${allData[i].vote_average}</h3>      
                    </div>
                </div>
            </div>
    `
}
document.getElementById('demo').innerHTML=cartona;

}




function search(term)
{
    console.log(term);
    let searchData=[];
    for(let i=0;i<allData.length;i++)
    {
        if(allData[i].name.toLowerCase().includes(term))
        {
            searchData.push(allData[i])
        }
    }
    console.log(searchData);
}


//Ragex


//nameRagex
let nameRagex=/^[A-Za-z]{1,}$/;

function isNameValid()
{
    if(nameRagex.test(nameInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}
nameInput.onkeyup=function()
{
    if(isNameValid()==true)
    {
addBtn.removeAttribute("disabled")
    }
    else
    {
        addBtn.disabled="true";
    }
}


//emailRgex
let emailRagex=/^[A-Za-z0-9_\.]{1,}\@gmail\.[a-z]{3}$/;

function isEmailValid()
{
    if(emailRagex.test(emailInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}

emailInput.onkeyup=function()
{
    if(isNameValid()&&isEmailValid()==true)
    {
addBtn.removeAttribute("disabled")
    }
    else
    {
        addBtn.disabled="true";
    }
}

//phoneRagex

let phoneRagex=/^01[0-9]{9}$/

function isPhoneValid()
{
    if(phoneRagex.test(phoneInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}

phoneInput.onkeyup=function()
{
    if(isNameValid()&&isEmailValid()&&isPhoneValid()==true)
    {
addBtn.removeAttribute("disabled")
    }
    else
    {
        addBtn.disabled="true";
    }
}

//ageRagex

let ageRagex=/^[^0][0-9]{1}$/

function isAgeValid()
{
    if(ageRagex.test(ageInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}

ageInput.onkeyup=function()
{
    if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()==true)
    {
addBtn.removeAttribute("disabled")
    }
    else
    {
        addBtn.disabled="true";
    }
}

//passwordRagex
let passwordRagex=/^[A-Za-z0-9_\@\#]{10,}$/

function isPasswordValid()
{
    if(passwordRagex.test(passwordInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}

passwordInput.onkeyup=function()
{
    if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()&&isPasswordValid()==true)
    {
addBtn.removeAttribute("disabled")
    }
    else
    {
        addBtn.disabled="true";
    }
}

// reEnterpasswordRagex

let reEnterpasswordRagex=/^[A-Za-z0-9_\@\#]{10,}$/

function isreEnterPasswordValid()
{
    if(reEnterpasswordRagex.test(reEnterInput.value))
    {
        return true;
    }else
    {
        return false;
    }
}


reEnterInput.onkeyup=function()
{
    if(isNameValid()&&isEmailValid()&&isPhoneValid()&&isAgeValid()&&isPasswordValid()&&isreEnterPasswordValid()==true)
    {
addBtn.removeAttribute("disabled")
addBtn.classList.add("bg-success")
    }
    else
    {
        addBtn.disabled="true";
        addBtn.classList.remove("bg-success")
    }
}

//clearData after submit

function clearData()
{
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    ageInput.value="";
    passwordInput.value="";
    reEnterInput.value="";
}

addBtn.addEventListener("click",function()
{
    clearData();
    addBtn.classList.remove("bg-success")
})