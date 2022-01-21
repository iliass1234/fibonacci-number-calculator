let input = document.querySelector('#input')
let enter = document.querySelector('#button')



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

enter.onclick = function(){
    if (input.value == '') {
        return
    }
    fib(parseInt(input.value))
    input.value = fib(parseInt(input.value))
    input.placeholder = fib(parseInt(input.value))

}


console.log(fib(200))
