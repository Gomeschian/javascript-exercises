const palindromes = function (word) {
    let validatedString = Array.from(String(word).replace(/[\p{P}$+<=>^`|~]/gu, '').replace(/\s+/g, "").toLowerCase());
    const newArray = Array.from(validatedString);
    const reversed = newArray.reverse();
    console.log(validatedString.toString());
    console.log(reversed.toString());
    return reversed.toString().replace(",","") === validatedString.toString().replace(",","");
};

// Do not edit below this line
module.exports = palindromes;
