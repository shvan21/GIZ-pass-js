let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
console.log("Original numbers list: ", numbers);

// Sorting integers numbers of the given array in ASC order
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        // Changed numbers[i] to numbers[j] for the code to work correctly
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            // Added ; because it was missing
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Numbers list After Asc sorting: ", numbers);

// Sorting integers numbers of the given array in Desc order
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        // Changed numbers[i] to numbers[j] for the code to work correctly
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            // Added ; because it was missing
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Numbers list After Desc sorting: ", numbers);

// Read the numbers list from data.txt file
let fs = require('fs');
let num = fs.readFileSync("F:/GIZ Computiq Website Camp/GIZ-pass-js-main/data.txt", 'utf-8');
numbers = num.split(",");

// Sorting integers numbers of the given array in ASC order
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j] > numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("Numbers list After Asc sorting: ", numbers);

// Store the sorted numbers in a new file called output.txt
fs.writeFile("F:/GIZ Computiq Website Camp/GIZ-pass-js-main/output.txt", numbers.toString(), (err) => {
    // In case of a error throw err.
    if (err) throw err;
});
