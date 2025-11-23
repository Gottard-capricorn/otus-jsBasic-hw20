import { User } from "./ex2 - final.js"

test('Конструктор User создает объект с методом AskName', () => {
    const user = new User();

    expect(user.AskName).toBeInstanceOf(Function);
})
