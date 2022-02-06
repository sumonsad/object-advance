var name = 'masud';
function add(num1, num2){
    var result = num1+num2;
    console.log(result);
    console.log(name);
    function double(num){
        return num *2;
    }
    var total = double(result);
    return total;
}

console.log(name);
var sum = add(12,12);
console.log(sum);