import { ForceConstructor } from "./ex3 - ForceConstructor.js"

test('ForceConstructor создает объект с переданными параметрами', () => {
    const user = ForceConstructor('John', 'Doe');

    expect(user.John).toBe('John');
    expect(user.Doe).toBe('Doe');
})
