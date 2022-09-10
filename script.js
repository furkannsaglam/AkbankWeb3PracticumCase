function oddOrEven(number) {
    let total = 0;
    number.toString().split("").forEach(element => {
        total += Number(element)
    });
    let response = total % 2 === 0 ? "Even" : "Odd";
    return response;
}

console.log(oddOrEven(43));
console.log(oddOrEven(373));
console.log(oddOrEven(4433));
