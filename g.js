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
let i = 1
setInterval(() => {
    console.log(i,' __ ', fib(i))
    i++
}, 100);
