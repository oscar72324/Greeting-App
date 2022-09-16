const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


//Showing real time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

let amPm = hour >= 12 ? 'PM' : 'AM';

hour = hour % 12;
hour = hour ? hour : 12;
if(hour === 0){
    hour = 12
}

time.innerHTML = `${hour >= 10 ? hour : "0" + hour}:
    ${min >= 10 ? min : "0" + min}:
    ${sec >= 10 ? sec : "0" + sec} ${amPm}`;

setTimeout(showTime, 1000)
}


//Getting Greeting based off time
function setGreeting(){
    let today = new Date(),
    hour = today.getHours()

    if(hour < 12){
        greeting.innerHTML = "Good morning"
    }else if(hour < 18 && hour >= 12){
        greeting.innerHTML = "Good afternoon"
    }else if(hour >= 18 && hour < 20){
        greeting.innerHTML = "Good evening"
    }else{
        greeting.innerHTML = "Good night"
    }
}


//Getting background based off time
function setBack() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url(img/morning.jpg)";
        
    }else if(hour < 18 && hour >= 12){
        document.body.style.backgroundImage = "url(img/day3.jpeg)"
        document.body.style.color = "black"
    }else if(hour >= 18 && hour < 20){
        document.body.style.backgroundImage = "url(img/evening2.jpeg)"
        document.body.style.color = "#D3E1F0"
    }else{
        document.body.style.backgroundImage = "url(img/night4.jpeg)"
        document.body.style.color = "#D3E1F0"
    }
}



//Checks if 'name' is null, if so have default text, else set it equal to getItem('name')
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

//Sets item; checks if enter or blur is true, and saves innerHTML to the value of the setItem pair
function setName(e){
    if(e.type == 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('name', e.target.innerHTML)
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerHTML)
    }
}

//Checks if 'focus' is null, if so have default text, else set it equal to getItem('focus')
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus')
    }
}

//Sets item; checks if enter or blur is true, and saves innerHTML to the value of the setItem pair
function setFocus(e){
    if(e.type == 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('focus', e.target.innerHTML)
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerHTML)
    }
}

name.spellcheck = false;
focus.spellcheck = false;

function deleteStorage(){
    let today = new Date(),
        hour = today.getHours();
    if(hour === 0){
        localStorage.removeItem('focus');
    }

setTimeout(deleteStorage, 3600000)
}


name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)


deleteStorage();
getName();
getFocus();
setBack();
setGreeting()
showTime();
