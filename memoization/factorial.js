function factorial(n) {
  if(n === 1) {
    console.log(`return 1`)
    return 1
  } else {
    console.log(`return ${n} * factorial(${n} - 1)`)
    return n * factorial(n - 1)
  }
}

const memo = []

function memoFactorial(n) {
  if(n === 1) {
    console.log(`return 1`)
    return 1
  } else if(memo[n]) {
    console.log(`memoFactorial(${n+1} - 1) esta memoizado en memo[${n}] (${memo[n]})`)
  } else if(!memo[n]) {
    console.log(`memo[${n}] = ${n} * memoFactorial(${n} - 1)`)
    memo[n] = n * memoFactorial(n - 1)
  }
  return memo[n]
}

