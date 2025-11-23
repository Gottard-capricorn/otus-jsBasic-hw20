import { bind } from "./ex1 - MyBind.js" //Если не в {} , то нужно передавать в аргументы или в чём проблема?

test('Проверка на соответствие полученного контекста', () => {
    // const func = function hello() {console.log('hello', this.name); return this};
    // const context = {
    //     name: "Bob",
    // };
    // const result = bind(func, context);
    // console.log(result);
    // console.log(result()); //Почему нельзя обратиться к свойству this? Где оно лежит?
    // expect(result()).toBe(context);
})

// test('Должна возвращаться функция, которую можно вызвать', () => {
//     const context = {
//         name: "Bob",
//     };
//     let func = bind(function test() {return this}, context);
//     expect(func).toBeInstanceOf(Function);
// })

// test('Встроенный метод bind не должен вызываться', () => {
//     const x = Math.random();
//     jest.spyOn(Function.prototype, "bind");
//     const spy = jest.fn(() => x);
//     expect(bind(spy, null)()).toBe(x);
//     expect(Function.prototype.bind).not.toHaveBeenCalled();
// })


//   it("returns function which calls with fixed context", () => {
//     const bob = { name: "Bob" };
//     const spy = jest.fn();

//     const bindedFunction = bind(function () {
//       spy(this);
//     }, bob);
//     expect(spy).not.toHaveBeenCalled();
//     bindedFunction();
//     expect(spy).toHaveBeenCalledWith(bob);
//   });

//   it("passes params to the function", () => {
//     const bob = { name: "Bob" };
//     const spy = jest.fn();
//     const [a, b] = [Math.random(), Math.random()];

//     const bindedFunction = bind(spy, bob);
//     expect(spy).not.toHaveBeenCalled();
//     bindedFunction(a, b);
//     expect(spy).toHaveBeenCalledWith(a, b);
//   });

//   it("returns function results", () => {
//     const x = Math.random();
//     const spy = jest.fn(() => x);
//     expect(bind(spy, null)()).toBe(x);
//   });


