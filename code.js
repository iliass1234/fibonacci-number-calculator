let input = document.querySelector('#input')
let enter = document.querySelector('#button')
let place = document.querySelector('#place-results')
let rangeArea = document.querySelector('#range')
let downBtn = document.querySelector('#down-button')
let map = new Map
let fibo;

let hideRange = ()=>{
    if (rangeArea.style.display === 'none') {
        downBtn.style.backgroundColor= 'gray'
        rangeArea.style.display = 'inline-block'
        return
    }
    downBtn.style.backgroundColor= 'green'
    rangeArea.style.display = 'none'
}

function fib(n){
    if (map.has(n)) {return map.get(n)}
    if(n <= 2){return 1}
    else{
        fibo = fib(n-1)+fib(n-2)
        map.set(n,fibo)
    }
    return fibo
}

function fixResultBig(res){
    let str = res.toString()
    if (str.length>10) {
        str = str.split('')
        str = str.slice(0,10)
        str.push('...')
        str = str.join('')
    } 
    return str
}

function addResult(){
    let val = input.value
    let fibResult
    if (input.value == '') {
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

    fibResult = fib(parseInt(val)) 


    input.value = fibResult
    let divo = document.createElement('div')
    let divoSpan1 = document.createElement('span')
    let divoSpan2 = document.createElement('span')
    divoSpan1.className = 'span1'
    divoSpan2.className = 'span2'
    divo.dataset.hi = fibResult
    divoSpan1.innerText = val
    divoSpan2.innerText = fixResultBig(fibResult)
    divo.className = 'one-result'
    divo.append(divoSpan1,' : ',divoSpan2)
    place.appendChild(divo)
    divo.onmouseover = function (){
        input.value = ''
        input.placeholder = divo.dataset.hi
    }
    divo.onmouseleave = ()=>{input.value = ''; input.placeholder = 'Enter a number'}
}

//----------------------------------------------------
enter.onclick = addResult

input.addEventListener('keydown',(event)=>{
    if (event.keyCode == 13) {
       addResult()
    }
})
