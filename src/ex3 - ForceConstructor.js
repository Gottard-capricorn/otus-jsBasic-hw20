function ForceConstructor(...params) {
    if (!this) {
        return new ForceConstructor(...params)
    }
    params.forEach((par) => {
        this[par] = par;
    })
}

let user = ForceConstructor('Jhon');
console.log(user);
