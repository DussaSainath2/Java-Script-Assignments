var numbers = [5, 12, 3, 8, 1, 9, 15, 6];
var largest = numbers[0];
var smallest = numbers[0]; 
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
document.writeln("The largest number is: " + largest);
document.writeln("The smallest number is: " + smallest);