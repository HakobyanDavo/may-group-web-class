function f(a, b) {
    if(typeof a === "number" && typeof b === "number") {
        return [a + " " + "+" + " " + b + " " + "=" + " " + (a + b), a + " " + "-" + " " + b + " " + "=" + " " + (a - b), a + " " + "*" + " " + b + " " + "=" + " " + (a * b) , a + " " + "/" + " " + b + " " + "=" + " " + (a / b)];
    } else {
        return "a and b must be number!";
    }
}