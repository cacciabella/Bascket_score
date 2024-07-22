let screen=document.getElementById("schermo")
let saveEl=document.getElementById("screenn")
let count=0
let count1=0


function incrementi_sinistra(){
    count+= 1
    screen.innerText= count
}

function incrementi_sinistra1(){
    count+= 2
    screen.innerText= count
}

function incrementi_sinistra2(){
    count+= 3
    screen.innerText= count
}

function incrementi_destra(){
    count1+= 1
    saveEl.innerText= count1
}

function incrementi_destra1(){
    count1+= 2
    saveEl.innerText= count1
}

function incrementi_destra2(){
    count1+= 3
    saveEl.innerText= count1
}

