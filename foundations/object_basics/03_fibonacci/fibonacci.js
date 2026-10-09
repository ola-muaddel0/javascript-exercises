const fibonacci = function (number) {
    if (number > 0) {
        let result = 1
        let prev = 0;
        let count = 2;
        while (count <= number) {
            let temp = result;
            result += prev;
            prev = temp;
            count++;
        }
        return result;
    }
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
