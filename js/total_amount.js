function totalAmount(num) {
    num = Math.abs(num);
    let sum = 0;
    if(num >= 100 && num <= 999) {
        while(num > 0) {
            let lastDigit = num % 10;
            sum += lastDigit;
            num = (num - lastDigit) / 10;
        }
    }
    return sum;
}