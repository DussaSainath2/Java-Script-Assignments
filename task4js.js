let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    document.writeln(`${number} is an Armstrong number`);
}
else {
    document.writeln(`${number} is not an Armstrong number.`);
}