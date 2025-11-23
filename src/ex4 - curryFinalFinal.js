function sum2(x, y) {
  return x + y;
}

function sum4(a, b, c, d) {
  return a + b + c + d;
}

function curry(func) {
  let argsCount = func.length;
  function rec(...args) {
    if (argsCount !== 1) { 
      argsCount -= 1;
      return rec.bind(null, ...args); 

    }
    else {
      return func(...args);
    } 
      
  }
  return rec; 
}

console.log('Result: ', curry(sum2)(2)(3));


