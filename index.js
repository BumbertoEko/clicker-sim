let click = 0;
let cpc = 1;
let totalclicks = 0;

function numberofclicks() {
    totalclicks += 1;
    click += cpc;
    document.getElementById('click-text').innerHTML = "clicks =  " + click;
    if(totalclicks == 20){ 
        alert('yey u got to 20 clicks u can now upgrade')
    }
    if(totalclicks == 50){ 
        alert('yey u clicked 50 times :)')
    }
    if(totalclicks == 100){ 
        alert('yey u clicked 100 times-the end-its been a fun project.')
    }
     if(totalclicks == 100){ 
        alert('yey u clicked 100 times-the end-its been a fun project.')
        
    }
    if(totalclicks == 10000000){ 
        alert('yey u clicked 100 times-the end-its been a fun project.')
}
}

function grandma() {
    if(click >= 20){
cpc += 1;
click -= 20;
document.getElementById('click-text').innerHTML = "clicks =  " + click;
} else {
    alert('your clicks are to low lol')
}
}
function end() {
    document.write('total clicks-- ')
    document.write(totalclicks)
    document.write('--ty for playing (refresh to restart game).')
}
function rick() {
    if(click >= 1000){
    click -= 1000;
    document.getElementById('click-text').innerHTML = "clicks =  " + click;
    let url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    document.write("<a href='"+url+"'>you did it</a>");
}
}