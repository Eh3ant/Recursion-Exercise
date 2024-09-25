function product(nums) {
    // Base case
    if (nums.length === 0) {
        return 1;
    }
    // Recursive case:
    return nums[0] * product(nums.slice(1))
}


function longest(words) {
    // Base case:
    if (words.length === 0) {
        return 0;
    }
    // Recursive case:
    const restLongest = longest(words.slice(1));

    return words[0].length >= restLongest.length ? words[0] : restLongest;
}



function longest(words) {
    // Base case:
    if (words.length === 0) {
        return 0;
    }
    //Recursive case:
    const restLongest = longest(words.slice(1));

    return Math.max(words[0].length, restLongest)
}




function everyOther(str) {
    // Base case:
    if (str.length <= 1) {
        return str;
    }
    // Recursive case:
    return str[0] + everyOther(str.slice(2))
}

function isPalindrome(str) {
    // Base case 1:
    if (str.length <= 1) {
        return true
    }
    // Base case 2 :
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    // Recursive case :
    return isPalindrome(str.slice(1, -1))
}



function findIndex(arr, str, index = 0) {
    //Base case 1:
    if (index >= arr.length) {
        return -1
    }
    // Base case 2:
    if (arr[index] === str) {
        return index
    }

    //Recursive case :
    return findIndex(arr, str, index + 1)
}

function revString(str) {
    // Base case:
    if (str.length === 0) {
        return ""
    }
    // Recursive case :
    return str[str.length - 1] + revString(str.slice(0, -1))
}


function gatherStrings(obj) {
    let result = [];

    for (let key in obj) {

        if (typeof obj[key] === "string") {
            result.push(obj[key]);
        }

        else if (typeof obj[key] === "object" && obj[key] !== null) {
            result = result.concat(gatherStrings(obj[key]));
        }
    }

    return result;
}


