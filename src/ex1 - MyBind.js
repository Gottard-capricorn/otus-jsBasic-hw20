export function bind(fn, context) {
    return function() {
        return fn.call(context);
    }
}