function fibonacci(n) {
  console.log(`Calculando el fibonacci de ${n}`)
  if(n === 0 || n === 1) {
    console.log(`n es igual a ${n}`)
    return 1
  } else {
    console.log(`requerimos calcular el fibonacci de ${n - 1} y ${n - 2}`)
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const memo = []

function memoFibonacci(n) {
  console.group(`Calculando el fibonacci de ${n}`)
  if (n === 0 || n === 1) {
    console.log(`n es igual a ${n}`)
    return 1
  } else if(!memo[n]) {
    console.log(`fibonacci de ${n} no esta guardado en memo`)
    console.log(`calculando fibonacci de ${n - 1} y ${n - 2}`)
    memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2)
  }

  console.log(`Fibonacci de ${n} es: ${memo[n]}`)
  console.groupEnd()
  return memo[n]
}








