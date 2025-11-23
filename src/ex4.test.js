import { curry } from "./ex4 - curryFinal.js"

test('Функция curry возвращает сумму двух чисел', () => {
    function sum2(x, y) {
        return x + y;
    }

    const result = curry(sum2)(2)(3);

    expect(result).toBe(5);
})
