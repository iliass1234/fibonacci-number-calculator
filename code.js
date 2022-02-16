let input = document.querySelector('#input')
let enter = document.querySelector('#button')
let place = document.querySelector('#place-results')
let rangeArea = document.querySelector('#range')
let downBtn = document.querySelector('#down-button')
let firstRange = document.querySelector('#first-n')
let lastRange = document.querySelector('#last-n')
let hoverTxt = document.querySelector('#hover-txt')
let popUp = document.querySelector('#pop-up-card');
let oneResult = document.querySelector('.one-result')

let map = new Map
let fibo;
function fib(n){
    if (map.has(n)) {return map.get(n)}
    if(n <= 2){return 1}
    else{
        fibo = fib(n-1)+fib(n-2)
        map.set(n,fibo)
    }
    return fibo
}


function hoverText(){
    hoverTxt.style.visibility = 'visible'
}
function addResult(val){
    let fibResult;
    fibResult = fib(parseInt(val)) 

    if (val == '') {
        return
    }
    if (!(/\d/).test(val)) {
        input.value = 'Enter valid number'
        return
    }
    if (parseInt(val) > 1476 || val.length>4) {
        input.value = 'Infinity / over 10^320'
        fibResult = 'Infinity'
        return
    }
    hoverText()
    let divo = document.createElement('div')
    let divoSpan1 = document.createElement('span')
    let divoSpan2 = document.createElement('span')
    divoSpan1.className = 'span1' ; divoSpan2.className = 'span2' ;
    divo.dataset.fib = fibResult
    divoSpan1.innerText = val
    divoSpan2.innerText = fixResultBig(fibResult)
    divo.className = 'one-result'
    divo.append(divoSpan1,' : ',divoSpan2)
    place.appendChild(divo)
    divo.onmouseover = function (){
        divo.style.cursor = 'pointer'
        input.value = ''
        input.placeholder = divo.dataset.fib
    }
    divo.onmouseleave = ()=>{input.value = ''; input.placeholder = 'Enter a number'}
    divo.onclick = function (){
        
        popUp.style.display = 'block'
    }
    document.body.onmousedown = function () { popUp.style.display = 'none'}
}
function displayBtn(){
    let diff = (lastRange.value - firstRange.value)
    if ( diff <= 100) {
        for (let i = parseInt(firstRange.value); i <= parseInt(firstRange.value)+diff; i++) {
            addResult(i);
        }
    }
}

lastRange.addEventListener('keydown',(e)=>{
    if(e.keyCode == 13){
        let diff = (lastRange.value - firstRange.value)
        if ( diff <= 100) {
            for (let i = parseInt(firstRange.value); i <= parseInt(firstRange.value)+diff; i++) {
                addResult(i)
                
            }
        }
    }
})

let hideRange = ()=>{
    if (rangeArea.style.display === 'none') {
        downBtn.style.backgroundColor= 'gray'
        rangeArea.style.display = 'inline-block'
        return
    }
    downBtn.style.backgroundColor= 'green'
    rangeArea.style.display = 'none'
}
function fixResultBig(res){
    let str = res.toString()
    if (str.length>5) {
        str = str.split('')
        str = str.slice(0,5)
        str.push('..')
        str = str.join('')
    } 
    return str
}
//----------------------------------------------------
enter.addEventListener('click',()=>{
    addResult(input.value)
})

input.addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
       addResult(input.value)
    }
})

/* --------------------------------test--------------------------------------- */




























