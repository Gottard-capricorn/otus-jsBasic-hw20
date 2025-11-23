import { myBind } from "./ex1 - MyBind.js"

test('Функция myBind привязывает контекст', () => {
    function greet(greeting) {
        return greeting + ", " + this.name;
    }

    const person = { name: "Bob" };
    greet.myBind = myBind;
    const greetBob = greet.myBind(person);

    expect(greetBob("Hello")).toBe("Hello, Bob");
})
