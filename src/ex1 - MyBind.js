//Вам необходимо реализовать собственную версию метода .bind для функций в JavaScript. Встроенный .bind использовать нельзя

export function myBind(context, ...args) {
  const parentFunction = this;
  return function(...newArgs) {
    return parentFunction.call(context, ...args, ...newArgs);
  }
}

function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

const person = { name: "Алиса" };

greet.myBind = myBind;

const greetAlice = greet.myBind(person, "Привет"); 

console.log(greetAlice("!", 'sf')); 

//Тесты можно взять с урока