module.exports = function toReadable(number) {
    let arr1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let arr2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arr3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let str = String(number);
    switch (str.length) {
        case 1:
            for (let i = 0; i < arr1.length; i++) {
                if (number == i) {
                    return arr1[i];
                }
            }
            break;
        case 2:
            if (number < 20) {
                for (let i = 0; i < arr2.length; i++) {
                    if (str[1] == i) {
                        return arr2[i];
                    }
                }
            }
            if (number >= 20) {
                let result = [];
                for (let i = 0; i < arr3.length; i++) {
                    if (str[0] == i) {
                        result.push(arr3[i]);
                        if (number % 10 == 0) {
                            return result.join("");
                        }
                    }
                }
                for (let i = 0; i < arr1.length; i++) {
                    if (str[1] == i) {
                        result.push(arr1[i]);
                    }
                }
                return result.join(" ");
            }
            break;
        case 3:
            let result = [];
            for (let i = 0; i < arr1.length; i++) {
                if (str[0] == i) {
                    result.push(arr1[i]);
                    result.push("hundred");
                    if (number % 100 == 0) {
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 < 10) {
                for (let i = 0; i < arr1.length; i++) {
                    if (str[2] == i) {
                        result.push(arr1[i]);
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 < 20) {
                for (let i = 0; i < arr2.length; i++) {
                    if (str[2] == i) {
                        result.push(arr2[i]);
                        return result.join(" ");
                    }
                }
            }
            if (number % 100 >= 20) {
                for (let i = 0; i < arr3.length; i++) {
                    if (str[1] == i) {
                        result.push(arr3[i]);
                        if (number % 10 == 0) {
                            return result.join(" ");
                        }
                    }
                }
                for (let i = 0; i < arr1.length; i++) {
                    if (str[2] == i) {
                        result.push(arr1[i]);
                    }
                }
                return result.join(" ");
            }
            break;
    }
};
