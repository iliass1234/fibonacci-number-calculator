let input = document.querySelector('#input')
let enter = document.querySelector('#button')
let place = document.querySelector('#place-results')

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
    if (input.value == '') {
        return
    }
    input.value = fib(parseInt(val))
    let divo = document.createElement('div')
    let divoSpan1 = document.createElement('span')
    let divoSpan2 = document.createElement('span')
    divoSpan1.className = 'span1'
    divoSpan1.innerText = val
    divoSpan2.innerText = fixResultBig(fib(parseInt(val)))
    divo.className = 'one-result'
    divo.append(divoSpan1,' : ',divoSpan2)
    place.appendChild(divo)
}
//----------------------------------------------------
let j = fib(parseInt(12))
console.log(fixResultBig(123456789101112))
enter.onclick = addResult

input.addEventListener('keydown',(event)=>{
    if (event.keyCode == 13 && input.value !== '' && parseInt(input.value)/2) {
       addResult()
    }
})
